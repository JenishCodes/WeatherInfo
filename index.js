function handleLoad() {
  var city = $("#city").val();
  var unit = $("#unit").val();

  $(".year").text(new Date().getFullYear());
  if (!city) {
    $("#root").css("display", "none");
    $("body").css("height", "100vh");
  } else {
    var url =
      "https://api.weatherbit.io/v2.0/current?city=" +
      city +
      "&units=" +
      unit +
      "&key=d77053fd24404d6599f044393f0c6eac";

    data = fetch(url)
      .then((res) => res.json())
      .then((data) => data["data"][0])
      .then((info) => {
        $(".weather-icon").attr(
          "src",
          "./static/Icons/" + info.weather.icon + ".png"
        );
        $(".main-header").text(info.city_name + " Weather");
        $(".time").text("as of " + info.ob_time);
        $(".main-degree").text(info.temp + "°");
        $(".atmos").text(info.weather.description);
        $(".sec-2-head").text("Weather Today in " + info.city_name);
        $(".secondary-degree").text(info.app_temp + "°");
        $(".sunrise").text(info.sunrise);
        $(".sunset").text(info.sunset);
        $(".huidity").text(info.rh);
        $(".pressur").text(info.pres);
        $(".visibility").text(info.vis);
        $(".wind").text(info.wind_spd);
        $(".snow").text(info.snow);
        $(".dew-point").text(info.dewpt);
        $(".uv").text(info.uv.toFixed(2));
        $(".air").text(info.aqi);
      })
      .catch((error) => console.log(error));
  }
}

function toggle(id) {
  if (id === "celsius") {
    $("#celsius").addClass("btn-primary");
    $("#celsius").removeClass("btn-light");
    $("#ferenhit").addClass("btn-light");
    $("#ferenhit").removeClass("btn-primary");
    $("#vis-unit").text(" km");
    $("#snow-unit").text(" mm/hr");
    $("#wind-unit").text(" m/s");
  } else {
    $("#celsius").addClass("btn-light");
    $("#celsius").removeClass("btn-primary");
    $("#ferenhit").addClass("btn-primary");
    $("#ferenhit").removeClass("btn-light");
    $("#vis-unit").text(" mi");
    $("#snow-unit").text(" in/hr");
    $("#wind-unit").text(" mph");
  }
}
