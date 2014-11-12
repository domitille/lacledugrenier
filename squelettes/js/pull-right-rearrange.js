// 
//  offset-me.js
//  laborantine
//  
//  Created by gaspard on 2013-06-17.
// 


var pullright_rearrange = function(){
	$('.row.big').each(function(){
		var i = 0;
		$('.span3, .span6', this).each(function(){
			// if I am a big one at the end of a line, switch with the next normal one
			if(i > 0 && (i+1)%4 == 0){
				// if this is too fat
				if($(this).hasClass('span6')){

					// if there is something to replace with

					console.log('I am ',this);
					console.log('next is',$(this).next('.span3'))
					
					if($(this).next('.span3').length){
						$(this).swapWith($(this).next('.span3').addClass('offset3'));
					}
					else{
						console.log('nothing to replace with');
					}
					console.log(i,'replacing', $(this),'with',$(this).next('.span3'))
				}
			};

			// add offset if first of the line
			if(i > 0 && i%4 == 0){
				$(this).addClass('offset3');
				i ++;
			}

			// increase the count, depending on the element's size
			if($(this).hasClass('span6'))
				i = i+2;
			else
				i ++;

		});
	});
};

jQuery.fn.swapWith = function(to) {
	return this.each(function() {
		var copy_to = $(to).clone(true);
		var copy_from = $(this).clone(true);
		$(to).replaceWith(copy_from);
		$(this).replaceWith(copy_to);
	});
};

