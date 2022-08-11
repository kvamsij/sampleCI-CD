const sum = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('input values must be an integer');
  }
  return a + b;
};
const average = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('input values must be an integer');
  }

  return (a + b) / 2;
};

module.exports = { sum, average };
