
var varurl = document.URL;

const main_sliderbox_image_img = document.querySelector("#main_sliderbox_image_img");
const main_sliderbox_image = document.querySelector("#main_sliderbox_image");
const main_sliderbox_descriptions = document.querySelector("#main_sliderbox_descriptions");
const main_descriptions = document.querySelector("#main_descriptions");
const main_spec_watchdogs = document.querySelector("#main_spec_watchdogs");
const main_spec_meatboy = document.querySelector("#main_spec_meatboy");
const main_spec_cuphead = document.querySelector("#main_spec_cuphead");
const main_spec_rayman = document.querySelector("#main_spec_rayman");
const main_spec_fallguys = document.querySelector("#main_spec_fallguys");
const main_spec_gearsofwar = document.querySelector("#main_spec_gearsofwar");
const main_spec_eldenring = document.querySelector("#main_spec_eldenring");
const main_spec_dune = document.querySelector("#main_spec_dune");
const main_spec_cyberpunk2077 = document.querySelector("#main_spec_cyberpunk2077");
const main_spec_witcher = document.querySelector("#main_spec_witcher");
var tag = document.createElement("p");
/*
async function fetchAsync(name) {
    let url = 'http://146.59.44.209/api/product/show.php?'+name;
    let response = await fetch(url);
    let product = await response.json();
    return product;
}

//const params = new URLSearchParams(window.location.search);
if(varurl.includes("product_id=1"))
{
    //fetchAsync("product_id=1");
    //var product = params.get("product_id");
    //main_sliderbox_descriptions.innerHTML = <h1>{{product.title}}</h1> 
    main_sliderbox_image.innerHTML = "<iframe width='100%' height='500' src='https://www.youtube.com/embed/DqoQG_XYF-8?'  title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    //main_sliderbox_image_img.src = "../images/watchdogs.jpg";
    //main_sliderbox_descriptions.innerHTML = "<h1>Watchdogs</h1><p>Rok produkcji: 2014<br/>Producent: Ubisoft<br/>Forma: CD-Key</p><p>Cena:</p><h1>120PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Watch Dogs to przygodowa gra akcji o otwartym świecie wyprodukowana przez Ubisoft Montreal. Gra została wydana 27 maja 2014 roku[6]. Jest to zawierający wpływy cyberpunkowe tytuł, który umożliwia graczowi włamywanie się do różnych systemów elektronicznych, co pomaga mu w osiągnięciu jego celów. Produkcja została zaprezentowana po raz pierwszy podczas konferencji prasowej Ubisoftu. ";
    main_descriptions.appendChild(tag);
    main_spec_watchdogs.style.display = "inline";
}
if(varurl.includes("product_id=2"))
{
    main_sliderbox_image.innerHTML = "<iframe width='100%' height='500' src='https://www.youtube.com/embed/eILvkKnMxWY' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    //main_sliderbox_image_img.src = "../images/meatboy.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Super Meat Boy</h1><p>Rok produkcji: 2010<br/>Producent: Team Meat<br/>Forma: CD-Key</p><p>Cena:</p><h1>60PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Super Meat Boy to zabawna platformówka, w której sterujemy tytułowym kawałkiem mięsa. Nasz nietypowy bohater musi uratować swoją wybrankę, przechodząc ponad setkę niezwykle urozmaiconych i trudnych poziomów.";
    main_descriptions.appendChild(tag);
    main_spec_meatboy.style.display = "inline";
}
if(varurl.includes("product_id=3"))
{
    main_sliderbox_image.innerHTML = "<iframe width='100%' height='500' src='https://www.youtube.com/embed/NN-9SQXoi50' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    //main_sliderbox_image_img.src = "../images/cuphead.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Cuphead</h1><p>Rok produkcji: 2017<br/>Producent: StudioMDHR<br/>Forma: CD-Key</p><p>Cena:</p><h1>100PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Cuphead to utrzymana w stylistyce starych filmów rysunkowych, dwuwymiarowa gra akcji, będąca debiutanckim projektem zespołu StudioMDHR. W grze Cuphead wcielamy się w postać bohatera o skłonnościach do hazardu, który podczas gry z diabłem przegrywa swą duszę.";
    main_descriptions.appendChild(tag);
    main_spec_cuphead.style.display = "inline";
}
if(varurl.includes("product_id=4"))
{
    main_sliderbox_image.innerHTML = "<iframe width='100%' height='500' src='https://www.youtube.com/embed/afqO1qGr2XM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    //main_sliderbox_image_img.src = "../images/rayman.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Rayman Legends</h1><p>Rok produkcji: 2013<br/>Producent: Ubisoft<br/>Forma: CD-Key</p><p>Cena:</p><h1>80PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Rayman Legends to zręcznościowa platformówka 2D z sympatycznym stworkiem w roli głównej. Gra wyprodukowana została przez studio Ubisoft Montpellier i stanowi piątą, pełnoprawną odsłonę cyklu wykreowanego przez Michela Ancela.";
    main_descriptions.appendChild(tag);
    main_spec_rayman.style.display = "inline";
}
if(varurl.includes("product_id=5"))
{
    main_sliderbox_image.innerHTML = "<iframe width='100%' height='500' src='https://www.youtube.com/embed/Wj3dUvGLjNQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    //main_sliderbox_image_img.src = "../images/fallguys.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Fall Guys</h1><p>Rok produkcji: 2020<br/>Producent: Mediatonic<br/>Forma: CD-Key</p><p>Cena:</p><h1>90PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Fall Guys to humorystyczna zręcznościówka przeznaczona do 60-osobowych rozgrywek multiplayer. Wcielając się w nieporadnych 'ludków', walczymy o wygranie nagrody głównej w dziwnym teleturnieju.";
    main_descriptions.appendChild(tag);
    main_spec_fallguys.style.display = "inline";
}
if(varurl.includes("product_id=6"))
{
    main_sliderbox_image.innerHTML = "<iframe width='100%' height='500' src='https://www.youtube.com/embed/XrfVfRV0zSg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    //main_sliderbox_image_img.src = "../images/gearsofwar.png";
    main_sliderbox_descriptions.innerHTML = "<h1>Gears of War 4</h1><p>Rok produkcji: 2016<br/>Producent: The Coalition<br/>Forma: CD-Key</p><p>Cena:</p><h1>180PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Gears of War 4 to czwarta pełnoprawna odsłona kultowej serii futurystycznych strzelanin TPP. Za produkcję tytułu odpowiada studio The Coalition (wcześniej Black Tusk), założone przez wieloletniego producenta serii, Roda Fergussona.";
    main_descriptions.appendChild(tag);
    main_spec_gearsofwar.style.display = "inline";
}
if(varurl.includes("product_id=7"))
{
    main_sliderbox_image.innerHTML = "<iframe width='100%' height='500' src='https://www.youtube.com/embed/E3Huy2cdih0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    //main_sliderbox_image_img.src = "../images/elden_ring.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Elden Ring</h1><p>Rok produkcji: 2022<br/>Producent: FromSoftware<br/>Forma: CD-Key</p><p>Cena:</p><h1>220PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Elden Ring to gra RPG akcji autorstwa japońskiego studia FromSoftware. Tym razem twórcy postanowili nawiązać współpracę ze znaną osobistością spoza branży gier wideo – pisarzem George’em R. R. Martinem, autorem sagi Pieśń Lodu i Ognia.";
    main_descriptions.appendChild(tag);
    main_spec_eldenring.style.display = "inline";
}
if(varurl.includes("product_id=8"))
{
    main_sliderbox_image.innerHTML = "<iframe width='100%' height='500' src='https://www.youtube.com/embed/9lFx4wfc8Tc' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    //main_sliderbox_image_img.src = "../images/dune.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Dune Spice Wars</h1><p>Rok produkcji: 2022<br/>Producent: Shiro Games<br/>Forma: CD-Key</p><p>Cena:</p><h1>250PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Dune: Spice Wars to RTS z elementami 4X, osadzony w uniwersum wykreowanym przez Franka Herberta. Tytuł został opracowany przez studio Shiro Games, czyli twórców m.in. ciepło przyjętego Northgard.";
    main_descriptions.appendChild(tag);
    main_spec_dune.style.display = "inline";
}
if(varurl.includes("product_id=9"))
{
    main_sliderbox_image.innerHTML = "<iframe width='100%' height='500' src='https://www.youtube.com/embed/8X2kIfS6fb8' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    //main_sliderbox_image_img.src = "../images/cyberpunk_2077.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Cyberpunk 2077</h1><p>Rok produkcji: 2020<br/>Producent: CD Projekt RED<br/>Forma: CD-Key</p><p>Cena:</p><h1>180PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Cyberpunk 2077 to osadzona w otwartym świecie w klimacie science fiction gra RPG oparta na papierowym systemie fabularnym Cyberpunk. Cyberpunk 2077 został opracowany przez studio CD Projekt RED, które wsławiło się kultową serią o Wiedźminie.";
    main_descriptions.appendChild(tag);
    main_spec_cyberpunk2077.style.display = "inline";
}
if(varurl.includes("product_id=10"))
{
    main_sliderbox_image.innerHTML = "<iframe width='100%' height='500' src='https://www.youtube.com/embed/c0i88t0Kacs' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    //main_sliderbox_image_img.src = "../images/witcher.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Wiedżmin 3</h1><p>Rok produkcji: 2015<br/>Producent: CD Projekt RED<br/>Forma: CD-Key</p><p>Cena:</p><h1>70PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Wiedżmin 3 to gra action RPG, stanowiąca trzecią część przygód Geralta z Rivii. Podobnie jak we wcześniejszych odsłonach cyklu, Wiedźmin 3: Dziki Gon bazuje na motywach twórczości literackiej Andrzeja Sapkowskiego, jednak nie jest bezpośrednią adaptacją żadnej z jego książek.";
    main_descriptions.appendChild(tag);
    main_spec_witcher.style.display = "inline";
}
*/
//slider
const container_slider = document.querySelector("#main_offers_container_slider");
const container_slider_boxes = document.querySelectorAll(".main_offers_container_box");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;

