---
title: "The Manjaro Experience"
tags: ["linux","react"]
published: true
date: "2019-07-20"
---
I have been a daily Linux user for a year and half or so, during which time I have done an 
excessive amount of distro-hopping and reinstallations after breaking my install in the typical 
"learning Linux" fashion. During this time I have done everything in my power to avoid Arch 
Linux, which is mostly due to the community being especially annoying and snide. None the less,
I have finally found myself in such a position where using Manjaro makes sense for my
particular needs and wants from my OS. 

# If You Can't Beat Em
### Becoming A Begrudging Manjaro User   
![Where's Linus?](Linux-Sees-You.jpg)
There is nothing worse than the snide and insulated Linux users that act as if the absurd 
abstractions that are Linux comnmands were second nature and the original poster was somehow 
an idiot for not knowing. This is an especially prevalent type among Arch Linux's users it seems
as that has become the Linux-Hipster distro that all the 'cool' kids are using it seems. There are
oft cited valid reasons to use Arch Linux, despite the broken and vague installation instructions 
provided on the wiki those same snide forum lurkers all cite as if it is a holy book and daily 
almanac. The Linux flavor is especially good for installation on ancient machines, due to its 
low default overhead and the package manager is rather fast. Plus the AUR (Arch User Repository)
has a suite of packages that in other distros would need building from the source or using the 
ever more broken LaunchPad service (provided by Canonical). Nonetheless, I had avoided Arch Linux
for a considerable time because of said individuals having an attitude I find especially 
distasteful, especially when these types are exactly what is what keeps people away from Linux and
keep the properitary options in business with their overpriced and often even more broken OS 
options. 

Instead I have worked my way through countless variants of Ubuntu and have considered making my own
to address the palatable deficits each of those options has. The process of determining how to do 
this led to what was at one point daily reinstallations of my OS, which is why I wrote the 
Blasted Auto Installer shell script I still use to automate the installation of needed programs and 
applications on first boot. This same process had me consider OpenSUSE which I did use for a time 
during my transition away from the apt package manager. Having used Alpine Linux in docker and vm 
contexts, I did long for a package manager faster than apt, one hopefully less broken and definitely 
one where I would never again see "Release File Not Included" errors for weeks after one of the 
messy transitions between releases hit the internet. Alpine's apk is the fastest package manager I 
have ever used, however the use of musl as the C Library and the relatively small selection of 
packages kept me from installing Alpine on my workstation as my daily OS.

In using OpenSUSE and its strangely behind releases of critical software, like Firefox that's almost 10 
versions old, I discovered Anarchy Linux, the solution to the broken mess that is the Arch Wiki's 
installation guide. So I tried it and was generally impressed. I immeadiately understood how the 
above mentioned hipsters and reddit-peanut-gallery commentators had actually installed Arch (and
why their advise on that subject was always so bad in my Googling of various issues I had when 
trying it) because Anarchy Linux made it a process no more difficult than any other OS. The issue 
that ended my run with Anarchy Linux began with Anbox and Pencilsheep, two programs available via 
the Snap Package manager. 

While AUR offers Anbox, the version it offers is non-functional and trying to install _snapd_ on 
Arch yielded only frustration and several reinstallations. So I tried Manjaro, which includes snapd 
in its particular repos and according to my research, a generally more robust and well tested OS
for the needs of a developer such as myself. Thus I installed the OS, which I had used briefly when
starting out with Linux but hadn't the command over Linux that I do now and so was frustrated by. 

## The Manjayjay Experience

When selecting my hostname, the term manjayjay came to mind and has since been what I refer to 
Manjaro as a sort of strange, only-Tom-gets-it joke. The Manjayjay experience though has been 
rather pleasant. Other than the typical bugs with the Manjaro Hello program and my continued 
inability to appreciate the sheer number of things breaking in the typical installation of plasma,
I have had an experience with Manjaro that demonstrates what is truly the quirk of the distro and
what quirks are Linux wide. Thankfully most of what annoyed me the most in my use of the many
variants of Ubuntu are all but gone and the official repositories contain Firefox's Developer 
Edition, my browser of choice despite holding similar sentiments about Mozilla as Debian's 
community. 

Like everytime I try a new OS that has a well maintained KDE implementation, I first tried it and 
found like every other attempt that KDE has too many components in constant flux and states of 
disrepair for me to find it very functional. It also has the annoying tendency to allow "Look-and-Feel"
themes to change settings that either I cannot locate or are just very hard to change back, which 
bothers my OCD, especially now that I have began working on desktop themes as a break from Web 
Development. I would like to remove the mental block that prevents me from using KDE, it seems very
useful and powerful, and I have more than enough processing and GPU power for it, but still I am not 
ready to invest the time in learning the quirks of that DE when I already know them for Gnome (and 
Budgie).

I also tried Manjaro's XFCE option, which was a very awesome implementation of that usually hideous
DE that was a lot more fully featured than I remembered. The issue that I had using the DE as my 
workstation DE was want of the multitude of features that I could roll in that are offered by Gnome 
and KDE. While having used LXQT before, something about using Plasma without all the KDE features
that do add a lot to the OS makes the DE seem hollow. So instead of settling, I installed Manjaro's 
third official variant, the Gnome edition. 

Manjaro Gnome is hardly the perfect implementation of Gnome, especially because it uses Wayland by 
default which strips me of being about to use the Tilix Drop Down (`tilix --quake`). It also keeps 
having top margin issues with dash to panel and the Arc menu works sometimes only, meaning I still 
have to use that awful overview menu to select applications instead of mapping Arc menu to respond 
to the WIN key over the overlay menu, which I truly hate the look and function of. The Gnome edition
of Manjaro also seems to have some extensions under the hood that I cannot turn off, leading to a
persistent Place status indicator. 

## The Verdict

While it has its shortcomings, the Manjaro implementation of Gnome has been the most stable OS I 
have used since early Windows 7, primarily due to its stripped down nature that it inherits from 
Arch while not stripping down standards for conduct on the form (sorry Linux Torvalds) and the week 
delay between something hitting the Arch repos and it being available for Manjaro. I can wait a week
to not need to furiously Google solutions to problems on my phone because my rolling distro destroyed
itself, a major hesitation of mine before. The extra packages included by Manjaro and my recent discovery
of the BlackArch repository that can be installed on Manjaro as well, means that for any computer
needs, I don't have to use anything else which means my homelab Hypervisor can run the same OS as my
workstation and my laptop. While seemingly unimportant, I find systems running the same OS or based
on the same OS are generally more cooperative and my chance of forgetting if I was in SSH leading to an 
annoying set of errors is reduced to almost 0. 

Manjaro also offers tools that I think are for bringing its semi-regular updates to its ISO 
offerings possible but that enable one to essentially roll your own and thus provides the 
potential for my quest to design and release a Linux that is specifically tooled for 
development a possibility again without needing the OBS Build Service and its terrible 
docs (really people we need to get better at this). So for the time being, at least until Alpine 
offers more robust desktop options than at present, it looks like I will be using Manjaro. Noticing 
that those same hipsters and having less disdain for them have moved to preferring the i3 window manager (and 
feeling less disdain for them now, but much more pity that they stake their identities on Linux),
 I have begun experimenting with it as well but there is still much to learn before I totally 
 sell out to what is cool in the Linux world. I do like the idea of needing the mouse less and 
 having shortcuts on the keyboard but man is it a pain to adjust settings... 
 
 To Be Continued ;]  
 
 ![I am not a bathroom, seen on BART](bathroom.jpg)
