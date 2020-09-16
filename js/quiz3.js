function grade(score){
    if(score >= 0 && score <= 50){
         return "F"
     }else if(score >= 51 && score <= 60){
         return "D"
     }else if(score >= 61 && score <= 70){
        return "C"
    }else if(score >= 71 && score <= 80){
        return "B"
    }else{
        return "A"
    }
}

console.log(grade(81))