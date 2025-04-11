$(document).ready(function () {
  // Tab switching functionality
  $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");

    const tabClass = $(this)
      .attr("class")
      .split(" ")
      .find((c) => c.startsWith("tab-"));
    $(".tab-content > div").hide();
    $(".tab-content > ." + tabClass).show();
  });

  // Show the initial active tab
  const initialTab = $("#tabs-nav li.active")
    .attr("class")
    .split(" ")
    .find((c) => c.startsWith("tab-"));
  $(".tab-content > div").hide();
  $(".tab-content > ." + initialTab).show();

  // Sidebar toggle functionality
  function checkScreenSize() {
    if ($(window).width() <= 1024) {
      // Mobile/tablet view
      $(".left-sidebar-toggle").click(function () {
        $(".left-sidebar").toggleClass("open");
        $(".right-sidebar").removeClass("open");
        $(".overlay").toggleClass("active");
      });

      $(".right-sidebar-toggle").click(function () {
        $(".right-sidebar").toggleClass("open");
        $(".left-sidebar").removeClass("open");
        $(".overlay").toggleClass("active");
      });

      $(".overlay").click(function () {
        $(".left-sidebar").removeClass("open");
        $(".right-sidebar").removeClass("open");
        $(".overlay").removeClass("active");
      });
    } else {
      // Desktop view - sidebars always visible
      $(".left-sidebar").addClass("open");
      $(".right-sidebar").addClass("open");
    }
  }

  // Run on load and on resize
  checkScreenSize();
  $(window).resize(checkScreenSize);
});
