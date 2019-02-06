<template>
  <article class="qa">
    <div class="wrapper">
      <h1>Q &amp; A</h1>

      <h3 id="what-are-your-general-thoughts-about-programming">What are your general thoughts about programming?<a class="headerlink" href="#what-are-your-general-thoughts-about-programming" title="Permanent link">#</a></h3>

      <ul>
        <li>Statically typed languages got a bad reputation and now we are paying the price for having large dynamically typed applications that are difficult to refactor.</li>
        <li>Just as pure OOP is not the answer, pure functional is not either.</li>
        <li>Don’t use Mongo unless you are using it to store documents that have no relationship, nor ever will have relationships.</li>
        <li>ORMs will break down, be prepared to write queries by hand.</li>
        <li>Don’t rewrite your codebase.</li>
        <li>Don’t re-architect things unless it’s really a problem. You work for a business, add value.</li>
      </ul>

      <h3 id="what-are-your-general-thoughts-about-managing-developers">What are your general thoughts about managing developers?<a class="headerlink" href="#what-are-your-general-thoughts-about-managing-developers" title="Permanent link">#</a></h3>

      <ul>
        <li>Typically non-developers can’t lead developers as effectively as a fellow developer can.</li>
        <li>Project managers aren’t above developers, nor the other way around. We are equals and need to decide what gets done next. You manage customer expectations and I’ll get things done.</li>
        <li>Agile is not for developers, it’s for customers and project management.</li>
        <li>Ideas are worthless. Execution is everything.</li>
      </ul>

      <h3 id="why-do-you-use-go-so-much">Why do you use Go so much?<a class="headerlink" href="#why-do-you-use-go-so-much" title="Permanent link">#</a></h3>

      <p>I like to use Go for my personal projects because it’s simple to get running and deployment is far and away much easier than any other programming language out there. There definitely are some rough spots in the language such as lack of generics, but I find the trade-off is worth it.</p>

      <h3 id="how-do-you-feel-about-language-x-or-framework-y">How do you feel about language X or framework Y?<a class="headerlink" href="#how-do-you-feel-about-language-x-or-framework-y" title="Permanent link">#</a></h3>

      <p>I think most languages and frameworks have redeeming factors so you won’t hear me say I hate any particular one. The most challenging part of software is choosing the right stack for the problem at hand.</p>

      <p>I also think it’s important to not limit your learning to just a single language or framework. You can learn so much more about your favorite language just by learning a different one.</p>

      <h3 id="favorite-os-for-developing">Favorite OS for developing?<a class="headerlink" href="#favorite-os-for-developing" title="Permanent link">#</a></h3>

      <p>I have used Mac, Windows, and Linux desktops successfully in developing cross platform applications.</p>

      <p>I personally prefer Windows due to the low cost of hardware and have found “Bash for Windows” to be quite nice.</p>

      <p>Typically my Linux desktops last about 6 months before I do an upgrade that breaks everything and I go back to Windows.
        Linux on the Desktop is still to immature and tends to be more of a hobby than an OS.</p>

      <h3 id="why-don-t-your-personal-projects-have-more-tests">Why don’t your personal projects have more tests?<a class="headerlink" href="#why-don-t-your-personal-projects-have-more-tests" title="Permanent link">#</a></h3>

      <p>Most of them are proof of concepts or “for fun” and since writing tests isn’t fun I don’t. Code without tests is not production ready so I don’t recommend using most of my projects in production.</p>

      <p>If ever a project takes off, the first thing I would do is write tests.</p>
    </div>
  </article>
</template>
<style>
  .headerlink {
    font-size: smaller;
    color: gray;
    padding-left: 1rem;
  }
  ul {
    list-style: circle;
  }
</style>
