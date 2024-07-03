/* eslint-disable prettier/prettier */
import {checkIconSVG, waringIconSVG, xIconSVG} from '../assets/svgXml';
import {vh, vw} from '../styles/stylesheet';

export const handbookData = [
  'Các giai đoạn mang bầu',
  'Thai giáo thông minh',
  'Các bệnh thường gặp',
  'Sự phát triển của thai nhi',
  'Hành trang đi sinh',
  'Cải thiện tâm trạng của mẹ',
  'Bài tập thể chất cho mẹ bầu',
];

export const renderHandBookTitle = (index: number) => {
  switch (index) {
    case 0:
      return 'Các giai đoạn mang bầu';
    case 1:
      return 'Thai giáo thông minh';
    case 2:
      return 'Các bệnh thường gặp';
    case 3:
      return 'Sự phát triển của thai nhi';
    case 4:
      return 'Hành trang đi sinh';
    case 5:
      return 'Cải thiện tâm trạng của mẹ';
    case 6:
      return 'Bài tập thể chất cho mẹ bầu';
    default:
      break;
  }
};

export const mealSuggestionData = [
  {icon: require('../assets/Meal/yoga2.png'), label: 'Yoga'},
  {icon: require('../assets/Meal/lungs.png'), label: 'Thở'},
  {icon: require('../assets/Meal/dancingWomen.png'), label: 'Pilates'},
];

export const tabsData = [
  {icon: require('../assets/Meal/apple.png'), label: 'Trái cây'},
  {icon: require('../assets/Meal/leafygreen.png'), label: 'Rau'},
  {icon: require('../assets/Meal/cutofmeat.png'), label: 'Thịt'},
  {icon: require('../assets/Meal/shrimp.png'), label: 'Hải sản'},
  {icon: require('../assets/Meal/3d.png'), label: 'Đồ uống'},
  {icon: require('../assets/Meal/beans.png'), label: 'Ngũ cốc'},
  {icon: require('../assets/Meal/popcorn.png'), label: 'Ăn vặt'},
  {icon: require('../assets/Meal/cannedfood.png'), label: 'TPCN'},
];

export const mealCautionData = [
  {icon: checkIconSVG(vw(5), vh(5)), label: 'Nên ăn'},
  {icon: xIconSVG(vw(5), vh(5)), label: 'Không nên ăn'},
  {icon: waringIconSVG(vw(5), vh(5)), label: 'Lưu ý'},
];

export const fruitData = [
  {
    title: 'Đu đủ xanh',
    kcal: '48 kcal',
    capacity: '100 ml',
    catergory: 'Trái cây',
    suggest: [
      {
        label: 'Mang thai',
        icon: xIconSVG(vw(5), vh(3)),
      },
      {
        label: 'Không nên',
        icon: xIconSVG(vw(5), vh(3)),
      },
    ],
  },
  {
    title: 'Cam',
    kcal: '48 kcal',
    capacity: '100 ml',
    catergory: 'Trái cây',
    suggest: [
      {
        label: 'Nên ăn',
        icon: checkIconSVG(vw(5), vh(3)),
      },
      {
        label: 'Mới sinh',
        icon: checkIconSVG(vw(5), vh(3)),
      },
    ],
  },
  {
    title: 'Xoài',
    kcal: '48 kcal',
    capacity: '100 ml',
    catergory: 'Trái cây',
    suggest: [
      {
        label: 'Nên ăn',
        icon: checkIconSVG(vw(5), vh(3)),
      },
      {
        label: 'Lưu ý',
        icon: waringIconSVG(vw(5), vh(3)),
      },
    ],
  },
  {
    title: 'Dưa hấu',
    kcal: '48 kcal',
    capacity: '100 ml',
    catergory: 'Trái cây',
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
    title: 'Mít',
    kcal: '48 kcal',
    capacity: '100 ml',
    catergory: 'Trái cây',
    suggest: [
      {
        label: 'Nên ăn',
        icon: checkIconSVG(vw(5), vh(3)),
      },
      {
        label: 'Lưu ý',
        icon: waringIconSVG(vw(5), vh(3)),
      },
    ],
  },
];
