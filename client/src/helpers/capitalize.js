export default (string) => {
  const stringBits = string.split(" ");
  const newStringBits = [];

  stringBits.forEach((stringBit, i) => {
    if (stringBit) {
      newStringBits.push(
        stringBit.charAt(0).toUpperCase() + stringBit.slice(1)
      );
    } else {
      newStringBits.push(stringBit);
    }
  });

  return newStringBits.join(" ");
};
