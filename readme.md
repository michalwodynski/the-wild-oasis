## 🏞️ The Wild Oasis — Panel Administracyjny Rezerwacji

## 🚀 Opis Projektu

**The Wild Oasis** to nowoczesny panel administracyjny stworzony na potrzeby zarządzania operacjami fikcyjnego ośrodka wypoczynkowego. Aplikacja demonstruje zaawansowane wykorzystanie technologii **React** i **Supabase** do stworzenia wydajnego interfejsu **CRUD** (Create, Read, Update, Delete) dla zarządzania danymi biznesowymi.

Projekt skutecznie integruje uwierzytelnianie, magazynowanie plików (storage) oraz interakcje z bazą danych za pośrednictwem **Supabase**.

### Kluczowe Funkcjonalności:

- **Uwierzytelnianie:** Rejestracja, logowanie i zarządzanie profilami użytkowników (w tym zmiana avatarów).
- **Zarządzanie Domkami (Cabins):** Pełne operacje CRUD (tworzenie, edycja, usuwanie) domków.
- **Zarządzanie Rezerwacjami:** Tabela rezerwacji z filtrowaniem, sortowaniem i paginacją, obsługa procesów **check-in** / **check-out**.
- **Dashboard:** Panel administracyjny z wizualizacją danych (wykresy).

---

## 🛠️ Stos Technologiczny

Aplikacja została zbudowana z wykorzystaniem następujących kluczowych narzędzi i bibliotek:

| Kategoria               | Technologie                                                                                    |
| :---------------------- | :--------------------------------------------------------------------------------------------- |
| **Główny Stos**         | **React 18**, **Vite** (bundler / dev server), **Node.js**                                     |
| **Backend & DB**        | **Supabase** (`@supabase/supabase-js`)                                                         |
| **Zarządzanie Stanem**  | **@tanstack/react-query** (pobieranie i cache danych)                                          |
| **Routing**             | **React Router DOM**                                                                           |
| **Stylizacja**          | **styled-components** (CSS-in-JS)                                                              |
| **Formularze**          | **react-hook-form**                                                                            |
| **Dodatkowe Narzędzia** | **recharts** (wykresy), **react-hot-toast** (powiadomienia), **date-fns** (operacje na datach) |

---

## 🛠️ Instalacja i Uruchomienie

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki.

### 1\. Klonowanie Repozytorium

```bash
git clone <repo-url>
cd the-wild-oasis
```

### 2\. Instalacja Zależności

```bash
npm install
```

### 3\. Konfiguracja Środowiska

Utwórz plik `.env` i uzupełnij go swoimi kluczami Supabase zgodnie z sekcją Konfiguracja.

### 4\. Uruchomienie Serwera Deweloperskiego

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:5173`.

### 5\. Kompilacja do Produkcji

```bash
npm run build
```

Zbudowana wersja do wdrożenia znajduje się w katalogu `dist/`.

---

## Kontekst Projektu

Ten projekt został stworzony jako część kursu **"Ultimate React Course"** prowadzonego przez **Jonasa Schmedtmanna**.

## 📂 Struktura Kodowa

Wybrane katalogi i pliki demonstrujące architekturę projektu:

- `src/services/` — Zawiera wszystkie moduły do komunikacji z API Supabase (np. `apiAuth.js`, `apiCabins.js`).
- `src/features/` — Logika biznesowa i komponenty specyficzne dla danej funkcjonalności (np. `Authentication`, `cabins`).
- `src/ui/` — Kolekcja współdzielonych i wielokrotnego użytku komponentów interfejsu (np. `Button`, `Modal`, `Table`).
- `src/App.jsx` — Główny komponent konfigurujący routing (`React Router DOM`).
- `src/styles/GlobalStyles.js` — Definicja globalnych stylów dla `styled-components`.
