
const wordSearch = (letters, word) => {

  if (letters.length === 0) {
    return 'Oh no! Your wordsearch is empty!';
  }
  // horizontal search

  const horizontalJoin = letters.map(ls => ls.join('')); // joings array into sent.

  for (let l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }

  //vertical search

  let newArray = [];
  let verticalJoin = [];

  for (let x = 0; x < letters[0].length; x++) {
    newArray = [];
    for (let y = 0; y < letters.length; y++) {
      newArray.push(letters[y][x]);
    }
    verticalJoin.push(newArray);
  }
  const vertical = verticalJoin.map(key => key.join(''));

  for (let k of vertical) {
    if (k.includes(word))
      return true;
  }
  return false;
};


module.exports = wordSearch;