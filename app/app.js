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

        oc.interval = function ($event) {

            let expireDate = 18360 * 24 * 60 * 60;
            let nTime = Math.floor(Date.now()/1000);
            let remaining = expireDate - nTime;
            $event.rDays = parseInt(remaining/60/60/24);
            $event.rHours = parseInt((remaining - ($event.rDays*60*60*24))/60/60);
            $event.rMinutes = parseInt((remaining - ($event.rDays*60*60*24) - ($event.rHours*60*60))/60);
            $event.rSeconds = parseInt(remaining - ($event.rDays*60*60*24) - ($event.rHours*60*60) - ($event.rMinutes*60));
        },1000;

        oc.eventExpired = function ($event,nTime,nDate) {
            let i;
            const Nowtime = new Date();
            const nowTime = Nowtime.toLocaleDateString();

            let deleteEv = document.getElementById('deleteItem');

            for (i = 0; i < $event.length; i++) {
                if (($event[i].nTime.toLocaleTimeString() <= nowTime) &&
                    ($event[i].nDate.toLocaleDateString() == $event.myDate.toLocaleDateString())) {
                    deleteEv.click();
                }
            }
        };

    });
