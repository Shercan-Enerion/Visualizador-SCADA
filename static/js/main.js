(function ($) {
  ("use strict");
  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sidebar Toggler
  $(".sidebar-toggler").click(function () {
    $(".sidebar, .content").toggleClass("open");
    return false;
  });

  // Progress Bar
  $(".pg-bar").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Calender
  $("#calender").datetimepicker({
    inline: true,
    format: "L",
  });
  // Single Line Chart
  var ctx3 = $("#line-chart").get(0).getContext("2d");
  var myChart3 = new Chart(ctx3, {
    type: "line",
    data: {
      labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
      datasets: [
        {
          label: "Register #",
          fill: false,
          borderColor: "rgba(22, 235, 61, 0.6)",
          pointBackgroundColor: "rgba(22, 235, 61, 1)",
          backgroundColor: "rgba(235, 22, 22, .7)",
          data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
    nav: false,
  });
})(jQuery);

function theFunction() {
  document.cookie =
    "Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
