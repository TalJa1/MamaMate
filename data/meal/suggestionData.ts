/* eslint-disable prettier/prettier */
import {checkIconSVG, xIconSVG} from '../../assets/svgXml';
import {vh, vw} from '../../styles/stylesheet';

export const suggestionRenderData = [
  {
    title: 'Sữa bầu',
    kcal: '48 kcal',
    capacity: '100 ml',
    catergory: 'TPCN',
    suggest: [
      {
        label: 'Nên ăn',
        icon: checkIconSVG(vw(5), vh(3)),
      },
      {
        label: 'Không nên',
        icon: xIconSVG(vw(5), vh(3)),
      },
    ],
  },
  {
    title: 'Tôm',
    kcal: '48 kcal',
    capacity: '100 ml',
    catergory: 'Hải sản',
    suggest: [
      {
        label: 'Nên ăn',
        icon: checkIconSVG(vw(5), vh(3)),
      },
      {
        label: 'Không nên',
        icon: xIconSVG(vw(5), vh(3)),
      },
    ],
  },
];
