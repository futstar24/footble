const navigator = window.navigator
console.log(navigator)

var guess = parseInt(localStorage.getItem("guess"));



const element = document.getElementById("popup")
const reveal = document.getElementById("reveal")
const message = document.getElementById("message")
const time = document.getElementById("time")
const share = document.getElementById("share")
const winLoseTitle = document.getElementById("winLoseTitle")
const copy = document.getElementById("copy")
const shareButton = document.getElementById("shareButton")
const copyButton = document.getElementById("copyButton")

removePopupElements()

function removePopupElements() {
  try {
    share.parentNode.removeChild(share)
  } catch {

  }
  try {
    message.parentNode.removeChild(message)
  } catch {

  }
  try {
    time.parentNode.removeChild(time)
  } catch {

  }
  try {
    reveal.parentNode.removeChild(reveal)
  } catch {
  }
  try {
    copy.parentNode.removeChild(copy)
  } catch {
  }
}

const europe = ["England","Wales","Ireland","France","Germany","Belgium","Poland","Spain","Portugal","Italy","Netherlands","Greece","Finland","Lithuania","Slovakia","Malta","Monaco","Cyprus","Luxembourg","Montenegro","Slovenia","Scotland","Kosovo","Latvia","Estonia","Andorra","Vatican City","Albania","Armenia","Austria","Azerbaijan","Belarus","Bosnia and Herzegovina","Bulgaria","Croatia","Czechia","Denmark","Georgia","Hungary","Iceland","Kazakhstan","Liechtenstein","Moldova","North Macedonia","Norway","Romania","Russia","San Marino","Serbia","Sweden","Switzerland","Turkey","Ukraine"];

const africa = ["Egypt","Algeria","Mali","Senegal","Nigeria","Ethiopia","Democratic Republic of the Congo","Tanzania","South Africa","Kenya","Uganda","Sudan","Morocco","Angola","Mozambique","Ghana","Madagascar","Cameroon","Ivory Coast","Niger","Burkina Faso","Malawi","Zambia","Chad","Somalia","Zimbabwe","Guinea","Rwanda","Benin","Burundi","Tunisia","South Sudan","Togo","Sierra Leone","Libya","Congo","Liberia","Central African Republic","Mauritania","Eritrea","Namibia","Gambia","Botswana","Gabon","Lesotho","Guinea-Bissau","Equatorial Guinea","Mauritius","Eswatini","Djibouti","Comoros","Cabo Verde","Sao Tome & Principe","Seychelles"];

const southAmerica = ["Argentina","Brazil","Bolivia","Peru","Chile","Colombia","Venezuela","Ecuador","Suriname","Uruguay","Paraguay","Guyana"];

const northAmerica = ["United States of America","Mexico","Canada","Guatemala","Cuba","Haiti","Dominican Republic","Honduras","Nicaragua","El Salvador","Costa Rica","Panama","Jamaica","Trinidad and Tobago","Belize","Bahamas"]

const asia = ["Russia","China","Japan","South Korea","India","Indonesia","Pakistan","Turkey","Israel"]

const oceania = ["Australia","New Zealand"]

const prem = ["Arsenal", "Brentford", "Manchester City", "Liverpool", "Chelsea", "Manchester United", "West Ham", "Arsenal", "Wolves", "Tottenham", "Brighton & Hove Albion", "Southhampton", "Leicester City", "Aston Villa", "Crystal Palace", "Leeds United", "Everton", "Newcastle United", "Norwich City", "Watford", "Burnley"];

const bundes = ["Bayern Munich", "Borussia Dortmund", "Bayer Leverkusen", "RB Leipzig", "Hoffenheim", "SC Freiburg","1. FC Union Berlin","1. FC Koln","1. FSV Mainz 05","Eintracht Frankfurt","Vfl Bochum","Vfl Wolfsburg","M'Gladbach","Hertha BSC","Arminia Bielefeld","Augsburg","VfB Stuttgart","SpVgg G. Furth"];

