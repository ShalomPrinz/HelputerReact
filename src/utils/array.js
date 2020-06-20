/* Randomize array in-place using Durstenfeld shuffle algorithm */
export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const search = (field, list, query, ignoreCase = true) =>
  query === ""
    ? list
    : list.filter((item) =>
        item[field]
          ? item[field]
              .toLowerCase()
              .indexOf(ignoreCase ? query.toLowerCase() : query) !== -1
          : list
      );
