$(document).ready(function(){
var currentQuote = '';
var currentAuthor = '';
function getQuote()  {
$.ajax({
  headers: {
    "X-Mashape-Key": "jmWyZvAsTYmshCLTqSd0lz4lCy86p1DBq5TjsndgniDFZN8aqR",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json"
  },
  url:"https://andruxnet-random-famous-quotes.p.mashape.com/",
  type: 'GET',
  dataType: 'json',
  success: function(result){
    currentQuote = result.quote;
    currentAuthor = result.author
    $(".message").html("<p>"+ currentQuote +"</p>");
    $(".author").html("<p>-"+currentAuthor +"</p>");
    $(".twitter").attr("href",'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  },
});
};  
getQuote();

$(".new-quote").click(getQuote);  



});