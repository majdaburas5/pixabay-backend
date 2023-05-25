const filterImages = function (hits) {
  const sorted = [...hits].sort((a, b) => a.id - b.id);
  return sorted.map((h) => h.largeImageURL);
};

module.exports = { filterImages };
