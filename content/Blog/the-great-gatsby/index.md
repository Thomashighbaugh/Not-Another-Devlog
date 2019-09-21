---
title: "The Great Gatsby"
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
## Introduction 
My portfolio site and this blog were written in React, which was rendered from React, SASS and 
Markdown files into a set of HTML and CSS files in a process similar to how Babel changes React 
into vanilla JS using a CLI program available through NPM (or Yarn) called Gatsby. 

After exploring WebPack, which does offer nice features and it has an incredible amount of extensibility.
It is just a little on the frustrating side and has a few too many features to make it appropiate for 
my portfolio or possible blog. Instead, I chose the more targeted tool, Gatsby. It offers a nice
**developer experience**, wraps many WebPack functions within itself, targets React and has a SCSS/SASS 
extension for my favorite CSS extension (I like writing SCSS style stylesheets, it organizes easily 
and makes sense to me, though either is fine). 

## The Concepts Behind It All  
**Static sites** are websites that are displayed on the server in the way that they are written. Aka
HTML/CSS files. **Static site generation** is the process of making these HTML/CSS files, which _Gatsby_ 
does from React and in my case SCSS files. 

**React** is a JS library that encourages a PHP-like component separation, uses JSX (which is written
like HTML) within Javascript, has been my web site language of choice since I learned it and is generally used in the creation of dynamic web apps. 

**Dynamic Web Apps** are web applications that generate content on the fly, or as the user needs 
them. This is seen in large sites that render specific data to specific users. To give an example, think of 
 how large web-merchants will have objects on their sites for rendering product recommendations dynamically. 
 
 **SCSS** is similar to SASS, both are extensions of CSS that add features like variables and type
 classes that can be imported by the stylesheet from another. SCSS differs from SASS in its use of 
 curly braces and semicolons. While SASS is marginally faster to write, I find a more thoroughly 
 marked code is much, much easier to read and write myself. [See my comparison below](SCSS-v-SASS)
 #####SCSS v SASS 
 ```SCSS
//SCSS
//easier to read and less dependent on spacing 
code{
  color: #4df;
  background-color: #343a40;
  
  .code-warrior{
    color:#ff9cff;
    background:#17161b;  
  }
} 
```
```sass
//SASS 
// if nesting tags, this can be confusing and harder for me to debug but it has application too
code
    color: #4df
    background: #343a40
    
  .code-warrior
      color: #ff9cff
      background: #17161b
```



```bash
$ cd ~
$ yarn add global gatsby-cli
$ gatsby new <your-project-name>
$ cd <your-project-name>
```
## Developer Experience: 
## Plugin, Turn On, Drop Out
Gatsby offers a lot of options and is relatively easy to extend and add functionality to, which makes
coding a lot of static websites with the modern and ergonomic React framework/library much more fluid. 

It is configured with a JS file and the added functionality is snapped in using back ticks. Plugins that
come with options the developer needs, the plugin is within a set of curly braces and followed by a comma. 
Which is pretty easy, at least it should be if you are using React but if not its good practice!

### Configuration & Plugins 
On [Gatsby's plugin repository](https://www.gatsbyjs.org/packages), there are a whole mess of plugins available 
for use in your next static site project. I use a number of them for this site and my portfolio site and which 
vary from one another. Included here is this some site's manifest and a little bit on why I included them:

| Plugin | Usage |  
|---|---|
| gatsby-plugin-react-helmet | Adds information to the `<head>` tags of the pages generated. |
| gatsby-source-filesystem | Enables accessing the file directory of the site, specifically my blog content |
| gatsby-transformer-remark | Changes markdown into the HTML of the site |
| gatsby-remark-prismjs | Inline and blocked code formatting, resolved through gatsby-transformer-remark |
| gatsby-remark-responsive-iframe | Wraps objects in Markdown like YouTube videos. Scales to width of the container |
| gatsby-remark-images | For rendering images within the Markdown files |
| gatsby-transformer-sharp | provides fields in GraphQL for image processing like resizing, cropping and making responsive |
| gatsby-plugin-catch-links | for internal navigation within a document |

> As you can see each adds some specific function to the site or is something like a rendering engine that itself can be extended by plugins (called transformers).


### Hot Loader

### Gatsby Development Server 
```bash
$ yarn develop
# or
$ npm run develop
```
### Gatsby Build Command
```bash
$ yarn build
# or
$ npm run build
```
### Dynamic Duo 
```bash
$ yarn build && yarn develop
```
#### Netlify Integration

```bash
$ yarn add gatsby-plugin-netlify
# or
$ npm i -s gatsby-plugin-netlify
```
```javascript
// ~/gatsby-config.js
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


## Overall Impression
