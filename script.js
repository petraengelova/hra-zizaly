$(document).ready(function(){

		var hrac = 1;

	$(".policko").click(function tah1(){
		$(".policko").removeClass("sfigurkou" + hrac);
		$(this).addClass("sfigurkou" + hrac);
		$(".policko").removeClass("obefigurky");

		var cislo1 = Math.floor(Math.random() * 100);
		var cislo2 = Math.floor(Math.random() * 100);
		var vysledek = cislo1 + cislo2;

		if($(this).data("skok")){
			var cilskoku = $(this).data("skok");
			var odpoved = window.prompt("kolik je " + cislo1 + "+" + cislo2);

			if(odpoved == vysledek){
				$(".policko" + cilskoku).addClass("sfigurkou" + hrac);
			$(this).removeClass("sfigurkou" + hrac);
			} else {
				alert("neuhodl jsi");
			};

		} else 
			if($(this).data("pad")){
				var cilskoku = $(this).data("pad");
				var odpoved = window.prompt("kolik je " + cislo1 + "+" + cislo2);

			if(odpoved != vysledek){
				$(".policko" + cilskoku).addClass("sfigurkou" + hrac);
				$(this).removeClass("sfigurkou" + hrac);



			} else {
				alert("uhodl jsi");
			};
			}

		/*if($(this).hasClass("sfigurkou1")) && ($(this).hasClass("sfigurkou2")){
        	$(this).addClass("obefigurky");
		};*/

		hrac++;

		if(hrac == 3){
			hrac=1;
		}

	});

		$("#kostka").click(function(){
			var kostka = Math.floor(Math.random() * 6) + 1;
			alert(kostka);
			
		});

});
