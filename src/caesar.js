const Caesar = (str, shift) => {
  const caesarObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
  const newstr = str.split('');
  const caesar = [];
  const pushtoarray = (arr, index) => {
    arr.push(getKeyByValue(caesarObj, index));
  };
  const pushUpercase = (arr, index) => {
    arr.push(getKeyByValue(caesarObj, index).toUpperCase());
  };

  const checkpush = (letter, index) => {
    if (letter === letter.toUpperCase()) {
      pushUpercase(caesar, index);
    } else {
      pushtoarray(caesar, index);
    }
  };
  newstr.forEach((letter) => {
    if (letter.toLowerCase() in caesarObj) {
      const index = caesarObj[letter.toLowerCase()] + shift;
      if (index < 26) {
        checkpush(letter, index);
      } else {
        checkpush(letter, index - 26);
      }
    } else {
      caesar.push(letter);
    }
  });

  return caesar.join('');
};
export default Caesar;
