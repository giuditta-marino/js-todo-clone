$(document).ready(function() {
  $('#add').click(function todolist() {

    var todoTitle = $('#todoTitle').val();
    console.log(todoTitle);
    $('#todoTitle').val('');

    var template = $('#todo li').clone();
    template.children('span.title').text(todoTitle);

    template.children('span.delete').click(function() {
      $(this).parent().remove();
    })

    template.children('span.edit').click(function(){
      var titleDOM = $(this).siblings('span.title');
      var title = titleDOM.text();
      titleDOM.hide();

      $(this).siblings('input').val(title).show();
    })

    template.children('input').keyup(function(e){
      if(e.which == 13){
        var title = $(this).val();
        $(this).hide();
        $(this).siblings('span.title').text(title).show();
      }
    })
    $('#todos').append(template);
  })

  // $('#todoTitle input').keyup(function(e){
  //   if (e.which == 13) {
  //
  //   }
  // })
  
  }

})
