function selectionSort(arr){
    let n = arr.length;

    for(let i = 0; i<n; i++){
let temp, min =i;
for(let j = i+1; j<n; j++){
    if(arr[j]<arr[min]){
        min = j;
    }
}
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}
let arr = [26,54,12,9,8,2,23];
selectionSort(arr);
console.log(arr);