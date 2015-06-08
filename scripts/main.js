'use strict';

(function() {
	var borrowed = [],
		addItem = function(who, what, when) {
			borrowed.push({
				who: who,
				what: what,
				when: when
			});
		};

	addItem('dan', 'the good parts', new Date().now());

	console.log(borrowed);
}());