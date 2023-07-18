
function printt() {
    let day = parseInt(document.getElementById("day").value)
    let month = parseInt(document.getElementById("month").value)
    let year = parseInt(document.getElementById("year").value)
    //console.log(day, month, year)
    let results = document.querySelectorAll(".result_number")

    if (!validator(day, month, year)){
            results[0].style.display = 'none'
            results[1].style.display = 'none'
            results[2].style.display = 'none'
    } else {
        console.log("true")
        calculate_age(day, month, year)
    }
}

function get_days_in_month(month) {

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
        return 31

    if (month == 4 || month == 6 || month == 9 || month == 11)
        return 30

    if (month == 2)
        return 29
}

function validator(day, month, year) {
    let return_value = true
    const date = new Date();

    let inputs = document.querySelectorAll("input")
    let labels = document.querySelectorAll("label")
    let smalls = document.querySelectorAll("small")

    // if(typeof(day) != int || typeof(month) != int || typeof(year) != int) {
    //     inputs[0].style.border = '1px hsl(0, 100%, 67%) solid'
    //     labels[0].style.color = 'hsl(0, 100%, 67%)'
    //     smalls[1].style.display = 'block'
    //     inputs[1].style.border = '1px hsl(0, 100%, 67%) solid'
    //     labels[1].style.color = 'hsl(0, 100%, 67%)'
    //     smalls[1].style.display = 'block'
    //     inputs[2].style.border = '1px hsl(0, 100%, 67%) solid'
    //     labels[2].style.color = 'hsl(0, 100%, 67%)'
    //     smalls[2].style.display = 'block'
    //     return_value = false
    // }

    if(day < 1 || day > 31) {
        inputs[0].style.border = '1px hsl(0, 100%, 67%) solid'
        labels[0].style.color = 'hsl(0, 100%, 67%)'
        smalls[0].style.display = 'block'
        return_value = false
    }

    if (month < 1 || month > 12) {
        inputs[1].style.border = '1px hsl(0, 100%, 67%) solid'
        labels[1].style.color = 'hsl(0, 100%, 67%)'
        smalls[1].style.display = 'block'
        return_value = false
    }

    if (year > date.getFullYear()) {
        inputs[2].style.border = '1px hsl(0, 100%, 67%) solid'
        labels[2].style.color = 'hsl(0, 100%, 67%)'
        smalls[2].style.display = 'block'
        return_value = false
    }
        

    if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && !(day>0 && day<32))
        {
            inputs[0].style.border = '1px hsl(0, 100%, 67%) solid'
            labels[0].style.color = 'hsl(0, 100%, 67%)'
            smalls[0].style.display = 'block'
            return_value = false
        }

    if ((month == 4 || month == 6 || month == 9 || month == 11) && !(day>0 && day<31)) {
        inputs[0].style.border = '1px hsl(0, 100%, 67%) solid'
        labels[0].style.color = 'hsl(0, 100%, 67%)'
        smalls[0].style.display = 'block'
        return_value = false
    }

    if (month == 2 && !(day>0 && day<30)) {
        inputs[0].style.border = '1px hsl(0, 100%, 67%) solid'
        labels[0].style.color = 'hsl(0, 100%, 67%)'
        smalls[0].style.display = 'block'
        return_value = false
    }
    
    else
        return_value = true

    return return_value
}

function calculate_age(day, month, year) {

    if (!validator(day, month, year)){
        for (let i = 0 ; i < results.length ; i++)
            results[i].style.display = 'none'

            results[0].style.display = 'none'
            results[1].style.display = 'none'
            results[2].style.display = 'none'
    }
    
    const date = new Date();
    let this_day = date.getDate()
    let this_month = date.getMonth() + 1
    let this_year = date.getFullYear()
    let result_day = 0 
    let result_month = 0
    let result_year = 0

    if(this_day < day) {
        this_month--
        result_day = day - this_day + get_days_in_month(this_month)
    } else {
        result_day = this_day - day
    }

    if(result_day >= get_days_in_month(this_month)) {
        this_month++
        result_day -= get_days_in_month(this_month)
    }

    if(this_month < month) {
        year--
        this_month = month - this_month + 12
    } else {
        result_month = this_month - month
    }

    result_year = this_year - year
    let year_spot = document.getElementById("year_spot")
    let month_spot = document.getElementById("month_spot")
    let day_spot = document.getElementById("day_spot")
    year_spot.innerHTML = result_year
    month_spot.innerHTML = result_month
    day_spot.innerHTML = result_day
    let borders = document.querySelectorAll(".empty-box")
    borders[0].style.display = 'none'
    borders[1].style.display = 'none'
    borders[2].style.display = 'none'
}