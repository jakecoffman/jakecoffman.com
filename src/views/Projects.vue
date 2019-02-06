<template>
  <article class="projects">
    <h1>My Projects</h1>

    <p>
      This is a small selection of projects that are deployed or in a working state. Software is rarely ever done, but
      these are close enough to be shown off.
    </p>
    <p>
      There are less complete projects over at my Github: <a href="https://github.com/jakecoffman">https://github.com/jakecoffman</a>
    </p>

    <article class="cards">
      <section v-for="project of projects" :key="project.title" class="card">
        <img class="p-img" :alt="project.title" :src="`../${project.image}`">
        <div class="project-text">
          <h2>{{project.title}}</h2>
          <div class="badges">
            <span v-for="tag in project.tags" class="badge" :key="tag">{{tag}}</span>
          </div>
          <p>{{project.text}}</p>
          <ul class="links">
            <li v-for="link in project.links" :key="link.href">
              <a :href="link.href" target="_blank">{{link.name}}</a>
            </li>
          </ul>
        </div>
      </section>
    </article>

  </article>
</template>
<script>
  import stldevs from '@/assets/stldevs.png'
  import tanks from '@/assets/tanks.png'
  import tanklets from '@/assets/tanklets.png'
  import cp from '@/assets/cp.gif'
  import setgame from '@/assets/setgame.png'
  import resistance from '@/assets/resistance.png'
  import trustedfriend from '@/assets/trustedfriend.png'
  import camcontrol from '@/assets/camcontrol.png'
  import arduino from '@/assets/arduino.png'
  import gorunner from '@/assets/gorunner.png'
  import tutorials from '@/assets/tutorials.png'

  export default {
    data() {
      return {
        projects: [{
          title: "STL Devs",
          link: "https://stldevs.com",
          image: stldevs,
          tags: ["Data Warehousing", "Go", "Polymer", "SQL"],
          text: "This is a site for discovering what open source work developers are doing in the Greater St. Louis region by harvesting public information from Github.",
          links: [{
            href: "https://stldevs.com",
            name: "Visit"
          }]
        }, {
          title: "Tank Game",
          link: "https://github.com/jakecoffman/tanks-unity/releases",
          image: tanks,
          tags: ["Games", "C#"],
          text: "A multi-player game created with Unity. Think Wii Tanks but online, and with mouse and keyboard.",

          links: [{
            href: "https://github.com/jakecoffman/tanks-unity/releases",
            name: "Download"
          }, {

            href: "http://github.com/jakecoffman/tanks-unity",
            name: "Source"
          }]
        }, {
          title: "Tanklets",
          link: "https://github.com/jakecoffman/tanklets/releases",
          image: tanklets,
          tags: ["Games", "Go"],
          text: "Same game as Tank Game but written from scratch in Go. I used no game engine, had to learn OpenGL and ported Chipmunk2D for this project.",

          links: [{
            href: "https://github.com/jakecoffman/tanklets/releases",
            name: "Download"
          }, {
            href: "http://github.com/jakecoffman/tanklets",
            name: "Source"
          }]
        }, {
          title: "Chipmunk2D in Go",
          link: "https://github.com/jakecoffman/cp",
          image: cp,
          tags: ["Games", "Go"],
          text: "Go port of the excellent Chipmunk2D, originally in C.",
          links: [{
            href: "https://github.com/jakecoffman/cp",
            name: "Source"
          }]
        }, {
          title: "Set Game",
          link: "https://set.jakecoffman.com",
          image: setgame,
          tags: ["Games", "Go", "JavaScript", "Vuejs"],
          text: "Multiplayer web-based version of the Set card game.",

          links: [{
            href: "https://set.jakecoffman.com",
            name: "Play"
          }, {
            href: "https://github.com/jakecoffman/set-game",
            name: "Source"
          }]
        }, {
          title: "Resistance",
          link: "https://resistance.jakecoffman.com",
          image: resistance,
          tags: ["Games", "Go", "JavaScript", "Vuejs"],
          text: "Multiplayer web-based version of The Resistance.",

          links: [{
            href: "https://resistance.jakecoffman.com",
            name: "Play"
          }, {
            href: "http://github.com/jakecoffman/resistance",
            name: "Source"
          }]
        }, {
          title: "Trusted Friend",
          link: "https://play.google.com/store/apps/details?id:com.jakecoffman.trustedfriend",
          image: trustedfriend,
          tags: ["Android", "Java", "Go", "gRPC"],
          text: `Trusted Friend is an Android App that allows you and your closest friends to request
      each other's locations. You are notified when your location is requested, so it's not creepy.`,

          links: [{
            href: "http://github.com/jakecoffman/trusted-friends",
            name: "Source"
          }]
        }, {
          title: "camcontrol",
          link: "http://github.com/jakecoffman/camcontrol",
          image: camcontrol,
          tags: ["C++", "Qt", "VLC"],
          text: `camcontrol is a Qt app with embedded VLC player to open and control multiple Amcrest cameras at once`,

          links: [{
            href: "http://github.com/jakecoffman/camcontrol",
            name: "Source"
          }]
        }, {

          title: "Arduino Security System",
          link: "http://youtu.be/lfOxgK1-5HM",
          image: arduino,
          tags: ["C", "Arduino", "Embedded"],
          text: "One of my first open source contributions, an Arduino emailed me when my door opened",

          links: [{
            href: "http://youtu.be/lfOxgK1-5HM",
            name: "Watch"
          }, {
            href: "https://github.com/jakecoffman/arduino-security-system",
            name: "Source"
          }]
        }, {
          title: "Gorunner",
          link: "http://github.com/jakecoffman/gorunner",
          image: gorunner,
          tags: ["Go"],
          text: `I used to be obsessed with making a better Jenkins. This was an early attempt
      using Go, with AngularJS on the frontend.`,

          links: [{
            href: "http://github.com/jakecoffman/gorunner",
            name: "Source"
          }]
        }, {
          title: "Video Tutorials",
          link: "https://www.youtube.com/user/calicoJake/playlists",
          image: tutorials,
          tags: ["Teaching"],
          text: `A long time ago I made programming video tutorials. It was a little experiment
      to see if I could make money off of it. Turns out no, but it was fun and I seemed to help a lot of people.`,

          links: [{
            href: "https://www.youtube.com/playlist?list=PL0DA14EB3618A3507",
            name: "Flask Tutorial"
          }, {
            href: "https://www.youtube.com/playlist?list=PLXbwrYvH4U89KwOnk79AA8j-s2nmDbWDk",
            name: "Go/Angular Tutorial"
          }]
        }]
      }
    }
  }
</script>
<style lang="scss">
  @import '../scss/_variables';
  .cards {
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    width: 100%;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
    border-radius: 1rem;
    margin-bottom: 1rem;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #eeeeee;
  }
  @media (min-width: $breakpoint) {
    .cards {
      flex-direction: row;
    }
    .card {
      width: 300px;
      margin: 1rem;
    }
    .p-img {
      height: 300px;
    }
  }
  .p-img {
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
    width: 100%;
  }
  .badge {
    background: #2f2eff;
    color: white;
    border-radius: 5px;
    padding: 4px;
    margin: 4px;
    font-size: small;
  }
  .project {
    display: flex;
  }
  .project-text {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
  .links {
    display: flex;
    > * {
      margin-left: 2rem;
    }
  }
</style>
