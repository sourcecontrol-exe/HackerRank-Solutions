#include <iostream>
using namespace std;
#include<bits/stdc++.h>

long long int res(long long int n, long long int e, long long h, long long int A, long long int B, long long int C);
long long int minv(long long int a, long long int b);
long long int maxv(long long int a, long long int b);

int main() {
	
	long long t;
	cin >>t;
	 while(t--){
	     
	     long long int n,e,h;
	     
	     
	     
	     long long int A,B,C;
	     
	     
	     cin>>n>>e>>h>>A>>B>>C;
	     
	     long long int ans;
	     
	     ans = res(n,e,h,A,B,C);
	     
	     if(ans == 1e15){
	         cout<<-1<<endl;
	     }
	     else{
	         cout<<ans<<endl;
	     }
	 }
	
	return 0;
}


long long int res(long long n, long long e,long long h,long long A,long long B,long long C){
    
    if(n<=0){
    return 0;
    }
    
    long long int ans = 1e15;
    
    if((n <= e) && (n<=h)){
        ans = minv(ans, n * C);
    }
    
    if(3*n <= h){
        ans =  minv(ans,n*B);
        
    }
    
    if(2*n <=e){
        ans = minv(ans,n*A);
    }
    
    if(((h-n)/2 >= 1) && ((h-n)/2 >= n-e)){
        
        
        if(B-C < 0){
            long long int temp = minv(n-1, (h-n)/2);
            ans = minv(ans, (B-C)*temp + n*C);
        }
        else{
            long long int temp = maxv(1,n-e);
            
            ans = minv(ans,(B-C)*temp+n*C);
        }
        
        
    }
    
    if(e - n >=1 && e-n >= n-h){
        if(A-C <0){
            long long temp = minv(n-1, e-n);
            ans = minv(ans,(A-C)*temp + n*C);
            
        }
        
        else{
            long long temp = maxv(1,n-h);
            ans = minv(ans,(A-C)*temp + n*C);
        }
    }
    
    if(e/2 >= 1 && (e/2 >= (3*n - h +2)/3)){
        
        if(A-B < 0 ){
            long long int temp = minv(n-1,e/2);
            ans = minv(ans, (A-B)*temp+n*B);
        }
        else{
            long long int temp = maxv(1,(3*n-h+2)/3);
            ans = minv(ans, (A-B)*temp + n*B);
        }
        
    }
    
    if(e >=3 && h >=4 && (n>=3)){
        ans = minv(ans, A+B+C+res(n-3, e-3, h-4,A,B,C));
    }
    
    return ans;
}

long long int minv(long long int a, long long int b){
    
    if(a<b) return a;
    
    return b;
    
    
}

long long int maxv(long long int a,long long int b){
    
    if(a>b) return a;
    
    return b;
}
