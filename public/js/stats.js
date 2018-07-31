$(document).ready(() => {

  var teamsObject = [];
  var teamsProfile = [];
  let teamProfile = '';
  let rankings = 'http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/rankings.json?api_key=' + apikey;

  // GETTING ALL THE ID'S FROM THE RANKING URL AND STORING IT INTO AN EMPTY ARRAY
  $.getJSON(rankings, (info) => {
    teamsObject = info;
  });

  //  USING THAT ID TO STORE IT INTO THE TEAM PROFILE URL TO GET ITS DATA

  $('.searchInput').on('change', (event) => {

    let valOfSearchBox = event.target.value;
    let index = -1;
    let foundTeam = undefined;

    for (var i = 0; i < teamsObject.league.season.leagues.length && (foundTeam == undefined); i++) {
      var thisLeague = teamsObject.league.season.leagues[i];
      for (var j = 0; j < thisLeague.divisions.length && (foundTeam == undefined); j++) {
        var thisDivision = thisLeague.divisions[j];
        for (var k = 0; k < thisDivision.teams.length && (foundTeam == undefined); k++) {
          var thisTeam = thisDivision.teams[k];

          if (valOfSearchBox.toLowerCase() === thisTeam.name.toLowerCase() ||
            valOfSearchBox.toLowerCase() === thisTeam.market.toLowerCase() ||
            valOfSearchBox.toLowerCase() === thisTeam.abbr.toLowerCase()) {
            foundTeam = thisTeam;
          }
        }
      }
    }

    if (foundTeam != undefined) {

      let teamProfile = `http://api.sportradar.us/mlb/trial/v6.5/en/teams/${thisTeam.id}/profile.json?api_key=` + apikey;
      $.getJSON(teamProfile, (info) => {
        teamsProfile = info;

        let player = teamsProfile.players;

        $('.innerTeamInfo').html(
          `<tr><td> ${info.name} </td><td> ${info.market}</td><td> ${info.league.name} </td><td> ${info.division.name} </td></tr>`
        );

        for (var i = 0; i < player.length; i++) {

          // let playerObjectHitting;
          // let playerObjectFielding;

          $('.innerPlayerInfo').append(
            `<tr>
                <td class="table-header-mob"> ${teamsProfile.players[i].full_name} </td>
                <td class="table-header-mob"> ${info.abbr}</td>
                <td class="table-header-mob"> ${teamsProfile.players[i].position} </td>
                <td class="table-header-web"> ${teamsProfile.players[i].jersey_number} </td>
              </tr>`
          );

          //not working
          // <td> ${playerObjectHitting.statistics.hitting.overall.games.play}</td>
          // <td> ${playerObjectHitting.statistics.hitting.overall.ab}</td>
          // <td> ${playerObjectHitting.statistics.hitting.overall.runs.total}</td>
          // <td> ${playerObjectHitting.splits.hitting.overall[0].total.h}</td>

          //working
          // <td"> ${teamsProfile.players[i].throw_hand} </td>
          // <td"> ${teamsProfile.players[i].bat_hand} </td>
          // <td"> ${teamsProfile.players[i].pro_debut} </td>

          // let playerProfile = `http://api.sportradar.us/mlb/trial/v6.5/en/players/${player[i].id}/profile.json?api_key=` + keyapiStar2;
          // $.getJSON(playerProfile, function(data) {
          //
          //   $('.innerPlayerInfo').html('');
          //
          //   playerObjectHitting = data.player.seasons[0].totals.statistics;
          //   playerObjectFielding = data.player.seasons[0].totals.statistics.fielding;
          // })
        }
      });
    };
  });
});
