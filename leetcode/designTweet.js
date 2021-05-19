/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.tweets = new Set();
    this.followers = new Set();
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    
    if(!this.tweets[userId]){
    
        this.tweets[userId] = new Map()
        this.tweets[userId].set(tweetId, 1)
         if(this.followers[userId] == undefined){
             this.followers[userId] = new Set();
             this.followers[userId].add(userId);
         }
         else{
             this.followers[userId].add(userId);
         }
    }
    else{
        let value = this.tweets[userId].size
        this.tweets[userId].set(tweetId, value);
    }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let res = []
    if(this.followers[userId]){
        [...this.followers[userId]].forEach(following =>{
            if(this.tweets[following]){
                res.push(...this.tweets[following])
            }
            
        })
    }
    res.sort((a,b)=> a-b)
    return res.reverse().slice(0,res.length>10?10:res.length);
    
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(this.followers[followerId] == undefined)
        this.followers[followerId]= new Set()
    this.followers[followerId].add(followeeId)
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
     if(this.followers[followerId] !== undefined){
         this.followers[followerId].delete(followeeId)
     }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */


var obj = new Twitter();
obj.postTweet(2,5);
obj.postTweet(1,3);
obj.postTweet(1,101);
obj.postTweet(2,13);
obj.postTweet(1,10);
obj.postTweet(1,2);
obj.postTweet(1,94);
obj.follow(2,1);
// obj.postTweet(1,505);
// obj.postTweet(1,333);
// obj.postTweet(1,22);
// obj.postTweet(1,11);
console.log(obj.getNewsFeed(2))
