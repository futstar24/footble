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
    const players = [new Player("Kevin De Bruyne","Belgium","Manchester City",91,17,"Midfielder"),new Player("Mohammed Salah","Egypt","Liverpool",90,11,"Forward"),new Player("Robert Lewandowski","Poland","Barcelona",91,9,"Forward"),new Player("Neymar Jr.","Brazil","PSG",89,10,"Forward"),new Player("Lionel Messi","Argentina","PSG",91,30,"Forward"),new Player("Virgil Van Dijk","Netherlands","Liverpool",90,4,"Defender"),new Player("Paulo Dybala","Argentina","Roma",86,21,"Forward"),new Player("Karim Benzema","France","Real Madrid",91,9,"Forward"), new Player("Cristiano Ronaldo","Portugal","Manchester United",90,7,"Forward"), new Player("Romelu Lukaku","Belgium","Inter",86,9,"Forward"), new Player("Sadio Mane","Senegal","Bayern Munich",89,17,"Forward"), new Player("Eden Hazard","Belgium","Real Madrid",85,7,"Forward"), new Player("Harry Kane","England","Tottenham",89,10,"Forward"), new Player("N'golo Kante","France","Chelsea",89,7,"Midfielder"), new Player("Raheem Sterling","England","Chelsea",88,7,"Forward"), new Player("Giorgio Chiellini","Italy","Juventus",86,3,"Defender"), new Player("Sergio Ramos","Spain","PSG",88,4,"Defender"), new Player("Sergio Busquets","Spain","Barcelona",86,5,"Midfielder"), new Player("Joao Cancelo","Portugal","Manchester City",88,7,"Defender"), new Player("Alisson Becker","Brazil","Liverpool",89,1,"GK"), new Player("Marquinhos","Brazil","PSG",88,5,"Defender"), new Player("David Alaba","Austria","Real Madrid",84,4,"Defender"),new Player("Alejandro Gomez","Argentina","Sevilla",85,24,"Midfielder"),new Player("Jules Kounde","France","Sevilla",83,23,"Defender"), new Player("Thiago Silva","Brazil","Chelsea",85,6,"Defender"), new Player("Dani Carvajal","Spain","Real Madrid",85,2,"Defender"), new Player("Jorginho","Italy","Chelsea",85,5,"Midfielder"), new Player("Marco Reus","Germany","Borussia Dortmund",85,11,"Midfielder"), new Player("Kyle Walker","England","Manchester City",85,2,"Defender"), new Player("Ilkay Gundogan","Germany","Manchester City",85,8,"Midfielder"), new Player("Lauturo Martinez","Argentina","Inter",86,10,"Forward"), new Player("Stefan de Vrig","Netherlands","Inter",85,6,"Defender"), new Player("Koke","Spain","Athletico Madrid",85,6,"Midfielder"), new Player("Antoine Griezmann","France","Athletico Madrid",85,8,"Forward"), new Player("Achraf Hakimi","Morocco","PSG",85,2, "Defender"), new Player("David Silva","Spain","Real Sociedad",85,21,"Midfielder"), new Player("Memphis Depay","Netherlands","Barcelona",85,9,"Forward"), new Player("Mikel Oyarzabal","Spain","Real Sociedad",85,10,"Forward"), new Player("Yann Sommer","Switzerland","M'Gladbach",85,1,"GK"), new Player("Serge Gnabry","Germany","Bayern Munich",85,7,"Forward"), new Player("Peter Gulacsi","Hungary","RB Leipzig",85,1,"GK"), new Player("Leonardo Bonucci","Italy","Juventus",85,19,"Defender"), new Player("Wilfred Ndidi","Nigeria","Leicester City",85,25,"Midfielder"), new Player("Kasper Schmeichel","Denmark","Leicester City",85,1,"GK"), new Player("Sergej Milinkovic-Savic","Serbia","Lazio",86,21,"Midfielder"), new Player("Marcus Rashford","England","Manchester United",85,10,"Midfielder"), new Player("Edison Cavani","Uruguay","Manchester United",85,21,"Forward"), new Player("Matthijs De Ligt","Netherlands","Juventus",85,4,"Defender"), new Player("Pierre-Emerick Aubameyang","Gabon","Barcelona",85,25,"Forward"), new Player("Roberto Firmino","Brazil","Liverpool",85,9,"Forward"), new Player("Milan Skriniar","Slovakia","Inter",86,37,"Defender"), new Player("Mats Hummels","Germany","Borussia Dortmund",86,15,"Defender"), new Player("Marcos Llorente","Spain","Athletico Madrid",86,14,"Midfielder"), new Player("Riyad Mahrez","Algeria","Manchester City",86,26,"Forward"), new Player("Samir Handanovic","Slovenia","Inter",86,1,"GK"), new Player("Bernardo Silva","Portugal","Manchester City",88,20,"Midfielder"), new Player("Aymeric Laporte","Spain","Manchester City",86,14,"Defender"), new Player("Rodri","Spain","Manchester City",87,16,"Midfielder"), new Player("Kylian Mbappe","France","PSG",91,7,"Forward"), new Player("Jan Oblak","Slovenia","Athletico Madrid",89,13,"GK"), new Player("Manuel Neuer","Germany","Bayern Munich",90,1,"GK"), new Player("Marc-Andre ter Stegen","Germany","Barcelona",88,1,"GK"), new Player("Heung Min Son","South Korea","Tottenham",89,7,"Forward"), new Player("Ederson","Brazil","Manchester City",89,31,"GK"), new Player("Casemiro","Brazil","Manchester United",89,18,"Midfielder"), new Player("Thibaut Courtois","Belgium","Real Madrid",90,1,"GK"), new Player("Joshua Kimmich","Germany","Bayern Munich",89,6,"Midfielder"), new Player("Gianluigi Donnarumma","Italy","PSG",88,50,"GK"), new Player("Toni Kroos","Germany","Real Madrid",88,8,"Midfielder"), new Player("Erling Haaland","Norway","Manchester City",88,9,"Forward"), new Player("Luis Suarez","Uruguay","Athletico Madrid",88,9,"Forward"), new Player("Bruno Fernandes","Portugal","Manchester United",86,18,"Midfielder"), new Player("Keylor Navas","Costa Rica","PSG",88,1,"GK"), new Player("Ciro Immobile","Italy","Lazio",86,17,"Forward"), new Player("Wojciech Szczesny","Poland","Juventus",87,1,"GK"), new Player("Thomas Muller","Germany","Bayern Munich",87,25,"Midfielder"), new Player("Leon Goretzka","Germany","Bayern Munich",87,8,"Midfielder"), new Player("Frenkie De Jong","Netherlands","Barcelona",87,21,"Midfielder"), new Player("Sergio Aguero","Argentina","Barcelona",87,19,"Forward"), new Player("Angel Di Maria","Argentina","PSG",87,11,"Forward"), new Player("Marco Verratti","Italy","PSG",87,6,"Midfielder"), new Player("Hugo Lloris","France","Tottenham",87,1,"GK"), new Player("Jadon Sancho","England","Manchester United",87,25,"Midfielder"), new Player("Paul Pogba","France","Juventus",87,6,"Midfielder"), new Player("Jordi Alba","Spain","Barcelona",86,18,"Defender"),new Player("Daniel Parejo","Spain","Villarreal",86,5,"Midfielder"),new Player("Gerard Moreno","Spain","Villarreal",86,7,"Forward"),new Player("Kingsley Coman","France","Bayern Munich",86,11,"Midfielder"),new Player("Koen Casteels","Belgium","Vfl Wolfsburg",86,1,"GK"),new Player("Lorenzo Insigne","Italy","Napoli",86,24,"Forward"),new Player("Fabinho","Brazil","Liverpool",87,3,"Midfielder"),new Player("Raphael Varane","France","Manchester United",86,19,"Defender"),new Player("Kalidou Koulibaly","Senegal","Chelsea",87,26,"Defender"),new Player("Thiago","Spain","Liverpool",86,6,"Midfielder"),new Player("Jamie Vardy","England","Leicester City",86,9,"Forward"),new Player("Ruben Dias","Portugal","Manchester City",88,3,"Defender"),new Player("Luka Modric","Croatia","Real Madrid",88,10,"Midfielder"),new Player("Andrew Robertson","Scotland","Liverpool",87,26,"Defender"),new Player("Trent Alexander-Arnold","England","Liverpool",87,66,"Defender"), new Player("Nicolo Barella","Italy","Inter",86,23,"Midfielder"), new Player("Theo Hernandez","France","Milan",84,19,"Defender"), new Player("Timo Werner","Germany","RB Leipzig",84,11,"Forward"), new Player("Kai Havertz","Germany","Chelsea",84,29,"Midfielder"), new Player("Hakim Ziyech","Morocco","Chelsea",84,22,"Forward"), new Player("Jose Gimenez","Uruguay","Athletico Madrid",84,2,"Defender"), new Player("Yannick Carrasco","Belgium","Athletico Madrid",84,21,"Midfielder"), new Player("Guerreiro","Portugal","Borussia Dortmund",84,13,"Defender"), new Player("Jack Grealish","England","Manchester City",84,10,"Forward"), new Player("Phil Foden","England","Manchester City",84,47,"Midfielder"), new Player("Marcelo Brozovich","Croatia","Inter",84,77,"Midfielder"), new Player("Zlatan Ibrahimovic","Sweden","Milan",84,11,"Forward"), new Player("Mike Maignan","France","Milan",87,16,"GK"), new Player("Franck Kessie","Ivory Coast","Barcelona",84,79,"Midfielder"), new Player("Kieran Trippier","England","Newcastle",84,15,"Defender"), new Player("Stefan Savic","Montenegro","Athletico Madrid",84,15,"Defender"), new Player("Felipe","Brazil","Athletico Madrid",84,18,"Defender"), new Player("Georginio Wijnaldum","Netherlands","PSG",84,18,"Midfielder"), new Player("Matthais Ginter","Germany","M'Gladbach",84,28,"Defender"), new Player("Marcel Sabitzer","Austria","Bayern Munich",84,18,"Midfielder"), new Player("Filip Kostic","Serbia","Frankfurt",84,10,"Midfielder"), new Player("Leroy Sane","Germany","Bayern Munich",84,10,"Midfielder"), new Player("Andre Silva","Portugal","RB Leipzig",84,33,"Forward"), new Player("Luke Shaw","England","Manchester United",84,23,"Defender"), new Player("Dries Mertens","Belgium","Napoli",84,14,"Forward"), new Player("Luis Alberto","Spain","Lazio",84,10,"Midfielder"), new Player("Josip Ilicic","Slovenia","Atalanta",84,72,"Forward"), new Player("Wissam Ben Yedder","France","AS Monaco",84,10,"Forward"), new Player("Jordan Henderson","England","Liverpool",84,14,"Midfielder"), new Player("Jesus Navas","Spain","Sevilla",84,16,"Defender"), new Player("Gerard Pique","Spain","Barcelona",84,3,"Defender"), new Player("Fernando","Brazil","Sevilla",84,25,"Midfielder"),new Player("Marco Asensio","Spain","Real Madrid",83,11,"Forward"),new Player("Antonio Rudiger","Germany","Real Madrid",87,22,"Defender"),new Player("Mateo Kovacic","Croatia","Chelsea",83,8,"Midfielder"),new Player("Edouard Mendy","Senegal","Chelsea",83,16,"GK"),new Player("Mason Mount","England","Chelsea",83,19,"Midfielder"),new Player("Cesar Azpilicueta","Spain","Chelsea",83,28,"Defender"),new Player("Joao Felix","Portugal","Athletico Madrid",83,7,"Forward"),new Player("Angel Correa","Argentina","Athletico Madrid",83,10,"Forward"),new Player("Axel Witsel","Belgium","Borussia Dortmund",83,28,"Midfielder"),new Player("Ferland Mendy","France","Real Madrid",83,23,"Defender"),new Player("Federico Valverde","Uruguay","Real Madrid",83,15,"Midfielder"),new Player("Fernandinho","Brazil","Manchester City",83,25,"Midfielder"),new Player("Gabriel Jesus","Brazil","Manchester City",83,9,"Forward"),new Player("Simon Kjaer","Denmark","Milan",83,24,"Defender"),new Player("Mauro Icardi","Argentina","PSG",83,9,"Forward"),new Player("Presnel Kimpembe","France","PSG",83,3,"Defender"),new Player("Lukas Hradecky","Finland","Bayer Leverkusen",83,1,"GK"), new Player("Iago Aspas","Spain","Celta Vigo",84,10,"Forward"),new Player("David De Gea","Spain","Manchester United",87,1,"GK"),new Player("Lucas Digne","France","Aston Villa",84,27,"Defender"),new Player("Emiliano Martinez","Argentina","Aston Villa",84,26,"GK"),new Player("Harry Maguire","England","Manchester United",84,5,"Defender"),new Player("Ricardo Pereira","Portugal","Leicester City",84,21,"Defender"),new Player("Youri Tielemans","Belgium","Leicester City",84,8,"Midfielder"),new Player("Nabil Fekir","France","Real Betis",84,8,"Midfielder"),new Player("Marcos Acuna","Argentina","Sevilla",84,19,"Defender"),new Player("Andrej Kramaric","Croatia","Hoffenheim",83,27,"Forward"),new Player("Angelino","Spain","RB Leipzig",83,3,"Defender"),new Player("Lucas Hernandez","France","Bayern Munich",83,21,"Defender"),new Player("Pierre-Emile Hojbjerg","Denmark","Tottenham",83,5,"Midfielder"),new Player("Federico Chiesa","Italy","Juventus",83,22,"Forward"),new Player("Joel Matip","Cameroon","Liverpool",83,32,"Defender"),new Player("Kevin Volland","Germany","AS Monaco",83,31,"Forward"),new Player("Sergio Asenjo","Spain","Villarreal",83,1,"GK"),new Player("Iker Muniain","Spain","Athletic Club",83,10,"Midfielder"),new Player("Sergio Canales","Spain","Real Betis",83,10,"Midfielder"),new Player("Alex Sandro","Brazil","Juventus",83,12,"Defender"),new Player("Bernd Leno","Germany","Arsenal",83,1,"GK"),new Player("Henrikh Mkhitaryan","Armenia","Roma",83,77,"Forward"),new Player("Juan Cuadrado","Colombia","Juventus",83,11,"Defender"),new Player("Francesco Acerbi","Italy","Lazio",83,33,"Defender"),new Player("Allan","Brazil","Everton",83,6,"Midfielder"),new Player("Alvaro Morata","Spain","Juventus",83,9,"Forward"),new Player("Leonardo Spinazzola","Italy","Roma",83,37,"Defender"),new Player("Nick Pope","England","Burnley",83,1,"GK"),new Player("Raul Jimenez","Mexico","Wolves",83,9,"Forward"),new Player("Jordan Pickford","England","Everton",83,1,"GK"),new Player("Lucas Ocampos","Argentina","Sevilla",83,5,"Forward"),new Player("Thomas Partey","Ghana","Arsenal",83,5,"Midfielder"),new Player("Jose Gaya","Spain","Valencia",83,14,"Defender"),new Player("Duvan Zapata","Colombia","Atalanta",83,91,"Forward"),new Player("Merino","Spain","Real Sociedad",83,8,"Midfielder"),new Player("Aaron Wan-Bissaka","England","Manchester United",83,29,"Defender"),new Player("Arthur","Brazil","Juventus",83,5,"Midfielder"),new Player("Ousmane Dembele","France","Barcelona",83,7,"Forward"), new Player("Robin Gosens","Germany","Inter",83,18,"Midfielder"), new Player("John Stones","England","Manchester City",83,5,"Defender")];
    return players;
  }
  
  function createNameList() {
    var nameList = [];
    for (player of players) {
      nameList.push(player.name)
    }
    return nameList
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  