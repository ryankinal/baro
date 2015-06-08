'use strict';

(function() {
	var borrowed = [],
		list = document.getElementById('stuff');
	
	var addItem = function(who, what, when) {
			borrowed.push({
				who: who,
				what: what,
				when: when
			});
		};

	var render = function() {
		borrowed.forEach(function(item) {
			var listItem = document.createElement('li'),
				text = document.createTextNode(item.who + ' has my ' + item.what + '(' + item.when ')');

			listItem.appendChild(text);
			list.appendChild(listItem);
		});
	};

	addItem('dan', 'the good parts', Date.now());

	console.log(borrowed);

	render();
}());