# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./src/store/Screenshot%20(1).png)

### Links

- Solution URL: [https://github.com/GraceYourCode/rest-countries-api](https://github.com/GraceYourCode/rest-countries-api)
- Live Site URL: [https://gyc-countries-info.vercel.app](https://gyc-countries-info.vercel.app)

## My process

This project was sigle-handledly writtten by me using React JS and tailwind css. The first thing I had to do was install a react project using vite. I decided not to use create-react-app because the run-time of vite is way faster than that of create-react-app. My opinion though, I stand to be corrected. 
After getting my react project ready, I installed the necessary dependencies like autoprefixer, postcss, tailwindcss, so I can use the tailwind CSS on my project. NExt is I tidied up my project i.e I deleted the unnecessary files and folders that came installed with the project and I created my own folders and got my hands dirty.
Designed the UI of the project first and later I moved on to the functionalities of the index or root page which displays all the countries from the api. The code for search and filter countries functionalities can be found in the solution. Made sure the project is responsive on all device to the best of my ability and lest I forget, I added the dark and light mode using tailwind CSS classes for theme.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Tailwind CSS


### What I learned

What I learnt mainly in this project was how to make use of tailwind CSS in-built class for themes to implement light and dark mode. Although, I have a project in which I implemented the light mode and dark mode, I did it in my own crude way by wring different components for light and dark mode. So any time I click the theme switcher button, I render the particular component I want to render. I know you're probably laughing at me right now. But on this project, I learnt how to do it in a easier way

```js
let [darkMode, setDarkMode] = useState(false);

const userTheme = window.matchMedia("(prefers-color-scheme: light)");

useEffect(() => {
    /**this checks the localstorage of the user to get the preferred color theme
     * and hence inputs the return value into the variable darkMode
     */
    if (userTheme.matches) setDarkMode(false);
    else setDarkMode(true);
  }, [])

  useEffect(() => {
    /**this effect is called anytime there is a change in the value of darkMode
     * It checks if darkMode is true and then it adds a class of dark to the
     * document element while it is false, it removes the class dark, hence
     * the use of the toggle() method
     */
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode])

  const toggleMode = () => {
    /**this function toggles the value of darkMode and sets the new value
     * into the localStorage of the user
     */
    setDarkMode(darkMode = !darkMode);
    userTheme.matches = !darkMode;
  }

```

### Continued development

I'd love to be able to make this a fullstack project and also add other functionalities like map, states, coat of arms, etc

### Useful resources

- [React-icons](https://react-icons.github.io/react-icons/) - This helped me for all the icons I used in this project. I really liked this pattern and will use it going forward.
- [Tailwind CSS Docs](https://tailwindcss.com/docs/dark-mode) - This is an amazing documentation which helped me finally understand how I can implement light and dark mode and also how to use their CSS properties and styles. I'd recommend it to anyone still learning this concept.

## Author

- Website - [My GitHub Profile](https://github.com/GraceYourCode)
- Frontend Mentor - [@GraceYourCode](https://www.frontendmentor.io/profile/GraceYourCode)
- Twitter - [@GraceYourCode](https://www.twitter.com/GraceYourCode)
