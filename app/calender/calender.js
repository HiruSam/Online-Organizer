angular
    .module('OnlineOrganizer')
    .factory('alert', function($uibModal) {

        function show(action, event) {
            return $uibModal.open({
                controller: function() {
                    let oc = this;
                    oc.action = action;
                    oc.event = event;
                },
                controllerAs: 'oc'
            });
        }

        return {
            show: show
        };

    });