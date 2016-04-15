
function convert(input){
  var inputString = input.toLocaleString();
  return '$' + inputString;

}

// console.log(convert(10000));
module.exports = convert;
