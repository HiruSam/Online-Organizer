angular.module('OnlineOrganizer', ['mwl.calendar', 'ngAnimate', 'ui.bootstrap', 'colorpicker.module']);
angular
    .module('OnlineOrganizer')
    .controller('OnlineController', function(moment, alert, calendarConfig) {

        let oc = this;

        oc.calendarView = 'month';
        oc.viewDate = new Date();

        oc.addEvent = function() {
            oc.events.push({
                title: 'New event',
                startsAt: moment().startOf('day').toDate(),
                endsAt: moment().endOf('day').toDate(),
                draggable: true,
                resizable: true
            });
        };
        oc.eventEdited = function(event) {
            alert.show('Edited', event);
        };

        oc.eventDeleted = function(event) {
            alert.show('Deleted', event);
        };

        oc.eventTimesChanged = function(event) {
            alert.show('Dropped or resized', event);
        };

        oc.toggle = function($event, field, event) {
            $event.preventDefault();
            $event.stopPropagation();
            event[field] = !event[field];
        };



    });
