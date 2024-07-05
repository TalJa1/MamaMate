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
    img: require('../assets/Meal/duduxanh.png'),
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
    img: require('../assets/Meal/cam.png'),
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
    img: require('../assets/Meal/xoai.png'),
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
    img: require('../assets/Meal/duahau.png'),
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
    img: require('../assets/Meal/mit.png'),
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

export const moodSuggestionData = [
  {
    img: require('../assets/Mood/sach.png'),
    title: 'Chia sẻ',
    des: 'Cải thiện tâm trạng',
  },
  {
    img: require('../assets/Meal/yoga2.png'),
    title: 'Thiền',
    des: 'Bình tĩnh',
  },
  {
    img: require('../assets/Mood/donut.png'),
    title: 'Yoga',
    des: 'Vận động',
  },
];

export const wishListTodayData = [
  {
    title: 'Thèm ăn cóc dầm muốt ớt',
    isCheck: true,
    user: 'bocuakit',
    img: require('../assets/WishList/father.png'),
  },
  {
    title: 'Hết sữa bầu rồi, @dicuakit tan làm mua cho 2 mẹ con nhé <3',
    isCheck: false,
    user: 'dìcủakit',
    img: require('../assets/WishList/aunt.png'),
  },
];

export const wishListTomorrowData = [
  {
    title: 'Đi khám định kỳ cùng 2 mẹ con',
    isCheck: true,
  },
];

export const seenWishListData = [
  {
    user: 'dìcủakit',
    img: require('../assets/WishList/aunt.png'),
    postTime: '2024-07-04T07:15:00Z',
    isAnswer: true,
    isReject: true,
  },
  {
    user: 'bànội',
    img: require('../assets/WishList/grandma.png'),
    postTime: '2024-07-03T07:20:00Z',
    isAnswer: false,
    isReject: false,
  },
  {
    user: 'bốcủakít',
    img: require('../assets/WishList/father.png'),
    postTime: '2024-07-02T07:20:00Z',
    isAnswer: false,
    isReject: false,
  },
];

export const messGrpData = [
  {
    mess: 'Mẹ tròn con vuông nhé!',
    img: require('../assets/WishList/fr1.png'),
  },
  {
    mess: 'Mẹ tròn con vuông nhé!',
    img: require('../assets/WishList/aunt.png'),
  },
  {
    mess: 'Mẹ tròn con vuông nhé!',
    img: require('../assets/WishList/fr2.png'),
  },
];
