
let obtainedmarks = document.getElementById("obtainedmarks")
let percentage = document.getElementById("percentage")
let grade = document.getElementById("grade")
let submit = document.getElementById('submit')

submit.addEventListener('click', () => {

    let totalmarks = 100;
    if (obtainedmarks.value <= 100) {
        if (obtainedmarks.value >= 80){
            // console.log("a+") 
            let percentagee = totalmarks * obtainedmarks.value / 100
            console.log(percentagee + "%")
            percentage.innerText = percentagee + "%"
             grade.innerText="a+" 
            
        }
        else if (obtainedmarks.value >= 70) {

            // console.log("a")
            let percentagee = totalmarks * obtainedmarks.value / 100
            console.log(percentagee + "%")
            percentage.innerText = percentagee + "%"

            grade.innerText = 'a'

        }
        else if (obtainedmarks.value >= 60) {
            let percentagee = totalmarks * obtainedmarks.value / 100
            console.log(percentagee + "%")
            percentage.innerText = percentagee + "%"

            // console.log("b+")
            grade.innerText = 'b+'

        }
        else if (obtainedmarks.value >= 50) {
            let percentagee = totalmarks * obtainedmarks.value / 100
            console.log(percentagee + "%")
            percentage.innerText = percentagee + "%"

            console.log("b")
            grade.innerText = 'b'
        }
        else if (obtainedmarks.value >= 40) {
            let percentagee = totalmarks * obtainedmarks.value / 100
            console.log(percentagee + "%")
            percentage.innerText = percentagee + "%"

            // console.log("c")
            grade.innerText = 'c'
        }
        else if (obtainedmarks.value < 40) {
            let percentagee = totalmarks * obtainedmarks.value / 100
            console.log(percentagee + "%")
            percentage.innerText = percentagee + "%"
            // console.log("you are fail")
            grade.innerText = 'you are fail'

        }

    }


})
