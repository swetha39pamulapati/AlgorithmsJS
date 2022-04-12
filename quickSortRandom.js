const quicksort = (arr, low, high) => {
    if (low < high) {
        const pivot = partitionRandom(arr, low, high);
        quicksort(arr, low, pivot - 1);
        quicksort(arr, pivot + 1, high);
    }
    return arr;
}

const partitionRandom = (arr, low, high) => {
    //Get random number between the given indexes.
    const random = Math.floor(Math.random() * (high - low + 1) + low);

    //Swap with the first element
    //swap(arr, random, low);
    let temp = arr[random];
    arr[random] = arr[low];
    arr[low] = temp;

    //Use first element as a pivot
    return partition(arr, low, high);
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
let sortedArray = quicksort(arr, 0, arr.length - 1);
console.log(sortedArray);