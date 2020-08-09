const team={
  _players:[
    {firstName: 'Pablo', lastName:'Sanchez',age:31},
    {firstName: 'Pete', lastName:'Wheeler',age:54},
    {firstName: 'Huss', lastName:'Bitarz',age:41}
  ],
  _games:[
    {opponent:'Brancos',teamPoints:42, opponentPoints:27},
    {opponent:'Cowboys',teamPoints:22, opponentPoints:28},
    {opponent:'Texasen',teamPoints:32, opponentPoints:21}
  ],
  get players() {
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer (firstN,lastN,Age1) {
    let player = { firstName : firstN, lastName: lastN, age:Age1 };
    this.players.push(player);
  },
  addGames(oppName,tmPoints,oppPoints){
    let game = {opponent:oppName,teamPoints:tmPoints, opponentPoints:oppPoints};
    this.games.push(game);
  }
};
team.addPlayer('Steph','Curry',76);team.addPlayer('Lisa ','Leslie ',44);
team.addPlayer('Bugs ','Bunny ',26);
console.log(team.players);
team.addGames('Patriot',85,76);team.addGames('NY ',41,44);
team.addGames('LA ',27,26);
console.log(team.games);
console.log(team);
