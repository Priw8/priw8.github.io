# [game=17]Wily Beast and Weakest Creature[/game] demo practice patch
### Current progress: 1.1a finished: [download](https://mega.nz/#!glAQBIhZ!Ny11m7yR71H-I8uuldHx6iR7TIvqc33emVRIGhwpekM)
1.1a update fixed the music when practising st2/st3 (it no longer plays st1 music, but instead plays the correct one, applies to bosses too)
[yt]UcyeHR2c6zg[/yt]  


I assume all practice options, including stage practice, won't be available in the demo.  
I also hope that thecl/thanm/thdat/thstd will work with WBaWC when I start working. If they won't, I guess I'll try to help implementing support for it\.\.\.  
The TODO list (all of it already done):
- create the basic UI in ECL... actually done already (in HSiFS, I'm assuming that porting it will be easy)
- implement the UI into WBaWC
- dump all ECL files, rename subs in them to st0X\_subName, put them into st01.ecl, also make st01.ecl load all needed ANM files (I might be a bit screwed if there are too many files to load, let's hope that does *not* happen), modify Anm\_select instructions of bosses to use the correct files
- modify the main subs of the stages to skip to various parts based on what arguments the practice UI called them with
- don't forget to change player's power based on what part was chosen
- if everything works, release version 1.0a of the patch
- make spell portraits/backgrounds actually match the character (they are kinda hardcoded and janky), remove spell cutins entirely if necessary
- fix inevitable bugs of version 1.0a of the patch
- release version 1.0b of the patch
- put all stage backgrounds into 1 file and make skipping to them by using callSTD possible (that might take a while)
- fix inevitable bugs of version 1.0b of the patch
- release version 1.0c of the patch
- something will still probably be broken, so I'll have to make 1.0d at some point too
- maybe add more features (setting the starting hyper gauge state etc) idk if I'll have time
