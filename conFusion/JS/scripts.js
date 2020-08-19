$(document).ready(function()
{
 $("#carouselButton").click(function(){
     $("#mycarousel").carousel( { interval: 200 } );
     if ($("#carouselButton").children("span").hasClass('fa-pause')) {
         $("#mycarousel").carousel('pause');
         $("#carouselButton").children("span").removeClass('fa-pause');
         $("#carouselButton").children("span").addClass('fa-play');
     }
     else if ($("#carouselButton").children("span").hasClass('fa-play')){
         $("#mycarousel").carousel('cycle');
         $("#carouselButton").children("span").removeClass('fa-play');
         $("#carouselButton").children("span").addClass('fa-pause');                    
     }
 });
 $("#loginModalButton").click(function(){
     $("#loginModal").modal('toggle') 
 });
 $("#reservationModalButton").click(function(){
     $("#reservationModal").modal('show') 
 });
});