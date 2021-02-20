export const landingNavigation = (ele) => {
  let offsetTop = document.getElementById(ele).offsetTop;
  window.scrollTo({
    top: offsetTop - 100,
    behavior: "smooth"
  });
};