var lightmode = document.getElementById('inner-switch');

// Dark Mode

$(".inner-switch").on("click", function() {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("html").removeClass("dark");
        document.documentElement.setAttribute('mode', 'light');
        localStorage.setItem('lightmode', 'true');
    } else {
        $("body").addClass("dark");
        $("html").addClass("dark");
        document.documentElement.setAttribute('mode', 'dark');
        localStorage.setItem('lightmode', 'false');
    }
});

if (localStorage.getItem('lightmode') === 'true') {
    $("body").removeClass("dark");
    $("html").removeClass("dark");
    document.documentElement.setAttribute('mode', 'light');
} else {
    document.documentElement.setAttribute('mode', 'dark');
}

if (localStorage.hasOwnProperty('theme')) {
    document.documentElement.setAttribute('theme', localStorage.getItem('theme'));
}

var theme = document.documentElement.getAttribute('theme');

function themes() {
    if (theme == "lily") {
        monet = "#3c4219";
    } else if (theme == "pin") {
        monet = "#54320f";
    } else if (theme == "helle") {
        monet = "#452739";
    } else if (theme == "orchid") {
        monet = "#521F16";
    } else if (theme == "moth") {
        monet = "#3D3C46";
    }
}

themes();

//Clock

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var d = String(date.getDate()).padStart(2, '0');

    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    var month = new Array(13);
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    var mm = month[date.getMonth()];
    var day = weekday[date.getDay()];

    if (h == 0) {
        h = 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m;
    var t = h + ":" + m + '\n\n' + day + ', ' + mm + ' ' + d
    document.getElementById("time").innerText = time;
    document.getElementById("time1").innerText = t;
    document.getElementById("day").innerText = day;
    setTimeout(showTime, 1000);

}

showTime();

// Navbar

$(document).ready(function() {

    // show/hide the mobile menu based on class added to container
    $('.menu-icon').click(function() {
        $(this).parent().toggleClass('is-tapped');
        $('#hamburger').toggleClass('open');
    });

    $('#navclose').click(function() {
        $("#nav").removeClass('is-tapped');
        $("#hamburger").removeClass('open');
    });
});


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

if (screen.width < 501) {
	onclick_on=false;
} else {
	onclick_on=true;
}

// Background Animation
animation = {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": monet
        },
        "shape": {
            "type": "triangle",
            "stroke": {
                "width": 0,
                "color": monet
            },
            "polygon": {
                "nb_sides": 10
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": monet,
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": onclick_on,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 100,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

particlesJS("particles-js", animation);

function set_theme(x) {
    document.documentElement.setAttribute('theme', x);
    if (x == "lily") {
        monet = "#3c4219";
    } else if (x == "pin") {
        monet = "#54320f";
    } else if (x == "helle") {
        monet = "#452739";
    } else if (x == "orchid") {
        monet = "#521F16";
    } else if (x == "moth") {
        monet = "#3D3C46";
    }
    localStorage.setItem('theme', x);
    $.each(pJSDom[0].pJS.particles.array, function(i, p) {
        pJSDom[0].pJS.particles.array[i].color.value = monet;
        pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(monet);
        pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(monet);
    });

}