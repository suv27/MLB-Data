$(document).ready(() => {

  let teamsObject = [];
  let teamsProfile = [];

  $('.player-stats').hide();

  $.getJSON(apiKeyForRankings, (info) => {
    teamsObject = info;
  });

  $('.searchInput').on('change', (event) => {
    const valOfSearchBox = event.target.value;
    let foundTeam = undefined;

    for (const i = 0; i < teamsObject.league.season.leagues.length && (foundTeam == undefined); i++) {
      const thisLeague = teamsObject.league.season.leagues[i];
      for (const j = 0; j < thisLeague.divisions.length && (foundTeam == undefined); j++) {
        const thisDivision = thisLeague.divisions[j];
        for (const k = 0; k < thisDivision.teams.length && (foundTeam == undefined); k++) {
          const thisTeam = thisDivision.teams[k];
          if (valOfSearchBox.toLowerCase() === thisTeam.name.toLowerCase() ||
            valOfSearchBox.toLowerCase() === thisTeam.market.toLowerCase() ||
            valOfSearchBox.toLowerCase() === thisTeam.abbr.toLowerCase()) {
            foundTeam = thisTeam;
          }
        }
      }
    }

    if (foundTeam != undefined) {

      const teamProfile = `http://api.sportradar.us/mlb/trial/v6.5/en/teams/${thisTeam.id}/profile.json?api_key=` + apiKey1;
      $.getJSON(teamProfile, (info) => {
        teamsProfile = info;

        let player = teamsProfile.players;

        $('.innerTeamInfo').html(
          `<tr>
            <td> ${info.name} </td>
            <td> ${info.market}</td>
            <td> ${info.league.name}</td>
            <td> ${info.division.name}</td>
          </tr>`
        );

        for (let i = 0; i < player.length; i++) {

          // let playerObjectHitting;
          // let playerObjectFielding;

          $('.innerPlayerInfo').append(
            `<tr>
                <td><a class="player-clicked" href="#">${teamsProfile.players[i].full_name}</a></td>
                <td> ${info.abbr}</td>
                <td> ${teamsProfile.players[i].position}</td>
                <td> ${teamsProfile.players[i].jersey_number}</td>
              </tr>`
          );

          // STORE THIS IN A letIABLE -> ${teamsProfile.players[i].full_name} [PLAYERS NAME]
          // AND GET ID FROM THIS INFORMATIOS

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

  // LINK TO GET PLAYER PICTURE, PASS PLAYER ID
  //http://mlb.mlb.com/mlb/images/players/head_shot/{player_id}.jpg

});
