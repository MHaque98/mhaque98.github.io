$(document).ready(function() {
  const white = "#f5faff";
  const dark = "#272727";
  const blue = "#60a0f3";
  const red = "#df5555";
  const themeSelect = $("body");
  const fontSelect = $(".nav-link");
  const footer = $(".footers, .footers a");
  themeSelect.css("background", localStorage.getItem("bg"));
  fontSelect.css("color", localStorage.getItem("font"));
  footer.css({
    background: localStorage.getItem("footbg"),
    color: localStorage.getItem("footcol")
  });

  $("#theme-white").click(() => {
    themeSelect.css("background-color", white);
    fontSelect.css("color", "rgba(0,0,0,0.5)");
    footer.css({
      background: "-webkit-linear-gradient(top, #f2f6fa, #eaedf0)",
      color: "gray"
    });
    localStorage.setItem("bg", white);
    localStorage.setItem("font", "rgba(0,0,0,0.5)");
    localStorage.setItem(
      "footbg",
      "-webkit-linear-gradient(top, #f2f6fa, #eaedf0)"
    );
    localStorage.setItem("footcol", "gray");
  });
  $("#theme-dark").click(() => {
    themeSelect.css("background-color", dark);
    fontSelect.css("color", white);
    footer.css({
      background: "-webkit-linear-gradient(top, #303030,#252525)",
      color: white
    });
    localStorage.setItem("bg", dark);
    localStorage.setItem("font", white);
    localStorage.setItem(
      "footbg",
      "-webkit-linear-gradient(top, #303030,#252525)"
    );
    localStorage.setItem("footcol", white);
  });
  $("#theme-blue").click(() => {
    themeSelect.css("background-color", blue);
    fontSelect.css("color", white);
    footer.css({
      background: "-webkit-linear-gradient(top, #3685d3,#2b81d6)",
      color: white
    });
    localStorage.setItem("bg", blue);
    localStorage.setItem("font", white);
    localStorage.setItem(
      "footbg",
      "-webkit-linear-gradient(top, #3685d3,#2b81d6)"
    );
    localStorage.setItem("footcol", white);
  });
  $("#theme-red").click(() => {
    themeSelect.css("background-color", red);
    fontSelect.css("color", white);
    footer.css({
      background: "-webkit-linear-gradient(top, #d64646, #d63333)",
      color: white
    });
    localStorage.setItem("bg", red);
    localStorage.setItem("font", white);
    localStorage.setItem(
      "footbg",
      "-webkit-linear-gradient(top, #d64646, #d63333)"
    );
    localStorage.setItem("footcol", white);
  });
});
