var ssid = "1OkXtxTaNxZbc84ZgYjqIA6rXzDDxNfeOtwA6xeVINPc";
var shtname = "ProfileTable";

function getUnreadEmails() {
	return GmailApp.getInboxUnreadCount();
}


function getFieldNames() {
	var ss = SpreadsheetApp.openById(ssid);

	var fieldNames = getHeaderRow_(ss, shtname);

	return JSON.stringify(fieldNames);

}

function processInsertForm(insertForm) {
	Logger.log(insertForm);
	var formJSON = JSON.parse(insertForm);
	var ss = SpreadsheetApp.openById(ssid);
	var sheet = ss.getSheetByName(shtname);

	var flag = 1;
	var lr = sheet.getLastRow();
	for (var i = 1; i <= lr; i++) {
		var id1 = sheet.getRange(i, 2).getValue();

		if (id1 == formJSON.ID) {
			flag = 0;
			var result = "Id already exist..";
		}

	}
	//add new row with recieved parameter from client
	if (flag == 1) {
		var d = new Date();
		var currentTime = d.toLocaleString();
		var arrayFields = [];
		for (f in formJSON) {
			arrayFields.push(formJSON[f]);
		}
		var rowData = sheet.appendRow(arrayFields);
		var result = "Insertion successful";
	}
	result = JSON.stringify({
		"result": result
	});

	return result;

}