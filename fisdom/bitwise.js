function modulo(p,q){
	const mod = 998244353
	let expo = mod-2
	while(expo!= 0){
		if((expo & 1) ==1){
			p = (p*q) % mod	
		}
		q = (q*p)% mod
		expo>>=1
	}
	return p;
}
console.log(modulo(10,3))