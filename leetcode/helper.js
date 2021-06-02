function add(n1,n2) {
    let carry = 0;
    let sum = 0;
    let result = '';
    for (var itr = 0; itr < n1.length; itr++) {
        if (!n2[itr]) {
            n2[itr] = '0';
        }
        console.log(n2[itr])
        sum = parseInt(n1[itr])+ parseInt(n2[itr]) + carry;
        result+= sum % 10;
        carry = Math.floor(sum/10)>0?Math.floor(sum/10):0;
        console.log(result,sum,carry)
    }
    console.log(result);
}
add('0642','243')