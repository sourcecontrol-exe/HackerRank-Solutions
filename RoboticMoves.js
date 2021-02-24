function main() {
    const n = parseInt(readLine(), 10);
     while(n--){
       let move = parseInt(readLine(), 10);
       let sum = move(move+1)
       console.log(sum)
     }
}

