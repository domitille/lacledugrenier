// could be pluginized
var magnifie = function(smallsrc,largesrc){
	var small = {image:null,width:0,height:0,loaded:false},
		large = {image:null,width:0,height:0,loaded:false},
		magnify = {offset:null};
	
	var load = function(){
//		reset
		$('.glass').hide().css({
			'background-image':'url("'+'/squelettes/img/load.gif'+'")',
			'background-position':'center center'
		});
		$('.magnify').off('mousemove').off('mousemove');

		small.image = new Image();
		small.image.src = smallsrc;

		large.image = new Image();
		large.image.src = largesrc;

		$(small.image).load(function(){
			small.width = small.image.width;
			small.height = small.image.height;
			small.loaded = true;
			init();
		});

		$(large.image).load(function(){
			large.width = large.image.width;
			large.height = large.image.height;
			large.loaded = true;
			init();
		});
		
		init(); // try an dry run by the way (performance tweak)
	};
	
	var init = function(){
		if(!small.loaded || !large.loaded){
			return false;
		}

		// reset the glass
		window.setTimeout(function(){
			$('.glass').show().css({'bottom':10,'left':10, 'top':null});
		},200);
		

		var rx = large.width/$('#large').width(),
		//rx = $('#large').width() * small.width - $('.large').width() / large.width,
			ry = large.height / $('#large').height();

		var magnify_offset = $('.magnify').offset(),
			glass_center = $('.glass').width()/2;
			

		$('.glass').css({'background-image':'url('+largesrc+')'});
		$('.magnify').on('mousemove',function(e){
			//$('.glass').show()
			//var magnify_offset = $(this).offset();
			
			var mx = e.pageX - magnify_offset.left,
				my = e.pageY - magnify_offset.top;

			// hide when outside
			
/*			console.log(mx,$(this).width(),my,$(this).height(),
				(mx >= 0 && mx <= $(this).width() && my >= 0 && my <= $(this).height())?'shown':'hidden'
			);
*/
			if(mx >= 0 && mx <= $(this).width() && my >= 0 && my <= $(this).height()){
				bgp =  -Math.round(mx*rx-glass_center) +'px '+ -Math.round(my*ry-glass_center) + 'px'
				$('.glass').show().css({
					'backgroundPosition':bgp,
					left: mx-glass_center,
					top: my- glass_center
				});
			}
			else{
				$('.glass').hide();
			}

		}).on('mouseout',function(){
			//$('.glass').hide();
		});
		
	};
	
	load();
}