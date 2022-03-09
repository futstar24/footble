const europe = ["England","Wales","Ireland","France","Germany","Belgium","Poland","Spain","Portugal","Italy","Netherlands","Greece","Finland","Lithuania","Slovakia","Malta","Monaco","Cyprus","Luxembourg","Montenegro","Slovenia","Scotland","Kosovo","Latvia","Estonia","Andorra","Vatican City","Albania","Armenia","Austria","Azerbaijan","Belarus","Bosnia and Herzegovina","Bulgaria","Croatia","Czechia","Denmark","Georgia","Hungary","Iceland","Kazakhstan","Liechtenstein","Moldova","North Macedonia","Norway","Romania","Russia","San Marino","Serbia","Sweden","Switzerland","Turkey","Ukraine"];

const africa = ["Egypt","Algeria","Mali","Senegal","Nigeria","Ethiopia","Democratic Republic of the Congo","Tanzania","South Africa","Kenya","Uganda","Sudan","Morocco","Angola","Mozambique","Ghana","Madagascar","Cameroon","Ivory Coast","Niger","Burkina Faso","Malawi","Zambia","Chad","Somalia","Zimbabwe","Guinea","Rwanda","Benin","Burundi","Tunisia","South Sudan","Togo","Sierra Leone","Libya","Congo","Liberia","Central African Republic","Mauritania","Eritrea","Namibia","Gambia","Botswana","Gabon","Lesotho","Guinea-Bissau","Equatorial Guinea","Mauritius","Eswatini","Djibouti","Comoros","Cabo Verde","Sao Tome & Principe","Seychelles"];

const southAmerica = ["Argentina","Brazil","Bolivia","Peru","Chile","Colombia","Venezuela","Ecuador","Suriname","Uruguay","Paraguay","Guyana"];

const northAmerica = ["United States of America","Mexico","Canada","Guatemala","Cuba","Haiti","Dominican Republic","Honduras","Nicaragua","El Salvador","Costa Rica","Panama","Jamaica","Trinidad and Tobago","Belize","Bahamas"]

const asia = ["Russia","China","Japan","South Korea","India","Indonesia","Pakistan","Turkey","Israel"]

const oceania = ["Australia","New Zealand"]

const prem = ["Arsenal", "Brentford", "Manchester City", "Liverpool", "Chelsea", "Manchester United", "West Ham", "Arsenal", "Wolves", "Tottenham", "Brighton & Hove Albion", "Southhampton", "Leicester City", "Aston Villa", "Crystal Palace", "Leeds United", "Everton", "Newcastle United", "Norwich City", "Watford", "Burnley"];

const bundes = ["Bayern Munich", "Borussia Dortmund", "Bayer Leverkusen", "RB Leipzig", "Hoffenheim", "SC Freiburg","1. FC Union Berlin","1. FC Koln","1. FSV Mainz 05","Eintracht Frankfurt","Vfl Bochum","Vfl Wolfsburg","M'Gladbach","Hertha BSC","Arminia Bielefeld","Augsburg","VfB Stuttgart","SpVgg G. Furth"];

const laliga = ["Real Madrid","Sevilla","Real Betis","Barcelona","Athletico Madrid","Real Sociedad","Villareal","Athletic Club","Osasuna","Celta Vigo","Rayo Vallecano","Valencia","RCD Espanyol","Elche","Real Mallorca","Getafe","Granada","Alaves","Cadiz","Levante"]

const ligue1 = ["PSG","Olympique de Marseille","Nice","Strasbourg","Rennes","AS Monaco","Olympique Lyonnais","Lens","Nantes","Lille","Montpellier","Brest","Angers","Reims","Clermont","Troyes","FC Lorient","Saint-Etienne","Metz","Bordeaux"]

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
playerAnswers["3/11/2022"] = "Olivier Giroud"
playerAnswers["3/12/2022"] = "Marquinhos"
playerAnswers["3/13/2022"] = "Kyle Walker"


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
if (savedPlayer == null) {
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
    }
  }
}



console.log(document.body.style.height)
resetAtMidnight()

