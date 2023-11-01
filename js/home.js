//Clock
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var d = String(date.getDate()).padStart(2, '0');
	weekday=week();
    var day = weekday[date.getDay()];

    if (h == 0) {
        h = 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m;
    document.getElementById("time").innerText = time;
    document.getElementById("day").innerText = day;
    setTimeout(showTime, 1000);

}

showTime();

// Currently Working on Text Animation
const allElements = document.querySelectorAll('.animated-text');

if (allElements.length > 0) {
    allElements.forEach((element) => {
        const txtElement = element,
            wordsList = txtElement.getAttribute('words'),
            words = wordsList.split(', ');

        let wordsCount = 0;

        entry();

        function entry() {
            if (wordsCount < words.length) {
                let word = words[wordsCount] + '.',
                    txtArr = word.split(''),
                    count = 0;

                txtElement.textContent = '';

                txtArr.forEach((letter) => {
                    let _letter = letter === ' ' ? '&nbsp;' : letter;
                    txtElement.innerHTML += `<span>${_letter}</span>`;
                });

                let spans = txtElement.childNodes;

                const letterInterval = setInterval(activeLetter, 70);

                function activeLetter() {
                    spans[count].classList.add('active');
                    count++;

                    if (count === spans.length) {
                        clearInterval(letterInterval);
                        setTimeout(() => {
                            eraseText();
                        }, 600);
                    }
                }

                function eraseText() {
                    let removeInterval = setInterval(removeLetter, 40);
                    count--;

                    function removeLetter() {
                        spans[count].classList.remove('active');
                        count--;

                        if (count === -1) {
                            clearInterval(removeInterval);
                            wordsCount++;

                            entry();
                        }
                    }
                }
            } else {
                wordsCount = 0;
                entry();
            }
        }
    });
}

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
	
	if (screen.width < 501) {
		hr_rotation = hr_rotation - 90;
		min_rotation = min_rotation - 90;
		sec_rotation =sec_rotation - 90;
	}
  
	var n= day + ' ' + da
	$('#day2').empty().append(n)
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    style.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

setTimeout(() => {
$(".profile").removeClass("profile_anim")
}, 400);