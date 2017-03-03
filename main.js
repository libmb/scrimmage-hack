$(document).ready(function() {
  $('#bevButton').click(function(){
    $('.bev').text("")
    getRandomBev()
  })
  $('#foodButton').click(function(){
    getRandomFood()
  })
  $('#personButton').click(function(){
    getRandomPerson()
  })
})

// get random night
// 1: get drink
function getRandomBev() {
  var url = "https://api.punkapi.com/v2/beers/random"
  $.get(url)
  .then(function(data){
        var name = data[0].name
        var tagline= data[0].tagline
        console.log(name)
        console.log(tagline)
        updatePageOne(name, tagline)
  })
}

// 2: get food
function getRandomFood() {
  var url = "https://galvanize-cors.herokuapp.com/https://www.reddit.com/r/food/.json"
  var redditReady = $.get(url)
  // redditReady.done((data) => {
  //    if(redditReady.status !== 200){
  //      return;
 .then(function (data) {
    var randomImgUrl = data.data.children[((Math.floor(Math.random()*24))+1)].data.url
    console.log(data.data.children[1].data.url)
    console.log(randomImgUrl)
    var styledImg = "<img src= '" + randomImgUrl + "'>"
    updatePageTwo(styledImg)
 })
}

// get a person to talk to!
function getRandomPerson() {
  var alpha = "A"
  updatePageThree(alpha)
}


// update page with beverage
function updatePageOne(name, tagline) {
  $('.bev').append("What are we drinking?: " + name)
  $('.bev').append("How does it taste?: " +tagline)
  console.log(name, tagline);
  }

//update page with food
function updatePageTwo(styledImg) {
  $('.food').append(styledImg)
  console.log(styledImg);
  }

//update page with friend
function updatePageThree(alpha) {
  $('.person').append("Let's call a someone whose name starts with: " + alpha)
  console.log(alpha);
  }
