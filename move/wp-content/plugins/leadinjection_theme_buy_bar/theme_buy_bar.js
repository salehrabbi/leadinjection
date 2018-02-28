(function ($) {

    "use strict";

    var bar_hight = '60px'

    var base64_logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAAaCAQAAABbENUZAAAGdElEQVR4Ae3YA7Ac2RfH8TzHtpONvXactW3bu7Gq1rZt29Hato3Y5pv5/Lumul71vJnJ7H9qUsvfm5nuc869p09/O7noKrlKkaIq60hKE4f/5CAP+cxK3fOeucjlJvjFpxFfYbZeObQN9SdmVmgLo13rThc6UtMMrZ4A8o9aVcDnFZ5dzfVytv8/2dtm1p+QWYmTTBdV3ETr/8monwKbZu8bbZu7FNvdeBvkO3NE2voUc1xpiPU00cuRJiDuLAV/Iup9LfG+kux9o21zl0Zgj/xnDqWr2bhc7cS/7o7W1zjh38wXuPvPQJ3DFBm2zT/qvE3U6vlezEHBWW3XWgj4zG6Bp5YXMO5PQf0nKBl13uUajAyOff2KH93vMi9ainvUVMc31uicDbU9PeBbc7zqGq0i/lYuNsVPFlvgI4/YPeX6A1zlNT951fjKqG1ghGEVVk0DDXeVe01wv7EGhYHUtqFs5lzPe9YF+qa5856Gus+bnnK+TSOo7zEi/NsgY+b1jfaoSS6wc+jKVqU2VvtEoRYWWuYk4cispYm4JTgbhIfWhlojj4tqkUMjJVXWM4oj09CF4gCkoD4Zq5OsZN2uekrbUKq7KpI77rLoaKvQGGsAcG8ENQAnpc1c5CzlSXfUKHBnq9Jw7BMcJ2DX4Li5u0x2lpoKvITtAt/bVqqZGbXJKiumT8UNp6I8saLnOPi/UMdc6hRHOtP74MKMqO8Ad9jXgSaAUyLRG8GHzgyiJ7nH3hHUz7g8/NsqbeZbwKuGO9bd4vhOWdYqvSLAaEM8Elh7iAG+VE1ba7wWPo5dM6F2GOAbBxjsWsCrkcKG2sMAu3kA8EMYqW8h4EUnO93z2VFHrGLPYaFaaaP9wDGhVeARzFAttNcXw/WKs47VqZk3Esc1CkN7dzGMzlql33wROIbikOA4FQBDA/tj5UoNxhkZUX8NlmsZ2ncDWqTZDU4D5RK36FTARIWRaTE76lAGg77pop7De5G2PcDgyEp5ugB8DqifwcxoXw9jidIsVVrlxcC8BOtrIqr7Q2wt9MKF6VGrqhy8rVf4N4IweSgN7OgYZzjCBEBi4nQDkJhYckHdAOyfLupXnKNU+Ke6chwZRqfiiuAkB9SpfW0Pumep0mwfhGPmboosA5CA6xXUtDVGZ0C9gUw6IhGv6wGrVFb7pDG+a46oC8VwampULel1ViJaG5ySC2q1wclJ8c5gryxV+sh8hXbAJYH7fABLtVPNYt8G3sNxcAbUO8ikAIFq3oEMqN8FdM4JdSDLcUZqVHuwyGzJf+dFoofkhLpdal9NwbFZqnQptlLmJ8t1Vuwsc8S8L1hnuhzDguNjaJmCukfC6gT4xnDJf72C6HZCeHbUUVePJqG+G7BD3lGXKMfQjO971mBsmkhDsGdm1IqsTNnUbQwGZEO9OR5OzNhxX+iWCJUl5uxTxbyrSDurvBvpGOLSP5xhV4OFmqQp/RyixbsqCfUowBN5RB3Kj3ikSgb5Hs+kfQhw1FrH6s/wdFL8RNA0a5WmSDwRY8SsdJ2DDDLUm/hZ58D/JHZM3l2CSZqF8y/wtaF6K1BbT6eHE98wwJ1pUfdUDrhMi3AczBfqy1GuTwbUlyFugzSRebh4rajPQVyvCrvUz3j3D1Spp+Xm6Bicbel7ANysVuA7q/LzdywANg7sVpYBYA0IxzsDAMwwyUQzoqjDWwZYSR5R1zcfv9srXFgW2ECHimhdczHfvqqFG60Qu+cwJxwcm+mdJnMNv2OaLRJWc68gbpM/VKX9MNfgxEjUz6nGOkyrxKR2I75WJ/ktlx8B1Ep49rFQZY0Lb/ChTNNiWPZkAPKEOpRdLABr/OgXqzAyEt0pjMb8YKpyXyStguN+T8SfSpt5kPlgjh9BLBz3s1UZwlqOJw1REnqaO9lUvKlxlUrS2E2W4dcKTwuPWwqAqY6sGH/H+11Us01OemdwsJ9E9YtLc0J9KlYlRVt6wkIAsxyTFG3lmUjNn0RenM0FlLs/w3VbmmA14CuJWSt7laF09zxY5lsfmCqOhUZnflOria5JdoF2drKn/lomt1SolY0NsoF26qTNVcsmdret3mpXyVFuxq9p/K0NsalWCtPECnSwna00TvZqpa9uqq31emU2NlC93IrdwLle95PZPveYw8M0fxP5Ci+v00v8J7vZ32vg2P9orENpAuAVRf/xWIfS1hQfesgxCv/Kdf4P6J+1M3BhpCsAAAAASUVORK5CYII=";

    var notice = '<div id="leadinjection_theme_buy_bar">' +
        '<div class="pull-left"><a href="https://leadinjection.io"><img class="li-tbb-logo hidden-xs" src="'+base64_logo+'" alt="Leadinjection Landing Page"></div>' +
        '<div class="pull-right"><a href="http://themeforest.net/item/leadinjection-landing-page-theme/14532230?ref=themeinjection" class="btn btn-sm btn-green li-tbb-buy-button tf-theme-link tf-affili-url">Get Leadinjection Now</a> <a href="#" class="btn btn-sm btn-outline btn-icon-left btn-gray li-tbb-remove-bar"><i class="fa fa-times"></i> Remove Bar</a></div>' +
        '</div>';

     $('body').prepend(notice);
     $('body').css('padding-top', bar_hight);
     $('.header-nav .navbar.navbar-fixed-top').css('margin-top', bar_hight);


    $('.li-tbb-remove-bar').on('click', function(){
        $('body').css('padding-top', '0');
        $('.header-nav .navbar').css('margin-top', '0');
        $('#leadinjection_theme_buy_bar').remove();
    });


})(jQuery);



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-41655858-4', 'auto');
ga('send', 'pageview');
