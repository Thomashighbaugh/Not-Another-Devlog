---
title: "The Greater Gatsby"
tags: ["react", "gatsby","netlify", "javascript"]
published: true
cover: ./3.png
date: "2019-08-05"
---

Gatsby is a static site generator that I have spent a lot of time with at the very end of my month long push to write
three sites in React. I ended up rewriting more than just this Devlog when I realized the power at my fingertips using
this React framework (React being a library apparently). This post will detail the experience of using Gatsby to create
far better portfolio pieces than using WebPack without this framework would have been.

![3](./3.png)
#The Greater Gatsby
### How Gatsby Enabled Me to Build Better, More Featureful Sites for My Portfolio

The Great Gatsby was one of the books that defined my late teens and early twenties. Not because I took much from the
brevity it was written with, obviously, but because it contained two kernels (see what I did there) of wisdom that I
internalized fully. The first was the advise of the narrator's father to not judge others because one cannot tell what
they have experienced and the second after the narrator had experienced the Long Island society of the twenties fully
enough to become disgusted, he promptly fled and didn't look back. This meant that upon seeing Gatsby for the first
time, before I knew React with the level of competance that I now have attained, I was interested but unable to do very
much with it.

This last month has been dedicated to using the summer slow down in PC repair to spend the time instead making three
sites in the JS library/framework/whatever-it-exactly-is. The first is the redesign of my portfolio website, which I am
moving to a rolling release model for new feature releases and for which I have employed Webpack (a technology I learned
exclusively this month). The second site is one to serve as a web frontpage for my artwork, which I post mostly on
Instagram and is about the last non-coding-or-Linux related hobby I have left except of course for tending to my beloved
dog. The final of these sites is this one, a developer blog that can serve as a home for my ranting on technical subjects
as well as a central home for writing tutorials on subjects lacking in them that are written in comprehensible, if not
dense, English without need for a crystal ball or unstated prior experience with the subject.

At the months beginning I had set up a Gatsby starter and modified it with enough of the TLH flare that I was satisfied
and went to dutifully coding out both the portfolio and the gallery site with Webpack, which for the former was perfect
and turned out quite well. However I was plagued with issues on the Gallery site and so after weeks of learning Webpack
better and rebuilding the portfolio site at least a dozen times, I decided to take a break and work on the Devlog, which
of course was now suddenly not working. Like any frustrated developer, I decided to build the thing from the ground up
and went through the Docs on the [Gatsby](https://gatsbyjs.org) site, which were surprisingly helpful and easy to
comprehend. To sum up the most critical portions thereof, below are the big takeaways from the first portion of those
tutorials:

```bash
$ cd ~
$ yarn add global gatsby-cli
$ gatsby new <your-project-name>
$ cd <your-project-name>
```

## Plugin, Turn On, Drop Out

This process led me to realize how much simpler including additional plugins with Gatsby was and I did a little looking
through available plugins realizing how many options were available. The plugins are added to the `gatsby-config.js`
file in a very easy fashion, without need to add it to both the production and development files that isomorphic use of
Webpack requires. In exploring plugin options, I found the Gatsbygram project and associated plugin that queries the
API of Instagram and can be used to display users posts. Which I recognized would make for the best gallery site that
was in line with the pictures I post on Instagram. While this required additional learning, frustration and of course
several gallons of Mountain Dew, I have found that learning Gatsby's quirks is far easier than most of the other
options for making websites with React and SASS (which I use to style my sites due to a love of the modular CSS
approach and its feature set).

One of the things that I have learned in the last few days with Gatsby has been using GraphQL queries, which are part of
how Gatsby turns React into the HTML/CSS/JS files rendered by the browser. This additional language simplifies the application
logic as it compares to doing this only with the associated JS in a non-Gatsby context but offers the rich and dynamic
potentiality for pulling in even more information and doing so based on that which may not be known by the author at this
exact moment (like future blog posts) in a reliable way. The programmatic rendering of React into the webpage before you
now, in which you clicked the title and came to the post's own page, makes for a powerful means of utilizing the React that
I have taught myself in the last few months most intensively.

## Developer Experience

While my portfolio site made it clear that as I learn more React and applications of it, it becomes easier to grapple
mentally, the use of Gatsby makes the use of the associated technologies that would surround the deployment of a React site much
easier to configure. Unlike the developer who had "Understanding > Configuration" as their bio on GitHub, I understand
the clear need for understanding and tinkering with the development environment if one wants to have a robust and mature
understanding of these technologies, likely because I use the configuration heavy and more often broken Linux family of
operating systems. Nonetheless, now that I have an understanding of and experience with Webpack and Babel configurations
it is always better to use a boilerplate for dealing with those things that reconfiguring them for each project as that
would cost in productivity time and likely lead to unneeded frustrations in debugging.

The addition of features to a particular effort in Gatsby is relatively simple with the inclusion of the plugin in the
config file and because the official plugin directory usually has decent descriptions, something that is not true of almost
anything else in web development, including React itself with its unusually sparse docs for what a paramount change in
thinking about web development compared to the JS one typically learns first (though I think it would be best to learn
React and PHP at the same time then JS as JSX has a lot of familiar concepts to HTML one should have learned prior). As far
as my experience in learning React to the level of being able to create websites with it from scratch, Gatsby offers the
least troublesome manner of doing so that while still having its own issues is not nearly as annoying nor suffers from the
critical lack of documentation that must be my biggest gripe with technology today and why it is not being even more readily
adopted and improved the world over, since no one in any language can understand something that NO ONE WRITES ANYTHING ABOUT.

The development server (+hot-loader) is something devs will become accustomed to if using Gatsby, its run with:

```bash
$ yarn develop
# or
$ npm run develop
```

The `gatsby build` command is another one that devs will grow to appreciate as it transpiles the code into what will be
displayed on client machines with minimal interaction (other than error codes)

```bash
$ yarn build
# or
$ npm run build
```

Usually I run these in tandum, which is technically unnecessary as `gatsby develop` basically is doing that, but I have
noticed the more the build command is run, the more the system will lint the project and so making the machine go over the
project twice means even more errors are caught before some garrish error pops up on my browser that envokes the inner frustration
that all devs should be aware of in themselves.

```bash
# TLH's flavor
$ yarn build && yarn develop
```

#### Hot Loader, Git, Other Considerations

The hot loader is only able to change so much from a change in the files and it is not the most reliable at indicating you
broke something when changing code. Unlike any documentation I have ever read, ever, I suggest killing the termina process
running the dev server (<kdb>CRTL</kbd> + <kbd>C</kbd> on Linux)and then restarting it after major code overhauls, refactoring,
changing anything config file related and every so often regardless to determine the exact state of the site as express in
your work. This method means a slight downtime, on a decent machine not more than a minute usually, but will lead to far
less instances of introducing breaking changes that you must laboriously go back in your commits to find.

I also reccomend committing often, even before testing the site on Netlify (more on this below). This way if you forget to do
something like restart your dev server and are having trouble locating the breaking change you can go back to a functional
state and work up from there. I personally don't care much for Git's cli on Linux but it works well enough and if you include
a note about if the site is working or not, you will save considerable time in debugging and probably spare yourself heart
palpitations. I don't use Git without using the remote servers provided for free to me by GitHub (working on
transitioning to GitLab as primary due to distaste for the GitHub branding and awful UI).

