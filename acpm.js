function acmTeam(topic) {
    // Write your code here
    let set = {};
    for(let i =0 ;i<topic.length-1;i++){
        for( let j = i+1;j<topic.length;j++){
            let key = i+" "+j;
            let ans = 0
            for(var k =0 ;k<topic[i].length ;k++){
                if(topic[i][k] == '1' || topic[j][k] =='1')
                    ans+=1;
            }
            set[key] = ans;
        }
    }
    let max = Math.max(...Object.values(set));
    let entries = 0;
    Object.values(set).map(ele=>{
        if(ele == max) entries++;
    })
    console.log(set)

return [max,entries];
}

console.log(acmTeam(['11101','10101','11001','10111','10000','01110']))