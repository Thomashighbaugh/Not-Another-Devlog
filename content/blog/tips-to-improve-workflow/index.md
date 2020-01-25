---
title: Dotfiles && Provisioning 
date: 2017-09-12 00:00:00 +0300
description: Unlike many dotfiles repos, I use my repo to provision my system as well. Here's my logic on that.
img: ./workflow.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Productivity, Workflow] # add tag
---

In cases of provisioning systems for others to use who may hate you configurations or want to use their own, like the 
DevOps context, but if you are the sole user of the machine, or the primary user and you have root access, I can't foresee
why you would not want to consolidate these two steps without it being really a case of fanboy/fangirl-ism relating to 
your dotfiles manager or provisioning tool. 

## The Easy Way to the Perfect Installation

Being that I lack any such irrational loyalties, especially since the Raiders moved to Las Vegas, I do not see why one 
could not provision any system they want using the Makefile method that I currently employ across my systems. I can set 
up different commands to call for different systems (a work in progress at the moment) or use the admittedly clunkier method
of using git branches for each machine, if you wanted to keep some configuration options in common otherwise different repos would 
probably be best. 

Since the Makefile method allows you to run whatever commands you want, bundled together in specific orders as you want
or need them to be, you can easily throw in the package manager commands you want with an automation flag that will take
away need for you to do much other than watch and make sure to enter the sudo password (or you can dangerously change the
system with visudo and it won't even ask for that). With a few annoying exceptions in pacman, this takes away my need to 
attend the install at all save to watch for error codes when I have messed up the Makefile. 

## Throw the Bin in Their Too
Like most Linux users, I call some scripts a lot and prefer to have them accessible via my system's path. Thus I stop
saving them with extensions and put them into a `${HOME}/bin` directory that I then add to my path via `.profile` for 
use when I need them. This is another repo that I have seen people make, but this also makes more sense to keep in the same
repo as your dotfiles+Makefile and just symlink from that repo to the `${HOME}/bin` location as you need it. These scripts
are never really large, for me at least, and this method takes the hassle out of remembering yet another repo I need 
to make commits to all the time.  