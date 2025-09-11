# Portfolio – Stanisław Pokropek

## Demo

[Zobacz stronę online](https://strachuix.github.io/portfolio)

## Funkcje

- **Wielojęzyczność** – pełne tłumaczenie na polski i angielski (przełącznik języka)
- **DevLog** – dynamiczne ładowanie wpisów z pliku JSON
- **Projekty** – karty projektów z opisami, linkami do GitHub i demo, tłumaczenia opisów
- **Pobieranie CV** – szybki dostęp do CV w dwóch językach
- **Responsywny design** – nowoczesny wygląd, animacje, gradienty, ikony social media

## Jak uruchomić lokalnie

1. Sklonuj repozytorium:
	```bash
	git clone https://github.com/Strachuix/portfolio.git
	```
2. Otwórz folder w VS Code lub innym edytorze.
3. Uruchom serwer lokalny (np. Live Server, Python http.server):
	```bash
	# Przykład dla Pythona 3
	python -m http.server
	```
4. Wejdź na `http://localhost:8000`.

## Struktura projektu

- `index.html` – główny plik strony
- `style.css` – stylizacja i animacje
- `scripts/main.js` – logika dynamiczna, tłumaczenia, obsługa formularzy
- `posts/notes.json` – wpisy DevLog
- `posts/projects.json` – dane projektów (PL/EN)
- `assets/` – grafiki, CV

## Technologie

- HTML5, CSS3, JavaScript (jQuery)
- SVG, responsywność, animacje CSS

## Autor

Stanisław Pokropek  
[GitHub](https://github.com/Strachuix) • [LinkedIn](https://www.linkedin.com/in/stanisław-pokropek-33b852255/)

# portfolio