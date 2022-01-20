function insertionSort(arr){
    let n = arr.length;
    for(let i =0;i<n-1; i++){
        let temp = arr[i+1];
        let j = i;
        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}
let arr = [5,7,2,9,1,3]
insertionSort(arr);
console.log(arr);