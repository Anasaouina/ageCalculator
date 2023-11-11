

document.getElementById("btn").addEventListener('click', function () {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let dayMessage = "";
    let monthMessage = "";
    let yearMessage = "";
    let yy = new Date().getFullYear();
    let mm = new Date().getMonth() + 1;
    let dd = new Date().getDate();

    if(day < 1 || day >31 ){
        dayMessage = "invalid day"
        document.querySelector(".dayErr").innerHTML= dayMessage
        return
    }
    if(month < 1 || month >12 ){
        monthMessage = "invalid month"
        document.querySelector(".monthErr").innerHTML= monthMessage
        return
    }
    if(year < 0 || year >yy ){
        yearMessage = "invalid year"
        document.querySelector(".yearErr").innerHTML= yearMessage
        return
    }

    document.querySelector(".dayErr").innerHTML= dayMessage
    document.querySelector(".monthErr").innerHTML= monthMessage
    document.querySelector(".yearErr").innerHTML= yearMessage
    

    let years = yy - year;
    let months = mm - month;
    let days = dd - day;

    // Adjust for negative months or days
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        const lastMonth = new Date(yy, mm - 1, day);
        const daysInLastMonth = new Date(yy, mm, 0).getDate();
        days += daysInLastMonth;
        months--;
    }

    document.getElementById('years').innerHTML = years;
    document.getElementById('months').innerHTML = months;
    document.getElementById('days').innerHTML = days;
});
