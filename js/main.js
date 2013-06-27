$(document).ready(function(){
	
	//Add 'active' class to aside main nav corresponding to
	//scroll position
	$('body').scrollspy({ target: 'aside' });
	
	//Initialize tabs, show only first tab
	$tabs = $('.work-tabs-body li')
	$tabs.hide();
	$tabs.first().show();

	//Tabs on-click even handler
	$tabHeader = $('.work-tabs-header li a')
	$tabHeader.on("click", function(e){
		e.preventDefault();
		
		//Find id of clicked tab from the href of tab-header
		$desiredTab = $(this).attr("href");

		//Hide visible tabs, show desired tab
		$tabs.hide();
		$($desiredTab).show("clip", 1000);
	});

});