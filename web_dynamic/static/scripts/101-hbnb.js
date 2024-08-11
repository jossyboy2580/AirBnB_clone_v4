#!/usr/bin/node
/*
 * Listen for changes on the input tag and act accordingly
 */

$(function () {
	$placesSection = $('section.places');
	$.ajax({
		type: "POST",
		url: "http://localhost:5001/api/v1/places_search",
		data: JSON.stringify({}), contentType: 'application/json',
		success: function (data, status, xhr){
			for (place of data) {
				$placeSection.append(`
				<article>
				<div class="title_box">
				<h2>${place.name}</h2>
				<div class="price_by_night">
				${place.price_by_night}
				</div>
				</div>
				<div class="information">
				<div class="max_guest">${place.max_guest} Guest${place.max_guest != 1 ? 's' : ''}</div>
				<div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms != 1 ? 's': ''}</div>
				<div class="number_bathrooms">${place.number_bathrooms} Bathrooms${place.number_bathrooms != 1 ? 's' : ''}</div>
				</div>
				<div class="user">
				<b>Owner:</b> ${place.user.first_name} ${place.user.last_name}</div>
				<div class="description">${place.description | safe}</div>
				</article>
					`);
			}

		},
		error: function () {
			console.log('error');
		}
	});
});
