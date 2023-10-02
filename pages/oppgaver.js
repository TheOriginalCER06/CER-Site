$(document).ready(function () {
    $.ajax({
        url: 'oppgaver.php', // Replace with the path to your PHP script
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var fileList = $('<ul>'); // Create a UL element using jQuery

            $.each(data, function (index, file) {
                var a = $('<a/>', {
                    text: file,
                    href: "./oppgaver/" + file,
                    target: '_blank',
                    class: 'oppgave_link',
                    id : "link"
                });

                // Create an LI element and append the anchor to it
                var li = $('<li>').append(a);

                fileList.append(li); // Append the LI to the UL
            });

            $('#list_oppg').html(fileList); // Append the UL to the div
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
});