#include<bits/stdc++.h>
using namespace std;
#define ll long long

int main(){
    int t,q,d;
    cin>>t>>q>>d;
    while (t--)
    {
        ll x  = -2e18;
        ll r = 2e18;
        ll y1 = x;
        ll y2 = r;
        ll curr = 1LL;
        string cc;
        ll mid = (x+r)/2;
        while(x<=r){
            mid = (x+r)/2;
            if(curr == 1LL)
            cout<<curr<<" "<<mid<<" "<<y1<<endl;
            else
            cout<<curr<<" "<<mid<<" "<<y1<<" "<<mid<<" "<<y2<<endl;
            cin>>cc;
            if(cc[0]=='X'){
                curr=2LL;
            }
            if(cc=="O"){
                break;
            }
            if(cc[0]=='N'){
                x=mid+1LL;
            }
            if(cc[0] == 'P'){
                r = mid-1LL;
            }
        } 
    }

}