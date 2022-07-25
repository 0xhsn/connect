/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export const auth_apple = require('./auth_apple.png');
export const auth_github = require('./auth_github.png');
export const auth_google = require('./auth_google.png');

export const ios_share = require('./ios_share.png');

export const pin_car = require('./pin-car.svg');
export const pin_marker = require('./pin-marker.svg');
export const pin_pinned = require('./pin-pinned.svg');
export const pin_home = require('./pin-home.svg');
export const pin_work = require('./pin-work.svg');

export const video_360 = require('./360-degrees-video.svg');

export function AccountIcon(props) {
  return (
    <SvgIcon {...props}>
      <g transform="translate(-198.000000, -189.000000)">
        <path d="M210,189 C203.381053,189 198,194.381053 198,201 C198,207.618947 203.381053,213 210,213 C216.618947,213 222,207.618947 222,201 C222,194.381053 216.618947,189 210,189 Z M216.724916,207.352941 C216.374763,206.716762 215.824522,206.182371 215.099204,205.902453 L212.623121,204.808224 C211.972836,204.553753 211.522639,203.917573 211.472617,203.205053 L211.422595,202.747004 C212.573099,201.856353 213.348438,200.125945 213.348438,198.293749 C213.348438,195.647243 211.697716,193.815047 209.671829,193.815047 C207.645942,193.815047 205.99522,195.647243 205.99522,198.293749 C205.99522,200.125945 206.770559,201.830905 207.921063,202.747004 L207.871041,203.205053 C207.821019,203.917573 207.370822,204.528305 206.720537,204.808224 L204.244453,205.902453 C203.544147,206.182371 202.968895,206.716762 202.618742,207.352941 C201.068063,205.622534 200.117647,203.332288 200.117647,200.813019 C200.117647,195.469113 204.394519,191.117647 209.646818,191.117647 C214.899117,191.117647 219.175989,195.469113 219.175989,200.813019 C219.201,203.332288 218.250584,205.622534 216.724916,207.352941 Z" />
      </g>
    </SvgIcon>
  );
}

