const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_location = document.getElementById("city_location");
const temp_degree = document.getElementById("temp_degree");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
    event.preventDefault();

    let cityValue = cityName.value
    if (cityValue === "") {
        city_location.innerText = `Please type the name of the location before search`
    } else {
        try{
            let url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=14eb07a7bc01583420f7edbac2554dbe`);
        const data = await url.json();
        // console.log(data)
        const arrData = [data];

        temp_degree.innerText = arrData[0].main.temp;
        // temp_status.innerText = arrData[0].weather[0].main;

        city_location.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`

        // conditions to check sunny or cloudy or rainy
        const tempMood = arrData[0].weather[0].main;

        if (tempMood == "Clear") {
            temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68'></i>"
        } else if (tempMood == "Clouds") {
            temp_status.innerHTML = "<i class='fa-solid fa-cloud' style = 'color: #f1f2f6'></i>"
        } else if (tempMood == "Rain") {
            temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style = 'color: #a4b0be'></i>"
        } else {
            temp_status.innerHTML = "<i class='fa-solid fa-cloud' style = 'color: #f1f2f6'></i>"
        }
        }catch{
            city_location.innerText = 'Please enter the city name properly';
        }
        
    }
};

submitBtn.addEventListener("click", getInfo)



// day and date
const currDay = document.getElementById("day");
const getCurrDay = () => {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let toDay = new Date();
    let days = weekDays[toDay.getDay()];
    return days;
}
currDay.innerHTML = getCurrDay();

const currDate = document.getElementById("date");
const getCurrDate = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var currTime = new Date();

    var currentMonth = months[currTime.getMonth()];
    var currentDate = currTime.getDate();
    var currentYear = currTime.getFullYear();

    return `${currentDate} ${currentMonth}, ${currentYear}`
};
currDate.innerHTML = getCurrDate();

