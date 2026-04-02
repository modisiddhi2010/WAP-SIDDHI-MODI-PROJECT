# MovieVerse

## About the Project
MovieVerse is a web application developed as part of my coursework. The purpose of this project is to understand how APIs work and how we can use JavaScript to fetch and display real-time data on a webpage.

In this project, I have used a movie API to allow users to search for movies and view basic details like title, release date, and poster. The application is interactive and includes features like filtering, sorting, and saving favorite movies.

---

## Features

- Search movies using keywords  
- Filter movies (for example: recent movies)  
- Sort movies by title or release date  
- Add movies to favorites  
- Dark mode / light mode toggle  
- Loading indicator while data is being fetched  
- Basic error handling when no results are found  

---

## Concepts Used

This project mainly focuses on JavaScript concepts and API integration.

- **Fetch API**  
  Used to get movie data from the API.

- **Array Higher Order Functions (HOFs)**  
  - `map()` → used to display movie data on the webpage  
  - `filter()` → used for searching and filtering movies  
  - `sort()` → used to arrange movies  
  - `find()` → used to select a movie for favorites  

As required in the project, I have not used traditional loops like `for` or `while` for these operations.

---

## API Used

I have used the **TMDB (The Movie Database) API**, which provides a large collection of movies along with details like posters, release dates, etc.

---

## Technologies Used

- HTML (for structure)  
- CSS (for styling and layout)  
- JavaScript (for logic and API handling)  

---

## Bonus Features Implemented

- Debouncing in search input to reduce unnecessary API calls  
- Local Storage to store favorite movies  
- Responsive layout for different screen sizes  

---

## Project Structure



---

## How to Run

1. Clone or download the repository  
2. Open the project folder  
3. Open `index.html` in any browser  

---

## Setup Instructions

To run this project properly, you need an API key.

1. Get your API key from TMDB  
2. Open `script.js`  
3. Replace:

```javascript
const API_KEY = "0f2255d1e244258b05ac309d90dd8f14"; 

