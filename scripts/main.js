'use strict';

(function() {
	var borrowed = [],
		list = document.getElementById('stuff'),
		form = document.getElementById('input'),
		whoInput = document.getElementById('whoInput'),
		whatInput = document.getElementById('whatInput'),
		whenInput = document.getElementById('whenInput');
	
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

	form.addEventListener('submit', function() {
		var who = whoInput.value,
			what = whatInput.value,
			when = new Date(parseInt(whenInput, 10));

		addItem(who, what, when.getTime());
		render();

		return false;
	});

	addItem('dan', 'the good parts', Date.now());
	addItem('dan', 'the good parts', Date.now());
	addItem('dan', 'the good parts', Date.now());
	addItem('dan', 'the good parts', Date.now());

	console.log(borrowed);

	render();
}());