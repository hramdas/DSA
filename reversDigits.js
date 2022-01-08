let num = 1234;

function revDigit(num){
    let rev = 0;
    while(num>0){
        console.log('nums', rev*10, num%10, Math.floor(num/10))
        rev = rev*10 + num%10;
        num = Math.floor(num/10);
    }
    return rev
}

console.log(revDigit(num))