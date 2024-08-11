#!/usr/bin/node
/*
 * Listen for changes on the input tag and act accordingly
 */

$(function () {
	var $checked = {};
	var $mn = $(".amenities li input");
	var $updateHeader = $(".amenities h4");

	$mn.each(function (index, element){
		$(element).change(function (index){
			var $identity = $(this).attr('data-id');
			if (this.checked) {
				$checked[$identity] = $(this).attr('data-name');
			}
			else {
				delete $checked[$identity];
			}
			var count = 0;
			var headContent= "";
			$.each($checked, function (key, val) {
				if (count === 0) {
					headContent = val;
				}
				else {
					headContent = headContent + ', ' + val;
				}
				count++;
			});
			if (headContent.length === 0) {
				$updateHeader.html('&nbsp;');
			} else {
				$updateHeader.text(headContent);
			}
		})
	});
});
