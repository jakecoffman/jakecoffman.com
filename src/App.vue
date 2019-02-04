<template>
  <div id="app">
    <header>
      jakecoffman.com
    </header>

    <nav>
      <div class="face">
        <img alt="Jake Coffman" src="./assets/logo.png" class="logo">
        <div class="facetext">
          <em>Software Developer</em>
          <span>Web, Android, Games</span>
        </div>
      </div>

      <ul>
        <li>
          <router-link to="/">Intro</router-link>
        </li>
        <li>
          <router-link to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link to="/qa">Q&A</router-link>
        </li>
        <li>
          <a href="https://twitter.com/nill">@nill on Twitter</a>
        </li>
        <li>
          <a href="https://github.com/jakecoffman">jakecoffman on Github</a>
        </li>
      </ul>
    </nav>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <a href="https://github.com/jakecoffman/jakecoffman.com">Fork me on Github</a>
    </footer>
  </div>
</template>

<style lang="scss">
  $green: #259b24;

  html, body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    display: grid;
    grid-template-rows: 40px auto 30px;
    grid-template-columns: 262px 1fr;
    height: 100vh;
  }

  header, footer {
    grid-column-start: 1;
    grid-column-end: 3;


    background: $green;
    color: white;
    padding: 0.5rem;

    a, a :hover, a :visited {
      text-decoration: none;
      color: white;
    }
  }

  nav {
    background: #eeeeee;
  }

  main {
    padding: 0.5rem;
    font-size: large;
  }

  .face {
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem;
    font-size: smaller;
  }

  .facetext {
    display: flex;
    flex-direction: column;
    justify-content: center;
    em {
      font-weight: bolder;
    }
  }

  .logo {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 100%;
  }
</style>
