const API_KEY = "AQ.Ab8RN6JNdbKsXBZPG76JhfsT6R2btgwL_XfSnHIDc4ybCSDHhw";

// ==============================
// AMBIL ELEMEN HTML
// ==============================
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const response = document.getElementById("response");

// ==============================
// FUNGSI GEMINI AI
// ==============================
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
                        parts: [{ text }]
                    }]
                })
            }
        );

        const data = await res.json();

        console.log("STATUS:", res.status);
        console.log("RESPONSE:", data);

        if (!res.ok) {
            return "ERROR API: " + JSON.stringify(data);
        }

        return data.candidates?.[0]?.content?.parts?.[0]?.text
            || "Tidak ada jawaban dari Gemini.";

    } catch (err) {
        console.log("FETCH ERROR:", err);
        return "FETCH ERROR (koneksi gagal total)";
    }
}
Kamu adalah SafePlace AI, teman aman untuk pelajar yang mengalami bullying.

Tugas kamu:
- Jawab dengan empati
- Bahasa lembut
- Tidak menghakimi
- Berikan dukungan emosional

Pesan user:
${text}
                                    `
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await res.json();

        console.log("DEBUG RESPONSE:", data); // penting untuk cek error

        // kalau API error
        if (!res.ok) {
            return "❌ API Error: " + (data.error?.message || "Unknown error");
        }

        // kalau Gemini tidak kasih jawaban
        if (!data.candidates || !data.candidates[0]) {
            return "❌ Gemini tidak memberi respon.";
        }

        return data.candidates[0].content.parts[0].text;

    } catch (err) {
        console.log(err);
        return "❌ Koneksi error ke Gemini.";
    }
}

// ==============================
// EVENT KLIK TOMBOL
// ==============================
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

// ==============================
// ANIMASI HALAMAN
// ==============================
window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "1s";
        document.body.style.opacity = "1";
    }, 100);
});

// ==============================
// FAQ TOGGLE
// ==============================
const questions = document.querySelectorAll(".question");

questions.forEach(q => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});
