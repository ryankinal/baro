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
		var fragment = document.createDocumentFragment();

		borrowed.forEach(function(item) {
			var when = new Date(item.when),
				formatted = when.toLocaleString(),
				listItem = document.createElement('li'),
				text = document.createTextNode(item.who + ' has my ' + item.what + ' (' + formatted + ')');

			listItem.appendChild(text);
			fragment.appendChild(listItem);
		});

		list.appendChild(fragment);
	};

	addItem('dan', 'the good parts', Date.now());
	addItem('dan', 'the good parts', Date.now());
	addItem('dan', 'the good parts', Date.now());
	addItem('dan', 'the good parts', Date.now());

	console.log(borrowed);

	render();
}());