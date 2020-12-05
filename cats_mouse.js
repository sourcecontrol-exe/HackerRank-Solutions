function catMouse(a,b,c){
    let catA= c-a
    let catB = c-b
    if(catA<0) catA *= -1
    if(catB<0) catB *= -1
    //console.log(catA,catB)
    if(catA<catB){
        //console.log("Cat A")
        return "Cat A"
    }
    else if(catA>catB){
        //console.log("Cat B")
        return "Cat B"
    }
    else{
        //console.log("Mouse C")
         return "Mouse C"
    }
    

}
catMouse(2,5,4)