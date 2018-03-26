$("ul").on("click", "li", function () {
   $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(500,function (){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type = 'text']").keypress(function (event) {
  if (event.which === 13) {
    var ToDoText = $(this).val();
    $(this).val("");
    if (ToDoText === "") {

    } else {
      $("ul").append(`<li><span><i class="far fa-trash-alt"></i></span> ${ToDoText}</li>`);
    }
  }
});
$(".fa-plus-square").click(function () {
  $("input[type='text']").fadeToggle();
});
