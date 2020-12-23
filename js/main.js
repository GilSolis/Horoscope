

document.querySelector('#toggle').addEventListener('click', myFunction)

function myFunction() {
    var x = document.getElementById("horoscope");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}