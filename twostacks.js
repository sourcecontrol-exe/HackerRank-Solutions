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

class QueueFifo{
    constructor(){
        this.Queue = []
    }

    add(ele){
        this.Queue.push(ele)
    }
    delete(){
        this.Queue.shift();
    }
    print(){
        return this.Queue[0];
    }
}
class QueueLifo{
    constructor(){
        this.Queue = []
    }

    add(ele){
        this.Queue.push(ele)
    }
    delete(){
        this.Queue.pop();
    }
    print(){
        return this.Queue[0];
    }

}
 
 
function main() {
    var t = parseInt(readLine(), 10);

    let fifo= new QueueFifo();
    let lifo = new QueueLifo();
    while(t--){
        
        let [cmd , ele] = readLine().split(" ");
        
        if(cmd == '1'){
            fifo.add(ele)
            lifo.add(ele);
        }
        else if(cmd == '2'){
            fifo.delete();
            lifo.delete();
        }
        else if(cmd =="3"){
            fifo.print();
            
            lifo.print();
        }

    }
}
