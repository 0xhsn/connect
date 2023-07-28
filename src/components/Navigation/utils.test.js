/* eslint-env jest */
import * as Utils from './utils';

describe('navigation formatting utils', () => {
  describe('formats search results correctly', () => {
    const testCases = [
      {
        // from mapbox api
        item: {
          title: 'Taco Bell',
          distance: 1234,
          address: {
            label: 'Taco Bell, 2011 Camino del Rio N, San Diego, CA 92108, United States',
            countryCode: 'USA',
            countryName: 'United States',
            stateCode: 'CA',
            state: 'California',
            county: 'San Diego',
            city: 'San Diego',
            district: 'Mission Valley East',
            street: 'Camino del Rio N',
            postalCode: '92108',
            houseNumber: '2011',
          },
        },

        // expected
        name: 'Taco Bell',
        fullAddress: '2011 Camino del Rio N, San Diego, CA 92108, United States',
        address: '2011 Camino del Rio N, San Diego',
        details: '2011 Camino del Rio N, San Diego',
        searchList: ', 2011 Camino del Rio N, San Diego (0.8 mi)',
      },
      {
        // from mapbox api
        item: {
          title: '1441 State St, San Diego, CA 92101-3421, United States',
          distance: 1234,
          address: {
            label: '1441 State St, San Diego, CA 92101-3421, United States',
            countryCode: 'USA',
            countryName: 'United States',
            stateCode: 'CA',
            state: 'California',
            county: 'San Diego',
            city: 'San Diego',
            district: 'Little Italy',
            street: 'State St',
            postalCode: '92101-3421',
            houseNumber: '1441',
          },
        },

        // expected
        name: '1441 State St',
        fullAddress: '1441 State St, San Diego, CA 92101-3421, United States',
        address: 'San Diego',
        details: 'San Diego',
        searchList: ', San Diego (0.8 mi)',
      },
      {
        // from mapbox api
        item: {
          title: 'Taco Bell',
          address: {
            label: 'Taco Bell, Irlam Drive, Liverpool, L32 8, United Kingdom',
            countryCode: 'GBR',
            countryName: 'United Kingdom',
            state: 'England',
            countyCode: 'MSY',
            county: 'Merseyside',
            city: 'Liverpool',
            district: 'Kirkby',
            street: 'Irlam Drive',
            postalCode: 'L32 8',
          },
          distance: 38190,
        },

        // expected
        name: 'Taco Bell',
        fullAddress: 'Irlam Drive, Liverpool, L32 8, United Kingdom',
        address: 'Irlam Drive, Liverpool',
        details: 'Irlam Drive, Liverpool',
        searchList: ', Irlam Drive, Liverpool (23.7 mi)',
      },
    ];

    testCases.forEach((testCase) => {
      const { item } = testCase;

      expect(Utils.formatSearchName(item)).toBe(testCase.name);
      expect(Utils.formatSearchAddress(item, true)).toBe(testCase.fullAddress);
      expect(Utils.formatSearchAddress(item, false)).toBe(testCase.address);
      expect(Utils.formatSearchDetails(item)).toBe(testCase.details);
      expect(Utils.formatSearchList(item)).toBe(testCase.searchList);
    });
  });

  it('formats favorites correctly', () => {
    const testCases = [
      {
        // from favorites
        item: {
          title: '123 San Diego St',
          distance: 1234,
          address: {
            label: '123 San Diego St, San Diego, CA 92123, United States',
          },
        },

        // expected
        name: '123 San Diego St',
        address: '123 San Diego St, San Diego, CA 92123, United States',
        details: 'San Diego, CA 92123, United States',
        searchList: ', San Diego (0.8 mi)',
      },
    ];

    testCases.forEach((testCase) => {
      const { item } = testCase;

      expect(Utils.formatSearchName(item)).toBe(testCase.name);
      expect(Utils.formatSearchAddress(item)).toBe(testCase.address);
      expect(Utils.formatSearchDetails(item)).toBe(testCase.details);
    });
  });
});
