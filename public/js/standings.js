$(document).ready(function() {

  let sportradarApiKey = '656e58ujs4q8a5cbpcabebea';
  let keyPatrick = 'mevcburkuv7wpjvpnvc6gaw5';
  let standings = "http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/standings.json?api_key=" + keyPatrick;
  let data = [];


  // GETTING AND ISPLAYING THE STANDINGS FOR EACH LEAGUE
  $.getJSON(standings, function(info) {
    data.push(info);
    let nationalLeague = data[0].league.season.leagues[0];
    let americanLeague = data[0].league.season.leagues[1];
    let alEastTeams = americanLeague.divisions[0].teams;
    let alCentralTeams = americanLeague.divisions[1].teams;
    let alWestTeams = americanLeague.divisions[2].teams;
    let nlEastTeams = nationalLeague.divisions[0].teams;
    let nlCentralTeams = nationalLeague.divisions[1].teams;
    let nlWestTeams = nationalLeague.divisions[2].teams;

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

    // NATIONAL LEAGUE
    $('.anLeague').html(nationalLeague.name);

    function teamNLEHeader() {
      $('.dg-nle-team_short').html(nationalLeague.divisions[0].name);
      $('.dg-nle-w').html('W');
      $('.dg-nle-l').html('L');
      $('.dg-nle-w').html('W');
      $('.dg-nle-pct').html('PCT');
      $('.dg-nle-gb').html('GB');
      $('.dg-nle-gb_wildcard').html('WCGB');
      $('.dg-nle-streak').html('STRK');
    }

    function teamNLCHeader() {
      $('.dg-nlc-team_short').html(nationalLeague.divisions[1].name);
      $('.dg-nlc-w').html('W');
      $('.dg-nlc-l').html('L');
      $('.dg-nlc-w').html('W');
      $('.dg-nlc-pct').html('PCT');
      $('.dg-nlc-gb').html('GB');
      $('.dg-nlc-gb_wildcard').html('WCGB');
      $('.dg-nlc-streak').html('STRK');
    }

    function teamNLWHeader() {
      $('.dg-nlw-team_short').html(nationalLeague.divisions[2].name);
      $('.dg-nlw-w').html('W');
      $('.dg-nlw-l').html('L');
      $('.dg-nlw-w').html('W');
      $('.dg-nlw-pct').html('PCT');
      $('.dg-nlw-gb').html('GB');
      $('.dg-nlw-gb_wildcard').html('WCGB');
      $('.dg-nlw-streak').html('STRK');
    }

    // APPENDING THROUGH ALL THE EAST TEAMS AND THEIR INFORMATION
    teamNLEHeader();
    for(var i = 0; i < nlEastTeams.length; i++){
      $(".bodyForNLE").append(
        `<tr><td>` + nlEastTeams[i].name + `</td>
             <td>` + nlEastTeams[i].win  + `</td>
             <td>` + nlEastTeams[i].loss + `</td>
             <td>` + nlEastTeams[i].win_p + `</td>
             <td>` + nlEastTeams[i].games_back + `</td>
             <td>` + nlEastTeams[i].wild_card_back + `</td>
             <td>` + nlEastTeams[i].streak + `</tr>`
      );
    }

    teamNLCHeader();
    for(var i = 0; i < nlCentralTeams.length; i++){
      $(".bodyForNLC").append(
        `<tr><td>` + nlCentralTeams[i].name + `</td>
             <td>` + nlCentralTeams[i].win  + `</td>
             <td>` + nlCentralTeams[i].loss + `</td>
             <td>` + nlCentralTeams[i].win_p + `</td>
             <td>` + nlCentralTeams[i].games_back + `</td>
             <td>` + nlCentralTeams[i].wild_card_back + `</td>
             <td>` + nlCentralTeams[i].streak + `</tr>`
      );
    }

    teamNLWHeader();
    for(var i = 0; i < nlWestTeams.length; i++){
      $(".bodyForNLW").append(
        `<tr><td>` + nlWestTeams[i].name + `</td>
             <td>` + nlWestTeams[i].win  + `</td>
             <td>` + nlWestTeams[i].loss + `</td>
             <td>` + nlWestTeams[i].win_p + `</td>
             <td>` + nlWestTeams[i].games_back + `</td>
             <td>` + nlWestTeams[i].wild_card_back + `</td>
             <td>` + nlWestTeams[i].streak + `</tr>`
      );
    }
  });

});
