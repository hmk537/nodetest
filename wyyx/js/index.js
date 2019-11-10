$.get("../json/index.json", function(str) {
	for (var x = 0; x < str[0].shoufa.length; x++) {
		var li = document.createElement("li")
		li.className = "li"
		li.innerHTML =
			`
			<div class="img2">
				<img style="width: 48px;height: 48px;position: absolute;left: 6px;
				top: 6px;" src="../img/${str[0].shoufa[x].shuang11}" >
				<img class="test" src="../img/${str[0].shoufa[x].bg}" >
				<div class="di">
					<div class="di-l">
						<div class="title" data-reactid=".2.3.1.0.0.$0.0.0.5.0.0"><span data-reactid=".2.3.1.0.0.$0.0.0.5.0.0.1">${str[0].shoufa[x].title}</span></div>
						<div class="subTitle" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1"><span style="vertical-align:middle;" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1.0">${str[0].shoufa[x].subTitle}</span></div>
					</div>
					<div class="dl-r">
						${str[0].shoufa[x].dlr}
					</div>
				</div>
			</div>
			<div class="jieshao">
				<p>${str[0].shoufa[x].jieshao}</p>
				<p><span style="color: red;fontw">${str[0].shoufa[x].jieshao2}</span></p>
			</div>
		`
		$(".ul2").delegate("li", "mouseenter", function() {
			var index=$(this).index()
			var aaa=str[0].shoufa[index].bg2
			var bbb=str[0].shoufa[index].bg
			$(this).children(".img2").children(".test").attr({src:"../img/"+aaa})
		})
		$(".ul2").delegate("li", "mouseleave", function() {
			var index=$(this).index()
			var aaa=str[0].shoufa[index].bg2
			var bbb=str[0].shoufa[index].bg
			$(this).children(".img2").children(".test").attr({src:"../img/"+bbb})
		})
		$(".ul2").append(li)
		if (str[0].shoufa[x].id == 2) {
			$(".di-l").eq(x).css({
				"background": "url(../img/ced6f7cfbd566e260ea67ec486cb9b60.png)",
				"background-repeat": "no-repeat",
				"background-size": "auto 100%",
				"background-position": "right"
			})
			$(".di").eq(x).css("background", "url(../img/5e5ba7f9c3805cc8085368ed41aaff65.png)")
		}
	}
	var dj=1
	$(".spa").click(function(){
		 dj=1
		 hmk(dj)
		 $(this).css("color","#b4a078")
		 $(this).css("border-bottom","2px solid #b4a078")
		 $(".spa2").css({
		 	"color":"black",
		 	"border-bottom":"none"
		 })
	})
	$(".spa2").click(function(){
	 	dj=2
		hmk(dj)
		$(this).css("color","#b4a078")
		$(this).css("border-bottom","2px solid #b4a078")
		$(".spa").css({
			"color":"black",
			"border-bottom":"none"
		})
	})
	function hmk(dj){
		$(".tuijian-d").html("")
		for (var x = 0; x < str[dj].tuijian.length; x++) {
			var li = document.createElement("li")
			li.className = "li"
			li.innerHTML =
				`
				<div class="img2">
					<img style="width: 48px;height: 48px;position: absolute;left: 6px;
					top: 6px;" src="../img/${str[dj].tuijian[x].shuang11}" >
					<img class="test" src="../img/${str[dj].tuijian[x].bg}" >
					<div class="di">
						<div class="di-l">
							<div class="title" data-reactid=".2.3.1.0.0.$0.0.0.5.0.0"><span data-reactid=".2.3.1.0.0.$0.0.0.5.0.0.1">${str[0].shoufa[x].title}</span></div>
							<div class="subTitle" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1"><span style="vertical-align:middle;" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1.0">${str[0].shoufa[x].subTitle}</span></div>
						</div>
						<div class="dl-r">
							${str[dj].tuijian[x].dlr}
						</div>
					</div>
				</div>
				<div class="jieshao">
					<p>${str[dj].tuijian[x].jieshao}</p>
					<p><span style="color: red;fontw">${str[dj].tuijian[x].jieshao2}</span></p>
				</div>
			`
			$(".tuijian-d").append(li)
			if (str[dj].tuijian[x].id == 2) {
				$(".tuijian-d .di-l").eq(x).css({
					"background": "url(../img/ced6f7cfbd566e260ea67ec486cb9b60.png)",
					"background-repeat": "no-repeat",
					"background-size": "auto 100%",
					"background-position": "right"
				})
				$(".tuijian-d .di").eq(x).css("background", "url(../img/5e5ba7f9c3805cc8085368ed41aaff65.png)")
			}
		}
	}
	hmk(1)
	
	
})

