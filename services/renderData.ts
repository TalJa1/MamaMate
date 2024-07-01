/* eslint-disable prettier/prettier */
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
