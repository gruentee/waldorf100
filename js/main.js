(function ($) {

    let intervalID = window.setInterval(function () {
        refreshCountdown(element);
    }, 1000);

    let element = $('.countdown');
    let dayX = new Date('01 Dec 2018 00:09:30 GMT+01').getTime();

    let refreshCountdown = function (element) {
        // TODO: handle end of countdown
        let t = getRemainingTime(dayX);
        let days = ('0' + t.days).slice(-2);
        let hours = ('0' + t.hours).slice(-2);
        let minutes = ('0' + t.minutes).slice(-2);
        let seconds = ('0' + t.seconds).slice(-2);

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
})(jQuery);


