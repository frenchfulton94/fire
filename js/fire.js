$
var theUrl = "https://api.themoviedb.org/3/discover/movie?api_key=b676e66d89f3b878462378f5e35ba8da&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
var xmlHttp = new XMLHttpRequest();
var hmtlData = '<div class="col-xs-1 col-sm-4 col-md-8 movies"><img class="img-responsive my-btn" src="images/logo_medium.png" data-toggle="modal" data-target="#project-1" alt="Film"></div>'
xmlHttp.onreadystatechange = function () {
    var api = "?api_key=b676e66d89f3b878462378f5e35ba8da"
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var respo = JSON.parse(xmlHttp.responseText);
        var numberOfMovies = respo.results.count;
        respo.results.forEach(function (movie) {
            var poster = movie["poster_path"];
            var url = "https://image.tmdb.org/t/p/w500" + poster + api;
            $("main.div").appendChild(htmlData.replace("images/logo_medium.png", url));

        });


    }


}
xmlHttp.open("GET", theUrl, true); // true for asynchronous
xmlHttp.send(null);
