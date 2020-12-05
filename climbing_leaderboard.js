function climbingLeaderboard(scores, alice) {
    let ranks =[] 
    scores.filter(ele=>{
        if(!ranks.includes(ele)){
            ranks.push(ele)
        }
    })
    let result =[]
    alice.map(ele=>{
        ranks.push(ele)
        //console.log(ranks)
        let a = ranks.sort((a,b)=> b - a)
        result.push(ranks.indexOf(ele)+1)
        ranks.slice(ranks.indexOf(ele),1)
    })
     return result
   }

   let ans = climbingLeaderboard([100,100,50,40,20,10],[5,20,50,120])
   console.log(ans)