const getQuantityFromString = (str) => {
  str = str.replace(/\[[^[]{0,}\]/g, '');

  const items = str
    .split(' ')
    .filter(item => item.trim());

  return items.length;
};

export const getCellsQuantity = (styles) => {
  const rows = styles.gridTemplateRows;
  const columns = styles.gridTemplateColumns;

  return getQuantityFromString(rows) * getQuantityFromString(columns);
};
