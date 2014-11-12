// 
//  pull-down.js
//  laborantine
//  
//  Created by gaspard on 2013-05-13.
// 

var pulldown = function() {

	$('.pull-down').each(function(){

		$(this).hide().css({'margin-top':0})
		var maxheight = $(this).parent().prev().height(),
		curheight = $(this).parent().height(),
		height = $(this).height()+$(this).next().height();
		

		// if I am smaller than my neighnoor, 
		if(curheight < maxheight){
			// add some margin
			var margin = maxheight - (curheight + height)+10;
			$(this).css({'margin-top':margin}).show();
			if(margin <10)
				$(this).css({'margin-top':10});
		} //if
		else{
			$(this).css({'margin-top':'20px'}).show();
		}

	}); //each

};
