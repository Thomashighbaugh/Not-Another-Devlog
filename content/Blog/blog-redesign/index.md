---
title: Headshot Free Blog Redesign 
tags: ["react", "scss", "gatsby"]
published: true
date: "2019-09-20"
---

Having reached a place where I am satisfied with the overall design of
my new portfolio site, I returned to finish this site and decided that the
two looked a little too much alike and that a lot of the standard fair
included in blogs, like header and footer bars, were simply overkill here.
So I came up with the now present design of the blog, here's what I was 
thinking. 

## Introduction

Every developer blog that is hosted outside of Medium includes a number
of features that in some applications and designs makes a lot of sense but for my needs with this devlog, would be overkill to the power of 50.
I do also get why people plaster their headshot on any website that bares their
names, we do live in the age of social media after all and our pictures are 
a ubiquitous currency in this epoch.

Nonetheless, I found the inclusion of a lot of standard features which take
up the top and side margins of pages and the inclusion (and fiddling with 
the SCSS of) another headshot to be redundant to the extreme. Having worked
out most of the kinks in portfolio site, I turned my gaze back to the SCSS
of this site and started to strip out the annoying aspects of its design, while
rearranging the stylesheets somewhat to make the design more atomic and here is 
what I came up with. 

## First: SCSS not SASS
So the difference, according the SASS documentation, is that SCSS features
syntax much more like CSS in using curly braces and semicolon. I prefer to
use the SCSS syntax, not because I am a creature of habit (after all most
of the technologies I use I learned this summer) but because I find it easier
to read when the file has punctuation marks on it. 

Using tabs to organize levels of relations on a Yaml file is what makes 
Ansible so easy to write and easy to use, however I find that CSS-type 
files are far more prone to getting sloppy in ways that are not easily 
corrected by Prettier and a misplaced space can seriously shift the 
site's appearance in ways my mind can more readily spot if punctuation is
used in the stylesheet. 
 
 ### Example 
 The below shows the difference between SCSS and SASS
 ```scss
//SCSS
aside{
color: #44ddff; 
padding: 2%;
  button{
    color: #fff;
    background: #ff9cff;  
}
  button:hover{
    color: #6fffff;
    background: #343a40;  
}
} 
```
```sass
//SASS
aside
 color: #44ddff 
 padding: 2%
 button
    color: #fff
    background: #ff9cff  

  button:hover
    color: #6fffff
    background: #343a40  


```
 As you can see, a deviation in spaces in the SASS example and the 
 button styles could be applied globally instead of within the aside. 
 I think this is far too confusing and considering that I am not much 
 slowed down by typing a single character or pair of brackets, I don't
  think I loose any productive capacity doing it this way. But your 
  mileage may vary, of course. 
 ## Adjusting for Scope of the Site
 Almost all websites have a header, footer and sometimes a sidebar. This 
 makes sense in some contexts and in my portfolio site I needed the header and 
 footer to frame the site. None the less, I did not want to simply replicate
 that site here and have no need for features that exceed the scope of the 
 site. 
 
 The **scope** of this site is to serve as a place for me to rant about
 technology related topics in a single location while demonstrating my 
 capacity as a web developer both in the design and how I manage the content
 of the site. 
 
 Some features, like a more robust CMS, are still on the "To-Do" list but
 the general need for a place to serve as dumping grounds for my tech related
 babbling is served without links to my social media profiles. In fact, I 
 can leverage my portfolio site for that purpose and need not create more 
 eyesores on this site. 
 
 ## The Final Design 
 ### Change Manifest 
  | Item | Add/Remove/Modification | Notes |
 | --- | --- | --- |
 | Header | Remove | Unneeded With Navigation on Sidebar |
 | Footer | Remove | Added copyright info to the sidebar |
 | Navigation Buttons | Added | Buttons to navigate to the home, about me and archive pages (w/ labels) |
 | Social Links | Remove | Removed social links because they are extraneous in the extreme |
 | Tech Tags | Modification | Added new tech tags. Removed the sort by tech tag functionality, will restore if necessary |
 | Atomic Design | Added | Added SCSS files to certain components | 
 | Barcode Text | Added | barcode font as site title |
 | Background | Modification | New online tool generator and new design. 
 | Color | Modification | The purple highlight color is several shades lighter and more blue |
 | Margins | Modification | Increased the margins and padding | 
 | Border | Modification | Changed Borders to double |
 | 
 
 ### Header && Footer
 I eliminated the Header and Footer of the site completely. While I had thought about saving one or the other, I ultimately liked the way stripping them looked the most and worked all their functionality into the sidebar. 
 
 ### Sidebar Changes
 #### Social Links 
 I eliminated the social media icon links, they are unnecessary, kitsch and more of a hassle than they are worth. All this information is available elsewhere on my portfolio, having redundance like that makes the site unnecessarily cumbersome, I have long since proven I can make it work. 
 
 #### Tech Tags 
 I wasn't thrilled with the functionality of the tech tags as a way to categorize the posts (something I want for my portfolio's project page but not really needed here yet) so I stripped out that functionality for now. 
 
 I also made the appearance of the colors match the color palette I used elsewhere on the site too. Not because it makes anything look better or worse, but for standardization purposes. 
 
 #### Navigation Buttons 
 Instead of social media icons, I opted to use icons for the navigation functionality of the site. They include a written label stating the function, so I was able to use a strange cast of icons for these purposes. Home is an igloo, for instance, which is not a reference to some northern position, its actually just cause I like the look better (I live in California and its never cold here at least). 
 
 ### Atomic Design
 To create more modular components, I created SCSS sheets in my various components as part of the redesign. 
 In a perfect world [or my next project] these sheets should hold as much of the SCSS as possible to make the components truly 'standalone' so that they are useable elsewhere. Being that I just prefer using separate files for purposes of keeping files shorter and more modular, this translates into the additional SCSS for various portions of the codebase that it was less challenging to modify.
 
 While this still means one would want to style specific portions of the site from a separate set of stylesheets (such as a theme), it makes for a more hands on process of editing everything to be consistent but allows for the El Dorado of React Components that are configuration free site building blocks you can use in other projects. 
 
 I am not quite there with this site's SCSS files and not quite ready for the mess doing this to my portfolio site promises to be, but its on the way. The one frustration I have at present with that process is the way Gatsby generates pages means I am having to use my Layout Component to stack up page specific modifications (though I am moving to using a directory within the templates directory to store them).
 
 ### Libre Barcode 39 Text
 This font is from Google Fonts and is one I have been hoping to work into 
 a site (and not as a tattoo) and for some reason this site's title still 
 I took a while to notice it would be the perfect use of the font. In this case, 
 using the barcode implies something is generic, which is what the title is contraindicating. 
 
 Confused? That's the art of it. 
 
 ### Background 
 
