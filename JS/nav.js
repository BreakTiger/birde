$(function(){

	console.log("this")
	$('.first-nav>li.item').hover(function(){
		console.log($(this))

		$(this).addClass("check")

		console.log($(this).children()[0])
		if($(this).children()[0] === undefined){
			return false
		}else{
			$($(this).children()[0]).css("display","block")
		}
	},function(){
		$(this).removeClass("check")
		console.log($(this).children()[0])
		if($(this).children()[0] === undefined){
			return false
		}
		else{
			$($(this).siblings().children()).css("display","none")
			$($(this).children()[0]).css("display","none")
		}
	})


});
