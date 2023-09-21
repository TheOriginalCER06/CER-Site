$(document).ready(function () {
    $.ajax({
        url: 'list_files.php', // Replace with the path to your PHP script
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var fileList = '<ul>';
            $.each(data, function (index, file) {
                fileList += '<li>' + file + '</li>';
            });
            fileList += '</ul>';
            $('#list_oppg').html(fileList);
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
});