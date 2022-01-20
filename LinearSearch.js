function linearSearch(arr,x){
    let n =arr.length;
    let found =0;
    for(let i =0; i<n; i++){
        if(arr[i] == x) {
            found = 1;
            console.log("Data is found");
            break;
        }

    }
    if(found== 0)
        console.log("Data Not found");
}
let arr = [2,3,7,12,59];
linearSearch(arr,3);