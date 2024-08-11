#!/usr/bin/node
/*
 * Listen for changes on the input tag and act accordingly
 */

$(function () {
	$statusIndicator = $('header #api_status');
	$.ajax({
		type: "GET",
		url: "http://localhost:5001/api/v1/status",
		success: function (data, status, xhr){
			if (xhr.status === 200) {
				$statusIndicator.addClass('available');
			}
			else {
				$statusIndicator.removeClass('available');
			}
		},
		error: function (status) {
			$statusIndicator.removeClass('available');
		}
	});
});
