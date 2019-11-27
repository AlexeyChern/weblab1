document.getElementById("input-form").addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();
    $(function find() {
        let wAPI = $.getJSON('https://api.openweathermap.org/data/2.5/weather?appid=9d5b59f6e7f7e77586dc0269e6d0438a', {q: cityName.value})
            .done(function (data) {
                let template = $("#template").html();
                let text = Mustache.render(template, data);
                $("#panel").html(text);
            })
            .fail(function (error) {
                if (error !== null) {
                    document.getElementById('panel').innerText = 'City not found';
                } else {
                    document.getElementById('panel').innerText = 'Server error';
                }
            })
    });
}
