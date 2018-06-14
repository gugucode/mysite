var starWarGame = {
    name: "Star War Game",
    url: "https://gugucode.github.io/unit-4-game/",
    code: "https://github.com/gugucode/unit-4-game",
    image: "assets/images/starwar.png"
};

var hangman = {
    name: "Hangman",
    url: "https://gugucode.github.io/Word-Guess-Game/",
    code: "https://github.com/gugucode/Word-Guess-Game/",
    image: "assets/images/hangman.png"
};

var trivialGame = {
    name: "Trivial Game",
    url: "https://gugucode.github.io/TriviaGame/",
    code: "https://github.com/gugucode/TriviaGame/",
    image: "assets/images/travilly.png"
};

var gifTastic = {
    name: "GifTastic",
    url: "https://gugucode.github.io/GifTastic/",
    code: "https://github.com/gugucode/GifTastic/",
    image: "assets/images/gify.png"
};

var RPSMultiplayer = {
    name: "Rock Paper Scissors",
    url: "https://gugucode.github.io/RPS-Multiplayer/",
    code: "https://github.com/gugucode/RPS-Multiplayer/",
    image: "assets/images/rockgame.png"
}

var project1 = {
    name: "Where2eat",
    url: "https://karimifar.github.io/Where2eat-1.0/",
    code: "https://github.com/karimifar/Where2eat-1.0",
    image: "assets/images/where2eat2.png"
}

var liribot = {
    name: "LIRI Bot",
    url: "https://github.com/gugucode/LIRI_Bot",
    code: "https://github.com/gugucode/LIRI_Bot",
    image: "assets/images/liribot.png"
}

var projects = [liribot,project1,RPSMultiplayer,gifTastic,trivialGame,starWarGame,hangman];

function printProjectsDropdown(){
    for(var i=0; i<projects.length; i++){
        var a_tag = $("<a class='dropdown-item'>");
        a_tag.attr("href",projects[i].url).text(projects[i].name);
        $(".projects-menu").prepend(a_tag)
    }
    $(".projects-menu").append("<a class='dropdown-item' href='#'>All source codes</a>")
}

function printProjectsSlide(){
    for(var i=0; i<projects.length; i++){
        var li_indicator = $("<li data-target='#carouselExampleIndicators' data-slide-to='"+i+"'>")
        // li_indicator.css("background","#4aaaa5");

        var carousel_item = $("<div class='carousel-item'>");
        if(i == 0){
            li_indicator.addClass("active");
            carousel_item.addClass("active");
        }

        var img = $("<img class='d-block'>");
        img.attr("src",projects[i].image).attr("alt",projects[i].name);
        var carousel_caption = $("<div class='carousel-caption d-none d-md-block'>");
        carousel_caption.append("<h5>"+projects[i].name+"</h5>");
        carousel_item.append(img).append(carousel_caption);

        $(".carousel-indicators").append(li_indicator);
        $(".carousel-inner").append(carousel_item);
    }
    
}

function printProjectsName(){
    for(var i=0; i<projects.length; i++){
        var list = $("<li class='project_list clearfix'>")
        list.css("list-style-type","none");

        var link = $("<a target='_blank'>");
        link.attr("href",projects[i].url).text(projects[i].name);
        link.css("float","left");

        var code = $("<a target='_blank'>");
        code.attr("href",projects[i].code).text("(code)");
        code.css("float","right");


        $("#projects").append(list.append(link).append(code));
    }
}

$(document).ready(function(){
    printProjectsDropdown();
    // print all projects' link
    printProjectsName();

    printProjectsSlide();
    // set iframe src attribute
    // $("iframe").attr("src",projects[0].url);

    // when a tag is clicked, reset iframe's src attribute
    $("#projects").on("click","a",function(){
        $("iframe").attr("src",$(this).attr("value"));
    });
})

