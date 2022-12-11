var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}

var postApi = 'https://disease.sh/v3/covid-19/countries/vn'

fetch(postApi)
    .then(function (response) {
        return response.json()

    })
    .then(function (news) {
        console.log(news.countryInfo.flag)
        var cases = news.cases
        var deaths = news.deaths
        var todayCases = news.todayCases
        var todayDeaths = news.todayDeaths
        var recovered = news.recovered
        var todayRecovered = news.todayRecovered
        var flagg = news.countryInfo.flag
        document.getElementById('item cases').innerHTML = "Tổng số ca : " + cases
        document.getElementById('item deaths').innerHTML = "Tổng số thiệt mạng : " + deaths
        document.getElementById('item todayCases').innerHTML = "Số ca mới trong ngày : " + todayCases
        document.getElementById('item todayDeaths').innerHTML = "Số thiệt mạng trong ngày : " + todayDeaths
        document.getElementById('item recovered').innerHTML = "Tổng số phục hồi : " + recovered
        document.getElementById('item todayRecovered').innerHTML = "Số phục hồi trong ngày : " + todayRecovered
        document.getElementById("flag").src = flagg
    })


n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("DateTime").innerHTML = "Ngày: " + d + ", Tháng: " + m + ", Năm: " + y;