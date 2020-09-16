function grade(scor){
    if(0 <= scor <=50){
         return "F"
     }else if(51 <= scor <=60){
         return "D"
     }else if(61 <= scor <=70){
        return "C"
    }else if(71 <= scor <=80){
        return "B"
    }else{
        return "A"
    }
}

console.log(grade(80))