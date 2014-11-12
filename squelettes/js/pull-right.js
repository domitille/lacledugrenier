// 
//  pull-right.js
//  laborantine
//  
//  Created by gaspard on 2013-06-17.
// 

var pullright = function(){
	$('.row.big').each(function(){
		var i = 0;
		$('.span3, .span6', this).each(function(){

			// if I am a big one at the end of a line, i will cause a br
			if(i > 0 && (i+1)%4 == 0 && $(this).hasClass('span6'))
				i++;

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
