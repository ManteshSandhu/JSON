$(function () {

    let earth = JSON.parse(localStorage["planet"]);

     $("#planet").text(earth.planetName);
    $("#color").text(earth.planetColor);
    $("#rad").text(earth.planetRadiusKM + " Km's");
    $("#bg").css("background-image", "url(images/"+earth.image+")");
   $("#distsun").text(earth.distInMillionsKM.fromSun + " Million Km's");
   $("#distEarth").text(earth.distInMillionsKM.fromEarth + "  Million Km's");



});