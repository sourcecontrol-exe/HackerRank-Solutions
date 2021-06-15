function kth(arr, k) {

	let heap = []
	for (let i = 0; i < k; i++){
		heap.push(arr[i])
	}

	heap.sort((a,b)=> a-b);

	for(let i = k;i< arr.length; i++){
		if(arr[i]>heap[0]){
			if(arr[k] > heap[k-1]){
				heap.push(arr[k])
				heap.shift();
			}
			else{
				let itr = 0;
				while(heap[itr] < arr[k]){
					itr++
				}
				heap.splice(itr,0,arr[i]);
				heap.shift()
			}
		}
	}
	return heap;
}
console.log(kth([2,34,5123,412,4123,23],2))