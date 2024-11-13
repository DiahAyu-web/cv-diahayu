document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero");

    // Efek Parallax
    window.addEventListener("scroll", function() {
        const offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.7 + "px";
    });
});
// Fungsi untuk memulai animasi fade-in pada elemen dengan class 'fade'
window.onload = function() {
    const elements = document.querySelectorAll('.fade');
    elements.forEach(element => {
        element.classList.add('show');
    });
};
// Deteksi elemen yang muncul saat digulir
window.onscroll = function() {
    const elements = document.querySelectorAll('.slide-up');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.classList.add('show');
        }
    });
};

// Aktifkan animasi pada elemen yang ada
window.onload = function() {
    const elements = document.querySelectorAll('.slide-up');
    elements.forEach(element => {
        element.classList.add('show');
    });
};
document.querySelector('button').onclick = function() {
    alert('Tombol ditekan!');
    // Tambahkan animasi atau perubahan lainnya di sini
};
