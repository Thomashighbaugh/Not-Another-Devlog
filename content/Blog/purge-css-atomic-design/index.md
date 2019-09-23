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

## Global Styles in an Atomic World
`"What about those styles applied globally?"` you may be asking yourself. I thought the same thing until I 
realized, in the process of trying to consolidate my stylesheets, that you can use the layout, or other general 
page setting component, stylesheet to apply all the extraneous styles not related to components. 

This **doesn't** remove the need for some stylesheet that has values for global variables, mixins and extends. 
What it does is strips out the component styling and allows your definition of the variables to act as a sort of 
theme template if broken up correctly. 

