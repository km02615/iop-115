			function init() {

			  window.addEventListener('scroll', function (e) {
			    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			      shrinkOn = 300,
			      header = document.querySelector("header");
			    if (distanceY > shrinkOn) {
			      classie.add(header, "smaller");
			    } else {
			      if (classie.has(header, "smaller")) {
			        classie.remove(header, "smaller");
			      }
			    }
			  });
			}
			$.ajax({
			  method: 'GET',
			  url: 'assets/data/menu.json',
			  dataType: 'json',
			  success: function (data) {


			    if (data.menu.length > 0) {
			      data.menu.forEach(function (data) {


			        console.log(data.menuName);
			        console.log(data.menuLink);

			        $('nav').append('<a href="' + data.MenuLink + '"> ' + data.MenuName + '</nav>');

			      });
			    }
			  },
			  error: function () {
			    console.log('all not good');
			  }
			});

			window.onload = init();
