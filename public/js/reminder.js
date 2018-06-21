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

    let nationalLeagueEast = info.league.season.leagues[0].divisions[0].teams;
    let nationalLeagueCentral = info.league.season.leagues[0].divisions[1].teams;
    let nationalLeagueWest = info.league.season.leagues[0].divisions[2].teams;
    let americanLeagueEast = info.league.season.leagues[1].divisions[0].teams;
    let americanLeagueCentral = info.league.season.leagues[1].divisions[1].teams;
    let americanLeagueWest = info.league.season.leagues[1].divisions[2].teams;

    // console.log(nationalLeagueEast);
    // console.log(americanLeague);

    for (var i = 0; i < nationalLeagueEast.length; i++) {
      teamsID.push(nationalLeagueEast[i].id);
      teamsAbbr.push(nationalLeagueEast[i].abbr);
      teamsName.push(nationalLeagueEast[i].name);
      teamsMarket.push(nationalLeagueEast[i].market);
    }

    for (var i = 0; i < nationalLeagueCentral.length; i++) {
      teamsID.push(nationalLeagueCentral[i].id);
      teamsAbbr.push(nationalLeagueCentral[i].abbr);
      teamsName.push(nationalLeagueCentral[i].name);
      teamsMarket.push(nationalLeagueCentral[i].market);
    }

    for (var i = 0; i < nationalLeagueWest.length; i++) {
      teamsID.push(nationalLeagueWest[i].id);
      teamsAbbr.push(nationalLeagueWest[i].abbr);
      teamsName.push(nationalLeagueWest[i].name);
      teamsMarket.push(nationalLeagueWest[i].market);
    }

    for (var i = 0; i < americanLeagueEast.length; i++) {
      teamsID.push(americanLeagueEast[i].id);
      teamsAbbr.push(americanLeagueEast[i].abbr);
      teamsName.push(americanLeagueEast[i].name);
      teamsMarket.push(americanLeagueEast[i].market);
    }

    for (var i = 0; i < americanLeagueCentral.length; i++) {
      teamsID.push(americanLeagueCentral[i].id);
      teamsAbbr.push(americanLeagueCentral[i].abbr);
      teamsName.push(americanLeagueCentral[i].name);
      teamsMarket.push(americanLeagueCentral[i].market);
    }

    for (var i = 0; i < americanLeagueWest.length; i++) {
      teamsID.push(americanLeagueWest[i].id);
      teamsAbbr.push(americanLeagueWest[i].abbr);
      teamsName.push(americanLeagueWest[i].name);
      teamsMarket.push(americanLeagueWest[i].market);
    }
  })


  //  USING THAT ID TO STORE IT INTO THE TEAM PROFILE URL TO GET ITS DATA

  $('.searchInput').on('change', (event) => {

    let valOfSearchBox = event.target.value;
    let index = -1;

    for (var i = 0; i < 30 && index === -1; i++) {
      dictionary.push({
        key: teamsID[i],
        abbr: teamsAbbr[i],
        teamName: teamsName[i],
        teamMarket: teamsMarket[i],
        playersID: ids[i]
      });

      if (valOfSearchBox.toLowerCase() === dictionary[i].teamName.toLowerCase() ||
        valOfSearchBox.toLowerCase() === dictionary[i].teamMarket.toLowerCase() ||
        valOfSearchBox.toLowerCase() === dictionary[i].abbr.toLowerCase()) {
        index = i;
      } else {
        // console.log('Error 404 - Not Found');
      }
    }

    if (index !== -1) {
      let teamProfile = `http://api.sportradar.us/mlb/trial/v6.5/en/teams/${dictionary[index].key}/profile.json?api_key=` + sportradarApiKey;

      $.getJSON(teamProfile, function(info) {

        // console.log(teamProfile);
        teamInfo.push(info);
        let team = teamInfo[0];
        let teamName = teamInfo[0].name;
        let teamMarket = teamInfo[0].market;
        let leagueName = teamInfo[0].league.name;
        let divisionName = teamInfo[0].division.name;
        let listOfPlayers = teamInfo[0].players;
        let player = listOfPlayers;

        // $('.teamInfo1').html(teamName);
        // $('.teamInfo2').html(teamMarket);
        // $('.teamInfo3').html(leagueName);
        // $('.teamInfo4').html(divisionName);

        for (var i = 0; i < 1; i++) {
          $('.teamInfo').append(
            `<tr>
                <td> ${teamName} </td>
                <td> ${teamMarket}</td>
                <td> ${leagueName} </td>
                <td> ${divisionName} </td>
            </tr>`
          )
        }

        for (var i = 0; i < player.length; i++) {
          ids.push(player[i].id);
          $('.playersInfo').append(
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

        for(var i = 0; i < dictionary.length; i++) {
          dictionary[i].playersID = player[i].id;
        }

        console.log(ids);
        console.log(dictionary);
        console.log(player.length);
        console.log(index);
        console.log(dictionary[index]);
        console.log(dictionary[index].playersID);
        // console.log(playerProfile);

        let playerProfile = `http://api.sportradar.us/mlb/trial/v6.5/en/players/${dictionary[index].playersID}/profile.json?api_key=` + sportradarApiKey;
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


      })
    }

  })
});
