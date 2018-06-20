$(document).ready(function() {

  let teamsID = [];
  let teamsName = [];
  let dictionary = [];
  let teamInfo = [];
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
      teamsName.push(nationalLeagueEast[i].name);
    }

    for (var i = 0; i < nationalLeagueCentral.length; i++) {
      teamsID.push(nationalLeagueCentral[i].id);
      teamsName.push(nationalLeagueCentral[i].name);
    }

    for (var i = 0; i < nationalLeagueWest.length; i++) {
      teamsID.push(nationalLeagueWest[i].id);
      teamsName.push(nationalLeagueWest[i].name);
    }

    for (var i = 0; i < americanLeagueEast.length; i++) {
      teamsID.push(americanLeagueEast[i].id);
      teamsName.push(americanLeagueEast[i].name);
    }

    for (var i = 0; i < americanLeagueCentral.length; i++) {
      teamsID.push(americanLeagueCentral[i].id);
      teamsName.push(americanLeagueCentral[i].name);
    }

    for (var i = 0; i < americanLeagueWest.length; i++) {
      teamsID.push(americanLeagueWest[i].id);
      teamsName.push(americanLeagueWest[i].name);
    }

    // console.log(teamsID);
    // console.log(teamsName);

  })


  //  USING THAT ID TO STORE IT INTO THE TEAM PROFILE URL TO GET ITS DATA

  $('.searchInput').on('change', (event) => {

    let valOfSearchBox = event.target.value;
    let index = -1;
    console.log("Your searching for `" + valOfSearchBox + "`");


    for (var i = 0; i < 30 && index === -1; i++) {
      dictionary.push({
        key: teamsID[i],
        value: teamsName[i]
      });

      // console.log(dictionary[i].value);

      if(valOfSearchBox.toLowerCase() === dictionary[i].value.toLowerCase()){
        // console.log(dictionary[i]);
        index = i;
      }
      else{
        // console.log('nothing found');
      }
    }

    if(index !== -1){
      let teamProfile = `http://api.sportradar.us/mlb/trial/v6.5/en/teams/${dictionary[index].key}/profile.json?api_key=` + sportradarApiKey;
      // console.log(teamProfile);
      $.getJSON(teamProfile, function(info) {

        teamInfo.push(info);
        let teamName = teamInfo[0].name;
        let teamMarket = teamInfo[0].market;
        let leagueName = teamInfo[0].league.name;
        let divisionName = teamInfo[0].division.name;
        let listOfPlayers = teamInfo[0].players;
        let player = listOfPlayers;

        for(var i = 0; i < teamInfo.length; i++) {
          $('.teamInfo').append(
            `<tr>
                <td> ${teamName} </td>
                <td> ${teamMarket}</td>
                <td> ${leagueName} </td>
                <td> ${divisionName} </td>
            </tr>`
           )
        }

        // console.log(player[0]);

        for(var i = 0; i < listOfPlayers.length; i++) {

          $('.playersInfo').append(
            `<tr>
                <td> ${player[i].first_name} </td>
                <td> ${player[i].last_name}</td>
                <td> ${player[i].jersey_number} </td>
                <td> ${player[i].Position} </td>
                <td> ${player[i].throw_hand} </td>
                <td> ${player[i].bat_hand} </td>
                <td> ${player[i].pro_debut} </td>
            </tr>`
           )
        }


      })
    }






  })







});
