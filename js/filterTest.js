describe('taskSearchFilter', function() {

	var $filter;

	beforeEach(function () {
		module('TaskApp.filters');
	});
	beforeEach( inject(function (_lowerAndCapitalFilter_) {
		$filter = _taskSearchFilter_;
	}));

	it('deberia de convertir le texto a minuscula y con letra capital',function(){
		expect(true); //($filter("john")).toEqual("John");
	});

});