import Raven from 'raven-js';
import qs from 'query-string';

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mbxDirections = require('@mapbox/mapbox-sdk/services/directions');

let geocodingClient = null;
let directionsClient = null;
if (process.env.REACT_APP_MAPBOX_TOKEN) {
  geocodingClient = mbxGeocoding({ accessToken: process.env.REACT_APP_MAPBOX_TOKEN });
  directionsClient = mbxDirections({ accessToken: process.env.REACT_APP_MAPBOX_TOKEN });
} else {
  console.warn('Missing mapbox token');
}

export default function geocodeApi() {
  function getFilteredContexts(context) {
    const include_ctxs = ['region', 'district', 'place', 'locality', 'neighborhood'];
    return context.filter((ctx) => {
      return include_ctxs.some((c) => ctx.id.indexOf(c) !== -1);
    });
  }

  function getContextString(context) {
    if (context.id.indexOf('region') !== -1) {
      if (context.short_code.indexOf('US-') !== -1) {
        return context.short_code.substr(3);
      }
      return context.short_code;
    }
    return context.text;
  }

  function priorityGetContext(contexts) {
    for (const prio of ['place', 'locality', 'district']) {
      for (const ctx of contexts) {
        if (ctx.id.indexOf(prio) !== -1) {
          return ctx;
        }
      }
    }
  }

  return {
    async reverseLookup(coords) {
      if (geocodingClient === null) {
        return null;
      }

      const response = await geocodingClient.reverseGeocode({
        query: [coords[0], coords[1]],
        limit: 1,
      }).send();

      try {
        const { features } = response.body;
        if (features.length && features[0].context) {
          let contexts = getFilteredContexts(features[0].context);
          let place = '';
          let details = '';
          if (contexts.length > 0) {
            place = getContextString(contexts.shift());
          }
          if (contexts.length > 0) {
            details = getContextString(contexts.pop());
          }
          if (contexts.length > 0) {
            details = `${getContextString(priorityGetContext(contexts))}, ${details}`;
          }
          return { place, details };
        }
      } catch (err) {
        Raven.captureException(err);
      }
    },

    async forwardLookup(query, proximity) {
      let params = {
        apiKey: process.env.REACT_APP_HERE_API_KEY,
        q: query,
        limit: 20,
        details: '1',
      };
      if (proximity) {
        params.at = `${proximity[1]},${proximity[0]}`;
      } else {
        params.in = 'bbox:-180,-90,180,90';
      }

      try {
        const resp = await fetch(`https://autosuggest.search.hereapi.com/v1/autosuggest?${qs.stringify(params)}`, {
          method: 'GET',
        });
        if (resp.ok) {
          const json = await resp.json();
          return json.items;
        }
      } catch (err) {
        console.log(err);
      }
    },

    async getDirections(points) {
      if (!directionsClient) {
        return null;
      }

      const resp = await directionsClient.getDirections({
        profile: 'driving-traffic',
        waypoints: points.map((p) => { return { coordinates: p }; }),
        annotations: ['distance', 'duration'],
        geometries: 'geojson',
        overview: 'full',
      }).send();

      return resp.body.routes;
    },
  };
}
