const fadeDuration = 2000;

export const fadeOut = (element) => {
  element.classList.add('fade-out');
  setTimeout(() => element.remove(), fadeDuration);
};