const laliga = ["Real Madrid","Sevilla","Real Betis","Barcelona","Athletico Madrid","Real Sociedad","Villareal","Athletic Club","Osasuna","Celta Vigo","Rayo Vallecano","Valencia","RCD Espanyol","Elche","Real Mallorca","Getafe","Granada","Alaves","Cadiz","Levante"]

const ligue1 = ["PSG","Olympique de Marseille","Nice","Strasbourg","Rennes","Monaco","Olympique Lyonnais","Lens","Nantes","Lille","Montpellier","Brest","Angers","Reims","Clermont","Troyes","FC Lorient","Saint-Etienne","Metz","Bordeaux"]

const serieA = ["Milan","Inter","Napoli","Juventus","Atalanta","Lazio","Roma","Fiorentina","Hellas Verona","Torino","Empoli","Sassuolo","Bologna","Spezia","Udinese","Sampdoria","Venezia","Cagliari","Genoa","Salernitana"]

if (localStorage.getItem("guess") == null) {
  localStorage.setItem("guess",0)
}
if (localStorage.getItem("gameOver") == null) {
  localStorage.setItem("gameOver","none")
}
if (localStorage.getItem("player1") == null) {
  localStorage.setItem("player1","Player 1")
}
if (localStorage.getItem("player2") == null) {
  localStorage.setItem("player2","Player 2")
}
if (localStorage.getItem("player3") == null) {
  localStorage.setItem("player3","Player 3")
}
if (localStorage.getItem("player4") == null) {
  localStorage.setItem("player4","Player 4")
}
if (localStorage.getItem("player5") == null) {
  localStorage.setItem("player5","Player 5")
}
if (localStorage.getItem("player6") == null) {
  localStorage.setItem("player6","Player 6")
}


statsOpen = false
var gameOver = (localStorage.getItem("gameOver"))
//reset()
document.getElementById("player1").innerHTML = localStorage.getItem("player1")
document.getElementById("player2").innerHTML = localStorage.getItem("player2")
document.getElementById("player3").innerHTML = localStorage.getItem("player3")
document.getElementById("player4").innerHTML = localStorage.getItem("player4")
document.getElementById("player5").innerHTML = localStorage.getItem("player5")
document.getElementById("player6").innerHTML = localStorage.getItem("player6")

const playerAnswers = {}
playerAnswers["3/5/2022"] = "Mohammed Salah"
playerAnswers["3/6/2022"] = "Harry Kane"
playerAnswers["3/7/2022"] = "Sergio Busquets"
playerAnswers["3/8/2022"] = "Hugo Lloris"
playerAnswers["3/9/2022"] = "Paulo Dybala"
playerAnswers["3/10/2022"] = "Joao Cancelo"
playerAnswers["3/11/2022"] = "Wojciech Szczesny"
playerAnswers["3/12/2022"] = "Marquinhos"
playerAnswers["3/13/2022"] = "Kyle Walker"
playerAnswers["3/14/2022"] = "Mikel Oyarzabal"
playerAnswers["3/15/2022"] = "Pierre-Emerick Aubameyang"
playerAnswers["3/16/2022"] = "Lorenzo Insigne"
playerAnswers["3/17/2022"] = "Duvan Zapata"
playerAnswers["3/18/2022"] = "Fernandinho"
playerAnswers["3/19/2022"] = "Kevin Volland"



var randomPlayer = ""
const today = new Date()
const date = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear()
var randomPlayerName = playerAnswers[date]
console.log(randomPlayerName)
for (player of players) {
  if (player.name == randomPlayerName) {
    randomPlayer = player
    break
  }
}
console.log(randomPlayer.name);
determineContinent();
determineLeague();

var firstTime = localStorage.getItem("first_time");
if (firstTime == null) {
  localStorage.setItem("first_time","false");
}

var savedPlayer = localStorage.getItem("randomPlayer")
if (savedPlayer == null || savedPlayer == "undefined") {
  localStorage.setItem("randomPlayer",randomPlayerName)
}
if (savedPlayer != randomPlayerName) {
  localStorage.setItem("randomPlayer",randomPlayerName)
  reset()
}

