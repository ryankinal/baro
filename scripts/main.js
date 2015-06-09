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

		borrowed.forEach(function(item, index) {
			var when = new Date(item.when),
				formatted = when.toLocaleString(),
				listItem = document.createElement('li'),
				text = document.createTextNode(item.who + ' has my ' + item.what + ' (' + formatted + ')'),
				del = document.createElement('a');

			del.appendChild(document.createTextNode('X'));
			del.href = '#';

			del.addEventListener('click', function(e) {
				borrowed.splice(index, 1);
				render();
				e.preventDefault();
			});

			listItem.appendChild(text);
			listItem.appendChild(del);
			fragment.appendChild(listItem);
		});

		list.innerHTML = '';
		list.appendChild(fragment);
	};

	form.addEventListener('submit', function(e) {
		var who = whoInput.value,
			what = whatInput.value,
			when = new Date(whenInput.value);

		addItem(who, what, when.getTime());
		render();

		e.preventDefault();
		return false;
	});

	render();
}());