//Read dir ./oppgaver and list all files in that folder to the webpage in the element with id list_oppg
//The files in the folder should be links to the files in the folder
//this script is run when the html page is loaded
// jQuery is used to get the files in the folder
//For each html-file in the folder ./oppgaver
//get the name of the file and create a link to the file
//use supported protocol schemes: http, data 


//remove every item that does not include .html and correct dir to link (./oppgaver/FILE)
$(document).ready(function() {
    $.ajax('./oppgaver/').done(function(data) {

        var file_list = $(data).find('a');
		file_list = file_list.filter(function() {
			return $(this).attr('href').match(/\.html$/);
		});

        file_list.each(function(index) {
            var file = $(this).attr('href');
            var file_name = file.split('/');

            file_name = file_name[file_name.length - 1];

            var a = $('<a/>', {
                text: file_name,
                href: "./oppgaver/" + file,
                target: '_blank',
                class: 'oppgave_link'
            });
            $('#list_oppg').append(a);
        });
    });
});
