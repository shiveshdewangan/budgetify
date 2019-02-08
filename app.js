var budgetController = (function(){

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};

	return {
		addItem: function(type, des, val) {
			var newItem;

			if (type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if (type === 'inc') {
				newItem = new Income(ID, des, val);
			}

		}
	}

})();

var UIController = (function(){

	var DOMStrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputButton: '.add__btn'
	}

	return {
		getInput: function(){
			return {
				type: document.querySelector(DOMStrings.inputType).value,
				description: document.querySelector(DOMStrings.inputDescription).value,
				value: document.querySelector(DOMStrings.inputValue).value
			}
		},

		getDOMStrings: function() {
			return DOMStrings;
		}
	};

})();

var controller = (function(budgetCtrl, UICtrl){

	var setupEventListeners = function() {
		document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(e){
			if (e.keyCode === 13 || e.which === 13) {
				ctrlAddItem();
			}
		})
	}

	var DOM = UICtrl.getDOMStrings();

	var ctrlAddItem = function() {
		var input = UICtrl.getInput();
		console.log(input);
		console.log(DOM);
	}

	return {
		init: function(){
			console.log('Application has started.');
			setupEventListeners();
		}
	}

})(budgetController, UIController);

controller.init();











