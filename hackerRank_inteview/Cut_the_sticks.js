function iteration(arr){
   let result = []
    let temp = arr
    while(temp.length!==0){
      temp=temp.filter(ele=> ele>0)
      if(temp.length== 0){
          return result
      }
      else{
          result.push(temp.length)
      }

      let min = Math.min(...temp)
      temp.forEach((ele,index) => {
          temp[index] = temp[index] - min
      })
    }
}

iteration([5,4,4,2,2,8])