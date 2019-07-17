function notifs() {


    $(() => {
        $("a.notif_link").hover(
            function () {
                $('span.notif_menu').show();
            }, function () {
                $('span.notif_menu').hide();
            }
        );
    });
}

