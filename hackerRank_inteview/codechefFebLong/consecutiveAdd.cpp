#include<bits/stdc++.h>
using namespace std;
#define int long long
#define pie 3.1415926535897932384626 
typedef pair<int, int> pii;
typedef vector<int> vi;
typedef vector<pii> vpii;
typedef vector<vi> vvi;
#define xy(x,y) cout<<"[ "<<x<<"  "<<y<<" ]"<< endl
#define x(x) cout <<"[ "<< x <<" ]"<<endl
#define endl  "\n" 
int re , C , x ; 
bool is_valid(vvi arr1 , vvi arr2 ) {
     for(int i = 0 ; i < re ; i ++ ) 
     {
         for(int j = 0 ; j < C ; j ++) 
         {
            if(arr1[i][j] != arr2[i][j]) 
            return false;
         }
     }
     return true ;
}
bool cal1(int rst , int ren , vvi &arr1 , vvi &arr2 )
{            
            for(int i = rst ; i <= ren ; i ++ ) 
            {       
                  int pre  =  0;
                for(int j = 0 ; j <= C - x  ; j ++ ) 
                {
                       pre += arr2[i][j] - (arr1[i][j] + pre);
                       if(j + x < C)
                       arr1[i][j + x] -= pre ;

                       arr1[i][j] = arr2[i][j];
                  
                }
                for(int j = C - x + 1 ; j < C ; j ++) 
                arr1[i][j] += pre ;
            }
            return is_valid(arr1 , arr2) ;
}
bool cal2(int cst , int cen , vvi &arr1 , vvi &arr2)
{
            for(int i = cst  ; i <= cen ; i ++ ) 
            {       
                  int pre  =  0;
                for(int j = 0 ; j <= re - x  ; j ++ ) 
                {
                       pre += arr2[j][i] - (arr1[j][i] + pre);
                       if(j + x < re)
                       arr1[j + x][i] -= pre ;
                       arr1[j][i] = arr2[j][i];
                  
                }
                for(int j = re - x + 1 ; j < re ;  j ++ ) 
                arr1[j][i] += pre ;
            }
            return is_valid(arr1 , arr2) ;
}
int32_t main()
{
    int t ;
    cin >> t ;
    while(t -- )
    {
        cin >> re >> C >> x ;
        vvi A( re + 2 ,vi(C + 2)) , B(re + 2 , vi(C + 2)) ;
        for(int i =  0 ; i < re ; i ++ ) 
        {
            for(int j = 0 ; j < C ; j ++ )
            {
                cin >> A[i][j];
            }
        }
        for(int i =  0 ; i < re ; i ++ ) 
        {
            for(int j = 0 ; j < C ; j ++ )
            {
                cin >> B[i][j];
            }
        }
        bool ans = false;
        vvi temp ;
        temp = A ;
        if(cal1(0 , re-1 , temp , B) || cal2(C - x + 1 , C - 1, temp , B))
        {
            ans = true ;
        }

        if(ans) 
        cout <<"YES\n";
        else 
        cout <<"NO\n";
    }
   return 0;
}