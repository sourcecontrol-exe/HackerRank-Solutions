
var addTwoNumbers = function (l1, l2) {
    let n1 = ''
    let n2 = ''

    let pointer1 = l1;
    let pointer2 = l2;

    while (pointer1) {
        n1 += pointer1.val;
        pointer1 = pointer1.next;
    }
    while (pointer2) {
        n2 += pointer2.val;
        pointer2 = pointer2.next;
    }
    [n1, n2] = n1.length >= n2.length ? [n1.split("").reverse(), n2.split("").reverse()] : [n2.split("").reverse(), n1.split("").reverse()];
    let carry = 0;
    let sum = 0;
    let result = '';
    for (var itr = 0; itr < n1.length; itr++) {
        if (!n2[itr]) {
            n2[itr] = 0;
        }
        sum = n1[itr] + n2[itr] + carry;
        result += sum % 10;
        carry = Math.floor((n1[itr] + n2[itr]) / 10);
    }
    console.log(result);

    let ans = new ListNode();
    let ansLL = ans
    for (i = result.length - 1; i >= 0; i--) {
        let temp = new ListNode(result[i]);
        ansLL = ansLL.next;
        ansLL = temp;
    }

    return ans.head;
};