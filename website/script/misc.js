// JavaScript Document

function mapSelect(map) {
	var maps = ['towny_map','coal_deposits','iron_deposits','gold_deposits','diamond_deposits']
	
	for (var i = 0; i < maps.length; i++) {
		var x = document.getElementById(maps[i])
		if (i === map) {
			x.style.display = 'block';
		} else {
			x.style.display = 'none';
		}
	}	
}