// Check off specific To-Do's by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});


// Click on 'X' to delete
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  })
  event.stopPropagation();
});

//Input appears on list when "Enter" is pressed
$("input[type='text']").on("keypress", function(event){
  if(event.which == 13 || event.keyCode == 13){
    var toDoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+toDoText+"</li>");
  }
});

$(".fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle();
});