var num = 0
$(".you").click(function() {
	
	if(num==2){
		num=2
	}else{
		num++
	}
	$(".ul2").animate({
		"left": -num * 1100
	})
})
$(".zuo").click(function() {
	if (num == 0) {
		num = 0
	} else {
		num--
	}
	$(".ul2").animate({
		"left": -num * 1100
	})
})
$.get("../json/index.json",function(hmk){
	for(var z=3;z<hmk.length;z++){
		var div=document.createElement("div")
		div.innerHTML=`
		<div class="jujia-c-1">
			<div class="jujia-c-1-t">
				<h3 class="name">${hmk[z].top.name}</h3>
				<div class="top">
					<span>${hmk[z].top.top2[0]}</span>
					<span><b class="spilt">/</b>${hmk[z].top.top2[1]}</span>
					<span><b class="spilt">/</b>${hmk[z].top.top2[2]}</span>
					<span><b class="spilt">/</b>${hmk[z].top.top2[3]}</span>
					<span><b class="spilt">/</b>${hmk[z].top.top2[4]}</span>
					<span><b class="spilt">/</b>${hmk[z].top.top2[5]}</span>
					<span><b class="spilt">/</b>${hmk[z].top.top2[6]}</span>
					<div class="ck">
						查看更多 >
					</div>
				</div>
				<div class="jujia-c-1-t-r">
					<div class="lunboo">
						<div style="height: 376px;" class="swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide"><img src="../img/${hmk[z].lunbo[0]}"></div>
								<div class="swiper-slide"><img src="../img/${hmk[z].lunbo[1]}"></div>
								<div class="swiper-slide"><img src="../img/${hmk[z].lunbo[2]}"></div>
								<div class="swiper-slide"><img src="../img/${hmk[z].lunbo[3]}"></div>
							</div>
							<!-- Add Pagination -->
							<div style="top:323px;" class="swiper-pagination"></div>
							<!-- Add Arrows -->
							<div style="color: white;" class="swiper-button-next"></div>
							<div style="color: white;" class="swiper-button-prev"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="shoufa-c-d">
				<ul style="margin-top:67px" class="ul2">
					</li><li class="li">
						<div class="img2">
							<img style="width: 48px;height: 48px;position: absolute;left: 6px;
							top: 6px;" src="../img/bf43c8b8b8c205b14e3ac27021e04394.png">
							<img class="test2" src="../img/${hmk[z].bg2[0]}">
							<img class="test" src="../img/${hmk[z].bg[0]}">
							<div class="di">
								<div class="di-l">
									<div class="title" data-reactid=".2.3.1.0.0.$0.0.0.5.0.0"><span data-reactid=".2.3.1.0.0.$0.0.0.5.0.0.1">8折券提前抢</span></div>
									<div class="subTitle" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1"><span style="vertical-align:middle;" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1.0">10.29-10.31</span></div>
								</div>
								<div class="dl-r">
									开通超会享优惠
								</div>
							</div>
						</div>
						<div style="" class="jieshao">
							<p>${hmk[z].p[0]}</p>
							<p><span style="color: red;fontw">${hmk[z].p2[0]}</span></p>
						</div>
					</li><li class="li">
						<div class="img2">
							<img style="width: 48px;height: 48px;position: absolute;left: 6px;
							top: 6px;" src="../img/${hmk[z].bg[1]}">
							<img class="test2" src="../img/${hmk[z].bg2[1]}">
							<img class="test" src="../img/${hmk[z].bg[1]}">
							<div class="di">
								<div class="di-l">
									<div class="title" data-reactid=".2.3.1.0.0.$0.0.0.5.0.0"><span data-reactid=".2.3.1.0.0.$0.0.0.5.0.0.1">新品粉丝价</span></div>
									<div class="subTitle" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1"><span style="vertical-align:middle;" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1.0">¥49.9</span></div>
								</div>
								<div class="dl-r">
									11月2日 0点开抢
								</div>
							</div>
						</div>
						<div class="jieshao">
							<p>${hmk[z].p[1]}</p>
							<p><span style="color: red;fontw">${hmk[z].p2[1]}</span></p>
						</div>
					</li><li class="li">
						<div class="img2">
							<img style="width: 48px;height: 48px;position: absolute;left: 6px;
							top: 6px;" src="../img/bf43c8b8b8c205b14e3ac27021e04394.png">
							<img class="test2" src="../img/${hmk[z].bg2[2]}">
							<img class="test" src="../img/${hmk[z].bg[2]}">
							<div class="di">
								<div class="di-l">
									<div class="title" data-reactid=".2.3.1.0.0.$0.0.0.5.0.0"><span data-reactid=".2.3.1.0.0.$0.0.0.5.0.0.1">新品粉丝价</span></div>
									<div class="subTitle" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1"><span style="vertical-align:middle;" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1.0">¥29.9</span></div>
								</div>
								<div class="dl-r">
									11月2日 0点开抢
								</div>
							</div>
						</div>
						<div class="jieshao">
							<p>${hmk[z].p[2]}</p>
							<p><span style="color: red;fontw">${hmk[z].p2[2]}</span></p>
						</div>
					</li><li class="li">
						<div class="img2">
							<img style="width: 48px;height: 48px;position: absolute;left: 6px;
							top: 6px;" src="../img/bf43c8b8b8c205b14e3ac27021e04394.png">
							<img class="test2" src="../img/${hmk[z].bg2[3]}">
							<img class="test" src="../img/${hmk[z].bg[3]}">
							<div class="di">
								<div class="di-l">
									<div class="title" data-reactid=".2.3.1.0.0.$0.0.0.5.0.0"><span data-reactid=".2.3.1.0.0.$0.0.0.5.0.0.1">新品粉丝价</span></div>
									<div class="subTitle" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1"><span style="vertical-align:middle;" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1.0">¥11.9</span></div>
								</div>
								<div class="dl-r">
									11月2日 0点开抢
								</div>
							</div>
						</div>
						<div class="jieshao">
							<p>${hmk[z].p[3]}</p>
							<p><span style="color: red;fontw">${hmk[z].p2[3]}</span></p>
						</div>
					</li></ul>
				</div>
		</div>
		`
		$(".jujia-c").append(div)
	}
})























var swiper = new Swiper('.swiper-container', {
				// autoplay: true,
				// autoplay: {
				// 	delay: 3000,
				// 	disableOnInteraction: false,
				// },
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
			});