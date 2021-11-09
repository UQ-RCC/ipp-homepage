/**
 * @file
 */

(function ($, undefined) {
  $(document).ready(function () {
    $(".main-menu__mobile-menu-link").click(function () {
      console.log('test');
      var menu = $(this).parents(".main-menu__mobile-menu").next(".menu");
      var menuicon = $(".main-menu__mobile-menu-link.icon");

      $(menu).toggleClass("mobile-open");
      $(menuicon).toggleClass("icon-bars icon-close");
    });

    $(".menu__dropdown-link").click(function () {
      $(this).next(".menu__dropdown").toggleClass("expand");
      $(this).toggleClass("dropdown-open");
    });
  });
})(jQuery);
