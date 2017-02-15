// Your jQuery goes here



var userData = {};
$("#start").click(function(event){
  $("#q1").show();
  $("#welcome").hide();
});
$("#nxt").click(function(event){
  $("#q2").show();
  $("#q1").hide();
});
$("#ht").click(function(event){
  $("#q2a").show();
  $("#q2").hide();
});
$("#htprv").click(function(event){
  $("#q2").show();
  $("#q2a").hide();
});
$("#htnxt").click(function(event){
  $("#thanks").show();
  $("#q2a").hide();
});
$("#cs").click(function(event){
  $("#q2b").show();
  $("#q2").hide();
});
$("#csprv").click(function(event){
  $("#q2").show();
  $("#q2b").hide();
});
$("#csnxt").click(function(event){
  $("#thanks").show();
  $("#q2b").hide();
});