createBoxes("teamRect")
createBoxes("countryRect")
createBoxes("numberRect")
createBoxes("ratingRect")
createBoxes("positionRect")

function createBoxes(rectName) {
  for(var rectNum = 1; rectNum < 7; rectNum++) {
    var items = localStorage.getItem(rectName+rectNum).split(",")
    console.log(items)
    var rect = document.getElementById(rectName+rectNum)
    rect.style.backgroundColor = items[1]+","+items[2]+","+items[3]
    if(items[0] != "") {
      createText(items[0],rect)
    } else {
      rect.style.backgroundColor = "rgb(143, 141, 141)"
    }
  }
}

night = 0

console.log(document.body.style.height)
resetAtMidnight()

function resetAtMidnight() {
    var now = new Date();
    night = new Date(); 
    night.setDate(new Date().getDate()+1)
    night.setHours(0)
    night.setMinutes(0)
    night.setSeconds(0)
    night.setMilliseconds(0)
    console.log(night.getTime())
    console.log(now.getTime())
    msToMidnight = night.getTime() - now.getTime();
    console.log(msToMidnight)
    setTimeout(function() {
      reset();
      resetAtMidnight();
    }, msToMidnight);
};
function reset() {
  resetRects("teamRect")
  resetRects("countryRect")
  resetRects("ratingRect")
  resetRects("positionRect")
  resetRects("numberRect")
  localStorage.setItem("guess",0)
  localStorage.setItem("gameOver","none")
  localStorage.setItem("player1","Player 1")
  localStorage.setItem("player2","Player 2")
  localStorage.setItem("player3","Player 3")
  localStorage.setItem("player4","Player 4")
  localStorage.setItem("player5","Player 5")
  localStorage.setItem("player6","Player 6")
  localStorage.setItem("date", new Date().getSeconds())
  window.location.reload();
}


updateTime()
var myfunc = setInterval(function() {
  updateTime()
}, 1000)

function updateTime() {
  var now = new Date().getTime();
  var end = night.getTime()
  var timeleft = end - now;
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  if (digits_count(minutes) == 1) {
    minutes = "0"+minutes
  }
  if (digits_count(seconds) == 1) {
    seconds = "0"+seconds
  }
  if (minutes == 0) {
    minutes = "00"
  }
  if (seconds == 0) {
    seconds = "00"
  }
  time.innerHTML = "Next Footble:\n"+hours + ":" + minutes +  ":" + seconds
}

function resetRects(rectName) {
  for (var rectNum = 1; rectNum < 7; rectNum++) {
    localStorage.setItem(rectName+rectNum,"")
  }
}


let inputBox = document.getElementById("inputBox")

let guessButton = document.getElementById("guessButton")

const green = "rgb(25, 125, 14)"
const yellow = "rgb(179, 173, 18)"
const orange = "rgb(189, 118, 19)"
const red = "rgb(189, 19, 19)"
const grey = "rgb(87, 87, 87)"

showWinOrLose(gameOver)

function saveBoxes(rectName) {
  for(var rectNum = 1; rectNum < 7; rectNum++) {
    var rect = document.getElementById(rectName+rectNum)
    var text = ""
    try {
      text = rect.firstChild.innerText
      console.log("success")
    } catch (error) {
    }
    localStorage.setItem((rectName+rectNum),[text,rect.style.backgroundColor])
    
  }
}

document.body.addEventListener("click", function (evt) {
  console.log(evt.target)
})

statsStillClosing = false

document.getElementById("statsDiv").addEventListener("click",function(){
  console.log(statsOpen)
  if (!statsStillClosing) {
    if (statsOpen) {
      document.getElementById("stats").className="fa-solid fa-square-poll-vertical"
      element.style.animation = "hide 1s ease forwards"
      statsStillClosing = true;
      setTimeout(function() {
        removePopupElements()
        statsStillClosing = false
      }, 1000)
      statsOpen = false
    } else {
      document.getElementById("stats").className="fa-solid fa-x"
      showWinOrLose(localStorage.getItem("gameOver"))
      statsOpen = true
    }
  }
})