First off credits 
- Old background generator [Pattern Picker by Kevan](http://pattern.kivan-works.com/)
- New background generator [Hero Patterns](http://www.heropatterns.com/)

Both the listed tools give the user a suite of svg pattern generated backgrounds and allow the user to pick the colors it uses. They have similar and different options, Kevan's has my favorite, that I use in my portfolio (the circuit board) but having just found Hero Patterns, I am trying something new. 

The background I chose is wood grain, only I used purple to color the 'wood' and the Bootstrap gray for the details in the grain. It works well to give a pleasant and surreal backdrop to the site, which without the header or footer has become a card within the background. 

### Color
I have updated the color palette to use the tones of the Tomorrow Night colorscheme except for shifting the purple to a tone similar bluer and easier to look at than it was prior (Gatsby purple) just for the sake of anyone looking at the site, as the old combo gave me headaches like standard black on white does. 

The site is still pretty much just the two colors and variants of it, but I included the whole color palette here as a way to give the few other colors needed a place within the stylesheets easy to pick up or change later on during the next redesign. 

### Margins 
The site increased the main (or center of the contents) margins naturally without a header or footer, but I expanded that gap a little since as a means of making sure that the background to content ratio was balanced better. Too much content on dark grey and things get too much like metacities gothic sites (or my old MySpace profile). Too much background and its every basic WordPress blog that's two-thirds white space. 

### Borders
I am not generally a fan of double as a border, but it seems to work well with these colors and so I went with it as an accent. 

### Icon 
I finally made a quick icon for the site (to use as a favicon or brand or whatever later). I might remake it to one with the barcode, but it works to quickly determine the difference between the blog from other sites. 

## Headshot Free Devlog Achieved
Don't get me wrong, vanity is a thing for me the same as everybody else but I am 
happy to have at least produced this blog in a format that strips the oft unneeded 
profile picture from it (including in the about me, this is not a book jacket!). Because what
I look like, however much I or someone else likes or dislikes it, really has nothing to 
do with the ideas discussed in the site or the design of the site or its functionality, thus its
not really needed and getting in the way of your enjoyment of the content (hopefully!).