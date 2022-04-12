function quickSort(arr,lb,ub){
    if(lb<ub){
        let loc = partition(arr,lb,ub);
        quickSort(arr,lb,loc-1);
        quickSort(arr,loc+1,ub);

    }
    return arr;
}
function partition(arr,lb,ub){
    let start = lb;
    let end = ub - 1;
    let pivot = ub;

    while (start <= end)
    {
        while (arr[start] < arr[pivot])
        {
            start++;
        }
        while (end>= start && arr[end] >= arr[pivot])
        {
            end--;
        }
        if (start < end)
        {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
        }
    }
    let temp1 = arr[start];
    arr[start] = arr[pivot];
    arr[pivot] = temp1;

    return start;
}

let arr = [26,14,12,9,23,5,2];
let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);

