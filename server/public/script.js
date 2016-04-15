// var final=require('./account');
//
//
// console.log(final.balance());
// console.log(final.account());

$(function(){
  var amount = "";
$(".accountBalance").on("click", function(){
  $.get("http://localhost:3000/account").done(function(response){
    $("section").append(<p> + response + </p>);
  });
});
})
