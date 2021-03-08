'use strict';
 
process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString = '';
let currentLine = 0;
 
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
 
process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    
     main();
});
 
function readLine() {
    return inputString[currentLine++];
}


 
function main() {
    let n = parseInt(readLine(), 10);
     while(n--){
        let cost =0;
        let temp1=0,temp2=0,temp3=0;
        let [count,eggs,choco,omlet,shake,cake] = readLine().split(" ");
        let menu = {
            "omlet" : parseInt(omlet),
            "shake" : parseInt(shake),
            "cake": parseInt(cake)
        }
        const sortable = Object.entries(menu).sort(([,a],[,b]) => a-b);
        for(var i =0;i<sortable.length;i++){
            if((temp1+temp2+temp3) == parseInt(count)) break;

            if(sortable[i][0] == "omlet"){
                temp1 = Math.min((parseInt(eggs)-(parseInt(eggs)%2))/2,parseInt(count));
                eggs = (parseInt(eggs)%2);
                cost+= temp1*sortable[i][1]
            }
            else if(sortable[i][0]=="shake") {
                temp2 = Math.min((parseInt(choco)-(parseInt(choco)%3))/3, parseInt(count));
                choco = (parseInt(choco)%3);
                cost += temp2*sortable[i][1];
            }
            else  if(sortable[i][0]=="cake"){
                temp3 = Math.min(Math.min(parseInt(eggs),parseInt(choco)),parseInt(count))
                eggs = eggs-temp3;
                choco = choco-temp3;
                cost +=temp3*sortable[i][1];
            }
        };
        if(temp1+temp2+temp3<parseInt(count)){
            console.log(-1)
        }else{
            console.log(cost)
        }
    }
}