$(function() {
    $.getJSON("planets.json", function(data) {
        let $list = $("#planet_list");
        let planets = data.solarSystem.planets;
        planets.forEach(
            (planets,index) => $list.append(
                `<li><img src='images/${planets.image}'><a href='ind.html' data-index='${index}'>
                    ${planets.planetName}</a></li>`)
        );
        $("#planet_list a").click(function(){
            let index = $(this).data("index");
            localStorage["planet"] = JSON.stringify(planets[index]);
        });
    });
});
