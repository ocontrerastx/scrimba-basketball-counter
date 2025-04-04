let homeScore = document.getElementById('score-home');
let guestScore = document.getElementById('score-guest');

function addOnePoint(team) {
    if (team === 'home') {
        homeScore.innerText = parseInt(homeScore.innerText) + 1;
    } else {
        guestScore.innerText = parseInt(guestScore.innerText) + 1;
    }
}

function addTwoPoints(team) {
    if (team === 'home') {
        homeScore.innerText = parseInt(homeScore.innerText) + 2;
    } else {
        guestScore.innerText = parseInt(guestScore.innerText) + 2;
    }
}

function addThreePoints(team) {
    if (team === 'home') {
        homeScore.innerText = parseInt(homeScore.innerText) + 3;
    } else {
        guestScore.innerText = parseInt(guestScore.innerText) + 3;
    }
}
