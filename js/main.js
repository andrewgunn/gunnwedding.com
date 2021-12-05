(function () {
    window.addEventListener('DOMContentLoaded', function(){
        document.getElementById('wrapper').style.display = 'block';
    });
})();

(function () {
    var countdownDate = new Date('Jun 2, 2023 16:00:00 GMT+0200').getTime();
    var updateCountdown = function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;
    var years = 0;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    if (days > 365) {
        years = Math.floor(days / 365);
        days = days % 365;
    }

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var innerHtml = '<ul class="list-inline">';
    if (years) {
        innerHtml += `<li class="list-inline-item">${years}</li><li class="list-inline-item">${(years === 1 ? 'year' : 'years')}</li>`;
    }

    if (days > 0) {
        innerHtml += `<li class="list-inline-item">${days}</li><li class="list-inline-item">${(days === 1 ? 'day' : 'days')}</li>`;
    }
    else
    {
        if (days > 0 || hours > 0) {
            innerHtml += `<li class="list-inline-item">${hours}</li><li class="list-inline-item">${(hours === 1 ? 'hour' : 'hours')}</li>`;
        }
        
        if ((days > 0 && hours > 0) || minutes > 0) {
            innerHtml += `<li class="list-inline-item">${minutes}</li><li class="list-inline-item">${(minutes === 1 ? 'minute' : 'minutes')}</li>`;
        }
        innerHtml += `<li class="list-inline-item">${seconds}</li><li class="list-inline-item">${(seconds === 1 ? 'second' : 'seconds')}</li>`;
    }

    innerHtml += '<li class="list-inline-item">to go</li>'
    innerHtml += '</ul>'
    document.getElementById('countdown').innerHTML = innerHtml;

    if (distance < 0) {
        clearInterval(intervalId);
        document.getElementById('countdown').innerHTML = '👰💒🥂';
    }
    };
    updateCountdown();
    var intervalId = setInterval(updateCountdown, 1000);
})();