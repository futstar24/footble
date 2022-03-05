class Player {
    constructor(name, country, team, rating, number, position) {
      this.name = name;
      this.country = country;
      this.team = team
      this.rating = rating
      this.number = number
      this.position = position
    }
  }
  
  function createPlayers() {
    const players = [new Player("Kevin De Bruyne","Belgium","Manchester City",91,17,"Midfielder"),new Player("Mohammed Salah","Egypt","Liverpool",89,11,"Forward"),new Player("Robert Lewandowski","Poland","Bayern Munich",92,9,"Forward"),new Player("Neymar Jr.","Brazil","PSG",91,10,"Forward"),new Player("Lionel Messi","Argentina","PSG",93,30,"Forward"),new Player("Virgil Van Dijk","Netherlands","Liverpool",89,4,"Defender"),new Player("Paulo Dybala","Argentina","Juventus",87,10,"Forward"),new Player("Karim Benzema","France","Real Madrid",89,9,"Forward"),new Player("Olivier Giroud","France","Milan",79,9,"Forward"), new Player("Cristiano Ronaldo","Portugal","Manchester United",91,7,"Forward"), new Player("Romelu Lukaku","Belgium","Chelsea",88,9,"Forward"), new Player("Sadio Mane","Senegal","Liverpool",89,10,"Forward"), new Player("Kylian Mbappe","France","PSG",90,7,"Forward"), new Player ("Zlatan Ibrahimovic","Sweden","Milan",84,11,"Forward"), new Player("Eden Hazard","Belgium","Real Madrid",85,7,"Forward"), new Player("Harry Kane","England","Tottenham",90,10,"Forward"), new Player("N'golo Kante","France","Chelsea",90,7,"Midfielder"), new Player("Raheem Sterling","England","Manchester City",88,7,"Forward"), new Player("Giorgio Chiellini","Italy","Juventus",86,3,"Defender"), new Player("Sergio Ramos","Spain","PSG",88,4,"Defender"), new Player("Sergio Busquets","Spain","Barcelona",86,5,"Midfielder"), new Player("Joao Cancelo","Portugal","Manchester City",86,27,"Defender"), new Player("Alisson Becker","Brazil","Liverpool",89,1,"Goalkeeper"), new Player("Marquinhos","Brazil","PSG",87,5,"Defender"), new Player("David Alaba","Austria","Real Madrid",84,4,"Defender"),new Player("Alejandro Gomez","Argentina","Sevilla",85,24,"Midfielder"),new Player("Jules Kounde","France","Sevilla",83,23,"Defender"), new Player("Thiago Silva","Brazil","Chelsea",85,6,"Defender"), new Player("Carvajal","Spain","Real Madrid",85,2,"Defender"), new Player("Jorginho","Italy","Chelsea",85,5,"Midefielder"), new Player("Marco Reus","Germany","Borussia Dortmund",85,11,"Midfielder"), new Player("Eden Hazard",85,7,"Forward"), new Player("Kyle Walker","England","Manchester City",85,2,"Defender"), new Player("Ilkay Gundogan","Germany","Manchester City",85,8,"Midfielder"), new Player("Lauturo Martinez","Argentina","Inter",85,10,"Forward"), new Player("Stefan de Vrig","Netherlands","Inter",85,6,"Defender"), new Player("Koke","Spain","Athletio Madrid",85,6,"Midfielder"), new Player("Antoine Griezmann","France","Athletico Madrid",85,8,"Forward"), new Player("Achraf Hakimi","Morocco","PSG",85,2, "Defender"), new Player("David Silva","Spain","Real Sociedad",85,21,"Midfielder"), new Player("Memphis Depay","Netherlands","Barcelona",85,9,"Forward"), new Player("Mikel Oyarzabal","Spain","Real Sociedad",85,10,"Forward"), new Player("Yann Sommer","Switzerland","M'Gladbach",85,1,"Goalkeeper"), new Player("Serge Gnabry","Germany","Bayern Munich",85,7,"Forward")];
    console.log(players.length)
    return players;
  }
  
  function createNameList() {
    var nameList = [];
    for (player of players) {
      nameList.push(player.name)
    }
    return nameList
  }
  
  