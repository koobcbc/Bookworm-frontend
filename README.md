# BookWorm

# Description

-   ReadWatchRecord is an application that allows users to record notes/review/stars/favorite quotes on any books/movies they have read/watched. The app keeps track of statistics of number of books/movies read/watched, and also gives a statistics on what type of books/movies you enjoy.


# Project Links 
## Project URL
- []()

## Git Repos
- [frontend git](https://github.com/koobcbc/ReadWatchRecord-frontend) 
- [backend git](https://github.com/koobcbc/readwatchrecord-backend)

# Wireframs/Architecture
- [WireFrame](https://www.figma.com/file/HL5L6aIwSGxrY9KnjjpSPg/ReadWatchRecord?node-id=0%3A1)
- [React Architecture](https://docs.google.com/spreadsheets/d/1zW6M2NflVrBahyQOWUelU3vA32yDPH29mvx0glE2lOs/edit?usp=sharing)

# Time Priority Matrix/Chart
  
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Model | E | 1hr | hrs | hrs |
| Create Controller | E | 1 hour | hrs | hrs |
| Setup Server | E | .5hr| hrs | hrs |
| Set up Conections  | E | .5hrs| hrs | hrs |
| create Seed File  | M | 2hrs | hrs | hrs |
| Research  | E | 5hrs| hrs | hrs |
| Deployment  | H | 1hr| hrs | hrs |
| Total | H | 11hrs | hrs | hrs |

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create react app and components| H | .5hr| .5 hr | .5 hr |
| Install packages and Set up React Routing | H | .5hr| .5 hr | .5hr |
| Make APIcall from App | H | .5hr| .5hr | .5hr |
| Set up the layout components (Header, NavBar, Footer) | H | .5hr | 1hr | 1hr |
| Home component | H | 1hr| .5hr | .5hr |
| New order component | H | 2hr| 2hr | 2hr |
| Functionality of order form | H | 5hr| 6hr | 6hr |
| make delete / filter functionality in Past Order | H | 2.5hrs| 6hr | 6hr |
| Basic Styling for nav, footer, about page | H | 2hrs| 2hr | 2hr |
| Basic Styling for main | H | 10hrs| 4hrs | 4hrs |
| Total | H | 26.5hrs| 23hrs | 23hrs | 

#### MVP
- Create PostgresDB using Ruby on Rails
- Use the api created by PostgresDB & Google Books & Google Movie
- Create routes between components in React
- Allow user to search for books/movies and display information
- Allow user to record reviews
- Create CRUD Functionality for personal book/movie data
- Create User Login / Verification using React 

#### PostMVP
- Allow user to set a goal
- Create characters based on reading levels + different costumes that unlock based on # of movies watched
- Additional Styling and animations

## Components description
- Header
    - Header includes Logo and title of the page
- Nav
    - Navigation bar that allows user to navigate through searchBooks, searchMovies, MyPage, Summary, About pages
- Footer
    - Shared component with copyright info etc.
- Home
    - Home Page of the website that includes logo, title of the app, and log in form.
- Authentication
    - User Log in page
- Main
    - Main page that users get navigated into when logged in. This page includes this month's recommendations for books and movies
- RecBooks.js
    - This component generates monthly recommendation for books
- RecMovies.js
    - This component generates monthly recommendation for movies
- SearchBook.js / SearchMovie.js
    - Search box for books/movies, renders information on the searched book/movie
- BookInfo.js / MovieInfo.js
    - Shows info on book/movie that was searched.
- RecordBook.js / RecordMovie.js
    - Allows the user to write a review and give stars on the book/movie
- Note.js
    - A form that is used for writing personal notes on a particular book/movie
- Quote.js
    - A form that allows user to add their favorite quotes from a particular book/movie
- StarReview.js
    - A component that allows user to give stars on a book/movie
- MyPage
- PastReviews
  - Page that contains all the details of a specifiv past order.
- About
  - This will be the "Team Page" with photos and descriptions of everyone that worked on the project



# Backend Description
- models/Schemas



# Additional libraries
- Axios
- React
- Node
- Express

# Code Snippet 
- project code 

```

```
