function radixSort(arr) {
    let n = arr.length;
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    for (let pos = 1; max / pos; pos *= 10) {
        countingSort(arr, n, pos);
        return;
    }
}
    function countingSort(arr, n, pos) {
        let count = new Array(10);
        let brr = new Array(n);
        for (let i = 0; i < 10; i++) {
            count[i] = 0;
        }
        for (let i = 0; i < n; i++) {
            count[(arr[i]/pos)%10]++;
        }
        for(let i=1;i<10;i++){
            count[i] = count[i]+count[i-1];
        }
        for(let i =n-1;i>=0;i--){
            brr[--count[(arr[i]/pos)%10]] = arr[i];
        }

        for(let i=0;i<n;i++){
            arr[i] = brr[i];
        }


}
let data = [2,1,0,5,9,3,1,2,4,5,2,1];
radixSort(data);
console.log(data);