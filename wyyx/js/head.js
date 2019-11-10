var timr = setInterval(function() {
	clearInterval(timr)
	$(".header-l-p").animate({
		"top": -20
	}, function() {
		$(".header-l-p").css("top", 10)
	})
}, 5000)
$(".header-r").children().eq(4).mouseenter(function() {
	$(this).children().eq(1).css("display", "block")
})
$(".header-r").children().eq(4).mouseleave(function() {
	$(this).children().eq(1).css("display", "none")
})
$(".header-r").children().eq(5).mouseenter(function() {
	$(this).children().eq(1).css("display", "block")
})
$(".header-r").children().eq(5).mouseleave(function() {
	$(this).children().eq(1).css("display", "none")
})
var time
time = setInterval(function() {
	clearInterval(time)
	$(".wenzi").animate({
		"top": -36
	}, function() {
		$(".wenzi").append($(".wenzi").children().eq(0))
		$(".wenzi").css("top", 0)
	})
}, 4000)
$(".wenzi-k").mouseenter(() => {
	clearInterval(time)
})
$(".wenzi-k").mouseleave(() => {
	time = setInterval(function() {
		$(".wenzi").animate({
			"top": -36
		}, function() {
			$(".wenzi").append($(".wenzi").children().eq(0))
			$(".wenzi").css("top", 0)
		})
	}, 4000)
})



$(".ul li").mouseenter(function() {
	$(".ul-erji").html("")
	var index = $(this).index() - 1
	if (index >= 0 && index <= 7) {
		$(".ul-erji").css("display", "block")
		$.get("../json/head.json", function(str) {
			for (var i = 0; i < str[index].list.length; i++) {
				var ule1 = document.createElement("div")
				ule1.className = "ul-erji-1"
				ule1.innerHTML = `
					<div class="biaoti">
						${str[index].list[i].biaoti}
					</div>
				`
				$(".ul-erji").append(ule1)
				for (var x = 0; x < str[index].list[i].erceng.length; x++) {
					var ule2 = document.createElement("div")
					ule2.className = "neirong"
					ule2.innerHTML =
						`
						<div class="img">
							<img src="../img/${str[index].list[i].erceng[x].img}">
						</div>
						${str[index].list[i].erceng[x].text}
					`
					$(".ul-erji-1").eq(i).append(ule2)
				}
			}
		})
	} else {
		$(".ul-erji").css("display", "none")
	}
})
$(".ul li").mouseleave(function() {
	$(".ul-erji").css("display", "none")
})
$(".ul-erji").mouseenter(function() {
	$(".ul-erji").css("display", "block")
})
$(".ul-erji").mouseleave(function() {
	$(".ul-erji").css("display", "none")
})

$(".ul li").click(function(){
	var i=$(this).index()-1
	console.log(i)
	if(i>=0&&i<=7){
		window.open("../html/公共页.html?"+i,"_self")
	}else if(i==-1){
		window.open("../html/index.html","_self")
	}else if(i==8){
		window.open("../html/为你严选.html","_self")
	}else if(i==9){
		window.open("../html/众筹.html","_self")
	}
})






































var swiper = new Swiper('.swiper-container', {
	autoplay: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
})



