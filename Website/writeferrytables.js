function writeFerryTables(modeOfWriting) {
  var currentTime = new Date().toLocaleTimeString("nl-BE", {
    hour: "2-digit",
    minute: "2-digit",
  });
  var weekday = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  var nextDeparturesBazel = getNextDepartures(
    weekday,
    departuresBazelWeek,
    departuresBazelWeekend,
    5
  );
  var nextDeparturesHemiksem = getNextDepartures(
    weekday,
    departuresHemiksemWeek,
    departuresHemiksemWeekend,
    5
  );
  var nextDeparturesKruibeke = getNextDepartures(
    weekday,
    departuresKruibekeWeek,
    departuresKruibekeWeekend,
    5
  );
  var nextDeparturesHoboken = getNextDepartures(
    weekday,
    departuresHobokenWeek,
    departuresHobokenWeekend,
    5
  );
  var nextDeparturesLo = getNextDepartures(
    weekday,
    departuresLoWeek,
    departuresLoWeekend,
    5
  );
  var nextDeparturesAntwerpen = getNextDepartures(
    weekday,
    departuresAntwerpenWeek,
    departuresAntwerpenWeekend,
    5
  );

  function writeTable(nameDeparture, departures, colorStringEven, colorStringOdd, colorStringTitle ) {
    var currentTimeLocal = new Date();
    let currentTable = '<div class="flex flex-col text-center ">';
    currentTable +=
      '<h2 class=" ' + colorStringTitle + ' py-2 text-lg text-white font-bold rounded">' +
      nameDeparture +
      "</h2><ul>";
    for (let i = 0; i < departures.length; i++) {
      [hours, minutes] = departures[i].split(":");
      var curDepartureTime = new Date();
      curDepartureTime.setHours(hours, minutes, 0, 0);
      differenceInMinutes = Math.round( ( curDepartureTime - currentTimeLocal ) / 1000 / 60 );
      var colorString;
      if (i % 2 == 0) {
        colorString = colorStringEven;
      } else {
        colorString = colorStringOdd;
      }
      var showMinutes = false;
      if( (i < 8) && modeOfWriting == 0){
        showMinutes = true;
      }

      currentTable +=
      '<li class="' + colorString + ' py-1 text-ODS-600 text-lg rounded align-middle flex items-center justify-center">' +
      "<span>" + departures[i] + "</span>";
      var colorStringMinutes = 'text-green-900';
      if(differenceInMinutes < 5){
        colorStringMinutes= 'text-green-900';
      }
      if(showMinutes){      
      var differenceTimeString;        
      if (differenceInMinutes >= 60) {
        const hours = Math.floor(differenceInMinutes / 60);
        const minutes = differenceInMinutes % 60;
        differentTimeString = `${hours}h${minutes.toString().padStart(2, '0')}m`;
      } else {
        differentTimeString = `${differenceInMinutes}min`;
      }
        currentTable += " <span class=' px-2 text-xs " + colorStringMinutes + " font-bold align-middle'>(" + differentTimeString + ")</span>";
      }
      currentTable +="</li>";
    }
    currentTable += "</ul></div>";
    return currentTable;
  }

  colorStringBHEven = 'bg-ODS-300';
  colorStringBHOdd = 'bg-ODS-100';
  colorStringBHTitle = 'bg-ODS-400';

  colorStringKHEven = 'bg-ODS2-300';
  colorStringKHOdd = 'bg-ODS2-100';
  colorStringKHTitle = 'bg-ODS2-400';

  colorStringSLEven = 'bg-ODS-300';
  colorStringSLOdd = 'bg-ODS-100';
  colorStringLSTitle = 'bg-ODS-400';

  if (modeOfWriting == 0) {
    tableHtmlBazel = writeTable("Bazel", nextDeparturesBazel, colorStringBHEven, colorStringBHOdd, colorStringBHTitle );
    tableHtmlHemiksem = writeTable("Hemiksem", nextDeparturesHemiksem, colorStringBHEven, colorStringBHOdd, colorStringBHTitle );
    tableHtmlKruibeke = writeTable("Kruibeke", nextDeparturesKruibeke, colorStringKHEven, colorStringKHOdd, colorStringKHTitle );
    tableHtmlHoboken = writeTable("Hoboken", nextDeparturesHoboken, colorStringKHEven, colorStringKHOdd, colorStringKHTitle );
    tableHtmlLo = writeTable("Sint-Anna", nextDeparturesLo, colorStringSLEven, colorStringSLOdd, colorStringLSTitle );
    tableHtmlAntwerpen = writeTable("Antwerpen", nextDeparturesAntwerpen, colorStringSLEven, colorStringSLOdd, colorStringLSTitle );
  } else if (modeOfWriting == 1) {
    tableHtmlBazel = writeTable("Bazel", departuresBazelWeek, colorStringBHEven, colorStringBHOdd, colorStringBHTitle );
    tableHtmlHemiksem = writeTable("Hemiksem", departuresHemiksemWeek, colorStringBHEven, colorStringBHOdd, colorStringBHTitle );
    tableHtmlKruibeke = writeTable("Kruibeke", departuresKruibekeWeek, colorStringKHEven, colorStringKHOdd, colorStringKHTitle );
    tableHtmlHoboken = writeTable("Hoboken", departuresHobokenWeek, colorStringKHEven, colorStringKHOdd, colorStringKHTitle );
    tableHtmlLo = writeTable("Sint-Anna", departuresLoWeek, colorStringSLEven, colorStringSLOdd, colorStringLSTitle );
    tableHtmlAntwerpen = writeTable("Antwerpen", departuresAntwerpenWeek, colorStringSLEven, colorStringSLOdd, colorStringLSTitle );
  } else if (modeOfWriting == 2) {
    tableHtmlBazel = writeTable("Bazel", departuresBazelWeekend, colorStringBHEven, colorStringBHOdd, colorStringBHTitle );
    tableHtmlHemiksem = writeTable("Hemiksem", departuresHemiksemWeekend, colorStringBHEven, colorStringBHOdd, colorStringBHTitle );
    tableHtmlKruibeke = writeTable("Kruibeke", departuresKruibekeWeekend, colorStringKHEven, colorStringKHOdd, colorStringKHTitle );
    tableHtmlHoboken = writeTable("Hoboken", departuresHobokenWeekend, colorStringKHEven, colorStringKHOdd, colorStringKHTitle );
    tableHtmlLo = writeTable("Sint-Anna", departuresLoWeekend, colorStringSLEven, colorStringSLOdd, colorStringLSTitle );
    tableHtmlAntwerpen = writeTable("Antwerpen", departuresAntwerpenWeekend, colorStringSLEven, colorStringSLOdd, colorStringLSTitle );
  }

  document.getElementById("next-departures-bazel").innerHTML = tableHtmlBazel;
  document.getElementById("next-departures-hemiksem").innerHTML = tableHtmlHemiksem;
  document.getElementById("next-departures-kruibeke").innerHTML = tableHtmlKruibeke;
  document.getElementById("next-departures-hoboken").innerHTML = tableHtmlHoboken;
  document.getElementById("next-departures-lo").innerHTML = tableHtmlLo;
  document.getElementById("next-departures-antwerpen").innerHTML = tableHtmlAntwerpen;


  var rightNow = new Date()

  var hours = rightNow.getHours().toString().padStart(2, '0');
  var minutes = rightNow.getMinutes().toString().padStart(2, '0');
  var stringTimeUpdated = "Laatst geüpdated om " + hours + ":" + minutes;
  document.getElementById("lastUpdateText").innerHTML = stringTimeUpdated
}
