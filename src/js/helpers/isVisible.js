export function isVisible (elem) {
  const coords = elem.getBoundingClientRect();

  const windowHeight = document.documentElement.clientHeight;

  // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
  const topVisible = coords.top > 0 && coords.top < windowHeight / 2;
  const bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}
