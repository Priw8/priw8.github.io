[title=ECL extras #1 - the MERLIN library]

[requireEclmap=17]
## ECL extras #1 - The MERLIN library
What is MERLIN?
- **M**inimal
- **E**CL
- **R**esource
- **L**ibrary
- **I** have
- **N**o clue what the last 2 letters could stand for lmao

Basically, it's a set of globals and subs I made that aims to make writing ECL code much easier. In my opinion, it's a must-have library for making custom patterns (unless you like memorizing dozens, if not hundreds, of numbers :) ).  

First of all, head to the [Github page](https://github.com/Priw8/merlin/releases/latest) of MERLIN and download the latest release. You can also check out the readme [here](https://github.com/Priw8/merlin/), though all information from it will be shown here as well.  

Extract the files from the downloaded .zip file in your development repository so that the `merlin` folder is next to your `.tecl` files.  
Yes, it would be better to be able to install it globally, but as of now, that's not possible; thecl does not support anything like include path variables.  
  
Let's create a `st01.tecl` with the following code. It should seem familiar to you, because it comes from one of the earlier parts of the tutorial.  
[code] anim {
     "enemy.anm";
 }

 void main() {
     [ins=502,17](32);
     [ins=23,17](60);
     [ins=300,17]("MyEnemy", 0f, 128f, 1000, 100, 0);
     [ins=23,17](10000);
 }
 
 void MyEnemy() {
     [ins=302,17](2);
     [ins=306,17](0, 0);
     [ins=600,17](0);
     [ins=607,17](0, 2); 
     [ins=602,17](0, 6, 1); 
     [ins=606,17](0, 20, 1); 
     [ins=601,17](0); 
     [ins=23,17](10000);
 }[/code]  
Currently, it has a whole bunch of magic numbers: flag `32`, aim mode `2`, bullet type `6`, bullet color `1`... Unless you memorized it all, this doesn't make too much sense when you look at it. Let's use MERLIN to make this different!  
  
First, we need to use the `#include` directive to add MERLIN at the beginning of our source file:  
[code] #include "merlin/th17.tecl" [/code]  
If this gives you a compile error saying that `merlin/th17.tecl` can't be found, make sure that the `merlin` folder with `th17.tecl` in it is right next to the `st01.tecl` file.  
At this point, you can use all the MERLIN things in your source file! I encourage to look at the [MERLIN documentation](https://priw8.github.io/#s=MERLIN/doc/index) yourself and try to replace the magic numbers with the globals provided.  
  
In any case, this is how our code can look with MERLIN, and a few other improvements:  
[code] #include "merlin/th17.tecl"
 anim {
     "enemy.anm";
 }

 // It's a good idea to specify globaldefs for the included ANM file IDs.
 // MERLIN also sets ANM_EFFECT = 1 - it's always loaded there.
 global ANM_ENEMY = 2;

 void main() {
     [ins=502,17](FLAG_INTANGIBLE);
     [ins=23,17](60);
     [ins=300,17]("MyEnemy", 0f, 128f, 1000, 100, 0);
     stop(); // MERLIN provides a sub that waits forever.
 }
 
 void MyEnemy() {
     [ins=302,17](ANM_ENEMY);
     [ins=306,17](0, ENM_GIRL_S_BLUE);

     // You can create a variable to reference the bullet manager "by name".
     // It's useful when using multiple bullet managers.
     int et = 0;
     [ins=600,17](et);
     [ins=607,17](et, AIM_AT_RING); 
     [ins=602,17](et, ET_OUTLINE, COLOR16_DARKRED); 
     [ins=606,17](et, 20, 1); 
     [ins=601,17](et); 
     stop();
 }[/code]  

Now the code is much more readable, wouldn't you agree? It became clear that the enemy will use a sprite of a small blue fairy and shoot a ring of darkred outline bullets.  
In the next part, we will use MERLIN to create a simple stage part!

[/requireEclmap]