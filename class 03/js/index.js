$(document).ready(function(){
    $(".item-2").hide();
    $(".item-3").hide();

  // tab-1
  $(".tab-1").on("click",function(){
    $(".item-1").show();
    $(".item-2").hide();
    $(".item-3").hide();

    $(".tab-1").addClass("active");
    $(".tab-2").removeClass("active");
    $(".tab-3").removeClass("active");
  });

  // tab-2
  $(".tab-2").on("click",function(){
    $(".item-1").hide();
    $(".item-2").show();
    $(".item-3").hide();

    $(".tab-1").removeClass("active");
    $(".tab-2").addClass("active");
    $(".tab-3").removeClass("active");
  });

  
  // tab-3
  $(".tab-3").on("click",function(){
    $(".item-1").hide();
    $(".item-2").hide();
    $(".item-3").show();

    $(".tab-1").removeClass("active");
    $(".tab-2").removeClass("active");
    $(".tab-3").addClass("active");

  });
});