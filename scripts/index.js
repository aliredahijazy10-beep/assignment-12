const score = 75;
const has_submitted_assignments = true;
let grade = undefined;
let orderstatus = undefined;

if (score >= 0 && score <= 100){
    if(score >= 90){
        grade = "A"
    }else if(score >= 80){
        grade = "B"
    }else if(score >= 70){
        grade = "C"
    }else if(score >= 60){
        grade = "D"
    }else{
        grade = "F"
    }

}if(score >= 60 && score <= 100){
    if (has_submitted_assignments == true){
        orderstatus = "Passed with all homework submitted"
    }else{
        orderstatus = "Passed, but missing homework penalty applies."
    }
}else if(score > 50 && score <= 100){
    orderstatus = "Failed, but eligible for a re-test."

}else if(score <= 50 && score > 0){
        orderstatus = "Failed completely. Must retake the course."

}else{
    orderstatus = "Wrong number";
}

console.log(`Score: ${score}`)
console.log(`Grade: ${grade}`)
console.log(`Status: ${orderstatus}`)