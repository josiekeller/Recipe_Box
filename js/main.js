$(document).ready(function(){
	// Set the interval to be 5 seconds
	var t = setInterval(function(){
		$("#carousel ul").animate({marginLeft:-800},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},5000);
});

$(".header").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(200, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse Recipe >>" : "View Recipe >>";
        });
    });

});