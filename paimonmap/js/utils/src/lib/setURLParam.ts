/**
 * @description: 无刷新动态修改url参数
 * @param {string} paramName 参数名
 * @param {string} newValue 参数值
 * @return {void}
 */
function setURLParam(paramName: string, newValue: string): void {
  const oldUrl = window.location.href.toString();
  const re = eval('/(' + paramName + '=)([^&]*)/gi');
  let result = oldUrl.replace(re, paramName + '=' + newValue);
  if (result === location.href &&
   !new URLSearchParams(new URL(location.href).search).has(paramName)) {
    if (location.search === "") {
      result = `?${paramName}=${newValue}` + location.hash;
    } else {
      result = `${location.search}&${paramName}=${newValue}` + location.hash;
    }
  }
  history.pushState({
    url: result,
    title: document.title
  }, document.title, result);
}

export default setURLParam;
