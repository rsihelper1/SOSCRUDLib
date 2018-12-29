function ProcessWebGet(e){
  
  var op = e.parameter.action;
  
  var ss= SpreadsheetApp.openById("1OkXtxTaNxZbc84ZgYjqIA6rXzDDxNfeOtwA6xeVINPc");
  var sheet = ss.getSheetByName("ProfileTable");

  
  if(op=="insert")
    return insert_value_(e,sheet);
  
  if(op=="read")
    return read_value_(e,ss);
  
  else if(op=="update")
    return update_value_(e,sheet);
  
  else if(op=="delete")
    return delete_value_(e,sheet);
  
   else if(op=="search")
    return search_value_(e,ss);
  
  else  {
   return HtmlService.createHtmlOutputFromFile('index.html');
  }
}


function ProcessWebPost(e)
{
   Logger.log("Post:" + e);
}