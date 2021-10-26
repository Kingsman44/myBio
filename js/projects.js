setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    weekday = week();
	var da = String(d.getDate()).padStart(2, '0');
    var day = weekday[d.getDay()];
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
  
	var n= day + ' ' + da
	$('#day').empty().append(n)
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    style.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