var finished = true
document.body.style.height = "auto"
const helpDiv = document.getElementById("helpDiv")
helpDiv.parentNode.removeChild(helpDiv)
var helpOpen = false;
showMainScreen()

document.getElementById("help").className="fa-regular fa-circle-question"
document.getElementById("iconDiv").addEventListener("click",function(){
  if (helpOpen) {
    showMainScreen()
    helpDiv.parentNode.removeChild(helpDiv)
    document.getElementById("help").className="fa-regular fa-circle-question"
    document.getElementById("license").style.color = "black"
    helpOpen = false
    helpDiv.style.visibility = "hidden"
  } else {
    hideMainScreen()
    document.body.appendChild(helpDiv)
    document.getElementById("help").className="fa-solid fa-x"
    document.body.style.backgroundColor = "rgb(68, 68, 68)"
    document.getElementById("license").style.color = "white"
    helpOpen = true
    helpDiv.style.visibility = "visible"
  }
})



function showWinOrLose(popup) {
  element.style.visibility = "visible";
  if (popup != "none" && popup != null) {
    reveal.innerHTML = "The player was " + randomPlayer.name + "!"
    element.appendChild(reveal)
    element.appendChild(message)
    element.appendChild(time)
    if (popup == "win") {
      winLoseTitle.innerHTML = "You Win!"
    } else {
      winLoseTitle.innerHTML = "You Lose"
    }
  } else {
    if (guess == 0) {
      winLoseTitle.innerHTML = "You Haven't Played Yet Today!"
    } else {
      winLoseTitle.innerHTML = "You Haven't Finished Yet Today!"
    }
  }
  element.appendChild(share)
  element.style.animation = "drop 0.5s ease forwards"
  document.getElementById("stats").className="fa-solid fa-x"
  statsOpen = true
  var delayInMilliseconds = 250;
  setTimeout(function() {
    document.body.addEventListener("click", hideStats);
  }, delayInMilliseconds);
  saveBoxes("teamRect")
  saveBoxes("countryRect")
  saveBoxes("numberRect")
  saveBoxes("ratingRect")
  saveBoxes("positionRect")
}

hideStats = function(evt) {
  if (!evt.target.classList.contains("noClick")) {
    element.style.animation = "hide 1s ease forwards"
    statsStillClosing = true
    setTimeout(function() {
      removePopupElements()
      statsStillClosing = false
    }, 1000)
    statsOpen = false
    document.getElementById("stats").className="fa-solid fa-square-poll-vertical"
    document.body.removeEventListener("click",hideStats)
  }
}

copyOpen = false

