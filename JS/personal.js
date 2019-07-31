

// 导航栏下边颜色

$(document).ready(function(){
	$('.second-nav>ul>li').each(function(){

		$(this).click(function(){
			$('.second-nav>ul>li').removeClass('line');
			$(this).addClass('line');
		})

	})

})



// 内容切换

function tab(a){

	var c = a.innerHTML;

	console.log(c);

	// 判断
	if(c=="我的上传"){
		document.getElementById("upload").style.display="block";
		document.getElementById("download").style.display="none";
		document.getElementById("collect").style.display="none";
		document.getElementById("integral").style.display="none";
		document.getElementById("viplog").style.display="none";
	}

	if(c=="我的下载"){
		document.getElementById("download").style.display="block";
		document.getElementById("upload").style.display="none";
		document.getElementById("collect").style.display="none";
		document.getElementById("integral").style.display="none";
		document.getElementById("viplog").style.display="none";
	}

	if(c=="我的收藏"){
		document.getElementById("collect").style.display="block";
		document.getElementById("upload").style.display="none";
		document.getElementById("download").style.display="none";
		document.getElementById("integral").style.display="none";
		document.getElementById("viplog").style.display="none";
	}

	if(c=="我的积分"){
		document.getElementById("integral").style.display="block";
		document.getElementById("upload").style.display="none";
		document.getElementById("download").style.display="none";
		document.getElementById("collect").style.display="none";
		document.getElementById("viplog").style.display="none";
	}

	if(c=="VIP记录"){
		document.getElementById("viplog").style.display="block";
		document.getElementById("upload").style.display="none";
		document.getElementById("download").style.display="none";
		document.getElementById("collect").style.display="none";
		document.getElementById("integral").style.display="none";
	}

}