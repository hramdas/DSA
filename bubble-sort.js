function bubbleSort(arr){

    for(let i = 0; i < arr.length; i++){

        for (let j = 0; j < arr.length - i - 1; j++) {
            //Value comparision
            if(arr[j + 1] < arr[j]){

                //Swapping
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
                // var temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp
            }
        }
    };
    return arr;
};

console.log(bubbleSort([5,3,8,4,6]));



function reverseArray(a) {
    for(let i=0; i<a.length; i++){
        for(let j=0; j<a.length-i-1; j++){
            if(a[j] > a[j+1]){
                var temp = a[j];
                a[j] = a[j+1]
                a[j+1] = temp
            }
        }
    }
    //console.log(a)
    return a
}
console.log(reverseArray([5,3,8,4,6]))