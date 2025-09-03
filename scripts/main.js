// ============================
// TŁUMACZENIA
var LANG = localStorage.getItem('portfolioLang') || 'pl';
var TRANSLATE = {
  pl: {
    hero: {
      title: 'Stanisław Pokropek',
      subtitle: 'Backend Developer • PHP • Symfony • Docker • React',
      btnProjects: 'Zobacz projekty',
      btnCVPL: '📥 Pobierz CV (PL)',
      btnCVEN: '📥 Pobierz CV (EN)'
    },
    about: 'O mnie',
    about1: 'Cześć! Nazywam się Stanisław Pokropek. Jestem pasjonatem informatyki, backend developerem oraz studentem Akademii Ekonomiczno-Humanistycznej w Warszawie na kierunku Informatyka (specjalizacje: aplikacje webowe i mobilne).',
    about2: 'Od 2022 roku zdobywam doświadczenie zawodowe, realizując projekty komercyjne i charytatywne. Pracowałem jako Backend Developer w Asterisk-Dev, gdzie tworzyłem nowoczesne aplikacje webowe typu PWA, integrowałem urządzenia zewnętrzne, budowałem dedykowane API oraz systemy raportowe. Mam doświadczenie w obsłudze systemów, raportowaniu i kontakcie z klientem.',
    about3: 'Ukończyłem Technikum Elektroniczne nr 1 w Warszawie jako Technik Informatyk, a obecnie rozwijam się w kierunku inżyniera. Posiadam certyfikaty z zakresu kierowania ruchem drogowym, programowania w Unreal Engine oraz fotografii z drona.',
    about4: 'Poza programowaniem zajmuję się projektowaniem grafik (logotypy, plakaty, banery), prowadzę warsztaty kreatywne dla dzieci i dorosłych, a w wolnym czasie żegluję, żongluję, układam kostki Rubika, jeżdżę na nartach i chodzę po górach. Uwielbiam sport, DIY oraz dzielenie się wiedzą z innymi.',
    about5: 'Zapraszam do kontaktu i współpracy!',
    skills: 'Umiejętności',
  experience: 'Doświadczenie',
  exp1: '<b>UPS (2024 – 2025)</b> – wsparcie IT, raporty, komunikacja z klientami',
  exp2: '<b>Asterisk-Dev (2022 – 2024)</b> – integracje, raporty, aplikacje webowe',
  exp3: '<b>Geotechnology (2021)</b> – serwis komputerów, administracja',
    projects: 'Projekty',
  devlog: 'DevLog',
  devlogEmpty: 'Brak wpisów DevLog. Pojawią się już wkrótce!',
    contact: 'Kontakt',
    form: {
      name: 'Twoje imię',
      email: 'Twój e-mail',
      title: 'Tytuł wiadomości',
      message: 'Wiadomość',
      send: 'Wyślij',
      captcha: '❌ Potwierdź, że nie jesteś robotem (CAPTCHA).',
      subject: '❌ Uzupełnij temat wiadomości.',
      success: '✅ Wiadomość została wysłana!',
      error: '❌ Wystąpił problem przy wysyłaniu wiadomości.',
      connError: '❌ Błąd połączenia z serwerem.'
    }
  },
  en: {
    hero: {
      title: 'Stanisław Pokropek',
      subtitle: 'Backend Developer • PHP • Symfony • Docker • React',
      btnProjects: 'See projects',
      btnCVPL: '📥 Download CV (PL)',
      btnCVEN: '📥 Download CV (EN)'
    },
    about: 'About me',
    about1: "Hi! My name is Stanisław Pokropek. I'm an IT enthusiast, backend developer and a student at the Academy of Economics and Humanities in Warsaw, majoring in Computer Science (specializations: web and mobile applications).",
    about2: "Since 2022, I've been gaining professional experience by working on commercial and charity projects. I worked as a Backend Developer at Asterisk-Dev, where I created modern PWA web applications, integrated external devices, built dedicated APIs and reporting systems. I have experience in system administration, reporting and client communication.",
    about3: "I graduated from Electronic Technical School No. 1 in Warsaw as an IT Technician, and now I'm developing towards becoming an engineer. I hold certificates in traffic management, Unreal Engine programming and drone photography.",
    about4: "Besides programming, I design graphics (logos, posters, banners), run creative workshops for children and adults, and in my free time I sail, juggle, solve Rubik's cubes, ski and hike in the mountains. I love sports, DIY and sharing knowledge with others.",
    about5: "Feel free to contact me and collaborate!",
    skills: 'Skills',
  experience: 'Experience',
  exp1: '<b>UPS (2024 – 2025)</b> – IT support, reports, client communication',
  exp2: '<b>Asterisk-Dev (2022 – 2024)</b> – integrations, reports, web applications',
  exp3: '<b>Geotechnology (2021)</b> – computer service, administration',
    projects: 'Projects',
  devlog: 'DevLog',
  devlogEmpty: 'No DevLog entries yet. They will appear soon!',
    contact: 'Contact',
    form: {
      name: 'Your name',
      email: 'Your email',
      title: 'Message subject',
      message: 'Message',
      send: 'Send',
      captcha: '❌ Please confirm you are not a robot (CAPTCHA).',
      subject: '❌ Please enter the message subject.',
      success: '✅ Message sent!',
      error: '❌ There was a problem sending the message.',
      connError: '❌ Server connection error.'
    }
  }
};

