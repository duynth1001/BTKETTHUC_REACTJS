function filterMovieList(list, flag) {
  return list.filter((it) => {
    switch (flag) {
      case "hot":
        return it.hot;
      case "sapChieu":
        return it.sapChieu;
      case "dangChieu":
        return it.dangChieu;
    }
  });
}
function displayFilterMovieList(list) {
  const displayData = [];
  list.forEach((element) => {
    const obj = {};
    obj.tenPhim = element.tenPhim;
    obj.hinhAnh = element.hinhAnh;
    obj.maPhim = element.maPhim
    displayData.push(obj);
  });
  return displayData;
}
export { filterMovieList, displayFilterMovieList };
