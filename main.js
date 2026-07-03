// ==============================
// SAFEPLACE AI - FINAL VERSION
// ==============================

const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const response = document.getElementById("response");

// 🔑 API KEY (PAKAI BARU)
const API_KEY = "AQ.Ab8RN6LHvKbAXvmh_cggf87zvr_Q7K8K2UYfI6jXtcPIx_HSaA";

async function askGemini(text) {
    try {
        const res = await fetch(
            "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" + API_KEY,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `
Kamu adalah SafePlace AI, teman aman untuk pelajar yang mengalami bullying.
Jawab dengan empati, lembut, dan tidak menghakimi.

Pesan user:
${text}
                            `
                        }]
                    }]
                })
            }
        );

        const data = await res.json();

        return data.candidates?.[0]?.content?.parts?.[0]?.text
            || "Maaf, tidak ada respon.";
    } catch (err) {
        return "Terjadi kesalahan koneksi.";
    }
}

sendBtn.addEventListener("click", async () => {

    const text = userInput.value.trim();

    if (!text) {
        response.innerHTML = "⚠️ Tulis dulu ceritamu ya.";
        return;
    }

    response.innerHTML = "🤖 SafePlace AI sedang berpikir...";

    const reply = await askGemini(text);

    response.innerHTML = `
        <h3>🤖 SafePlace AI</h3>
        <p>${reply}</p>
    `;
});
