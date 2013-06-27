$(document).ready(function(){
	
	//Add 'active' class to aside main nav corresponding to
	//scroll position
	$('body').scrollspy({ target: 'aside' });
	
	//Initialize tabs
	$tabs = $('.work-tabs-body li')
	$tabHeader = $('.work-tabs-header li')
	$tabs.hide();
	
	//Show first tab and add active style to its header
	$tabs.first().show();
	$tabHeader.first().addClass('active-tab-header');


	//Tabs on-click even handler
	$tabHeader.on("click", "a", function(e){
		e.preventDefault();
		
		//Remove active style from current tab header
		//Add active style to clicked tab header
		$('.active-tab-header').removeClass();
		$(this).closest('li').addClass('active-tab-header')

		//Find clicked tab from the href attribute
		$desiredTab = $(this).attr("href");

		//Hide visible tabs & show desired tab
		$tabs.hide();
		$($desiredTab).show("clip", 1000);
	});

});