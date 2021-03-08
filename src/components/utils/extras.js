export const landingNavigation = (ele) => {
  const el = document.getElementById(ele);
  if (el) {
    const offsetTop = document.getElementById(ele).offsetTop;
    window.scrollTo({
      top: offsetTop - 50,
      behavior: "smooth"
    });
    return true;
  }

  return false;
};

export const CITIES = [{
  "CUNDINAMARCA": ["Bogotá D.C.", "Zipaquirá"]
}];