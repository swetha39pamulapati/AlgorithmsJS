function heapSort(arr){
    let n = arr.length;
    for(let i = Math.floor(n / 2);i>=0; i--){
        heapSorting(arr,n,i);
    }
    for(let i = n-1; i>0 ; i--){
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapSorting(arr,i,0);
    }
}
function heapSorting(arr,n,i){
    let largest = i;
    let l = 2*i;
    let r = (2*i)+1;
    if(l<n && arr[l]>arr[largest] )
    largest = l;
    if(r<n && arr[r]>arr[largest] )
        largest = r;
    if(largest!= i)
    {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapSorting(arr,n,largest);
    }

}
let arr = [15, 6, 5, 4, 7,20, 30];
heapSort(arr);
console.log(arr);