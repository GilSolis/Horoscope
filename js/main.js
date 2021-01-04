

document.getElementById('toggle').addEventListener('click', toggleHoro)

document.getElementById("dateInput").addEventListener("change", birthday);

document.getElementById("horoscopeBtn").addEventListener('click', decideYourFate)


let dayOfBirth;
let dateEntered = new Date(dayOfBirth);
function decideYourFate() {
    ;

}

function birthday() {
    dayOfBirth = this.value;
    let dateEntered = new Date(dayOfBirth);
    month = dateEntered.getMonth()
    day = dateEntered.getDate()
    console.log(dayOfBirth);
    console.log(month);
    console.log(day)

    switch (true) {
        case month === 0 && day >= 20 || month === 1 && day <= 18: console.log("aquarius confirmed")
            document.querySelector("p").innerHTML = "You Aquarius"
            break;
        case month === 1 && day >= 19 || month === 2 && day <= 19: console.log("Pisces confirmed")
            document.querySelector("p").innerHTML = "You Pisces"
            break;
        case month === 2 && day >= 20 || month === 3 && day <= 19: console.log("Aries confirmed")
            document.querySelector("p").innerHTML = "You Aries"
            break;
        case month === 3 && day >= 20 || month === 4 && day <= 19: console.log("Taurus confirmed")
            document.querySelector("p").innerHTML = "You Taurus"
            break;
        case month === 4 && day >= 20 || month === 5 && day <= 20: console.log("Gemini confirmed")
            document.querySelector("p").innerHTML = "You Gemini"
            break;
        case month === 5 && day >= 21 || month === 6 && day <= 21: console.log("Cancer confirmed")
            document.querySelector("p").innerHTML = "You Cancer"
            break;
        case month === 6 && day >= 22 || month === 7 && day <= 22: console.log("Leo confirmed")
            document.querySelector("p").innerHTML = "You Leo"
            break;
        case month === 7 && day >= 23 || month === 8 && day <= 22: console.log("Virgo confirmed")
            document.querySelector("p").innerHTML = "You Virgo"
            break;
        case month === 8 && day >= 23 || month === 9 && day <= 23: console.log("Libra confirmed")
            document.querySelector("p").innerHTML = "You Libra"
            break;
        case month === 9 && day >= 23 || month === 10 && day <= 22: console.log("Scorpio confirmed")
            document.querySelector("p").innerHTML = "You Scorpio"
            break;
        case month === 10 && day >= 22 || month === 11 && day <= 20: console.log("Sagittarius confirmed")
            document.querySelector("p").innerHTML = "You Sagittarius"
            break;
        case month === 11 && day >= 21 || month === 0 && day <= 19: console.log("Capricorn  confirmed")
            document.querySelector("p").innerHTML = "You Capricorn"
            break;
        default: console.log('Not Aquarius')
    }


}

function toggleHoro() {

    let x = document.getElementById("horoscope");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

