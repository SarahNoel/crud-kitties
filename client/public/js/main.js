// add scripts

$(document).on('ready', function() {
  $('#editKitty').hide();
  showAllKitties();
});


//add new kitty from modal
$('#newKittyForm').on('submit', function(){
  var $name = $('#kittyName').val();
  var $gender = $('#kittyGender').val();
  var $age = $('#kittyAge').val();
  var $food = $('#kittyFood').val();

  var payload ={
    name:$name,
    gender:$gender,
    age:$age,
    favoriteFood:$food
  };
  $.post('/api/kitties', payload, function(data){
    $(':input', 'form').val('');
    showAllKitties();
  });
});


//delete one Kitty button
$(document).on('click', '.delete-button', function(){

  $.ajax({
    method: "DELETE",
    url:'/api/kitty/' +$(this).attr('id')
  }).done(function(data){
    showAllKitties();
    });

});


//get one Kitty to edit
$(document).on('click', '.edit-button', function(){
  $.get('/api/kitty/'+ $(this).attr('id'), function(data){
    $('#updateKittyName').val(data.name);
    $('#updateKittyGender').val(data.gender);
    $('#updateKittyAge').val(data.age);
    $('#updateKittyFood').val(data.favoriteFood);
    $('.updateKitty').attr('id', data._id);
  });
  $('#kittyInfo').hide();
  $('#editKitty').show();

});


//update Kitty
$(document).on('click', '.updateKitty', function (event){
  event.preventDefault();
  var $name = $('#updateKittyName').val();
  var $gender = $('#updateKittyGender').val();
  var $age = $('#updateKittyAge').val();
  var $food = $('#updateKittyFood').val();

  var payload ={
    name:$name,
    gender:$gender,
    age:$age,
    favoriteFood:$food
  };

  $.ajax({
    method: "PUT",
    url:'/api/kitty/' +$(this).attr('id'),
    data:payload
  }).done(function(data){
    $('#editKitty').hide();
    $('#kittyInfo').show();
    showAllKitties();
    });

});

//cancel update
$(document).on('click', '.cancel', function(event){
  event.preventDefault();
  $('#editKitty').hide();
  $('#kittyInfo').show();
});

//show all kitties function
function showAllKitties(){
  $.get('/api/kitties', function(data){
    $('#kittyTable').html('');
    for (var i = 0; i < data.length; i++) {
      $('#kittyTable').append(
        '<tr><td>' + data[i].name + '</td>' +
        '<td>' + data[i].gender + '</td>' +
        '<td>' + data[i].age + '</td>' +
        '<td>' + data[i].favoriteFood + '</td>'+
        '<td><a class="btn btn-danger btn-xs delete-button" id="'+data[i]._id +'" role="button">Delete</a>'+
          '&nbsp;&nbsp;<a class="btn btn-primary btn-xs edit-button" id="'+data[i]._id+'" role="button">Edit</a></td>'+
          '</tr>');
      }
  });
}
