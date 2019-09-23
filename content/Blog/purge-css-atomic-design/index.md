---
title: Atomic Design, Purge CSS and Making Standalone Components
tags: ["react", "scss", "gatsby"]
published: true
date: "2019-09-20"
---
As mentioned in briefer format in the post on the site's redesign, I have 
been toying with the idea of using Atomic Design to create truly 'standalone'
components out of the React I make my sites out of. These components would
then be leveraged when creating new sites to speed up making those sites 
with code I knew intimately and thus would be even faster with than components
written by someone else. Here's a more detailed analysis of that decision and the 
context it emerges from. 

---
## Introduction 
I am lucky that I fell right into the JAMstack, not because I was ahead
of the trend or listening in on coffeeshop conversations in Dogpatch, but 
because I arrived at the same conclusions as the people popularizing the 
phrase when I learned Web Development and like things to be free (thanks Netlify!). 
I also learned Java in high school (all that time ago) and so Object Orientation 
as been eating at my sense of reality ever since. 

While that concept, or design paradigm if you will, has its own strengths and
weaknesses, one aspect I thought was interesting was creating reusable portions of 
the code that would open up the development cycle to much more rapid clips. Now one underrelated college degree and two years of solid Linux use later (and a few extra years managing retail pet food stores ) I think I have found a way to do exactly 
that for the websites I write. Specifically, I can craft a stable and complete portion of the code
that could be used on any other site with comparable configurations and it would look and act [mostly] the same. 

## Atomic Design 
Having moved to a modularized way of organizing my stylesheets, moving the stylesheets to the
directory in which they are being used (or as close as possible) might seem a little strange. It did
to me at least, as I feared that this would complicate changes across the code more and the 
point of the modularization paradigm was to reduce the complications. Until I thought more about it, 
I resisted the idea. 

**Atomic Design** is to reduce the components, or portions, of a design into smaller
and self contained units. Like the thing I was already splitting stylesheets into expect it 
also wisely advises to split them into 'self-contained' units, which means
in my context to take those modularized stylesheets and move them to the 
components, calling each not at the main.scss file but at the component itself. 

If done correctly, this makes the design portions able to be taken out of one
context and placed into another, which a well designed site structured accordingly 
would make for those legendary reusable portions without relying on code
I don't know and that if breaks, I cannot fix as easily. 

## Purge CSS 
One contention my mind still had, after realizing that using component directory stylesheets would 
still achieve my intended goal of reducing complexities was the potential for
code that is not **properly optimized**. 

**Proper optimization of CSS** is to have little to no overlapping code and as little of it as possible.
In a stylesheet structure that allowed for standalone components, this would 
imply a lot of **redundant** code that could tax resources on the server, make the 
source code a nightmare and make managing the site's appearance a mess if left
as a bunch of components that standalone and become slapped together on some 
site haphazardly by me (or some else even less aware).

Part of a solution to this challenge is **PurgeCSS** which I am currently using as an extension for Gatsby. 
It turns a portion of the `gatsby build` command's action into a check through the CSS stylesheets generated and removes redundant code
from the project (and provides a little dialogue about how much is saved from the stylesheet). This elimination of 
redundant code from the project also includes the vendor code included in CSS-variants as @include or similar like Bootstrap. 

## Themes and their Application
Except each site is actually composed of a lot of customizations that 
clients or the author make on top of the portions that lend to easily being 
stripped out of the central stylesheet thus there is still something else 
needed to achieve my goal. 

To address my objections, the first thing that is needed is to create central
stylesheets that hold the vast majority of the individual customizations of a 
site there, as a sort of theme. The second part of that is designing the 
components to respond universally to these themes, and thus can be 'split out' 
of the whole site including defined variables in the place of what internally will 
remain imports from the central stylesheet but to use these references **minimally** (to reduce the level of work needed to split them out), 
**consistently** (to allow for the deletion of the variables if an existing theme is present) 
and **reasonably** (so others can pick the component or stylesheet up and intuitively grasp the way its working)

### Using Variables in Component Stylesheet
Thanks to the use of @if in SCSS stylesheets, I can access the central stylesheet (via `styles/main.scss`) that can provide alternative values for the variables by having them declared and an import function or have defaults in the else statement
```scss
//within component's styles.scss

h1{
 //font-family 
  @if($font != null) {
    font-family: $font;
    } @else{
      font-family: monospace;
      }

 //color
  @if($primary != null) {
    color: $primary;
      } @else{
          color: #9063ec;
          }

  //font-size
  @if($font-size != null){
    font-size: $font-size;  
  } @else{ 
    font-size: 4rem;  
}

}
```
