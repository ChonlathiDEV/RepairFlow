function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('ระบบแจ้งซ่อม');
}

function addRepair(data) {

  const SHEET_ID = 'ใส่ Google Sheet ID';

  const sheet = SpreadsheetApp
    .openById(SHEET_ID)
    .getSheetByName('Repairs');

  const id = Utilities.getUuid();

  sheet.appendRow([
    id,
    new Date(),
    data.name,
    data.department,
    data.title,
    data.detail,
    'รอดำเนินการ'
  ]);

  return {
    success: true,
    id: id
  };
}

function getRepairs() {

  const SHEET_ID = 'ใส่ Google Sheet ID';

  const sheet = SpreadsheetApp
    .openById(SHEET_ID)
    .getSheetByName('Repairs');

  const data = sheet.getDataRange().getValues();

  data.shift();

  return data.reverse();
}
