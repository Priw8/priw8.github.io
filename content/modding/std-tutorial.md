# STD tutorial

STD files are the files that handle stage backgrounds. Like other formats in the Touhou games, it has changed over time. This tutorial will focus on STD version **introduced in [game=13]Touhou 13[/game]**, which is still used in every game after it. It also assumes that you know the basics of how ANM files work, as they are a big part of how the backgrounds end up looking.

### Dumping STD files
**thstd** from the [Touhou Toolkit](https://github.com/thpatch/thtk/releases) is a tool for dumping and creating STD files. Like thanm and thecl, it's a command line program. Usage:  
- For dumping: `thstd -d -V input.std output.stdd`, where `V` is the game version number (for games like [game=143]Impossible Spell Card[/game], it's without the decimal, for example [game=143]143[/game]). `output.stdd` can be opened with a text editor of choice.  
- For creating: `thstd -c -V input.stdd output.std`.  

*Note: for all examples here, the [EoSD stage 4 background remake](https://youtu.be/_A56X0ZdoBg) I made some time ago will be used.*

### The basics
After dumping an STD file, you'll get something like this:  
[code]ANM: st01wl.anm
Std_unknown: 0

ENTRY:
    Unknown: 1
    Position: 0 0 300
    Depth: 0
    Width: 1024
    Height: 512

    QUAD:
        Type: 0
        Script_index: 0
        Position: 0 0 300
        Padding: 0
        Width: 1024
        Height: 512

    FACE: 256 0 280 0
    FACE: 256 0 792 0
    FACE: 256 0 1304 0
    FACE: 256 0 1816 0
    FACE: 256 0 2328 0
    FACE: 256 0 2840 0
    FACE: 256 0 3352 0
/* there'll be more ENTRIES than here, I don't want to make this example too long */

SCRIPT:
    ins_6(0.0f, 1.0f, 0.0f);
    ins_7(0.68831855f);
    ins_13(8421504);
    ins_8(#00000000, 350.0f, 900.0f);
    ins_4(0.0f, 300.0f, 100.0f);
    ins_2(0.0f, 600.0f, -20.0f);
    ins_3(1800, 0, 0.0f, 2600.0f, -20.0f);
1800:
    ins_1(84, 0);
/* script would probably be longer too */[/code]  
At the beginning, an ANM file is defined. Only one can be used in an STD file, and its contents are just as important as the STD file itself.

### The ANM file
The basic principle of STD files is creating 3d objects by using scripts from the ANM file.  
[code]Sprite: 0 1024*512+17+17

Script: 0
Instruction: 0 0 302 8
Instruction: 0 0 300 0
Instruction: 0 0 404 163 51 0
Instruction: 0 0 401 0.0f 0.0f 0.0f
Instruction: 0 0 3[/code]  
ANM instruction 302 has to be used to make 3d objects. In this case, it creates a 3d plane. According to the Chinese wiki:  
- `4 - 3d billboard`  
- `5 - 3d smallhill`  
- `6 - 3d billboard`  
- `7 - 3d smallhill`  
- `8 - 3d plane`  

(smaller numbers are used for 2d sprites)  
- Billboard is basically a sprite but placed in a 3d space, which looks the same no matter which angle you look at it from (like trees in Super Mario 64)
- I don't know what smallhill is
- Plane is basically a sprite, but it can be rotated and will look differently depending on where you look at it from (like a sheet of paper with a drawing on it). If looked at from behind, it'll show the mirrored image (as if it was glass with something painted on one side of it)
- I don't know the difference between 4/6 and 5/7
- there's also a weird ANM instruction that can be used instead of 302, it can create "folded" planes and is used for roofs in [game=15]Legacy of Lunatic Kingdom[/game] stage 4. I don't fully understand how it works.

The rest of the ANM script above sets the sprite to 0 (ins\_300), changes the color a bit (ins\_404), sets the 3d rotation (ins\_401) and then waits forever (ins\_3).

### STD "ENTRIES"
[code]ENTRY:
    Unknown: 1
    Position: 0 0 300
    Depth: 0
    Width: 1024
    Height: 512

    QUAD:
        Type: 0
        Script_index: 0
        Position: 0 0 300
        Padding: 0
        Width: 1024
        Height: 512

    FACE: 256 0 280 0
    FACE: 256 0 792 0
    FACE: 256 0 1304 0
    FACE: 256 0 1816 0
    FACE: 256 0 2328 0
    FACE: 256 0 2840 0
    FACE: 256 0 3352 0[/code]  
An entry consists of 3 parts: The **header**, the **QUADs** and the **FACEs**.
#### Header
The position is in format `x y z`, `x` is left/right, `y` is forward/backward, `z` is up/down. Without any camera movement, x=0 is right in front of it (like in ECL coordinates, x<0 is left and x>0 is right). y=0 is under the camera, y<0 is behind the camera and y>0 is in front of it. z>0 is down, z<0 is up. Depth, Width and Height define the size of the entry. That said, these values are used only to determine whether the entry should be rendered or not. I'm not sure how it works exactly, but ZUN uses `Position: 0 0 300`, `Depth: 0` and `Width/Height` varies, when in doubt set it to something large like 1024.
#### FACEs
I know that QUADs are listed first, but I need to explain this first. A FACE basically defines where to place an instance of the ENTRY in the 3d space. First number is always 256? and the later numbers are x y z coordinates.
#### QUADs
A QUAD is basically a single ANM script. An ENTRY can have multiple QUADs, to create more complex objects from planes.  
- `Type` - I don't know, setting it to 0 works just fine
- `Script_index` - script number in the ANM file
- `Position` - relative position of the ANM script from the position set in a FACE
- `Padding` - unused (?), 0
- `Width/Height` - size of the sprite, using different numbers than the ANM sprite will result in it being stretched

A more complex ENTRY:  
[code]ENTRY:
    Unknown: 1
    Position: 0 0 300
    Depth: 0
    Width: 1024
    Height: 1024

    QUAD:
        Type: 0
        Script_index: 1
        Position: -40 0 220
        Padding: 0
        Width: 80
        Height: 160

    QUAD:
        Type: 0
        Script_index: 1
        Position: 40 0 220
        Padding: 0
        Width: 80
        Height: 160

    QUAD:
        Type: 0
        Script_index: 2
        Position: 80 0 220
        Padding: 0
        Width: 16
        Height: 160

    QUAD:
        Type: 0
        Script_index: 3
        Position: -80 0 220
        Padding: 0
        Width: 16
        Height: 160

    QUAD:
        Type: 0
        Script_index: 4
        Position: 0 40 140
        Padding: 0
        Width: 176
        Height: 80

    QUAD:
        Type: 0
        Script_index: 5
        Position: -88 42 220
        Padding: 0
        Width: 160
        Height: 80

    QUAD:
        Type: 0
        Script_index: 5
        Position: 88 42 220
        Padding: 0
        Width: 160
        Height: 80

    FACE: 256 43 510 0
    FACE: 256 -223 743 0
    FACE: 256 210 762 0
    FACE: 256 -21 1020 0
    FACE: 256 -180 1253 0
    FACE: 256 213 1262 0
    FACE: 256 32 1500 0
    FACE: 256 -200 1720 0
    FACE: 256 190 1723 0
    FACE: 256 4 2010 0
    FACE: 256 -204 2220 0
    FACE: 256 162 2243 0
    FACE: 256 43 2510 0
    FACE: 256 -223 2743 0
    FACE: 256 210 2762 0
    FACE: 256 -21 3020 0
    FACE: 256 -180 3253 0
    FACE: 256 213 3262 0[/code]  
This ENTRY creates a bookshelf out of the ANM scripts in the ANM file, and places multiple instances of it throughout the stage. Keep in mind that the rotation of the planes used to form a single bookshelf has to be done in the ANM scripts.  

### STD scripts
STD scripts are far simplier than ANM and ECL scripts, as they don't even have any variables. They are used to control camera movement, field of view, set fog and do some other things. Fortunately, the dump format is way less of a headache than ANM scripts.  
[code]SCRIPT:
    ins_6(0.0f, 1.0f, 0.0f);
    ins_7(0.68831855f);
    ins_13(8421504);
    ins_8(#00000000, 350.0f, 900.0f);
    ins_4(0.0f, 300.0f, 100.0f);
    ins_2(0.0f, 600.0f, -20.0f);
    ins_3(1800, 0, 0.0f, 2600.0f, -20.0f);
1800:
    ins_1(84, 0);[/code]  
The STD instruction table can be found [here](#s=ecl/std-ins), refer to it to check what the individual instructions here do.  
Time labels work in the same way as in ECL, that is the script has a time value that increases every frame, and time labels will stop the script execution until that value is greater or equals the value in the time label.  
#### The jump instruction
thecl generates automatic labels for `jump` instructions, but thstd doesn't. This means that you have to calculate the jump offset yourself. Every instruction size is `8+4*n`, with `n` being the amount of arguments, and the jump offset is absolute (from the beginning of the script).  
After counting the bytes, you can notice that `ins_1(84, 0)` jumps right before `ins_2(0.0f, 600.0f, -20.0f);`.

### Background looping
Obviously, the background can't be infinite. At some point, you either have to make the camera stop moving, or move it back. Otherwise, the player will end up in a dark void (or sometimes a bright void, depending on the fog color). Making the movement stop is rather simple (you can then also use `ins_12` to add a rotation effect, so that the background isn't completely static), but making a loop requires creating something that looks exactly like a part from earlier, and then jumping to the part from earlier when everything looks exactly the same. In fact, the example below (and well, all examples above) does that:  
[code]    FACE: 256 43 510 0
    FACE: 256 -223 743 0
    FACE: 256 210 762 0
    FACE: 256 -21 1020 0
    FACE: 256 -180 1253 0
    FACE: 256 213 1262 0
    FACE: 256 32 1500 0
    FACE: 256 -200 1720 0
    FACE: 256 190 1723 0
    FACE: 256 4 2010 0
    FACE: 256 -204 2220 0
    FACE: 256 162 2243 0
/* the ones below are the same as ones at the beginning, but their y pos is greater by 2000 */
    FACE: 256 43 2510 0
    FACE: 256 -223 2743 0
    FACE: 256 210 2762 0
    FACE: 256 -21 3020 0
    FACE: 256 -180 3253 0
    FACE: 256 213 3262 0

SCRIPT:
    ins_6(0.0f, 1.0f, 0.0f);
    ins_7(0.68831855f);
    ins_13(8421504);
    ins_8(#00000000, 350.0f, 900.0f);
    ins_4(0.0f, 300.0f, 100.0f);
/* jump location is here */
    ins_2(0.0f, 600.0f, -20.0f);
    ins_3(1800, 0, 0.0f, 2600.0f, -20.0f);
1800:
    ins_1(84, 0);[/code]  
The bookshelves begin at y=500, camera starts at y=600. Then the camera moves to y=2600 for 1800 frames. The duplicate of the beginning section starts at y=2500, so in both cases the camera y position is greater by 100. This makes the jump to ins_2, which sets the camera y position to 600, completely unnoticable. Obviously, this may be more difficult to do with more complex backgrounds, but you get the idea.

### The end
This was all I know about STD files. If you want, you can download the full examples [here](/files/eosd-st4bg.7z).