(function ($) {
    let intervalID = window.setInterval(function () {
        refreshCountdown(element, timeUpCallback);
    }, 1000);

    let element = $('.countdown');
    const dayX = new Date('01 Dec 2018 00:09:30 GMT+01').getTime();
    // const dayX = new Date('24 Nov 2018 03:31:05 GMT+01').getTime();

    let refreshCountdown = function (element, finishCallback) {
        let t = getRemainingTime(dayX);
        let days, hours, minutes, seconds;

        if ((t.days + t.hours + t.minutes + t.seconds) < 1) {
            t.days = t.hours = t.minutes = t.seconds = 0;
            finishCallback()
        }

        days = ('0' + t.days).slice(-2);
        hours = ('0' + t.hours).slice(-2);
        minutes = ('0' + t.minutes).slice(-2);
        seconds = ('0' + t.seconds).slice(-2);

        $(element).text(`${days}T ${hours}:${minutes}:${seconds}`);
    };

    function getRemainingTime(endTime) {
        let now = new Date().getTime();
        let remainingTime = endTime - now;
        let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000 * 60)) / (1000));

        return {
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function timeUpCallback() {
        element.toggle();
        $('.finish-message').addClass('visible')
    }
})(jQuery);


