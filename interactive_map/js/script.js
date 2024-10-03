/* Landing page scripts */
$(document).ready(function() {
	$('.usage').click(function(e) {
		e.preventDefault();
		$('.editor-window').slideToggle(200);
	});

	$(document).on('mousemove', '.mapplic-layer', function(e) {
		var map = $('.mapplic-map'),
			x = (e.pageX - map.offset().left) / map.width(),
			y = (e.pageY - map.offset().top) / map.height();
			
		$('.mapplic-coordinates-x').text(parseFloat(x).toFixed(4));
		$('.mapplic-coordinates-y').text(parseFloat(y).toFixed(4));
	});

	$(document).on('change', '.mapplic-levels-select', function(e) {
		setTimeout(function(){
			$('.mapplic-map').css('left','0px');
			$('.mapplic-map').css('top','41.5px');
			$('.mapplic-map').css('width','819px');
			$('.mapplic-map').css('height','567px');
			
			origional='819';
			var width=parseFloat($('.mapplic-map').css('width'));
			console.log(width);
			
			
			devide=(width/origional);
			
			changestyle(devide);
		}, 300);
		
	});
	
	$(document).on('click', '.mapplic-levels-up,.mapplic-levels-down', function(e) {
		//var width1=parseFloat($('.mapplic-map').css('width'));
		setTimeout(function(){
			$('.mapplic-map').css('left','0px');
			$('.mapplic-map').css('top','41.5px');
			$('.mapplic-map').css('width','819px');
			$('.mapplic-map').css('height','567px');
			
			origional='819';
			var width=parseFloat($('.mapplic-map').css('width'));
			console.log(width);
			
			
			devide=(width/origional);
			
			changestyle(devide);
		}, 300);
		
	});
		
	$(document).on('dblclick', '.mapplic-map', function(e) {
		var width1=parseFloat($('.mapplic-map').css('width'));
		
		setTimeout(function(){
			origional='819';
			var width=parseFloat($('.mapplic-map').css('width'));
			console.log(width);
			if(width1=='819'){
						//$('.mapplic-map').css('left','0px');
						//$('.mapplic-map').css('top','41.5px');
						$('.mapplic-map').css('width','1638px');
						$('.mapplic-map').css('height','1134px');
						//return false;
			}
			
			devide=(width/origional);
			
			changestyle(devide);
			
		}, 500);
	});
	//left: 0px; top: 41.5px; width: 819px; height: 567px;
	//$(document).on('dblclick', '.mapplic-map', function(e) {
	$(document).on('mousemove', '.mapplic-layer', function(e) {
		var width1=parseFloat($('.mapplic-map').css('width'));
		setTimeout(function(){
			origional='819';
			var width=parseFloat($('.mapplic-map').css('width'));
			if(width1=='819'){
						//$('.mapplic-map').css('left','0px');
						//$('.mapplic-map').css('top','41.5px');
						//$('.mapplic-map').css('width','1638px');
						//$('.mapplic-map').css('height','1134px');
						//return false;
			}
			devide=(width/origional);
			//console.log(width+':'+origional+'='+devide);
			changestyle(devide);
		}, 1000);
	});
	
	$(document).on('click', '.mapplic-levels-up,.mapplic-levels-down,.mapplic-zoomout-button,.mapplic-zoomin-button,.mapplic-list-shown', function(e) {
		setTimeout(function(){
			origional='819';
			var width=parseFloat($('.mapplic-map').css('width'));
			devide=(width/origional);
			//console.log('dha'+devide);
			changestyle(devide);
		}, 2000);
	});
	//mapplic-map
	$('.editor-window .window-mockup').click(function() {
		$('.editor-window').slideUp(200);
	});
	function changestyle(mul){
			$('.mapplic-pin').each(function(i, obj) {
					
					var class1=$(this).attr('class').split(' ')[1];
					
					var width1='38';
					var height='26';
					var top1='-23';
					var left1='-9';
					if(class1=='pin_1'){
						width1='79';
						height='84';
						top1='-48';
						left1='-53';
					}
					else if(class1=='pin_2'){
						width1='61';
						height='46';
						top1='-28';
						left1='-35';
					}
					else if(class1=='pin_3'){
						height='18';
						top1='-11';
						left1='-16';
					}
					else if(class1=='pin_4'){
						
						height='27';
						top1='-11';
						left1='-16';
					}
					else if(class1=='pin_5'){
						/*width1='160';
						height='71';
						top1='-39';
						left1='-81';*/
						width1='51';
						height='25';
						top1='-11';
						left1='-20';
					}
					else if(class1=='pin_6'){
						width1='24';
						height='18';
						top1='-14';
						left1='-9';
					}
					else if(class1=='pin_7'){
						width1='36';
						height='38';
						top1='-20';
						left1='-18';
					}
					else if(class1=='pin_8'){
						width1='14';
						height='55';
						top1='-33';
						left1='-7';
					}
					else if(class1=='pin_9'){
						width1='45';
						height='32';
						top1='-15';
						left1='-19';
					}
					else if(class1=='pin_10'){
						width1='44';
						height='30';
						top1='-22';
						left1='-20';
					}
					else if(class1=='pin_11'){
						width1='87';
						height='32';
						top1='-23';
						left1='-41';
					}
					else if(class1=='pin_12'){
						width1='115';
						height='55';
						top1='-32';
						left1='-54';
					}
					else if(class1=='pin_13'){
						width1='8';
						height='68';
						top1='-33';
						left1='-4';
					}
					else if(class1=='pin_14'){
						width1='71';
						height='13';
						top1='-11';
						left1='-38';
					}
					else if(class1=='pin_15'){
						width1='21';
						height='35';
						top1='-21';
						left1='-10';
					}
					else if(class1=='pin_16'){
						width1='143';
						height='26';
						top1='-23';
						left1='-77';
					}else if(class1=='pin_17'){
						width1='11';
						height='26';
						top1='-23';
						left1='-4';
					}else if(class1=='pin_18'){
						height='12';
						top1='-9';
						width1='31';
						left1='0';
					}else if(class1=='pin_19'){
						height='8';
						top1='-6';
						width1='7';
						left1='-5';
					}else if(class1=='pin_20'){
						height='14';
						top1='-6';
						width1='48';
						left1='-23';
					}
					else if(class1=='pin_21'){
						height='8';
						top1='-6';
						width1='14';
						left1='-5';
					}
					else{
						   /* width1='38';
							height='26';
							top1='-23';
							left1='-9';*/
						height='8';
						top1='-6';
						width1='7';
						left1='-5';
					}
					
					
					$(this).css('width',(width1*mul)+'px');
					$(this).css('height',(height*mul)+'px');
					$(this).css('margin-top',(top1*mul)+'px');
					$(this).css('margin-left',(left1*mul)+'px');
				});
}
});



/* Google Analytics */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-44321017-4', 'mapplic.com');
ga('send', 'pageview');