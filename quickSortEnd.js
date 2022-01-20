function quickSort(arr,lb,ub){
    if(lb<ub){
        let loc = partition(arr,lb,ub);
        quickSort(arr,lb,loc-1);
        quickSort(arr,loc+1,ub);

    }
    return arr;
}
function partition(arr,lb,ub){
    let pivot = arr[ub];
    let start = lb, end =ub;
    for(let i= start;i<end;i++){
        if(arr[i]<pivot){
            let temp = arr[start];
            arr[start] = arr[i];
            arr[i] = temp;
            start++;
        }
    }
    let temp = arr[start];
    arr[start] = pivot;
    arr[end] = temp;
    return start;
}

let arr = [26,14,12,9,23,5,2];
let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);

