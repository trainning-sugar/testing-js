function add (num1, num2) {
  if (!num1 || !num2) {
    throw new Error('Arguments are required for adding.')
  }
  return num1 + num2;
};

//console.log(add());

module.exports = {
  add
}