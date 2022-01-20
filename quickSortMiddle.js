function quickSortMiddle(arr,lb,ub) {
    let mid = Math.floor((lb+ ub)/ 2);
    let pivot = arr[mid];
    let start = lb;
    let end = ub;
    while (start <= end) {
        while (arr[start] < pivot) {
            start++;
        }
        while (arr[end] > pivot) {
            end--;
        }
        if (start <= end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }

    }
    if (lb < end)
        quickSortMiddle(arr, lb, end);
    if (ub > start)
        quickSortMiddle(arr,start, ub);
}
let arr = [26,14,12,9,23,5,2];
quickSortMiddle(arr, 0, arr.length - 1);
console.log(arr);