// ============================
// FUNKCJE TŁUMACZENIA
function translatePage() {
  // Przyciski pobierania CV w hero
  const $btnCVPL = $('#hero .buttons button[data-cv="pl"]');
  const $btnCVEN = $('#hero .buttons button[data-cv="en"]');
  if ($btnCVPL.length) $btnCVPL.text(TRANSLATE[LANG].hero.btnCVPL);
  if ($btnCVEN.length) $btnCVEN.text(TRANSLATE[LANG].hero.btnCVEN);
  // Przycisk projektów
  const $btnProjects = $('#hero .buttons a[data-projects]');
  if ($btnProjects.length) $btnProjects.text(TRANSLATE[LANG].hero.btnProjects);
  $('[data-i18n]').each(function() {
    const key = $(this).attr('data-i18n');
    if (TRANSLATE[LANG] && TRANSLATE[LANG][key]) {
      $(this).text(TRANSLATE[LANG][key]);
    }
  });
  for (let i = 1; i <= 5; i++) {
    const $about = $('[data-i18n-about' + i + ']');
    if ($about.length && TRANSLATE[LANG]['about' + i]) {
      $about.text(TRANSLATE[LANG]['about' + i]);
    }
  }
  for (let i = 1; i <= 3; i++) {
    const $exp = $('[data-i18n-exp' + i + ']');
    if ($exp.length && TRANSLATE[LANG]['exp' + i]) {
      $exp.html(TRANSLATE[LANG]['exp' + i]);
    }
  }
  $('[data-i18n-placeholder]').each(function() {
    const key = $(this).attr('data-i18n-placeholder');
    if (TRANSLATE[LANG] && TRANSLATE[LANG][key.split('.')[0]] && TRANSLATE[LANG][key.split('.')[0]][key.split('.')[1]]) {
      $(this).attr('placeholder', TRANSLATE[LANG][key.split('.')[0]][key.split('.')[1]]);
    }
  });
}

// ============================
// POBIERANIE CV
function downloadCV(lang) {
  let file = "assets/cv/CV_Stanislaw_Pokropek_PL.pdf";
  if (lang === "en") {
    file = "assets/cv/CV_Stanislaw_Pokropek_ANG.pdf";
  }
  const $link = $('<a>');
  $link.attr('href', file);
  $link.attr('download', file.split('/').pop());
  $('body').append($link);
  $link[0].click();
  $link.remove();
}
// ============================
// DEVLOG – ŁADOWANIE NOTATEK
// ============================
function loadNotes() {
  $.getJSON('posts/notes.json')
    .done(function(notes) {
      const $container = $('#notesContainer');
      if ($container.length) {
        $container.empty();
        if (!notes.length) {
          $container.html('<div class="note-empty">' + TRANSLATE[LANG].devlogEmpty + '</div>');
          return;
        }
        notes.forEach(function(note) {
          const $noteEl = $('<div>').addClass('note').html(`
            <div class="note-date">🗓️ ${note.date}</div>
            <div class="note-title"><b>${note.title}</b></div>
            <div class="note-project">📌 Projekt: ${note.project}</div>
            <div class="note-desc">${note.desc}</div>
          `);
          $container.append($noteEl);
        });
      }
    })
    .fail(function(error) {
      console.error('❌ Błąd ładowania notatek DevLog:', error);
    });
}

// ============================
// PROJEKTY – ŁADOWANIE Z JSONA
function loadProjects() {
  $.getJSON('posts/projects.json')
    .done(function(projects) {
      const $container = $('#projectsContainer');
      if ($container.length) {
        $container.empty();
        projects.forEach(function(project) {
          const $projectEl = $('<div>').addClass('project-card');
          let demoBtn = '';
          if (project.deploy) {
            demoBtn = `<a href="${project.deploy}" target="_blank" class="project-link project-demo">Demo</a>`;
          }
          let desc = project.desc;
          if (LANG === 'en' && project.desc_en) {
            desc = project.desc_en;
          }
          $projectEl.html(`
            <div class="project-title">${project.name}</div>
            <div class="project-desc">${desc}</div>
            <div class="project-meta">
              <a href="${project.github}" target="_blank" class="project-link">GitHub</a>
              ${demoBtn}
              <span class="project-tech">${project.tech.join(", ")}</span>
            </div>
          `);
          $container.append($projectEl);
        });
      }
    })
    .fail(function(error) {
      console.error('❌ Błąd ładowania projektów:', error);
    });
}

// ============================
// INICJALIZACJA STRONY
$(function() {
  translatePage();
  loadNotes();
  loadProjects();

  // Material Design language switcher logic
  const $langToggle = $('#lang-toggle-input');
  // Ustaw stan przełącznika na podstawie LANG
  $langToggle.prop('checked', LANG === 'en');
  $langToggle.on('change', function() {
    const newLang = $(this).is(':checked') ? 'en' : 'pl';
    localStorage.setItem('portfolioLang', newLang);
    window.location.reload();
  });
});
