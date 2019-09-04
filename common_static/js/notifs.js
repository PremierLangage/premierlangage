function notifs() {


    $(() => {
        $("a.notif_link, div.notif_menu").mouseenter(
            function () {
                $('div.notif_menu').show();
            }).mouseleave(
            function () {
                $('div.notif_menu').hide();
            });
    });
}

