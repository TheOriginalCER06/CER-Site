$(document).ready(function () {
    $.ajax({
        url: 'oppgaver.php', // Replace with the path to your PHP script
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var fileList = '<ul>';
            
            $.each(data, function (index, file) {
                var a = $('<a/>', {
                    text: file,
                    href: "./oppgaver/" + file,
                    target: '_blank',
                    class: 'oppgave_link'
                });
                fileList += '<li>' + a + '</li>';
            });
            fileList += '</ul>';
            $('#list_oppg').html(fileList);
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
});
