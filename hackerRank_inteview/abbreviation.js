function abreviation(a,b){
    let flag = 0
    let set= new Set()
    a.split("").map(ele=>{
        set.add(ele)
       
    })
    console.log(set)
    let set2 = new Set();
    b.split("").forEach((element,index) => {
       if(!set.has(element) && !set.has(element.toLowerCase()) ) {
        flag =1;
       console.log("yehn")
       }
       set2.add(element);
    });

    a.split("").forEach((ele,index)=>{
        if(!set2.has(ele) && /[A-Z]/.test(a.charAt(index))){
            flag = 1;
        }
    })

     if(flag === 1) return "NO"
     else return "YES"
    

}

function abbreviation2(a,b){

    let temp1 = a.length-1;
    let temp2 = b.length-1;

    while(temp1 >=0){
        if(a.charCodeAt(temp1) === b.charCodeAt(temp2) || a[temp1].toUpperCase() === b[temp2]){
            temp1--;
            temp2--;
        }
        else if(a.charCodeAt(temp1) >= 97 && a.charCodeAt(temp1) <= 122){
            temp1--;
        }
        else if(a.charCodeAt(temp1) >= 65 && a.charCodeAt(temp1)<= 90){
            
            console.log("here1", a.charAt(temp1))
            return "NO"
        }
    }
    if(temp1 == temp2) {
        console.log("idhar");
        return "YES"
    }
    else{
        console.log("idharrr")
        return "NO"
    }
}

function abbreviation3(a,b){
    let dp=Array(a.length+1).fill(0);
    for(let i=0;i<=a.length;i++){
        dp[i]=Array(b.length+1).fill(0);
    }
    dp[0][0]=1;
     for(let i=0;i<a.length;i++){

       for(let j=0;j<=b.length;j++){

             if(dp[i][j]===0) continue;

             if(j<b.length && a[i].toUpperCase()===b[j])
             {
                 dp[i+1][j+1]=1;
             }
             if(a[i]!==a[i].toUpperCase())
             {
                 dp[i+1][j]=1;
              }
          }
      }
      dp.forEach(ele=>{
          console.log(ele)
      })
     return dp[a.length][b.length]?"YES":"NO";
}
let a = abbreviation3("AsCD","ABCD")
console.log(a);
    