shareClick = function (evt) {
  
  if(!copyOpen) {
    console.log(evt)
    var text = createShareText()
    if (navigator.share) {
      navigator.share({
        title: 'Footble',
        text: text,
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    }
      element.appendChild(copy)
      document.getElementById("copyText").style.whiteSpace = "pre-line"
      document.getElementById("copyText").innerHTML = text
      document.getElementById("copyText").style.color = "white"
      copyOpen = true
      setTimeout(function() {
        document.body.addEventListener("click", hideCopy)
      }, 250)
  }
}


shareButton.addEventListener("click",shareClick)

hideCopy = function (evt) {
  if (!evt.target.classList.contains("keepCopy")) {
    copyOpen = false
    copy.parentNode.removeChild(copy)
    document.body.removeEventListener("click", hideCopy)
  }
}

successShown = false

copyButton.addEventListener("click", function () {
  const text = document.getElementById("copyText").innerHTML
  var input = document.createElement('textarea');
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  if (!successShown) {
    successShown = true
    const success = document.createElement("p")
    success.innerHTML = "Success!"
    success.id = "success"
    document.getElementById("buttonHolder").appendChild(success)
    setTimeout( function() {
      success.parentNode.removeChild(success)
      successShown = false
    }, 1000)
  }
})


function hideMainScreen() {
  document.getElementById("mainDiv").style.opacity = 0;
  document.getElementById("linkDiv").style.opacity = 0;
  document.getElementById("license").style.opacity = 0;
  document.getElementById("coffee").style.opacity = 0;
  document.getElementById("statsDiv").style.opacity = 0;
  document.getElementById("stats").className="fa-solid fa-square-poll-vertical"
  statsOpen = false

}
function showMainScreen() {
  document.getElementById("mainDiv").style.opacity = 1;
  document.getElementById("linkDiv").style.opacity = 1;
  document.getElementById("license").style.opacity = 1;
  document.getElementById("coffee").style.opacity = 1;
  document.getElementById("statsDiv").style.opacity = 1;
  document.body.style.backgroundColor = "rgba(159,249,176,1)"
}

showingIncorrect = false

guessButton.addEventListener("click",function() {
  
  if (finished) {
    finished = false
    if (gameOver == "none") {
      if (guess <= 6) {
        const playerName = inputBox.value
        var delayInMilliseconds = 3600;
        setTimeout(function() {
          if (randomPlayer.name == playerName) {
            showWinOrLose("win")
            gameOver = "win"
            localStorage.setItem("gameOver",gameOver)
          } 
          else if (guess == 6) {
            showWinOrLose("lose")
            gameOver = "lose"
            localStorage.setItem("gameOver",gameOver)
          }
        }, delayInMilliseconds);
      }
      var found = false;
      var guessedPlayer;
      for (player of players) {
        if (player.name == inputBox.value) {
          found = true;
          guessedPlayer = player
          break;
        }
      }
      if (found == true) {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
        guess+=1;
        localStorage.setItem("guess",guess)
        document.getElementById("player"+guess).innerHTML = guessedPlayer.name;
        localStorage.setItem("player"+guess,guessedPlayer.name)
        compareData(guessedPlayer)
        inputBox.value = ""
      } else {
        finished = true
        if (!showingIncorrect) {
          showingIncorrect = true
          const incorrect = document.createElement("p")
          incorrect.innerHTML = "That player is not in our list."
          incorrect.id = "incorrect"
          document.getElementById("guessHolder").appendChild(incorrect)
          setTimeout( function() {
            incorrect.parentNode.removeChild(incorrect)
            showingIncorrect = false
          }, 3000)
        }
      }
    } else {
      finished = true
      if (!showingIncorrect) {
        showingIncorrect = true
        console.log("hello")
        const incorrect = document.createElement("p")
        incorrect.innerHTML = "You have already played for today."
        incorrect.id = "incorrect"
        document.getElementById("guessHolder").appendChild(incorrect)
        setTimeout( function() {
          incorrect.parentNode.removeChild(incorrect)
          showingIncorrect = false
        }, 3000)
      }
    }
  }
})

function compareData(player) {
  const yourTeam = player.team;
  var delayInMilliseconds = 0;
  setTimeout(function() {
    compareTeam(yourTeam);
  }, delayInMilliseconds);

  const yourCountry = player.country;
  delayInMilliseconds = 600;
  setTimeout(function() {
    compareCountry(yourCountry);
  }, delayInMilliseconds);

  const yourNumber = player.number;
  delayInMilliseconds = 1200;
  setTimeout(function() {
    compareNumber(yourNumber);
  }, delayInMilliseconds);

  const yourRating = player.rating;
  delayInMilliseconds = 1800;
  setTimeout(function() {
    compareRating(yourRating);
  }, delayInMilliseconds);

  const yourPosition = player.position;
  delayInMilliseconds = 2400;
  setTimeout(function() {
    comparePosition(yourPosition)
  }, delayInMilliseconds);

  setTimeout(function() {
    saveBoxes("teamRect")
    saveBoxes("countryRect")
    saveBoxes("numberRect")
    saveBoxes("ratingRect")
    saveBoxes("positionRect")
    finished = true
  }, 3600)
}

function createText(text,rect) {
  const textBox = document.createElement("p")
  textBox.innerText = text
  rect.appendChild(textBox)
  console.log(rect.childElementCount)
  textBox.id = "boxText"
}

const rotateBox = "rotateBox 1.5s ease forwards"

function comparePosition(yourPosition) {
  const rect = document.getElementById("positionRect"+guess)
  rect.style.animation = rotateBox
  setTimeout(function() {
    if (yourPosition == randomPlayer.position) {
      rect.style.backgroundColor = green;
      createText("Correct Position:\n"+yourPosition,rect)
    } else {
      rect.style.backgroundColor = grey;
      createText("Incorrect Position:\nNot a "+yourPosition,rect)
    }
  }, 100)
}

function compareRating(yourRating) {
  difference = (Math.abs(yourRating-randomPlayer.rating));
  const rect = document.getElementById("ratingRect"+guess)
  rect.style.animation = rotateBox
  setTimeout(function() {
    if (difference == 0) {
      rect.style.backgroundColor = green;
      createText(yourRating+":\nCorrect FUT Rating",rect)
    } else if (difference == 1) {
      rect.style.backgroundColor = yellow;
      createText(yourRating+":\nWithin 1 Rating Away",rect)
    } else if (difference < 5) {
       rect.style.backgroundColor = orange;
       createText(yourRating+":\n2-4 Away",rect)
    } else if (difference < 8) {
       rect.style.backgroundColor = red;
       createText(yourRating+":\n5-7 away",rect)
    } else {
      rect.style.backgroundColor = grey;
      createText(yourRating+":\nFar Away",rect)
    }
  }, 100)
}

function compareNumber(yourNumber) {
  difference = (Math.abs(yourNumber-randomPlayer.number));
  const rect = document.getElementById("numberRect"+guess)
  rect.style.animation = rotateBox
  setTimeout(function() {
    if (yourNumber == randomPlayer.number) {
      rect.style.backgroundColor = green;
      createText(yourNumber+":\nCorrect Jersey Number",rect)
    } else if (difference == 1) {
      rect.style.backgroundColor = yellow;
      createText(yourNumber+":\nWithin 1 Number Away",rect)
    } else if (difference < 5) {
       rect.style.backgroundColor = orange;
       createText(yourNumber+":\n2-4 Away",rect)
    } else if (difference < 8) {
       rect.style.backgroundColor = red;
       createText(yourNumber+":\n5-7 Away",rect)
    } else {
      rect.style.backgroundColor = grey;
      createText(yourNumber+":\nFar Away",rect)
    }
  }, 100)
}

function compareCountry(yourCountry) {
  console.log(yourCountry);
  const rect = document.getElementById("countryRect"+guess)
  rect.style.animation = rotateBox
  setTimeout(function() {
    if (yourCountry == randomPlayer.country) {
      rect.style.backgroundColor = green;
      createText("Correct Country",rect)
  
    } else {
      var correct = false;
      switch (randomPlayer.continent) {
        case "europe":
          for (country of europe) {
            if (yourCountry == country) {
              correct = true;
              break;
            }
          }
          break;
        case "africa":
          for (country of africa) {
            if (yourCountry == country) {
              correct = true;
              break;
            }
          }
          break;
        case "southAmerica":
          for (country of southAmerica) {
            if (yourCountry == country) {
              correct = true;
              break;
            }
          }
          break;
        case "asia":
          for (country of asia) {
            if (yourCountry == country) {
              correct = true;
              break;
            }
          }
          break;
        case "northAmerica":
          for (country of northAmerica) {
            if (yourCountry == country) {
              correct = true;
              break;
            }
          }
          break;
        case "oceania":
          for (country of oceania) {
            if (yourCountry == country) {
              correct = true;
              break;
            }
          }
          break;
      }
  
      if (correct) {
        rect.style.backgroundColor = yellow;
        createText("Correct Continent",rect)
      } else {
        rect.style.backgroundColor = grey;
        createText("Incorrect Continent",rect)
      }
    }
  }, 100)
}

function compareTeam(yourTeam) {
  console.log(yourTeam);
  const rect = document.getElementById("teamRect"+guess)
  rect.style.animation = rotateBox
  setTimeout(function() {
    if (yourTeam == randomPlayer.team) {
      rect.style.backgroundColor = green;
      createText("Correct Team",rect)
    } else {
      var correct = false;
      switch (randomPlayer.league) {
        case "prem":
          for (team of prem) {
            if (yourTeam == team) {
              correct = true;
              break;
            }
          }
          break;
        case "bundes":
          for (team of bundes) {
            if (yourTeam == team) {
              correct = true;
              break;
            }
          }
          break;
        case "serieA":
          for (team of serieA) {
            if (yourTeam == team) {
              correct = true;
              break;
            }
          }
          break;
        case "ligue1":
          for (team of ligue1) {
            if (yourTeam == team) {
              correct = true;
              break;
            }
          }
          break;
        case "laliga":
          for (team of laliga) {
            if (yourTeam == team) {
              correct = true;
              break;
            }
          }
          break;
      }
  
      if (correct) {
        rect.style.backgroundColor = yellow;
        createText("Correct League",rect)
      } else {
        rect.style.backgroundColor = grey;
        createText("Incorrect League",rect)
      }
    }
  }, 100)
}

function determineContinent() {
  for(country of europe) {
    if (country == randomPlayer.country) {
      randomPlayer.continent = "europe";
    }
  }
  for(country of africa) {
    if (country == randomPlayer.country) {
      randomPlayer.continent = "africa";
    }
  }
  for(country of southAmerica) {
    if (country == randomPlayer.country) {
      randomPlayer.continent = "southAmerica";
    }
  }

  for(country of northAmerica) {
    if (country == randomPlayer.country) {
      randomPlayer.continent = "northAmerica";
    }
  }
  for(country of asia) {
    if (country == randomPlayer.country) {
      randomPlayer.continent = "asia";
    }
  }
  for(country of oceania) {
    if (country == randomPlayer.country) {
      randomPlayer.continent = "oceania";
    }
  }
}

function determineLeague() {
  for(team of prem) {
    if (team == randomPlayer.team) {
      randomPlayer.league = "prem";
    }
  }
  for(team of bundes) {
    if (team == randomPlayer.team) {
      randomPlayer.league = "bundes";
    }
  }
  for(team of laliga) {
    if (team == randomPlayer.team) {
      randomPlayer.league = "laliga";
    }
  }
  for(team of ligue1) {
    if (team == randomPlayer.team) {
      randomPlayer.league = "ligue1";
    }
  }
  for(team of serieA) {
    if (team == randomPlayer.team) {
      randomPlayer.league = "serieA";
    }
  }
}

function digits_count(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

function createShareText() {
  var text = ""
  var today = new Date()
  var date = today.getMonth()+1 + "/" + today.getDate()
  text += "Footble, "+date+"\n"
  for (let i = 1; i < guess+1; i++) {
    text += getEmoji(document.getElementById("teamRect"+i))
    text += getEmoji(document.getElementById("countryRect"+i))
    text += getEmoji(document.getElementById("numberRect"+i))
    text += getEmoji(document.getElementById("ratingRect"+i))
    text += getEmoji(document.getElementById("positionRect"+i))
    text += "\n"
  }
  text += "www.footble-game.com"
  return text
}

function getEmoji(rect) {
  const backgroundColor = rect.style.backgroundColor
  if (backgroundColor == green) {
    return "🟩"
  } else if (backgroundColor == yellow) {
    return "🟨"
  } else if (backgroundColor == red) {
    return "🟥"
  } else if (backgroundColor == orange) {
    return "🟧"
  } else if (backgroundColor == grey) {
    return "⬛️"
  }
}

