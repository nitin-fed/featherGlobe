export const setCookie = str => {
  document.cookie = str;
};

export const getCookie = str => {
  const cookie = document.cookie;
  const cookieArr = cookie.split(";");
  let selectedCookie = "";

  cookieArr.forEach(cookie => {
    if (cookie.includes(str)) {
      selectedCookie = cookie;
    }
  });
  selectedCookie = selectedCookie.substr(
    selectedCookie.indexOf("=") + 1,
    selectedCookie.length
  );
  return selectedCookie;
};

function test() {
  return "Hellow";
}

export { test };
