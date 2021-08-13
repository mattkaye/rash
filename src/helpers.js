function toTitleCase(str) {
  const words = str.split('-');
  return words
    .map(function (word) {
      word = word.replace('/', '');
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(' ');
}
export { toTitleCase };
