function bucketSort(arr) {
    let n = arr.length;
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    for (let pos = 1; max / pos >0; pos *= 10) {
        bucketSortAlgo(arr, n, pos);

    }
}
function bucketSortAlgo(arr, n, pos){

    let buckets = new Array(10);
    for (let i = 0; i < 10; i++)
        buckets[i] = [];

    for (let i = 0; i < n; i++)
    {
        let data =Math.floor (Math.floor(arr[i] / pos) %10);
        buckets[data].push(arr[i]);
        arr[i] = 0;
    }

    let arrayvar = 0;
    buckets.forEach(x=>
        x.forEach(myFunction));
    function myFunction(z){
        arr[arrayvar] = z;
        arrayvar++;
    }

}

let data = [15, 1, 321, 10, 802, 2, 123, 90, 109, 11];
bucketSort(data);
console.log(data);