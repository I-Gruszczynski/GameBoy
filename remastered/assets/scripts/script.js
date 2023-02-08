//MAIN_PAGE
//slider
const container_slider = document.querySelector("#main_offers_container_slider");
const container_slider_boxes = document.querySelectorAll(".main_offers_container_box");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;

container_slider.style.transform = "translateX(-258px)";

nextBtn.addEventListener("click", function()
{
    if(counter >= container_slider_boxes.length - 4)
    {
        return;
    }
    container_slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    container_slider.style.transform = "translateX("+(-258*counter) + "px)";
});

prevBtn.addEventListener("click", function()
{
    if(counter <= 0)
    {
        return;
    }
    container_slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    container_slider.style.transform = "translateX("+(-258*counter) + "px)";
});

container_slider.addEventListener("transitionend",  function()
{
    if(container_slider_boxes[counter].id === 'lastClone')
    {
        container_slider.style.transition = "none";
        counter = container_slider_boxes.length - 5; 
        container_slider.style.transform = "translateX("+(-258*counter) + "px)";
    }
    if(container_slider_boxes[counter].id === 'firstClone')
    {
        container_slider.style.transition = "none";
        counter = container_slider_boxes.length - counter-3; 
        container_slider.style.transform = "translateX("+(-258*counter) + "px)";
    }
});

//bannerbox
const bannerbox = document.querySelector("#main_sliderbox_slider_game");
const bannerboxh1 = document.querySelector("#main_sliderbox_slider_game_box h1");
const bannerboxp = document.querySelector("#main_sliderbox_slider_game_box p");

const elden = document.querySelector("#main_sliderbox_slider_else_box1");
const duna = document.querySelector("#main_sliderbox_slider_else_box2");
const cyber = document.querySelector("#main_sliderbox_slider_else_box3");
const witcher = document.querySelector("#main_sliderbox_slider_else_box4");

elden.addEventListener("click", function()
{
    console.log("Click");
    bannerbox.style.backgroundImage = "url(../assets/images/edBK.jpg)";
    bannerboxh1.innerHTML = "Elden Ring (2022)";
    bannerboxp.innerHTML = "Elden Ring to gra RPG akcji autorstwa japońskiego studia FromSoftware.";
    elden.style.background = "#8d8d8d";
    duna.style.background = "#363E44";
    cyber.style.background = "#363E44";
    witcher.style.background = "#363E44";
    elden_button.style.display = "inline";
    cyberpunk2077_button.style.display = "none";
    dune_button.style.display = "none";
    witcher_button.style.display = "none";
});

duna.addEventListener("click", function()
{
    console.log("Click");
    bannerbox.style.backgroundImage = "url(../assets/images/duneBK.jpg)";
    bannerboxh1.innerHTML = "Dune Spice Wars (2022)";
    bannerboxp.innerHTML = "Dune: Spice Wars jest strategią czasu rzeczywistego z elementami podgatunku 4X.";
    duna.style.background = "#8d8d8d";
    elden.style.background = "#363E44";
    cyber.style.background = "#363E44";
    witcher.style.background = "#363E44";
    dune_button.style.display = "inline";
    cyberpunk2077_button.style.display = "none";
    elden_button.style.display = "none";
    witcher_button.style.display = "none";
});

cyber.addEventListener("click", function()
{
    console.log("Click");
    bannerbox.style.backgroundImage = "url(../assets/images/cyberpunkBK.jpg)";
    bannerboxh1.innerHTML = "Cyberpunk (2020)";
    bannerboxp.innerHTML = "Cyberpunk 2077 jest pierwszoosobową grą RPG z otwartym światem, wzbogaconą o elementy FPS-ów.";
    cyber.style.background = "#8d8d8d";
    duna.style.background = "#363E44";
    elden.style.background = "#363E44";
    witcher.style.background = "#363E44";
    cyberpunk2077_button.style.display = "inline";
    dune_button.style.display = "none";
    elden_button.style.display = "none";
    witcher_button.style.display = "none";
});

witcher.addEventListener("click", function()
{
    console.log("Click");
    bannerbox.style.backgroundImage = "url(../assets/images/WitcherBK.jpg)";
    bannerboxh1.innerHTML = "Witcher 3 (2015)";
    bannerboxp.innerHTML = "Witcher 3 to trzecia odsłona popularnej serii gier RPG opartej na prozie Andrzeja Sapkowskiego.";
    witcher.style.background = "#8d8d8d";
    duna.style.background = "#363E44";
    cyber.style.background = "#363E44";
    elden.style.background = "#363E44";
    witcher_button.style.display = "inline";
    cyberpunk2077_button.style.display = "none";
    elden_button.style.display = "none";
    dune.style.display = "none";
});

//linki
//sprawdz_button1 = document.querySelector("#sprawdz_button1");
//sprawdz_button2 = document.querySelector("#sprawdz_button2");
elden_button = document.querySelector("#button_eldenring");
dune_button = document.querySelector("#button_dune");
cyberpunk2077_button = document.querySelector("#button_cyberpunk2077");
witcher_button = document.querySelector("#button_witcher");



/* $.get('/api/user/show.php').done(function(response) {
    $('#header_login').text('Witaj ' + response.user.name + '!');
})
 */
/// Search sumbit

var input = document.getElementById("search_input");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  });

async function onSearch() {
    let value = input.value;
    window.location.href = "search_results/main.html?search=" + value;
}