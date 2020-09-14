const Caesar = (str, shift) => {
  const caesar_obj = {
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
  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };
  let newstr = str.split('');
  let caesar = [];
  newstr.forEach((letter) => {
    if (letter != ' ') {
      let index = caesar_obj[letter] + shift;
      if (index < 26) {
        caesar.push(getKeyByValue(caesar_obj, index));
      } else {
        caesar.push(getKeyByValue(caesar_obj, index - 26));
      }
    } else {
      caesar.push(' ');
    }
  });

  return caesar.join('');
};
console.log(Caesar('attack at dawn z', 5));

export default Caesar;
