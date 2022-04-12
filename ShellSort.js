function shellSort(arr) {
    let n = arr.length;
    let gap = Math.floor(n/2);
    let temp, i , j;

    while(gap>=1)
    {
        for (let i = gap;i < n;i++)
        {
            temp = arr[i];
            j = i;
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j = j - gap;
            }
            arr[j] = temp;
        }
        gap = gap / 2;
    }


}
let arr = [23,29,15,19,31,7,9,5,2];
shellSort(arr);
console.log(arr);