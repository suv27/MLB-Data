$(document).ready(function() {

  let sportradarApiKey = '656e58ujs4q8a5cbpcabebea';
  let gamesBoxScore = "http://api.sportradar.us/mlb/trial/v6.5/en/games/b6f922df-46c6-483c-8d3b-4235a6fc4520/boxscore.json?api_key=" + sportradarApiKey;
  let playerProfile = "http://api.sportradar.us/mlb/trial/v6.5/en/players/6e1cac5c-b059-4b80-a267-5143b19efb27/profile.json?api_key=" + sportradarApiKey;
  let Rankings = "http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/rankings.json?api_key" + sportradarApiKey;
  let standings = "http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/standings.json?api_key=" + sportradarApiKey;
  let data = [];


  // GETTING AND ISPLAYING THE STANDINGS FOR EACH LEAGUE
  $.getJSON(standings, function(info) {
    data.push(info);
    let nationalLeague = data[0].league.season.leagues[0];
    let americanLeague = data[0].league.season.leagues[1];
    let alEastTeams = americanLeague.divisions[0].teams;
    let alCentralTeams = americanLeague.divisions[1].teams;
    let alWestTeams = americanLeague.divisions[2].teams;

    // AMERICAN LEAGUE
    $('.aLeague').html(americanLeague.name);

    function teamALEHeader() {
      $('.dg-ale-team_short').html(americanLeague.divisions[0].name);
      $('.dg-ale-w').html('W');
      $('.dg-ale-l').html('L');
      $('.dg-ale-w').html('W');
      $('.dg-ale-pct').html('PCT');
      $('.dg-ale-gb').html('GB');
      $('.dg-ale-gb_wildcard').html('WCGB');
      $('.dg-ale-streak').html('STRK');
    }

    function teamALCHeader() {
      $('.dg-alc-team_short').html(americanLeague.divisions[1].name);
      $('.dg-alc-w').html('W');
      $('.dg-alc-l').html('L');
      $('.dg-alc-w').html('W');
      $('.dg-alc-pct').html('PCT');
      $('.dg-alc-gb').html('GB');
      $('.dg-alc-gb_wildcard').html('WCGB');
      $('.dg-alc-streak').html('STRK');
    }

    function teamALWHeader() {
      $('.dg-alw-team_short').html(americanLeague.divisions[2].name);
      $('.dg-alw-w').html('W');
      $('.dg-alw-l').html('L');
      $('.dg-alw-w').html('W');
      $('.dg-alw-pct').html('PCT');
      $('.dg-alw-gb').html('GB');
      $('.dg-alw-gb_wildcard').html('WCGB');
      $('.dg-alw-streak').html('STRK');
    }

    // APPENDING THROUGH ALL THE EAST TEAMS AND THEIR INFORMATION
    teamALEHeader();
    for(var i = 0; i < alEastTeams.length; i++){
      $(".bodyForALE").append(
        `<tr><td>` + alEastTeams[i].name + `</td>
             <td>` + alEastTeams[i].win  + `</td>
             <td>` + alEastTeams[i].loss + `</td>
             <td>` + alEastTeams[i].win_p + `</td>
             <td>` + alEastTeams[i].games_back + `</td>
             <td>` + alEastTeams[i].wild_card_back + `</td>
             <td>` + alEastTeams[i].streak + `</tr>`
      );
    }

    // APPENDING THROUGH ALL THE CENTRAL TEAMS AND THEIR INFORMATION
    teamALCHeader();
    for(var i = 0; i < alCentralTeams.length; i++){
      $(".bodyForALC").append(
        `<tr><td>` + alCentralTeams[i].name + `</td>
             <td>` + alCentralTeams[i].win  + `</td>
             <td>` + alCentralTeams[i].loss + `</td>
             <td>` + alCentralTeams[i].win_p + `</td>
             <td>` + alCentralTeams[i].games_back + `</td>
             <td>` + alCentralTeams[i].wild_card_back + `</td>
             <td>` + alCentralTeams[i].streak + `</tr>`
      );
    }

    // APPENDING THROUGH ALL THE WEST TEAMS AND THEIR INFORMATION
    teamALWHeader();
    for(var i = 0; i < alWestTeams.length; i++){
      $(".bodyForALW").append(
        `<tr><td>` + alWestTeams[i].name + `</td>
             <td>` + alWestTeams[i].win  + `</td>
             <td>` + alWestTeams[i].loss + `</td>
             <td>` + alWestTeams[i].win_p + `</td>
             <td>` + alWestTeams[i].games_back + `</td>
             <td>` + alWestTeams[i].wild_card_back + `</td>
             <td>` + alWestTeams[i].streak + `</tr>`
      );
    }

  });

});