container_slider.style.transform = "translateX(-275px)";

nextBtn.addEventListener("click", function()
{
    if(counter >= container_slider_boxes.length - 4)
    {
        return;
    }
    container_slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    container_slider.style.transform = "translateX("+(-279*counter) + "px)";
});

prevBtn.addEventListener("click", function()
{
    if(counter <= 0)
    {
        return;
    }
    container_slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    container_slider.style.transform = "translateX("+(-279*counter) + "px)";
});

container_slider.addEventListener("transitionend",  function()
{
    if(container_slider_boxes[counter].id === 'lastClone')
    {
        container_slider.style.transition = "none";
        counter = container_slider_boxes.length - 5; 
        container_slider.style.transform = "translateX("+(-279*counter) + "px)";
    }
    if(container_slider_boxes[counter].id === 'firstClone')
    {
        container_slider.style.transition = "none";
        counter = container_slider_boxes.length - counter-3; 
        container_slider.style.transform = "translateX("+(-279*counter) + "px)";
    }
});

//for(var i=0; i<container_slider_boxes.length;i++)
//{}
var self0 = container_slider_boxes[0];
var self1 = container_slider_boxes[1];
var self2 = container_slider_boxes[2];
var self3 = container_slider_boxes[3];
var self4 = container_slider_boxes[4];
var self5 = container_slider_boxes[5];
var self6 = container_slider_boxes[6];
var self7 = container_slider_boxes[7];
var self8 = container_slider_boxes[8];
var self9 = container_slider_boxes[9];
var self10 = container_slider_boxes[10];

