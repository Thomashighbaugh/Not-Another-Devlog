import React from "react"
import Index from "../components/Layout"
import SEO from "../components/SEO"
import Sidebar from "../components/Sidebar"
import { Container } from "react-bootstrap"

const About = props => {
  return (
    <Index>
      <SEO title="About" />
      <div className="post-page-main">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="post-main">
          <SEO title="About" />
          <div className="mt-3">
            <h2 className="heading display-3">About</h2>
            <h3 className="heading display-4 mb-5"> Thomas Leon Highbaugh </h3>

              <p>
              Thanks for visiting my blog! This blog is my personal blog is the result of my on going efforts as a web developer/ software engineer amd Linux fanatic. In my work I
                try to make the technologies and sites I work on more visually interesting and accessible without compromising on the core functionality of the project. In technical
                writing, I try to account for audience and limit as much of the jargon that makes people cross eyed and produce content that can help anyone working with similar technologies
                if not directly than at least by offering novel approaches and perspectives on the projects I have at hand and am motivated to write about.
              </p>
              <p>
                Other than ranting about Linux, I also make other software and making digital artwork out of pictures I take. My art features many of the same color themes that my sites
                tend to. It also utilizes a similar approach to matching of colors to dark monochromatic tones, which cue the eye to the various portions of the interface. Artisitic acumen outside
                of what I could put together with prose, was mostly lacking in my life until development forced me to consider things I hadn't noticed before and caused a boom in my artistic
                capacity that is also demonstrated in the sites I produce.
              </p>
            <h4>I hope you enjoy the blog</h4>

              <br/>
            <hr/>
            <br />
            <h2 className="w-100 display-5">About the Not Another Devlog</h2>

            <Container className="col-4 float-right" fluid>
            <h4>Technical</h4>
              <p>
              This blog is written using React and SCSS, from which it is rendered into static HTML/CSS by Gatsby. Then its published to Netlify, who hosts it <strong>for free</strong>!
              </p>
              <p>On top of using SCSS stylesheets to style the site, this site also includes Bootstrap as a basis for a consistent render across platforms and browser support. In conjunction with React, I find this a fast and reliable way to craft interfaces which React components make easy to share between projects saving time and energy.</p>
              <p>This site doesn't use any CMS functionality or paradigm. I manage the content 'headless-ly' meaning I manage the content myself in handling the source code and content all at the same time. This is a perk of writing websites, especially blogs, for yourself! </p>
            </Container>
            <Container className="col-4 float-left" fluid>
<h4>Topical</h4>
              <p>
                The topics addressed in this blog will relate mainly to my experiences as a developer and a Linux user, or other technology related topics I feel so inclined as
                to record my thoughts on. This is a devlog, meaning developer's blog, so many topics will hinge around the use of the technologies mentioned in the process of
                developing website and software.
              </p>
              <p>
                Being that I lack any sponsorships and have no vested interest in prompting one or another technology, the posts that become blog posts featured on this site will include
                my actual opinion. While this can change and I acknowledge that I will shift opinions as I deepen my knowledge and new technologies emerge, the reader can be assured that I
                am not simply farming ad revenue or attempting to sell them something, I am just stating what works or doesn't work for me and my reasons.
              </p>
            </Container>
            <Container className="col-4 float-left" fluid>
            <h4>Writing</h4>
              <p>There will not my a scheduled release date for posts, as I am often busy at the worst times and find that such rigorous self-discipline as I tend to enfirce upon myself
                are not conducive to continued productivity or creativity. </p>
              <p>That's not to say that I will only infrequently post on this site, as I expect it to become a playground for my mind to consider the various technologies I
              use or am considering using. </p>
              <p>The style that my writing for this site generally should take is that of writing friendly technical documentation, like good Readmes, with a slight edge
              of my particular brand of humor. Being intended for a wider audience than just myself, I will try to keep it on topic and will take less informal liberties than the
              typical Medium article about WebPack, despite also appreciating that style for what it is. </p>
            </Container>
          </div></div></div>
    </Index>
  )
}

export default About
