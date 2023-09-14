const convertToCelsius = function(fahr) {
  if(typeof fahr == 'number'){
    let cel = (fahr-32)*(5/9);
    cel = Math.round(cel*10)/10;
    return cel;
  } else{
    return 'ERROR'
  }

// (far - 32) * 5/9


};

const convertToFahrenheit = function(cel) {
// cel*(9/5)+32
if(typeof cel == 'number'){
  let fahr = cel*(9/5)+32;
  fahr = Math.round(fahr*10)/10;
  return fahr;
} else{
  return 'ERROR'
}

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
