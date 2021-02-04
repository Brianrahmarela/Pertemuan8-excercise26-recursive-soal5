function rangeAngka(times,number){
  // console.log(times,number);
  //buat var penampung arr
  let tampung = [];
  
  if(times <= 0){
    return [];
  } else {
    // console.log(times);

    //assign variable tampung dgn value rangeAngka(times-1,number)
    //yg nantinya akan didapat value numbernya, function rangeAngka(times-1,number)
    //untuk memperkecil index time (times-1)
    tampung = rangeAngka(times-1,number);
    // console.log(tampung);
    // console.log(times);

    //kemudian ambil valuenya mskkan ke array dgn push
    tampung.push(number);
    // console.log(times);
    // console.log(number);
    // tampung.push(number)
    return tampung
    
  }

}

console.log(rangeAngka(0,3));
console.log(rangeAngka(-1,5));
console.log(rangeAngka(1,4)); //[4]
console.log(rangeAngka(2,3)); //[4]
console.log(rangeAngka(5,7)); 