self0.addEventListener("click", function()
{
    //var img = document.createElement("img");
    var img = "<img src={{product.pictures[0]}} width='100%'  height='500px'/>";
    main_sliderbox_image.innerHTML = img;
    self0.style.marginBottom = "20px";
    self0.style.borderBottom = "5px solid #667DB9";
    self1.style.borderBottom = "none";
    self2.style.borderBottom = "none";
    self3.style.borderBottom = "none";
    self4.style.borderBottom = "none";
    self5.style.borderBottom = "none";
    self6.style.borderBottom = "none";
    self7.style.borderBottom = "none";
    self8.style.borderBottom = "none";
    self9.style.borderBottom = "none";
    self10.style.borderBottom = "none";
    console.log(img);

    //iframe.style.display = "none";
   // main_sliderbox_image.appendChild(img);
});

self1.addEventListener("click", function()
{
    //var img = document.createElement("img");
    var img = "<img src={{product.pictures[1]}} width='100%'  height='500px'/>";
    main_sliderbox_image.innerHTML = img;
    self1.style.marginBottom = "20px";
    self1.style.borderBottom = "5px solid #667DB9";
    self0.style.borderBottom = "none";
    self2.style.borderBottom = "none";
    self3.style.borderBottom = "none";
    self4.style.borderBottom = "none";
    self5.style.borderBottom = "none";
    self6.style.borderBottom = "none";
    self7.style.borderBottom = "none";
    self8.style.borderBottom = "none";
    self9.style.borderBottom = "none";
    self10.style.borderBottom = "none";
    console.log(img);
    //iframe.style.display = "none";
   // main_sliderbox_image.appendChild(img);
});