This git commit madness has one drawback, sometimes I test substantial changes in a new directory and when time comes to copy
paste (never saying copy pasta, ew) this can lead to the remainder of various relics in the code base that I do not like
but usually not breaking relics. This is a minor drawback compared to being without backups though, which someone who
reinstalls my OS regularly I absolutely need. You could also use a local backup repo, but there is little need and
increased safety in using the free backups provided by GitHub or GitLab unless one is working on a large companies website
but they will of course include that with their on boarding.

#### Netlify Integration

The best part of Gatsby, and why I knew about it before I knew React to this level, is its inclusion of a Netlify plugin
that makes the process of hosting the site there an even easier experience. While not paid by them, nor paying them either
actually, I often speak highly of this hosting option because of its extreme ease of use and featureful offerings on their
free tier. When I hosted my portfolio on S3 it did only cost a few cents a month but with Netlify I ported in my own
custom domain and pay NOTHING. I also host numerous sites that function as documentation, project front pages and as a
more realistic playground than CodePen or CodeSandBox can possibly be as Netlify is closer to the actual server
environment (I lack most developers fears of servers, you know why). The plugin creates the header file needed to host
Gatsby sites in the environment they were developed, which is not something I required prior but having learned this have
determined what the issue was with the portfolio site on that platform and been able to adapt said header file to the
non-Gatsby site in this web development odysessy that ate July of 2019 for me (and left me a much more confident
developer in general).

If interest in including the Netlify plugin in your own Gatsby project do the following

```bash
$ yarn add gatsby-plugin-netlify
# or
$ npm i -s gatsby-plugin-netlify
```

Then in your favorite text editor

```
// In your gatsby-config.js
plugins: [`gatsby-plugin-netlify`]

// or if you need to add, remove, transform or whatever the headers

plugins: [
{
  resolve: `gatsby-plugin-netlify`,
  options: {
  headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
  allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
  mergeSecurityHeaders: true, // boolean to turn off the default security headers
  mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
  mergeCachingHeaders: true, // boolean to turn off the default caching headers
  transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
  generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
  },
 },
]
```
There is also the option of using Netlify's CMS with direct integration into the Gatsby environment through the `gatsby-plugin-netlify-cms`
plugin, which I have plans to integrate here but at the time of this writing, have not had very much experience with. From my quick trial of it, 
the Netlify CMS system is nice and includes an easy means of using a web portal to produce content without having to git 
clone the source code but for now I am doing this the hard way, which has always been my thing, see Linux use. 

## Overall Impression
The use of Gatsby as a means of bringing React code to production via static site generation is extremely impressive because
the relative ease with which it enables the developer to create and maintain the site for a litany of purposes exceeding 
the typical blog scenario with plenty of polish on that portion of the code. Through Gatsby themes and starters are available that
would enable starting up a site with minimal to no development, but I prefer to have more control and tend to dislike the
way other developers structure their projects (a lot) so I have less experience with themes and less than stellar experience with the 
community starts (the basic start is minimal and thus functional). My only gripe is that the pages directory that the static 
site generator uses i
