var happyImages = [
    "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/2017/whoshappywho.jpg", 
    "https://theluxuryspot.com/wp-content/uploads/2014/09/girl-happy.jpg",
    "https://cdn.mos.cms.futurecdn.net/4h2tjb4mqu4Wh6aez7wexW-320-80.jpg"
];

var angryImages = [
    "https://d21tktytfo9riy.cloudfront.net/wp-content/uploads/2019/01/23140919/dream_blast_icon.jpg",
    "https://blogs.oxford.anglican.org/wp-content/uploads/2017/02/anger1-1024x576.jpg",
    "https://media1.tenor.com/images/a57e708c303e53655fc32b54969513de/tenor.gif?itemid=13136575"
];
var boredImages = [
    "https://content.thriveglobal.com/wp-content/uploads/2018/03/bored.jpeg",
    "https://media1.tenor.com/images/5638853cac67c77afa79a07bca056b7c/tenor.gif?itemid=12022786",
    "https://i.gifer.com/S3xo.gif"
];
var hungryImages = [
    "https://media2.giphy.com/media/daLw3QnTCkDjG/giphy.gif",
    "https://media.giphy.com/media/12ipFPp0qLaSdy/giphy.gif",
    "https://media0.giphy.com/media/eSQKNSmg07dHq/giphy.gif"
];


$('button').click(function(){
    var mood = $('input').val();
    $(".images").html("");
    if (mood === "happy") {
        happyMood();
    }     
    else if (mood === "angry") {
        angryMood();
    }
    else if (mood === "bored") {
        boredMood();
    }
    else if (mood === "hungry") {
        hungryMood();
    }
});


function happyMood(){
    changeBackgroundColor("yellow");
    changeTextColor("orange");
    iterate(happyImages);
}
function angryMood(){
    changeBackgroundColor("red");
    changeTextColor("maroon");
    iterate(angryImages);
    
}
function boredMood(){
    changeBackgroundColor("dimGrey");
    changeTextColor("lightGrey");
    iterate(boredImages);
    
}
function hungryMood(){
    changeBackgroundColor("coral");
    changeTextColor("orangeRed");
   iterate(hungryImages);
  
}

function changeBackgroundColor(bcolor){
     $("body").css("background-color", bcolor);
}

function changeTextColor(color){
     $("p").css("color", color);
}

function iterate(array){
    array.forEach(function(element){
    $(".images").append("<img src=" + element +">");
});
}



