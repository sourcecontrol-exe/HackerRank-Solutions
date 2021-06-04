function largest(nums, k) {
    let heap = [];

    for (var i = 0; i < nums.length; i++) {

        let element = nums[i];
        let isAdded = false;
        if (heap.length == 0) {
            heap.push(element);
        }
        for (var j = 0; j < heap.length; j++) {
            if (element > heap[j]) {
                heap.splice(j, 0, element);
                isAdded = true;
                break;
            }
        }
        if(!isAdded){
            heap.push(element);
        }
    }
    console.log(heap);
}
console.log(largest([1,8,6,4,7,6,9]))