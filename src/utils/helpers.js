export const converContentMovieDetail = (data) => {
  return data.map((item, index, arr) => {
    let label = '';
    if (arr[arr.length - 1] === item) {
      label += item;
    } else {
      label += `${item}, `;
    }
    return label;
  });
};
