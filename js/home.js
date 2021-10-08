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

theme=document.documentElement.getAttribute('theme');

function themes(){
if (theme == "lily") {
	monet="#535C23";
} else if (theme == "pin") {
	monet="#482B0D";
} else if (theme == "helle") {
	monet="#2A1823";
} else if (theme == "orchid") {
	monet="#521F16";
} else if (theme == "moth") {
	monet="#3D3C46";
}
}

themes();

//Clock

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
	
	var weekday = new Array(7);
	weekday[0] = "Sun";
	weekday[1] = "Mon";
	weekday[2] = "Tue";
	weekday[3] = "Wed";
	weekday[4] = "Thu";
	weekday[5] = "Fri";
	weekday[6] = "Sat";

	var day = weekday[date.getDay()];
    
    if(h == 0){
        h = 12;
    }
      
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m;
    document.getElementById("time").innerText = time;
	document.getElementById("time1").innerText = time;
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

$('document').ready(function () {


		// RESTYLE THE DROPDOWN MENU
    $('#google_translate_element').on("click", function () {

        // Change font family and color
        $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
            .css({
                'color': '#544F4B',
                'font-family': 'Roboto',
				'width':'100%'
            });
        // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');
			
		// Change menu's padding
        $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');
      
        // Change the padding of the languages
        $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');
      
        // Change the width of the languages
        $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
        $("iframe").contents().find('td').css('width', '100%');
      
        // Change hover effects
        $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
            $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
        }, function () {
            $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
        });

        // Change Google's default blue border
        $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

        // Change the iframe's box shadow
        $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');
        
      
      
        // Change the iframe's size and position?
        $(".goog-te-menu-frame").css({
            'height': '70%',
            'width': 'auto',
			'position': 'relative !important',
            'top': '63px !important',
        });
        // Change iframes's size
        $("iframe").contents().find('.goog-te-menu2').css({
            'height': '100%',
            'width': '100%'
        });
        $("iframe").contents().find('.skiptranslate').css({
            'visibility': 'none',
        });
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
				let word = words[wordsCount],
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

// Background Animation
function back() {
animation={
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 800
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
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
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
        "enable": false,
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
        "enable": true,
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
}
back();
particlesJS("particles-js",animation);

function set_theme(x) {
	document.documentElement.setAttribute('theme', x);
if (x == "lily") {
	monet="#535C23";
} else if (x == "pin") {
	monet="#482B0D";
} else if (x == "helle") {
	monet="#2A1823";
} else if (x == "orchid") {
	monet="#521F16";
} else if (x == "moth") {
	monet="#3D3C46";
}
	back();
	$("#particles-js").empty();
	particlesJS("particles-js",animation);
}