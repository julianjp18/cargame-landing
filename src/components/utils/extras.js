export const landingNavigation = (ele) => {
  const el = document.getElementById(ele);
  if (el) {
    const offsetTop = document.getElementById(ele).offsetTop;
    window.scrollTo({
      top: offsetTop - 100,
      behavior: "smooth"
    });
    return true;
  }
  return false;
};