function resetAtMidnight() {
    var now = new Date();
    let night = new Date(); 
    night.setDate(new Date().getDate()+1)
    night.setHours(0)
    night.setMinutes(0)
    night.setSeconds(0)
    night.setMilliseconds(0)
    console.log(night.getTime())
    console.log(now.getTime())
    var msToMidnight = night.getTime() - now.getTime();
    console.log(msToMidnight)
    setTimeout(function() {
      console.log("this actually worked")
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

function resetRects(rectName) {
  for (var rectNum = 1; rectNum < 7; rectNum++) {
    localStorage.setItem(rectName+rectNum,"")
  }
}


var guess = parseInt(localStorage.getItem("guess"));

let inputBox = document.getElementById("inputBox")

let guessButton = document.getElementById("guessButton")

const green = "rgb(10, 191, 16)"
const yellow = "rgb(247, 247, 15)"
const orange = "rgb(191, 119, 10)"
const red = "rgb(191, 10, 10)"
const grey = "rgb(145, 144, 141)"

var gameOver = (localStorage.getItem("gameOver"))

if (gameOver != "none") {
  showWinOrLose(gameOver)
}

function saveBoxes(rectName) {
  for(var rectNum = 1; rectNum < 7; rectNum++) {
    var rect = document.getElementById(rectName+rectNum)
    var text = ""
    try {
      text = rect.firstChild.innerText
      console.log("success")
    } catch (error) {
    }
    console.log(text)
    localStorage.setItem((rectName+rectNum),[text,rect.style.backgroundColor])
    console.log(localStorage.getItem((rectName+rectNum)))
    
  }
}

document.body.addEventListener("click", function (evt) {
  console.log(evt.target)
})

function showWinOrLose(popup) {
  element = document.getElementById(popup)
  element.style.visibility = "visible";
  document.getElementById("reveal"+popup).innerText = "The player was " + randomPlayer.name + "!";
  element.style.animation = "drop 0.5s ease forwards"
  var delayInMilliseconds = 250;
  setTimeout(function() {
    document.body.addEventListener("click", function (evt) {
      if (evt.target.id != "popupElement" && evt.target.id != "winLoseTitle" && evt.target.id != ("reveal"+popup) && element.style.visibility == "visible") {
        console.log("working")
        element.style.animation = "hide 1s ease forwards"
        document.body.removeEventListener("click", arguments.callee,false)
      }
      
    });
  }, delayInMilliseconds);
  saveBoxes("teamRect")
  saveBoxes("countryRect")
  saveBoxes("numberRect")
  saveBoxes("ratingRect")
  saveBoxes("positionRect")
}

var finished = true
document.body.style.height = "auto"
const helpDiv = document.getElementById("helpDiv")
helpDiv.parentNode.removeChild(helpDiv)
var helpOpen = false;
document.getElementById("mainDiv").style.opacity = 1;
document.getElementById("linkDiv").style.opacity = 1;
document.getElementById("license").style.opacity = 1;
document.getElementById("coffee").style.opacity = 1;


document.getElementById("help").className="fa-regular fa-circle-question"
document.getElementById("iconDiv").addEventListener("click",function(){
  if (helpOpen) {
    document.getElementById("mainDiv").style.opacity = 1;
    document.getElementById("linkDiv").style.opacity = 1;
    document.getElementById("license").style.opacity = 1;
    document.getElementById("coffee").style.opacity = 1;
    helpDiv.parentNode.removeChild(helpDiv)
    document.getElementById("help").className="fa-regular fa-circle-question"
    document.body.style.backgroundColor = "white"
    document.getElementById("license").style.color = "black"
    helpOpen = false
    helpDiv.style.visibility = "hidden"
  } else {
    document.getElementById("mainDiv").style.opacity = 0;
    document.getElementById("linkDiv").style.opacity = 0;
    document.getElementById("license").style.opacity = 0;
    document.getElementById("coffee").style.opacity = 0;
    document.body.appendChild(helpDiv)
    document.getElementById("help").className="fa-solid fa-x"
    document.body.style.backgroundColor = "rgb(68, 68, 68)"
    document.getElementById("license").style.color = "white"
    helpOpen = true
    helpDiv.style.visibility = "visible"
  }
})

guessButton.addEventListener("click",function() {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  });
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
        guess+=1;
        localStorage.setItem("guess",guess)
        document.getElementById("player"+guess).innerHTML = guessedPlayer.name;
        localStorage.setItem("player"+guess,guessedPlayer.name)
        compareData(guessedPlayer)
        inputBox.value = ""
      } else {
        finished = true
        alert("That player is not found in our list.")
      }
    } else {
      alert("You have already played for today.")
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
    } else if (difference < 6) {
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

