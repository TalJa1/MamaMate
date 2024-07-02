/* eslint-disable prettier/prettier */
export const getImageSource = (imageName: string) => {
  switch (imageName) {
    case 'pillow':
      return require('../assets/questionsAssets/pillow.png');
    case 'sanitaryNapkin':
      return require('../assets/questionsAssets/sanitaryNapkin.png');
    default:
      return require('../assets/questionsAssets/pregnancyTimetable.png');
  }
};

export const getTitleSource = (index: number) => {
  switch (index) {
    case 1:
      return 'Ngày đầu tiên của chu kỳ';
    case 2:
      return 'Ngày thụ thai';
    case 3:
      return 'Bố/Mẹ biết con đang ở tuần thứ mấy';
    case 4:
      return 'Ngày sinh dự kiến của con';
    default:
      return '';
  }
};

export const getHomeImageSource = (imageName: string) => {
  switch (imageName) {
    case 'nutrition':
      return require('../assets/nutrition.png');
    case 'workout':
      return require('../assets/workout.png');
    case 'familydiscussion':
      return require('../assets/familydiscussion.png');
  }
};

export const getHomeImageNotiSource = (imageName: string) => {
  switch (imageName) {
    case 'iconEyeClose':
      return require('../assets/iconEyeClose.png');
    case 'iconPregnant':
      return require('../assets/iconPregnant.png');
  }
};

export const getTrackingImageSource = (imageName: string) => {
  switch (imageName) {
    case 'weight':
      return require('../assets/weight.png');
    case 'belly':
      return require('../assets/belly.png');
    case 'smilingFace':
      return require('../assets/smilingFace.png');
    case 'identityCard':
      return require('../assets/identityCard.png');
    case 'hambarger':
      return require('../assets/hambarger.png');
    case 'medicalTool':
      return require('../assets/medicalTool.png');
    case 'contractions':
      return require('../assets/contractions.png');
  }
};

export const getHandBookImg = (imageName: string) => {
  switch (imageName) {
    case 'Sự phát triển của thai nhi':
      return require('../assets/handbook/childDevelopment.png');
    case 'Các bệnh thường gặp':
      return require('../assets/handbook/commonDisease.png');
    case 'Hành trang đi sinh':
      return require('../assets/handbook/givingBirthJourney.png');
    case 'Các giai đoạn mang bầu':
      return require('../assets/handbook/period.png');
    case 'Thai giáo thông minh':
      return require('../assets/handbook/smartPregnant.png');
    case 'Bài tập thể chất cho mẹ bầu':
      return require('../assets/handbook/workOut.png');
    case 'Cải thiện tâm trạng của mẹ':
      return require('../assets/handbook/givingBirthJourney.png');
  }
};

export const getHandBookImgDetail = (index: number) => {
  switch (index) {
    case 0:
      return require('../assets/handbook/unsplash.png');
    case 1:
      return require('../assets/handbook/unsplash2.png');
    case 2:
      return require('../assets/handbook/detailTopImage.png');
    default:
      break;
  }
};

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

export const getSuggestionImg = (imageName: string) => {
  switch (imageName) {
    case 'Sữa bầu':
      return require('../assets/Meal/cansofMilk.png');
    case 'Tôm':
      return require('../assets/Meal/tom.png');
  }
};