export function HistoryBackIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M16.8880175,1.0391027 C13.9587286,-0.258687148 10.6253998,-0.358517136 7.5951009,0.839442723 C5.57490164,1.63808263 3.75672231,2.93587248 2.44359279,4.63298228 L1.93854298,2.83604249 C1.83753301,2.23706256 1.3324832,1.93757259 0.726423422,2.03740258 C0.221373607,2.23706256 -0.0816562816,2.7362125 0.0193536814,3.23536244 L1.02945331,7.32839196 C1.13046327,7.8275419 1.53450313,8.12703187 2.03955294,8.12703187 C2.1405629,8.12703187 2.24157287,8.12703187 2.24157287,8.12703187 L6.38298135,7.12873198 C6.88803116,7.028902 7.29207101,6.42992207 7.09005109,5.93077212 C7.09005109,5.3317922 6.48399131,5.03230223 5.9789415,5.23196221 L4.26177213,5.63128216 C5.37288172,4.33349231 6.68601124,3.33519243 8.30217064,2.7362125 C10.8274197,1.73791262 13.5546887,1.83774261 16.0799378,2.93587248 C18.5041769,4.03400235 20.4233662,5.93077212 21.4334658,8.42652183 C22.4435655,10.9222715 22.3425555,13.6176812 21.2314459,16.1134309 C20.1203363,18.6091806 18.201147,20.4061204 15.6758979,21.4044203 C12.1405492,22.7022102 8.20116068,22.1032302 5.37288172,19.6074805 C4.16076216,18.5093506 3.15066253,17.2115608 2.54460276,15.714111 C2.34258283,15.214961 1.73652305,14.9154711 1.23147324,15.115131 C0.726423422,15.314791 0.423393533,15.913771 0.625413459,16.4129209 C1.3324832,18.2098607 2.54460276,19.9069705 3.95874224,21.1049303 C6.18096142,23.0017001 9.00924038,24 11.9385293,24 C13.4536788,24 14.8678182,23.70051 16.2819577,23.2013601 C19.3122566,22.0034002 21.6354858,19.8071405 22.9486153,16.9120708 C24.2617448,14.0170012 24.3627548,10.7226116 23.1506352,7.72771191 C21.9385156,4.73281227 19.9183164,2.33689255 16.8880175,1.0391027 Z" />
      <path d="M11.7081415,6.22222222 C11.0832566,6.22222222 10.6666667,6.61010101 10.6666667,7.19191919 L10.6666667,13.010101 C10.6666667,13.3010101 10.7708142,13.5919192 11.0832566,13.7858586 L15.2491561,16.6949495 C15.4574511,16.7919192 15.6657461,16.8888889 15.8740411,16.8888889 C16.1864835,16.8888889 16.498926,16.7919192 16.707221,16.5010101 C17.0196634,16.1131313 16.9155159,15.4343434 16.498926,15.1434343 L12.7496164,12.5252525 L12.7496164,7.19191919 C12.7496164,6.61010101 12.3330265,6.22222222 11.7081415,6.22222222 Z" />
    </SvgIcon>
  );
}
export function HistoryForwardIcon(props) {
  return (
    <SvgIcon {...props}>
      <g transform="matrix(-1, 0, 0, 1, 24, 0)">
        <path d="M16.8880175,1.0391027 C13.9587286,-0.258687148 10.6253998,-0.358517136 7.5951009,0.839442723 C5.57490164,1.63808263 3.75672231,2.93587248 2.44359279,4.63298228 L1.93854298,2.83604249 C1.83753301,2.23706256 1.3324832,1.93757259 0.726423422,2.03740258 C0.221373607,2.23706256 -0.0816562816,2.7362125 0.0193536814,3.23536244 L1.02945331,7.32839196 C1.13046327,7.8275419 1.53450313,8.12703187 2.03955294,8.12703187 C2.1405629,8.12703187 2.24157287,8.12703187 2.24157287,8.12703187 L6.38298135,7.12873198 C6.88803116,7.028902 7.29207101,6.42992207 7.09005109,5.93077212 C7.09005109,5.3317922 6.48399131,5.03230223 5.9789415,5.23196221 L4.26177213,5.63128216 C5.37288172,4.33349231 6.68601124,3.33519243 8.30217064,2.7362125 C10.8274197,1.73791262 13.5546887,1.83774261 16.0799378,2.93587248 C18.5041769,4.03400235 20.4233662,5.93077212 21.4334658,8.42652183 C22.4435655,10.9222715 22.3425555,13.6176812 21.2314459,16.1134309 C20.1203363,18.6091806 18.201147,20.4061204 15.6758979,21.4044203 C12.1405492,22.7022102 8.20116068,22.1032302 5.37288172,19.6074805 C4.16076216,18.5093506 3.15066253,17.2115608 2.54460276,15.714111 C2.34258283,15.214961 1.73652305,14.9154711 1.23147324,15.115131 C0.726423422,15.314791 0.423393533,15.913771 0.625413459,16.4129209 C1.3324832,18.2098607 2.54460276,19.9069705 3.95874224,21.1049303 C6.18096142,23.0017001 9.00924038,24 11.9385293,24 C13.4536788,24 14.8678182,23.70051 16.2819577,23.2013601 C19.3122566,22.0034002 21.6354858,19.8071405 22.9486153,16.9120708 C24.2617448,14.0170012 24.3627548,10.7226116 23.1506352,7.72771191 C21.9385156,4.73281227 19.9183164,2.33689255 16.8880175,1.0391027 Z" />
        <path d="M11.7081415,6.22222222 C11.0832566,6.22222222 10.6666667,6.61010101 10.6666667,7.19191919 L10.6666667,13.010101 C10.6666667,13.3010101 10.7708142,13.5919192 11.0832566,13.7858586 L15.2491561,16.6949495 C15.4574511,16.7919192 15.6657461,16.8888889 15.8740411,16.8888889 C16.1864835,16.8888889 16.498926,16.7919192 16.707221,16.5010101 C17.0196634,16.1131313 16.9155159,15.4343434 16.498926,15.1434343 L12.7496164,12.5252525 L12.7496164,7.19191919 C12.7496164,6.61010101 12.3330265,6.22222222 11.7081415,6.22222222 Z" />
      </g>
    </SvgIcon>
  );
}
export function CommaIcon(props) {
  return (
    <SvgIcon {...props}>
      <g transform="scale(0.35, 0.35)">
        <path d="M2.3325273,44 C2.3325273,42.9819019 2.25294268,42.1290181 2.37000751,41.3070321 C2.41990001,40.9564305 2.82901847,40.5810595 3.16268975,40.3693706 C4.78942848,39.3369727 6.55659633,38.5126886 8.07113779,37.32861 C12.9769087,33.4931864 15.8847893,28.4440632 16.0437152,21.8852845 C16.0887401,20.0229846 15.4041177,19.5577289 13.8399272,20.2831908 C9.32477801,22.3776079 4.46938637,21.1496084 1.87814052,17.2574961 C-0.947721751,13.012484 -0.549798677,7.36046894 2.83607643,3.65221184 C7.16090397,-1.08410221 14.2770341,-1.22582393 19.1842653,3.29752453 C22.1237851,6.00709044 23.5205316,9.50570155 23.8688055,13.4851451 C25.0365333,26.8169447 18.349722,37.8056121 6.17936039,42.6328324 C4.97488253,43.1103451 3.73973905,43.5025696 2.3325273,44" />
      </g>
    </SvgIcon>
  );
}

function chevronPath(rotation = 270) {
  return (
    <path transform={`rotate(${rotation}, 12.3, 12)`}
      d="M16.8625817,0.35528597 C16.3546389,-0.125475313 15.550396,-0.125475313 15.0847818,0.398991541 L5.3492107,11.1068565 C4.88359643,11.6313233 4.88359643,12.4180236 5.3492107,12.8987849 L15.0847818,23.6066499 C15.3387532,23.8688833 15.6773817,24 16.0160103,24 C16.3123103,24 16.6509389,23.8688833 16.9049103,23.6503554 C17.4128531,23.1695941 17.4551817,22.3391883 16.9472388,21.8147214 L7.97358203,12.0246735 L16.9049103,2.19091996 C17.3705245,1.66645311 17.3705245,0.836047253 16.8625817,0.35528597 Z"/>
  );
}

export function ChevronIcon(props) {
  return (
    <SvgIcon {...props}>
      { chevronPath(270) }
    </SvgIcon>
  );
}
export const DownArrow = ChevronIcon;

export function UpArrow(props) {
  return (
    <SvgIcon {...props}>
      { chevronPath(90) }
    </SvgIcon>
  );
}

export function RightArrow(props) {
  return (
    <SvgIcon {...props}>
      { chevronPath(180) }
    </SvgIcon>
  );
}