self2.addEventListener("click", function()
{
    //var img = document.createElement("img");
    var img = "<img src={{product.pictures[2]}} width='100%'  height='500px'/>";
    main_sliderbox_image.innerHTML = img;
    self2.style.marginBottom = "20px";
    self2.style.borderBottom = "5px solid #667DB9";
    self1.style.borderBottom = "none";
    self0.style.borderBottom = "none";
    self3.style.borderBottom = "none";
    self4.style.borderBottom = "none";
    self5.style.borderBottom = "none";
    self6.style.borderBottom = "none";
    self7.style.borderBottom = "none";
    self8.style.borderBottom = "none";
    self9.style.borderBottom = "none";
    self10.style.borderBottom = "none";
    console.log(img);
    //iframe.style.display = "none";
   // main_sliderbox_image.appendChild(img);
});

self3.addEventListener("click", function()
{
    //var img = document.createElement("img");
    var img = "<img src={{product.pictures[3]}} width='100%'  height='500px'/>";
    main_sliderbox_image.innerHTML = img;
    self3.style.marginBottom = "20px";
    self3.style.borderBottom = "5px solid #667DB9";
    self3.style.borderBottom = "5px solid #667DB9";
    self1.style.borderBottom = "none";
    self2.style.borderBottom = "none";
    self0.style.borderBottom = "none";
    self4.style.borderBottom = "none";
    self5.style.borderBottom = "none";
    self6.style.borderBottom = "none";
    self7.style.borderBottom = "none";
    self8.style.borderBottom = "none";
    self9.style.borderBottom = "none";
    self10.style.borderBottom = "none";
    console.log(img);
    //iframe.style.display = "none";
   // main_sliderbox_image.appendChild(img);
});

self4.addEventListener("click", function()
{
    //var img = document.createElement("img");
    var img = "<img src={{product.pictures[4]}} width='100%'  height='500px'/>";
    main_sliderbox_image.innerHTML = img;
    self4.style.marginBottom = "20px";
    self4.style.borderBottom = "5px solid #667DB9";
    self4.style.borderBottom = "5px solid #667DB9";
    self1.style.borderBottom = "none";
    self2.style.borderBottom = "none";
    self3.style.borderBottom = "none";
    self0.style.borderBottom = "none";
    self5.style.borderBottom = "none";
    self6.style.borderBottom = "none";
    self7.style.borderBottom = "none";
    self8.style.borderBottom = "none";
    self9.style.borderBottom = "none";
    self10.style.borderBottom = "none";
    console.log(img);
    //iframe.style.display = "none";
   // main_sliderbox_image.appendChild(img);
});

self5.addEventListener("click", function()
{
    //var img = document.createElement("img");
    var img = "<img src={{product.pictures[5]}} width='100%'  height='500px'/>";
    main_sliderbox_image.innerHTML = img;
    self5.style.marginBottom = "20px";
    self5.style.borderBottom = "5px solid #667DB9";
    self1.style.borderBottom = "none";
    self2.style.borderBottom = "none";
    self3.style.borderBottom = "none";
    self4.style.borderBottom = "none";
    self0.style.borderBottom = "none";
    self6.style.borderBottom = "none";
    self7.style.borderBottom = "none";
    self8.style.borderBottom = "none";
    self9.style.borderBottom = "none";
    self10.style.borderBottom = "none";
    console.log(img);
    //iframe.style.display = "none";
   // main_sliderbox_image.appendChild(img);
});

