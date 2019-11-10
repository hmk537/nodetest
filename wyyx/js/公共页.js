var c=window.location.search.substring(1)
$.get("../json/index.json", function(hmk) {
	var div = document.createElement("div")
	div.innerHTML =
		`
	<div style="padding-top:20px" class="lunboo">
		<div style="height: 310px;" class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="../img/${hmk[3].lunbo[0]}"></div>
				<div class="swiper-slide"><img src="../img/${hmk[3].lunbo[1]}"></div>
				<div class="swiper-slide"><img src="../img/${hmk[3].lunbo[2]}"></div>
				<div class="swiper-slide"><img src="../img/${hmk[3].lunbo[3]}"></div>
			</div>
			<!-- Add Pagination -->
			<div style="top:323px;" class="swiper-pagination"></div>
			<!-- Add Arrows -->
			<div style="color: white;" class="swiper-button-next"></div>
			<div style="color: white;" class="swiper-button-prev"></div>
		</div>
	</div>
	`
	$(".glunbo").append(div)
	
	
	
	
	
	
	
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
})

$.get("../json/公共页.json",function(str){
	for(var x=0;x<str[0].fenlei[0].fenlei2.length;x++){
		$(".category-r").append(`
		<span class="spname2">${str[0].fenlei[0].fenlei2[x]}</span>
		`)
	}
	for(var x=0;x<str[0].fenlei[0].fenlei22.length;x++){
		$(".category-r-2").append(`
		<span class="spname2">${str[0].fenlei[0].fenlei22[x]}</span>
		`)
	}
	for(var x=0;x<str[2].list[c].list2.length;x++){
		var div=document.createElement("div")
		div.innerHTML=`
		<div class="hd">
			<p style="font-size: 26px;font-weight: bold;">${str[2].list[c].list2[x].mf}</p>
			<p style="font-size: 12px;color: gray;">${str[2].list[c].list2[x].xj}</p>
		</div>
		<div class="ul3">
			
		</div>
		`
		$(".bankuai").append(div)
		for(var y=0;y<str[2].list[c].list2[x].list3.length;y++){
			$(".ul3").eq(x).append(`
			<li class="li">
				<div class="img2">
					<img style="width: 48px;height: 48px;position: absolute;left: 6px;
						top: 6px;z-index: 99;" src="../img/bf43c8b8b8c205b14e3ac27021e04394.png">
					<img class="test" src=".${str[2].list[c].list2[x].list3[y].img}">
					<img class="test2" src=".${str[2].list[c].list2[x].list3[y].img2}">
					<div class="di">
						<div class="di-l">
							<div class="title" data-reactid=".2.3.1.0.0.$0.0.0.5.0.0"><span data-reactid=".2.3.1.0.0.$0.0.0.5.0.0.1">8折券提前抢</span></div>
							<div class="subTitle" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1"><span style="vertical-align:middle;"
								 data-reactid=".2.3.1.0.0.$0.0.0.5.0.1.0">10.29-10.31</span></div>
						</div>
						<div class="dl-r">
							开通超会享优惠
						</div>
					</div>
				</div>
				<div class="jieshao">
					<span class="m-itemTag " data-reactid=".3.1.1.$109243003.1.$1636009.0.4.0.$0">好货内部价</span>
					<p>${str[2].list[c].list2[x].list3[y].p6}</p>
					<p><span style="color: red;fontw">￥99</span></p>
				</div>
				<div class="xian">
					
				</div>
				<p style="font-size: 12px;color: grey;margin-top:10px;text-align: center;">浅绒如脂臻密，高级莫兰迪色系</p>
			</li>
			`)
		}
		
	}
})

























































