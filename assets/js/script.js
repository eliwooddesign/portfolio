// listen for nav clicks
$('#aboutNav').click(function() {

    $('#about').show();
    $('#work').hide();
    $('#contact').hide();

});

$('#workNav').click(function() {

    $('#about').hide();
    $('#work').show();
    $('#contact').hide();

});

$('#contactNav').click(function() {

    $('#about').hide();
    $('#work').hide();
    $('#contact').show();

});

// listen for menu icon tap
$('#menuIcon').click(function() {

    if (window.innerWidth < 768) {

        if (($('#menuIcon-left').attr('class')) == "") {

            $('#menuIcon-left').addClass('menu-icon-left-x');
            $('#menuIcon-right').addClass('menu-icon-right-x');
            $('#menuItems').css('display', 'flex');
            $('aside').css('display', 'flex');

        } else {

            $('#menuIcon-left').removeClass('menu-icon-left-x');
            $('#menuIcon-right').removeClass('menu-icon-right-x');
            $('#menuItems').css('display', 'none');
            $('aside').css('display', 'none');

        };

    }

});