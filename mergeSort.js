function mergeSort(arr){

    if(arr.length <= 1) return arr;
    let mid = Math.ceil(arr.length / 2);
    let firstHalf = mergeSort(arr.splice(0, mid));
    let secondHalf = mergeSort(arr.splice(-mid));
    return merge(firstHalf, secondHalf);
}

function merge(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;


    while(i < arr1.length && j < arr2.length){

        if(arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function Msort(arr,lb,ub){
    let mid = Math.floor((lb + ub) / 2);
    Msort(arr,lb,mid);
    Msort(arr,mid+1,ub);
    MergeArray(arr,lb,mid,ub);
}
function MergeArray(arr,lb,mid,ub){
    let i = lb;
    let j = mid+1;
    let k= lb;
    let brr = new Array(arr.length);
    while(i<=mid &&j<= ub){
        if(arr[i]<arr[j]){
            brr[k] = arr[i];
            i++;
            k++;
        }
        else{
            brr[k]= arr[j];
            j++; k++;
        }
    }
    if(i>mid){
        while(j<= ub){
            brr[k] = arr[j];
            j++;
            k++;
        }
    }
    else{
        while(i<=mid){
            brr[k] = arr[i];
            i++;
            k++;
        }
    }
    for(let z = lb; z<=ub;z++){
        arr[z] = brr[z];
    }
}
let arr =[15,5,24,8,1,31,6,10,20 ]
console.log(Msort(arr,0,arr.Length-1));