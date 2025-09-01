// ============================
// ...usunięto EmailJS, cała obsługa maili jest w backendzie Nodemailer...

// ============================
// FORMULARZ KONTAKTOWY
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

  const hCaptchaResponse = this.querySelector('[name="h-captcha-response"]').value;
  const subject = this.querySelector('[name="title"]').value.trim();

      if (!hCaptchaResponse) {
        alert("❌ Potwierdź, że nie jesteś robotem (CAPTCHA).");
        return;
      }
      if (!subject) {
        alert("❌ Uzupełnij temat wiadomości.");
        return;
      }

      // Pobierz dane z formularza
    const from_name = this.querySelector('[name="name"]').value;
    const reply_to = this.querySelector('[name="email"]').value;
    const message = this.querySelector('[name="message"]').value;

      fetch("https://portfolio-rho-five-44.vercel.app/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from_name,
          reply_to,
          subject,
          message,
          template_id: "kontakt" // identyfikator do backendu, backend wybierze odpowiedni template
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("✅ Wiadomość została wysłana!");
          this.reset();
          hcaptcha.reset();
        } else {
          alert("❌ Wystąpił problem przy wysyłaniu wiadomości.");
        }
      })
      .catch(() => alert("❌ Błąd połączenia z serwerem."));
    });
  }
});

// ============================
// POWIADOMIENIE O POBRANIU CV
// ============================
function notifyDownload() {
  const templateParams = {
    name: "Portfolio",
    message: "📥 Ktoś właśnie pobrał Twoje CV!",
    email: "noreply@portfolio.com"
  };

    fetch("https://twoja-nazwa-projektu.vercel.app/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from_name: "Portfolio",
        reply_to: "noreply@portfolio.com",
        subject: "CV Download",
        message: "📥 Ktoś właśnie pobrał Twoje CV!",
        template_id: "cv"
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        console.log("✅ Powiadomienie o pobraniu CV wysłane.");
      } else {
        console.error("❌ Błąd przy wysyłaniu powiadomienia:", data.error);
      }
    })
    .catch((error) => {
      console.error("❌ Błąd przy wysyłaniu powiadomienia:", error);
    });
}

// Udostępnij funkcję w globalnym scope
window.notifyDownload = notifyDownload;

// ============================
// DEVLOG – ŁADOWANIE NOTATEK
// ============================
async function loadNotes() {
  try {
    const response = await fetch("posts/notes.json");
    if (!response.ok) throw new Error("Błąd wczytywania notes.json");

    const notes = await response.json();
    const container = document.getElementById("notesContainer");

    if (container) {
      container.innerHTML = "";
      notes.forEach(note => {
        const noteEl = document.createElement("div");
        noteEl.classList.add("note");
        noteEl.innerHTML = `
          <div class="note-date">🗓️ ${note.date}</div>
          <div class="note-title"><b>${note.title}</b></div>
          <div class="note-project">📌 Projekt: ${note.project}</div>
          <div class="note-desc">${note.desc}</div>
        `;
        container.appendChild(noteEl);
      });
    }
  } catch (error) {
    console.error("❌ Błąd ładowania notatek DevLog:", error);
  }
}

// Załaduj notatki po starcie strony
document.addEventListener("DOMContentLoaded", loadNotes);
