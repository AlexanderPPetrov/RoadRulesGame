var userJson = {};


$(function(){
    // When document is ready here goes my script


    init();


});



function init(){

    $(".role-well").on("click", function(){
        $(".role-well").removeClass("active");
        $(this).addClass("active");
    });

    $('#confirm-button').on('click', function(){
        updateUserJson();
        prepareMaps();

    })

    $('#avatar-input').on('change', function(e){
        var imageURL = $(e.currentTarget).val();
        $('#avatar').attr('src', imageURL);
    })

}

function updateUserJson(){
    userJson.role = $('.active').find('.role-button').html();
    userJson.name = $('#nickname-input').val();
    userJson.avatar = $('#avatar-input').val();
    console.log(userJson)
    setUserData(userJson);

}

function prepareMaps(){
    $('.map-choice').show();
    $('.container').first().hide();
    setUserData();
}

function setUserData(){
    $('.control-menu').find('img').attr('src',userJson.avatar);
    $('.control-menu').find('.control-name').text(userJson.name);
    var roleText = 'role: ' + userJson.role;
    $('.control-menu').find('.control-role').text(roleText);
}