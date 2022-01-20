const binarySearch = (array, value) => {
    let l = 0;
    let r = array.length - 1;
    while(l <= r) {
        let mid = Math.floor((l + r) / 2);
        if(value === array[mid]) {
            return console.log("value was found at index " + mid);
        }
        if(value > array[mid])
            l = mid + 1;
        else
            r = mid - 1;

    }

    console.log("value not found in array");
}
let arr = [12,23,25,32,35,46];
binarySearch(arr,23);