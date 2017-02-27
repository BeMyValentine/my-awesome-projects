
$("#liButton").click(function () {

    var inputValue = $("#myInput").val();

    if (inputValue === '') {

        alert("You can't shop for nothing");
    } else {
        var ul = $('ul');
        var destroy = '<button class="destroy">X</button>';
        ul.prepend("<li>" + inputValue + destroy + "</li>");

        $('.destroy').click(function () {
            $(this).parent().remove();
        })
    }

});