self6.addEventListener("click", function()
{
    //var img = document.createElement("img");
    var img = "<img src={{product.pictures[6]}} width='100%'  height='500px'/>";
    main_sliderbox_image.innerHTML = img;
    self6.style.marginBottom = "20px";
    self6.style.borderBottom = "5px solid #667DB9";
    self1.style.borderBottom = "none";
    self2.style.borderBottom = "none";
    self3.style.borderBottom = "none";
    self4.style.borderBottom = "none";
    self5.style.borderBottom = "none";
    self0.style.borderBottom = "none";
    self7.style.borderBottom = "none";
    self8.style.borderBottom = "none";
    self9.style.borderBottom = "none";
    self10.style.borderBottom = "none";
    console.log(img);
    //iframe.style.display = "none";
   // main_sliderbox_image.appendChild(img);
});

self7.addEventListener("click", function()
{
    //var img = document.createElement("img");
    var img = "<img src={{product.pictures[7]}} width='100%'  height='500px'/>";
    main_sliderbox_image.innerHTML = img;
    self7.style.marginBottom = "20px";
    self7.style.borderBottom = "5px solid #667DB9";
    self1.style.borderBottom = "none";
    self2.style.borderBottom = "none";
    self3.style.borderBottom = "none";
    self4.style.borderBottom = "none";
    self5.style.borderBottom = "none";
    self6.style.borderBottom = "none";
    self0.style.borderBottom = "none";
    self8.style.borderBottom = "none";
    self9.style.borderBottom = "none";
    self10.style.borderBottom = "none";
    console.log(img);
    //iframe.style.display = "none";
   // main_sliderbox_image.appendChild(img);
});

self8.addEventListener("click", function()
{
    //var img = document.createElement("img");
    var img = "<img src={{product.pictures[8]}} width='100%'  height='500px'/>";
    main_sliderbox_image.innerHTML = img;
    self8.style.marginBottom = "20px";
    self8.style.borderBottom = "5px solid #667DB9";
    self1.style.borderBottom = "none";
    self2.style.borderBottom = "none";
    self3.style.borderBottom = "none";
    self4.style.borderBottom = "none";
    self5.style.borderBottom = "none";
    self6.style.borderBottom = "none";
    self7.style.borderBottom = "none";
    self0.style.borderBottom = "none";
    self9.style.borderBottom = "none";
    self10.style.borderBottom = "none";
    console.log(img);
    //iframe.style.display = "none";
   // main_sliderbox_image.appendChild(img);
});

self9.addEventListener("click", function()
{
    //var img = document.createElement("img");
    var img = "<img src={{product.pictures[9]}} width='100%'  height='500px'/>";
    main_sliderbox_image.innerHTML = img;
    self9.style.marginBottom = "20px";
    self9.style.borderBottom = "5px solid #667DB9";
    self1.style.borderBottom = "none";
    self2.style.borderBottom = "none";
    self3.style.borderBottom = "none";
    self4.style.borderBottom = "none";
    self5.style.borderBottom = "none";
    self6.style.borderBottom = "none";
    self7.style.borderBottom = "none";
    self8.style.borderBottom = "none";
    self0.style.borderBottom = "none";
    self10.style.borderBottom = "none";
    console.log(img);
    //iframe.style.display = "none";
   // main_sliderbox_image.appendChild(img);
});

self10.addEventListener("click", function()
{
    //var img = document.createElement("img");
    var img = "<img src={{product.pictures[10]}} width='100%'  height='500px'/>";
    main_sliderbox_image.innerHTML = img;
    self10.style.marginBottom = "20px";
    self10.style.borderBottom = "5px solid #667DB9";
    self1.style.borderBottom = "none";
    self2.style.borderBottom = "none";
    self3.style.borderBottom = "none";
    self4.style.borderBottom = "none";
    self5.style.borderBottom = "none";
    self6.style.borderBottom = "none";
    self7.style.borderBottom = "none";
    self8.style.borderBottom = "none";
    self9.style.borderBottom = "none";
    self0.style.borderBottom = "none";
    console.log(img);
    //iframe.style.display = "none";
   // main_sliderbox_image.appendChild(img);
});


//przyciski
const button_add = document.querySelector("#button_add");

button_add.addEventListener("click", function()
{
if(button_add.innerHTML == "PRODUKT W KOSZYKU")
{
    button_add.innerHTML = "DODAJ DO KOSZYKA";
}
else
{
    button_add.innerHTML = "PRODUKT W KOSZYKU";
}
});