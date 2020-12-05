function triplets(arr,r){
    const hGram = {}
    const hGram2 = {}
    let count = 0
    if (arr.length < 3) return 0
    for (let i = arr.length - 1; i >=0; i--) {
      let t1 = arr[i]
      let t2 = t1 * r
      let t3 = t2 * r
      count += hGram2[t3] || 0
      
      hGram2[t2] ?
        hGram2[t2] += hGram[t2] || 0 :
          hGram2[t2] = hGram[t2] || 0
      hGram[t1] ? hGram[t1]++ : hGram[t1] = 1
      console.log(hGram2,hGram,"singlets")
    }
    console.log(count)
}


triplets([1, 3, 9, 9, 27, 81 ],3)