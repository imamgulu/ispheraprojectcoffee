let age = prompt("Введите ваш возраст:");

let banner = document.querySelector(".top_block_wrapper");

if (age <= 12) {
    banner.style.backgroundImage = "url('images/kids.png')";
} else if (age < 50) {
    banner.style.backgroundImage = "url('images/aaa.png')";
} else {
    banner.style.backgroundImage = "url('images/top_block.jpg')";
}
