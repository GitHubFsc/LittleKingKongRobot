





// $(function() {
// 	$('.xufu').click(function(){
// 		$('body,html').animate({ scrollTop:0 },1000)	
// 	});
// });


$(function() {
	var $product_tab = $(".tab-box")
	$product_tab.each(function() {
		var _this = $(this);
		var $title = _this.find(".tab-title");
		var $content = _this.find(".tab-content");
		$title.find("span").click(function() {
			var index = $(this).index();
			$title.find("span").removeClass("active");
			$content.hide();
			$(this).addClass("active");
			$content.eq(index).fadeIn(300);
		})
		
		$title.find("span").eq(0).addClass('active');
		$content.eq(0).removeClass('hide')
	})


	var $film_tab = $(".film-box")
	$film_tab.each(function() {
		var _this = $(this);
		var $title = _this.find(".film-title");
		var $content = _this.find(".film-content");
		$title.find(".item").click(function() {
			var index = $(this).index();
			$title.find(".item").removeClass("active");
			$content.hide();
			$(this).addClass("active");
			$content.eq(index).fadeIn(300);
		})
		
		$title.find(".item").eq(0).addClass('active');
		$content.eq(0).removeClass('hide')
	})

});



