let getRandomNumber = function(min, max){
    if(min >= 0 && max >= 0){
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumbers = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumbers} else {
    randomNumber = NaN
      }
    console.log(randomNumbers);
}; getRandomNumber(0,1);

let getMaximumStringLength = function(stringChecked, maxLength){
    if (stringChecked.length <= maxLength){
        true;
    } else {false}
    console.log(stringChecked.length)
}
 getMaximumStringLength('Hello', 10); 

