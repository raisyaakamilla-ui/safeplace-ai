// ==============================
// SAFEPLACE AI
// main.js
// ==============================

// Ambil elemen HTML
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const response = document.getElementById("response");

// Daftar respon sementara
const responses = [
    "💙 Terima kasih sudah mau berbagi cerita. Kamu tidak sendirian, dan perasaanmu itu penting.",
    "🌸 Apa yang kamu alami bukanlah kesalahanmu. Jika memungkinkan, cobalah bercerita kepada guru BK atau orang dewasa yang kamu percaya.",
    "🩵 SafePlace AI selalu mendukungmu. Tetap semangat ya, kamu berharga.",
    "🌼 Bullying bisa berdampak pada kesehatan mental. Jangan ragu mencari bantuan ketika kamu membutuhkannya.",
    "🤍 Terima kasih sudah mempercayai SafePlace AI. Semoga harimu menjadi lebih baik."
];

// Saat tombol diklik
sendBtn.addEventListener("click", function () {

    const text = userInput.value.trim();

    if (text === "") {
        response.innerHTML = "⚠️ Silakan tuliskan ceritamu terlebih dahulu.";
        return;
    }

    // Loading
    response.innerHTML = "🤖 SafePlace AI sedang mengetik...";

    setTimeout(() => {

        const random =
            responses[Math.floor(Math.random() * responses.length)];

        response.innerHTML = `
            <h3>🤖 SafePlace AI</h3>
            <p>${random}</p>
        `;

    }, 1500);

});

// Animasi muncul saat halaman dibuka
window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "1s";

        document.body.style.opacity = "1";

    }, 100);

});
// ==============================
// FAQ INTERAKTIF
// ==============================

const questions = document.querySelectorAll(".question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});