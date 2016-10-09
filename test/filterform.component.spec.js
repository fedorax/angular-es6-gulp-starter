describe('FillterForm Component', function(){

	var $componentController;

	beforeEach(module('myflight'));

	beforeEach(inject(function(_$componentController_) {
	    $componentController = _$componentController_;
	}));

	it('should have uiState defined', function(){
		var ctrl = $componentController('filterForm',null);
	});

});