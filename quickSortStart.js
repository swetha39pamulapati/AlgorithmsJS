function quickSort(arr,lb,ub){
    if(lb<ub){
        let loc = partition(arr,lb,ub);
        quickSort(arr,lb,loc-1);
        quickSort(arr,loc+1,ub);

    }
    return arr;
}
function partition(arr,lb,ub) {
    let pivot = arr[lb];
    let start = lb, end = ub;
    while(start<end){
        while(arr[start]<=pivot && start<end){
            start++;
        }

        while(arr[end]>pivot){
            end--;
        }
        if(start<end){
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
        }
    }
    let temp2 = arr[lb];
        arr[lb] = arr[end];
        arr[end] = temp2;

    return end;
}
let arr = [68,72,14,23,27,12,8,9];
let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);