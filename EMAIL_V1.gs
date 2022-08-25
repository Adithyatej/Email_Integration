const count = []
function myFunction() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var d = s.getLastRow();
  if(!(d in count))
  MailApp.sendEmail(s.getRange(d,1).getValue(),"SUBJECT","MESSAGE");
  count.push(d);
}
