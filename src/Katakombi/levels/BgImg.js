export const BgImg = ({ src }) => {
  const img = document.createElement('img');
  img.src = src;
  img.className = 'bg-img';
  return img;
};
