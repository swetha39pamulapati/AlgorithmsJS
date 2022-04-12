function countingSort(arr){
    let n = arr.length;
    let max =0;
    for(let i =0;i<n; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    let count = new Array(max+1);
    let brr = new Array(n).fill(0);
    for(let i=0;i<max+1;i++){
        count[i] = 0;
    }
    for(let i =0; i<n;i++){
       count[arr[i]]++;
    }
    for(let i = 1; i <= max; i++){

        count[i] = count[i] + count[i - 1];
    }
    for(let i = n-1; i>=0; i--)
    {
        brr[--count[arr[i]]] = arr[i];
    }
    for(let i=0;i<n;i++){
        arr[i] = brr[i];
    }
}
let data = [2,1,0,5,9,3,1,2,4,5,2,1];
countingSort(data);
console.log(data);