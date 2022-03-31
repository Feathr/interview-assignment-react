# Feathr Jr. Engineer Work Assignment: A Star Wars Experience

Welcome to your work assignment for the Junior Engineer role at Feathr!
Your mission is to help Feathr learn more about Star Wars in this web application
called "A Star Wars Experience".

What does A Star Wars Experience do? It is a searchable database of Star Wars
movies and characters. You will use a public API to pull in the data, and add
a way to mark a movie as watched. Use your creativity to style the project with
CSS, images, etc.; go nuts. :)
We would also love to see you write some unit tests using Jest and React Testing
Library.

The basic skeleton of the application is in place. Review the files in the `src`
directory to get an understanding of the application's architecture. It's a
React app written in Typescript, which is what we use to write our frontend
application here at Feathr.

Feel free to modify and add files as needed, but maintain the existing routes.

Keep in mind Feathr's core values as you work on this project. They are PACTS:

- Practicality - Prefer incremental improvement over delayed perfection
- Ambition - Learn and do what is necessary to solve real challenges
- Clarity - Make sure your code is understandable and maintainable
- Trust - Be sincere and trust others to do the same
- Service - Ask more from yourself than from others

Try to exemplify our PACTS in the design and implementation decisions you make as
you work on this project.

Use whatever resources, tutorials, documentation, whatever you need, to complete
the project. We google/stackoverflow stuff when we get stuck too. :)

If you can't finish the whole assignment in time, that's fine! We want to see how
far you get and how you did it. It's about the process, not the destination.

## Getting Started

We used Yarn and Create React App to set this project up. To get your project up and
running, run the following commands from the root of your project:

`yarn`\
`yarn start`

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Requirements

- [ ] Add a global navigation component that is displayed on every page.
- [ ] Implement fetching data from `swapi.dev` for `/films`, `/film`, `/persons`, and `/person`.
- [ ] Implement searching/filtering by title/name for `/films`, and `/persons`.
- [ ] Implement the ability to mark a movie as watched on `/films`; this should persist across restarting your browser.
- [ ] Use CSS and icons/images/etc. to make the site look good. Go nuts. :)
- [ ] A test for each component should be written. Create a `[ComponentName].spec.tsx` file in the same directory as the component. e.g. For `src/Films/Films.tsx` create `src/Films/Films.spec.tsx`.
- [ ] Fill in the "Implementation" and "Limitations/Future Work" sections of the `NOTES.rst` file

**Submit the finished project as a zip archive.**

## Additional Notes

In order to store watched movies, you'll need to add some sort of persistence layer to A Star Wars
Experience. You can do this however you choose: use your browser's Local Storage or IndexedDB, or
any other method you can think of.

## Resources

- https://www.typescriptlang.org/
- https://reactjs.org/
- https://yarnpkg.com/getting-started/usage
- https://create-react-app.dev/docs/adding-a-css-modules-stylesheet
- https://create-react-app.dev/docs/running-tests
- https://create-react-app.dev/docs/fetching-data-with-ajax-requests
- https://reactrouter.com/docs/en/v6
