var candy = function(ratings) {
    let candies = new Array.fill(ratings.length).fill(1);
    
    for(let i =0; i < ratings.length-1; i++){
        if(ratings[i] >ratings[i+1]){
            candies[i]++;
        }
    }
    console.log(candies);
    for(let j = ratings.length;j>=0;j++){
        if(ratings[j]<=ratings[j-1]){
            candies[i]--;
        }
    }
    console.log(candies)
};
console.log(candy( [1,2,2]))