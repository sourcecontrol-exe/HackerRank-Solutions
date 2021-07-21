
function sym(args) {
	for (let i = 0; i < args.length - 1; i++) {
		let a = new Set(args[i]);
		let b = new Set(args[i + 1]);

		for(let item of args[i]){
			if(b.has(item)){
				b.delete(item);
				a.delete(item);
			}
			args[i+1]= [...a,...b];
		}
	}

	return(args[args.length-1])
}
sym([[1, 2, 3], [5, 2, 1, 4]]);