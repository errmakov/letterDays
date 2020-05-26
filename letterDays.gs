function LetterDays() {
  var now = new Date()
  var spreadsheet_id = ''; // set Spreadsheet ID here
  var threads = GmailApp.getInboxThreads();
  var letterdays = 0;
  for (var i = 0; i < threads.length; i++) {
    date = new Date();
    datediff = date - threads[i].getLastMessageDate();
    letterdays+=datediff/(3600*24*1000);
  }
  Logger.log('Total letterdays is:' + letterdays);

  var ss = SpreadsheetApp.openById(spreadsheet_id);
  var sheet = ss.getSheets()[0];



  /*
  Calc avarage for week
  Get range of last 6 rows
  */
  var lastRow = sheet.getLastRow();

  var letterdaysWeek = letterdays;
  var dayOfWeek = 0;

  //Logger.log('LastRow: ', lastRow);
  if (lastRow>=6) {
    var range = sheet.getRange(lastRow-5, 2, 6,1);
    var values = range.getValues();
    
    for (var row in values) {
      for (var col in values[row]) {
        letterdaysWeek+=values[row][col];
        Logger.log(values[row][col]);
      }
    }
  }
  letterdaysWeek = letterdaysWeek / 7;
  dayOfWeek = Utilities.formatDate(now, 'GMT+4', 'u'); // 1 - 7 from the monday

  if (dayOfWeek==7) {
    sheet.appendRow([Utilities.formatDate(now, 'GMT+4', 'dd.MM.yyyy'), letterdays, letterdaysWeek]);
  } else {
    sheet.appendRow([Utilities.formatDate(now, 'GMT+4', 'dd.MM.yyyy'), letterdays]);
  };


  return letterdays
}
