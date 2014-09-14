$(function(){
    // When document is ready here goes my script


    init();








});


function init(){

    loadUserData();
    // Hide modal by default
    $('#modal-choices').modal('hide');

    $(".map-link").on("click", function(e){
        e.preventDefault();
        var imageSrc = $(e.currentTarget).find('img').attr('src');
        var imageNumber = imageSrc.split('_')[1]

        //set large image src
        var largeImageSrc = 'images/maps/l_' + imageNumber;
        $('#modal-image').attr('src',largeImageSrc);
        $('#modal-choices').modal('show');

    });


    $('#confirm-button').on('click', function(){

        //TODO da vzema marshruta, kartata i potrebitelskite danni
        window.location = 'game.html'
    })
}

function loadUserData (){
    $('.control-menu').find('img').attr('src',window.userAvatar);
    $('.control-menu').find('span').text(window.userName);
}