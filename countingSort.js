function countingSort(arr){
    let n = arr.length;
    let max =0;
    for(let i =0;i<n; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    let count = new Array(max+1);
    let brr = new Array(20);
    for(let i=0;i<max+1;i++){
        count[i] = 0;
    }
    for(let i =0; i<n;i++){
       count[arr[i]]++;
    }
    for (let i = 0, j = 0; i <= max; i++)
    {
        while (count[i] > 0)
        {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }

console.log(arr);
}
let data = [2,1,0,5,9,3,1,2,4,5,2,1];
countingSort(data);