function gradingStudent(grades){
    grades.map(element => {
       if (element<=37) 
       {
           console.log(element)
        } 
      else if(element>37){
       if(element%5>=3){
               console.log(element+(5-temp))
        }
           else 
            console.log(element)
       }
     })
}

gradingStudent([45,63,78,96])