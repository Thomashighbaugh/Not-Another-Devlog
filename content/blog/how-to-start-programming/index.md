---
title: Dotfile Management
date: 2017-09-12 00:00:00 +0300
description: Just like configurations themselves, everyone has there own method of managing dotfiles. Here I describe how I use Makefile to provision mine.
img: ./how-to-start.jpg # Add image post (optional)
tags: [Dotfiles, Makefile] # add tag
---

## Many, Many Options

If you have explored dotfiles repos on GitHub or GitLab, one very obvious difference between them all are the methods in which they are provisioned (usually plastered all over the ReadMe).

I have tried many of these options, with varying degrees of success but found the supposedly most complicated way, using Makefile, to be the easiest and best method of provisioning my dotfiles consistently.

Here are some options and my thoughts on each

| Option       | Experience                                                                                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dotbro       | Easier to use than stow, still works just as a syslink farm. Awkward repo structure required                                                                                                                                                           |
| Stow         | Awkwardly creates sysmlink farm but the cool kids love it. Clones exactly what is in the repo to the home directory, meaning file names must be the same                                                                                               |
| Shell Script | more configuration options than syslink farms but no modularization without excessive extra work                                                                                                                                                       |
| Makefile     | Creates syslink farm and allows shell script like configuration. Best of both worlds and easy to write. Since you control the link commands, you can control the file names adding dots to the link but having the actual file not hidden. MUCH BETTER |

## Makefile is the Winner

Makefile turns out to offer the most in ways of features, allowing stow like **syslink farming** (meaning all your dotfiles stay in the repo and are linked to their original location) while also enabling the user to provision other aspects of their system easily from the same file with the same command `make all`

### Its a Little Phony

Makefiles run modular sets of commands that are listed under headings according to how they are called at the files beginning. Typically `.Phony:` is the first line where all the commands are listed followed in my case by `.all` where I list the commands I want to run in the order I want them to run.

A typical command looks like the following:

```bash
example:
    mkdir -p ${HOME}/.config/some-program
    ln -svf some-program/dotfile ${HOME}/.config/some-program/dotfile
```

### Repo Structure

To keep things easy, most of my Makefile commands are named after the directory in my repo, which is in turn named after either the topic it falls under or the specific program it holds the configuration to. 

For example let's imagine we have this directory in our dotfiles  
```$xslt
kitty
    |
    - kitty.conf
    - colors.conf

```
In the Makefile we would just add commands to link those files to where they are expected within the system like so 
```bash
kitty:
    ln -svf ${PWD}/kitty/kitty.conf ${HOME}/.config/kitty/kitty.conf
    ln -svf ${PWD}/kitty/colors.conf ${HOME}/.config/kitty/colors.conf
```

#### No Naming Madness
Stow and dotbro, as well as any other dotfiles management system I can even get to work, require either the removal of the dot at the file name, or for the directory structure to mirror where the files are going or some other stipulation that makes using them an awful experience if you have git repo OCD like me. 

That's not true of Makefiles, since you control the commands that are being run, you can have the destination of the link be whatever you want. For instance using the example above let's say I named `kitty.conf` as `cat.box`. I would just need to enter

```bash
kitty:
    ln -svf ${PWD}/kitty/cat.box ${HOME}/.config/kitty/kitty.conf
    ln -svf ${PWD}/kitty/colors.conf ${HOME}/.config/kitty/colors.conf
```
and everything would work just as well. So much for the cool kids and their Stow

## Advantages Over Roll-Your-Own Scripts
I generally prefer using my own scripts when I can, even if they are rudimentary they are a lot easier to manage than the uncommented monstrosities common in Linux. Makefile offers one advantage over a Tom script though, its modular without need for extra bs to debug. 

Makefiles are used for installing and removing programs in your system, having both sets of commands in th esame file called with commands like `make install` which calls the make command install. Its a very elegant system compared to stow farming and it is easily adapted to provisioing different systems (which is my next project as git branches are a little less useful as it happens)