//Read dir ./oppgaver and list all files in that folder to the webpage in the element with id list_oppg
//The files in the folder should be links to the files in the folder
//this script is run when the html page is loaded
// jQuery is used to get the files in the folder
//For each html-file in the folder ./oppgaver
//get the name of the file and create a link to the file
//use supported protocol schemes: http, data 

//This function is run when the document is loaded
$(document).ready(function() {
    //get the files in the folder ./oppgaver
    $.get('./oppgaver', function(data) {
        //for each file in the folder
        $(data).find("a").each(function() {
            //get the name of the file
            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
            //create a link to the file
            $("#list_oppg").append("<li><a href='" + filename + "'>" + filename + "</a></li>");
        });
    });
});