var homeScore = 0
var awayScore = 0

function reset() {
    homeScore = 0
    awayScore = 0
    team = 0
    twoTeams = 0
    document.querySelector("#teama").textContent=""
    document.querySelector("#teamb").textContent=""
    document.querySelector("#selectSport").style.display="flex"
    document.querySelector("#select").style.display="block"
    document.querySelector("#selectLag").style.display="none"
    document.querySelector("#basketballLag").style.display ="none";
    document.querySelector("#fotballLag").style.display ="none";
    document.querySelector("#Done").style.display="none"
    document.querySelector("#homescore").textContent=  homeScore
    document.querySelector("#awayscore").textContent=  awayScore

}





function homePlussOne() {
    homeScore += 1
    document.querySelector("#homescore").textContent = homeScore
}
function homePlussTwo() {
    homeScore += 2
    document.querySelector("#homescore").textContent = homeScore
}
function homePlussTree() {
    homeScore += 3
    document.querySelector("#homescore").textContent = homeScore
}
function homeReset() {
    homeScore = 0
    document.querySelector("#homescore").textContent = homeScore
}


function awayPlussOne() {
    awayScore += 1
    document.querySelector("#awayscore").textContent = awayScore
}
function awayPlussTwo() {
    awayScore += 2
    document.querySelector("#awayscore").textContent = awayScore
}
function awayPlussTree() {
    awayScore += 3
    document.querySelector("#awayscore").textContent = awayScore
}
function awayReset() {
    awayScore = 0
    document.querySelector("#awayscore").textContent = awayScore
}

function fottball() {
    document.querySelector("#lag").style.display ="grid";
    document.querySelector("#fotballLag").style.display ="flex";
    document.querySelector("#Done").style.display ="flex";
    document.querySelector("#basketballLag").style.display ="none";
    document.querySelector("#selectSport").style.display ="none"
}

function basketball() {
    document.querySelector("#lag").style.display ="grid";
    document.querySelector("#basketballLag").style.display ="flex";
    document.querySelector("#Done").style.display ="flex";
    document.querySelector("#fotballLag").style.display ="none";
    document.querySelector("#selectSport").style.display ="none"
}

function hideSelect() {
    if (twoTeams >= 2) {
        document.querySelector("#select").style.display ="none";
        document.querySelector("#homeButtons").style.display ="flex";
        document.querySelector("#awayButtons").style.display ="flex";
    }
}

var team = 0 
var twoTeams = 0
function barsa() {
    if (team==0) {
        document.querySelector("#teama").textContent="barsa" 
    } else { 
        document.querySelector("#teamb").textContent="barsa" 
    } 
}
function manchester() {
    if (team==0) { 
        document.querySelector("#teama").textContent="manchester city" 
    } else { 
        document.querySelector("#teamb").textContent="manchester city" 
    } 
}
function aston() { 
    if (team==0) { 
        document.querySelector("#teama").textContent="Aston Villa" 
    } else { 
        document.querySelector("#teamb").textContent="Aston Villa" 
    } 
}
function liverpool() { 
    if (team==0) { 
        document.querySelector("#teama").textContent="liverpool" 
    } else { 
        document.querySelector("#teamb").textContent="liverpool" 
    } 
}
function arsenal() { 
    if (team==0) { 
        document.querySelector("#teama").textContent="arsenal" 
    } else { 
        document.querySelector("#teamb").textContent="arsenal" 
    } 
}
function birmingham() { 
    if (team==0) { 
        document.querySelector("#teama").textContent="birmingham" 
    } else { 
        document.querySelector("#teamb").textContent="birmingham" 
    } 
}

function milwukee() {
    if (team==0) {
        document.querySelector("#teama").textContent="Milwukee" 
    } else { 
        document.querySelector("#teamb").textContent="Milwukee" 
    } 
}
function boston() {
    if (team==0) { 
        document.querySelector("#teama").textContent="Boston" 
    } else { 
        document.querySelector("#teamb").textContent="boston" 
    } 
}
function aston() { 
    if (team==0) { 
        document.querySelector("#teama").textContent="Aston Villa" 
    } else { 
        document.querySelector("#teamb").textContent="Aston Villa" 
    } 
}
function liverpool() { 
    if (team==0) { 
        document.querySelector("#teama").textContent="liverpool" 
    } else { 
        document.querySelector("#teamb").textContent="liverpool" 
    } 
}
function arsenal() { 
    if (team==0) { 
        document.querySelector("#teama").textContent="arsenal" 
    } else { 
        document.querySelector("#teamb").textContent="arsenal" 
    } 
}
function birmingham() { 
    if (team==0) { 
        document.querySelector("#teama").textContent="birmingham" 
    } else { 
        document.querySelector("#teamb").textContent="birmingham" 
    } 
}

function teamc() { 
    if (team==0) { 
        team = 1; 
        twoTeams+=1
    } else { 
        team=0; 
        twoTeams+=1
    } 
}

function resetAll() {
    document.querySelector().style.display=""
    document.querySelector().style.display=""
}

function selectSport() {
    document.querySelector("#selectLag").style.display="none"
    document.querySelector("#selectSport").style.display="flex"
    document.querySelector("#Done").style.display="none"
    document.querySelector("#fotballLag").style.display ="none";
    document.querySelector("#basketballLag").style.display ="none";
    team = 0
    twoTeams = 0
    document.querySelector("#teama").textContent=""
    document.querySelector("#teamb").textContent=""
}


