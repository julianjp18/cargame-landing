export const SOCIAL_MEDIA_LIST = [
  {
    name: 'linkedin',
    url: 'linkedin',
    icon: 'linkedin',
  },
  {
    name: 'facebook',
    url: 'facebook',
    icon: 'facebook',
  },
  {
    name: 'twitter',
    url: 'twitter',
    icon: 'twitter',
  },
  {
    name: 'instagram',
    url: 'instagram',
    icon: 'instagram',
  },
];

export const landingNavigation = (ele) => {
  let offsetTop = document.getElementById(ele).offsetTop;
  window.scrollTo({
    top: offsetTop - 100,
    behavior: "smooth"
  });
};