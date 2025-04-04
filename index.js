let homeScore = document.getElementById('score-home');
let guestScore = document.getElementById('score-guest');

function addPoints(team, points) {
    if (team === 'home') {
        homeScore.innerText = parseInt(homeScore.innerText) + points;
    } else {
        guestScore.innerText = parseInt(guestScore.innerText) + points;
    }
}
