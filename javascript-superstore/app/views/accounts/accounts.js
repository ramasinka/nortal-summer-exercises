(function() {

var usersDataURL = "https://reqres.in/api/users?per_page=100";
  $.getJSON( usersDataURL, {
    format: "json"
  })

	"use strict";

	angular.module('app.accounts', ['ui.router'])

	/* Route
	/*------------------------------------------------*/

	.config(['$stateProvider', function($stateProvider) {
		// Parent state
		$stateProvider.state('default.accounts', {
			url: '/accounts',
			views: {
				"main@default": {
					templateUrl: './views/accounts/accounts.html',
					controller: ViewCtrl,
					controllerAs: 'vm'
				}
			},
			data: {
				title: 'Superstor | Accounts'
			}
		});

	}]);

	// Inject
	ViewCtrl.$inject = ['$scope'];

	// Controller for navigation component
	function ViewCtrl($scope) {
		var vm;

		// Controller on init
		this.$onInit = function() {
			vm = this;
			vm.rows = [];

            // JSON data from URL
            $.getJSON("https://reqres.in/api/users?per_page=100", function (data) {
                vm.page = 0;
                    $.each(data.data, function(i, info) {
			            vm.rows.push({ id: info.id, name: info.first_name, img: info.avatar})
                    });
			vm.add = add;

            });
		};

		// Controller on destroy
		this.$onDestroy = function() {
			// Unbind rootscope listeners
		};


		// Functions

		/**
		 *	Function that adds to a table
		 */
		function add() {
			if (vm.name.indexOf('ä') > -1 || vm.name.indexOf('õ') > -1 || vm.name.indexOf('ü') > -1 || vm.name.indexOf('ö') > -1) {
				vm.name = undefined;
			}
			vm.rows.push({
				id: vm.id,
				name: vm.name
			});
			vm.id = undefined;
			vm.name = undefined;
		}
	}

})();
