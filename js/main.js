document.getElementById('toggle').addEventListener('click', toggleHoro);
document.getElementById("dateInput").addEventListener("change", birthday);
document.getElementById('again').addEventListener('click', searchAgain);

// let dayOfBirth;


function birthday() {
    let dayOfBirth = this.value;
    let dateEntered = new Date(dayOfBirth);
    month = dateEntered.getMonth()
    day = dateEntered.getDate()

    switch (true) {
        case month === 0 && day >= 20 || month === 1 && day <= 18: console.log("aquarius confirmed")
            document.querySelector("p").innerHTML = "You should try to start moving yourself away from your emotions. It's not that they aren't important, it's just that they aren't helping you make the decisions you need to make. They're distracting you from putting the right priorities together. Take a more logical and objective perspective. Get more focus, and you'll be able to deal better with whatever goes on down the road. Reacting emotionally will only send you down a dead-end path."
            document.getElementById("horoscope").style.border = '60px solid transparent'
            document.getElementById("horoscope").style.borderImage = "url('img/aquarius.svg')";
            break;
        case month === 1 && day >= 19 || month === 2 && day <= 19: console.log("Pisces confirmed")
            document.querySelector("p").innerHTML = "Your urge to travel and go on adventures could be waning right now, and you're going to start being much more tuned in to the idea of sticking close to home. You don't need to wander all around the world to find fun when there's so much of it with your family and friends here at home. This is the start of a powerful growth spurt in your relationships. You're feeling in sync with the people you care about in a much more profound way than ever before."
            document.getElementById("horoscope").style.border = '60px solid transparent'
            document.getElementById("horoscope").style.borderImage = "url('img/pisces.svg')";
            break;
        case month === 2 && day >= 20 || month === 3 && day <= 19: console.log("Aries confirmed")
            document.querySelector("p").innerHTML = "You can't do it all today, which is a fact that will become all too apparent as soon as you get started this morning. But instead of feeling frustrated, start paring off a few tasks and adjust your expectations. Despite the current rumors, you are not a superhero! It's much better to do less and succeed often than it is to always aim for the stars and continually fall short. Climbing a smaller mountain is still climbing a mountain."
            document.getElementById("horoscope").style.border = '60px solid transparent'
            document.getElementById("horoscope").style.borderImage = "url('img/aries.svg')";
            break;
        case month === 3 && day >= 20 || month === 4 && day <= 19: console.log("Taurus confirmed")
            document.querySelector("p").innerHTML = "Right now, it's a good idea for you to stick close to home and focus on one or two people who matter the most to you. Things around your home, like warmth and safety, are very appealing and satisfying for you. Also, there is a huge possibility of new levels of depth in your personal relationships. A recent drama, while frustrating, has made you a lot closer with someone, and this fledgling relationship could benefit from some more attention."
            document.getElementById("horoscope").style.border = '60px solid transparent'
            document.getElementById("horoscope").style.borderImage = "url('img/taurus.svg')";
            break;
        case month === 4 && day >= 20 || month === 5 && day <= 20: console.log("Gemini confirmed")
            document.querySelector("p").innerHTML = "When it comes to improving the health of your finances right now, everything else has to take a back seat. If you're afraid that you'll be called a cheapskate by your friends, you need to get over it fast. But chances are they won't. After all, they care about you and want you to meet your goals. When you chose your friends, you were smart enough to put their ability to support you high up on your list. If they only like you when your wallet is open, they're not your friends."
            document.getElementById("horoscope").style.border = '60px solid transparent'
            document.getElementById("horoscope").style.borderImage = "url('img/gemini.svg')";
            break;
        case month === 5 && day >= 21 || month === 6 && day <= 21: console.log("Cancer confirmed")
            document.querySelector("p").innerHTML = "You are feeling and looking extremely good today, and your positive energy will only grow with every encounter you have. Talk it up and get your flirt on. Shine your bright light on everyone you meet, and you will make their day! Expect a lot of double takes and slack jaws wherever you go. By the end of the day, you might even feel embarrassed by all of the attention you've been getting, but why fight it? The fact is you are one hot ticket."
            document.getElementById("horoscope").style.border = '60px solid transparent'
            document.getElementById("horoscope").style.borderImage = "url('img/cancer.svg')";
            break;
        case month === 6 && day >= 22 || month === 7 && day <= 22: console.log("Leo confirmed")
            document.querySelector("p").innerHTML = "Look out for people who are emotionally on edge today. That kind of irregular energy is contagious, and it's the last thing you need to catch! Understand that irrational people are not a good influence on your life, and get as much distance from them as you can. You may have an honest desire to maintain goodwill with one of them, but at a certain point your attempts to placate them will stop working. Instead, it's just best to leave them alone."
            document.getElementById("horoscope").style.border = '60px solid transparent'
            document.getElementById("horoscope").style.borderImage = "url('img/leo.svg')";
            break;
        case month === 7 && day >= 23 || month === 8 && day <= 22: console.log("Virgo confirmed")
            document.querySelector("p").innerHTML = "Moving among many different groups will give you a big boost right now. You'll be energized by others, especially those who have done things you've always wanted to do or been to places you've always wanted to visit. And, conversely, these folks you're so intrigued by will find you very interesting as well. Make the most of the possibilities all around you and try to get as much as you can out of them without overextending or exhausting yourself."
            document.getElementById("horoscope").style.border = '60px solid transparent'
            document.getElementById("horoscope").style.borderImage = "url('img/virgo.svg')";
            break;
        case month === 8 && day >= 23 || month === 9 && day <= 23: console.log("Libra confirmed")
            document.querySelector("p").innerHTML = "Been bored lately? Well, that's all about to change when your routine gets disrupted and your daily life gets turned on its ear! An exciting surprise could throw you for a loop, but it will also energize you in a way you haven't felt in ages. Sure, there might be a twinge of fear mixed in there, but just enough to make you feel more alive. Share your good news with someone close to you and let them help you celebrate!"
            document.getElementById("horoscope").style.border = '60px solid transparent'
            document.getElementById("horoscope").style.borderImage = "url('img/libra.svg')";
            break;
        case month === 9 && day >= 23 || month === 10 && day <= 22: console.log("Scorpio confirmed")
            document.querySelector("p").innerHTML = "You might have to put some upcoming plans on hold. Something is still up in the air, and you won't be able to make any firm plans until it can be pinned down. Don't make any financial commitments, no matter how pressing your deadline may be. The good news is that soon things should at least be at a point where you can relax and believe that things will move forward, but it might not be the original result you envisioned."
            document.getElementById("horoscope").style.border = '60px solid transparent'
            document.getElementById("horoscope").style.borderImage = "url('img/scorpio.svg')";
            break;
        case month === 10 && day >= 22 || month === 11 && day <= 20: console.log("Sagittarius confirmed")
            document.querySelector("p").innerHTML = "There are reserves of unbeatable charm inside of you, so go in deep enough to utilize them today. Once you do, you're sure to come out on top in any kind of competition. Whatever you're fighting, you'll have an edge that will get you noticed and get you what you want. All you have to do is let your true vibrancy emerge. People want more of you!"
            document.getElementById("horoscope").style.border = '60px solid transparent'
            document.getElementById("horoscope").style.borderImage = "url('img/sagittarius.svg')";
            break;
        case month === 11 && day >= 21 || month === 0 && day <= 19: console.log("Capricorn  confirmed")
            document.querySelector("p").innerHTML = "Put your household issues on the top or your priority list. From fixing a dripping faucet to painting a room or even just moving some furniture around, you need to get hands-on experience in your home! Putting physical energy into your intimate surroundings will energize you and fill you with a sense of pride that can't be achieved in any other way. And it doesn't have to be a solitary activity. Get a friend, partner, or roommate to help, and make it a bonding experience."
            document.getElementById("horoscope").style.border = '60px solid transparent'
            document.getElementById("horoscope").style.borderImage = "url('img/capricorn.svg')";
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

function searchAgain() {

    let x = document.getElementById("horoscope");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    document.getElementById('dateInput').value = '';
    document.querySelector("p").innerHTML = 'Enter your birthday, silly!'
    document.getElementById("horoscope").style.border = 'none'
}