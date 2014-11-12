$(document).ready(function(){

	// when images are loaded, this may impact on the height so let's replace this element.
	var timeout = setTimeout(function() {
		if($('body').width() > 979)
			pulldown();
		}, 500);


//	if using an event, we should trigger it
//	var timeout = setTimeout(function() {$("img.lazy").trigger("lazied")}, 200);
	if($('body').width() > 979){
		$(window).on('load',function(){
			pulldown();
		})
	}

	// activate slideshow
	if($('#slideshow').length){

		// fix the image loading as shown
		$('#slideshow img').hide();
		// fix #slideshow height
		window.setTimeout(function(){
			$('#slideshow').css({height:$('#slideshow img').first().height()});
			$('#slideshow img').first().fadeIn();
		},50);

		$('#slideshow img').load(function(){
			$('#slideshow').css({height:$(this).height()});
			$('#slideshow img').first().fadeIn();
		});

		$('#slideshow').slideshow({
			timeout: 5000,
			type: 'random',
		});
	}

	if($('#miniatures').length){
		$('#miniatures a').on('click',function(e){
			$('#large').attr({'src':this.href});
			e.preventDefault();
			magnifie(
				this.href,
				$('img',this).data('large')
			);
			$('.glass').show();
			return false;
		});
		$('#large,.glass').click(function(){
			$('.glass').toggle();
		});
		window.setTimeout(function(){
			$('.glass').show();
			magnifie(
				$($('#large')[0]).attr('src'),
				$($('#miniatures a img')[0]).data('large')
			);
		},3000);
		
	}

	// on the collection page, pull right the misplaced elements
	if($('body.collection').length)
		pullright()

});

