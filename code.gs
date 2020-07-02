function sendEmail() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var Range = sheet.getRange("A2:C6");
  var data = Range.getValues();

  data.forEach(function (rowData) {
    var Name = rowData[0];
    var emailAddress = rowData[1];
    var score = rowData[2];
    
    if (score < 20) {
      return
    }

    var greeting = 'Dear ' + Name + ',\n'
    var scoreMessage = 'You have ' + score + ' Points';
    var greatJobMessage = 'Great job!)';

    var message = [greeting, scoreMessage, greatJobMessage].join('\n');
    var subject = 'Good news!';

    MailApp.sendEmail(emailAddress, subject, message);
  }) 
}