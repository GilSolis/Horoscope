

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


}

function toggleHoro() {

    let x = document.getElementById("horoscope");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

