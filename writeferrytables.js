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

  function writeTable(nameDeparture, departures) {
    let currentTable = '<div class="flex flex-col text-center ">';
    currentTable +=
      '<h2 class="bg-ODS-400 py-2 text-lg text-white font-bold rounded">' +
      nameDeparture +
      "</h2><ul>";
    for (let i = 0; i < departures.length; i++) {
      if (i % 2 == 0) {
        currentTable +=
          '<li class="bg-ODS-100 py-1 text-ODS-600 text-lg rounded">' +
          departures[i] +
          "</li>";
      } else {
        currentTable +=
          '<li class="bg-ODS-300 py-1 text-ODS-600 text-lg rounded">' +
          departures[i] +
          "</li>";
      }
    }
    currentTable += "</ul></div>";
    return currentTable;
  }

  if (modeOfWriting == 0) {
    tableHtmlBazel = writeTable("Bazel", nextDeparturesBazel);
    tableHtmlHemiksem = writeTable("Hemiksem", nextDeparturesHemiksem);
    tableHtmlKruibeke = writeTable("Kruibeke", nextDeparturesKruibeke);
    tableHtmlHoboken = writeTable("Hoboken", nextDeparturesHoboken);
    tableHtmlLo = writeTable("Sint-Anna", nextDeparturesLo);
    tableHtmlAntwerpen = writeTable("Antwerpen", nextDeparturesAntwerpen);
  } else if (modeOfWriting == 1) {
    tableHtmlBazel = writeTable("Bazel", departuresBazelWeek);
    tableHtmlHemiksem = writeTable("Hemiksem", departuresHemiksemWeek);
    tableHtmlKruibeke = writeTable("Kruibeke", departuresKruibekeWeek);
    tableHtmlHoboken = writeTable("Hoboken", departuresHobokenWeek);
    tableHtmlLo = writeTable("Sint-Anna", departuresLoWeek);
    tableHtmlAntwerpen = writeTable("Antwerpen", departuresAntwerpenWeek);
  } else if (modeOfWriting == 2) {
    tableHtmlBazel = writeTable("Bazel", departuresBazelWeekend);
    tableHtmlHemiksem = writeTable("Hemiksem", departuresHemiksemWeekend);
    tableHtmlKruibeke = writeTable("Kruibeke", departuresKruibekeWeekend);
    tableHtmlHoboken = writeTable("Hoboken", departuresHobokenWeekend);
    tableHtmlLo = writeTable("Sint-Anna", departuresLoWeekend);
    tableHtmlAntwerpen = writeTable("Antwerpen", departuresAntwerpenWeekend);
  }

  document.getElementById("next-departures-bazel").innerHTML = tableHtmlBazel;
  document.getElementById("next-departures-hemiksem").innerHTML = tableHtmlHemiksem;
  document.getElementById("next-departures-kruibeke").innerHTML = tableHtmlKruibeke;
  document.getElementById("next-departures-hoboken").innerHTML = tableHtmlHoboken;
  document.getElementById("next-departures-lo").innerHTML = tableHtmlLo;
  document.getElementById("next-departures-antwerpen").innerHTML = tableHtmlAntwerpen;
}
