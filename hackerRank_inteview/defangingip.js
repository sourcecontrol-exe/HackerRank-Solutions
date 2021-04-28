var defangIPaddr = function(address) {
   address =address.split(".").join('[.]')
   console.log(address)

};

console.log(defangIPaddr("255.100.50.0"))