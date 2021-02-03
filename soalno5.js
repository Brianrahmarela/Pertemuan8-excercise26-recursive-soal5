//buat variable tampung
let tampung = [];

function rangeAngka(times,number){
//   console.log(times,number);

  if(times <= 0){
    return "";
  } else {
    // console.log(number);
    // console.log(times);
    // console.log(tampung.push(number));
    // console.log(tampung);
    tampung.push(number);
    rangeAngka(times-1,number);
    return tampung
  }
}

// console.log(rangeAngka(0,3)); //[]
// console.log(rangeAngka(-1,5)); //[]
// console.log(rangeAngka(1,4)); //[4]
// console.log(rangeAngka(2,3));//[4,3,3]
console.log(rangeAngka(5,7));