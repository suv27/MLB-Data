var teamsObject = [];

$(document).ready(function() {

  let teamsID = [];
  let teamsName = [];
  let teamsMarket = [];
  let teamsAbbr = [];
  let dictionary = [];
  let teamInfo = [];
  let playersHolder = [];
  let ids = [];
  let sportradarApiKey = '656e58ujs4q8a5cbpcabebea';
  let rankings = "http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/rankings.json?api_key=" + sportradarApiKey;


  // GETTING ALL THE ID'S FROM THE RANKING URL AND STORING IT INTO AN EMPTY ARRAY
  $.getJSON(rankings, function(info) {
    teamsObject = info;
  })

  //  USING THAT ID TO STORE IT INTO THE TEAM PROFILE URL TO GET ITS DATA

  $('.searchInput').on('change', (event) => {

    let valOfSearchBox = event.target.value;
    let index = -1;
    let foundTeam = undefined;
    //info.league.season.leagues[0].divisions[0].teams;
    for (var i = 0; i < teamsObject.league.season.leagues.length && (foundTeam == undefined); i++)
    {
      var thisLeague = teamsObject.league.season.leagues[i];
      for (var j = 0; j < thisLeague.divisions.length && (foundTeam == undefined); j++)
      {
        var thisDivision = thisLeague.divisions[j];
        for (var k = 0; k < thisDivision.teams.length && (foundTeam == undefined); k++)
        {
          var thisTeam = thisDivision.teams[k];
          if (valOfSearchBox.toLowerCase() === thisTeam.name.toLowerCase() ||
              valOfSearchBox.toLowerCase() === thisTeam.market.toLowerCase() ||
              valOfSearchBox.toLowerCase() === thisTeam.abbr.toLowerCase()) {
            foundTeam = thisTeam;
            console.log("Found team", foundTeam);
          }
        }
      }
    }

    if (foundTeam != undefined) {
      let teamProfile = `http://api.sportradar.us/mlb/trial/v6.5/en/teams/${thisTeam.id}/profile.json?api_key=` + sportradarApiKey;

      $.getJSON(teamProfile, function(info) {

        let team = info;
        let teamName = info.name;
        let teamMarket = info.market;
        let leagueName = info.league.name;
        let divisionName = info.division.name;
        let listOfPlayers = info.players;
        let player = listOfPlayers;

          $('.innerTeamInfo').html(
            `<tr>
                <td> ${teamName} </td>
                <td> ${teamMarket}</td>
                <td> ${leagueName} </td>
                <td> ${divisionName} </td>
            </tr>`
          )

        $('.innerPlayerInfo').html('');
        for (var i = 0; i < player.length; i++) {
          $('.innerPlayerInfo').append(
            `<tr>
                <td> ${player[i].full_name} </td>
                <td> ${team.abbr}</td>
                <td> ${player[i].position} </td>
                <td> ${player[i].jersey_number} </td>
                <td> ${player[i].throw_hand} </td>
                <td> ${player[i].bat_hand} </td>
                <td> ${player[i].pro_debut} </td>
            </tr>`
          )
        }
      })

      //let playerProfile = `http://api.sportradar.us/mlb/trial/v6.5/en/players/${dictionary[index].playersID}/profile.json?api_key=` + sportradarApiKey;
      //let playerInfo = playerProfile;
      // console.log(playerInfo);
      // console.log(dictionary[index].playersID);
      // $.getJSON(playerProfile, function(data) {
      //
      // GETTING ALL THE PLAYERS ID's
      // playersHolder.push(data.player);
      // console.log(playersHolder.id);

      // for (var i = 0; i < dictionary.length; i++) {
      // console.log('hola');
      // console.log(playersHolder);
      // playersID.push(ids[i].id);
      // }

      // })


    }

  })
});
