describe('Task Filter:', function() {

	var $filter;

  	beforeEach(module('TaskApp.filters'));


  	describe('Test: taskSearchFilter should take a string and turn it into an array', function() {

	it('Test', inject(function(taskSearchFilterFilter) {
		$filter = taskSearchFilterFilter;

		expect($filter("String") == (['S', 't', 'r', 'i', 'n', 'g']));

		console.log($filter("Task"));

		expect($filter("Task").length == 4 ).toBe(true);

		console.log("Filter Length Test Passed");

		expect($filter("Task")).toEqual([ 'T', 'a', 's', 'k' ]);

		console.log("Filter Output Type Test Passed")

	}));
  });
});

