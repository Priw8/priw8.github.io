# Bullet transformations
## In Touhou 13 - 17
[requireEclmap=17]
Bullet transformations, also referred to as etEx for short, define what the bullet does after being shot. A bullet manager has a bullet transformation list (etEx list), which is an 18-element array of single transformations. Entries can be added via [ins=609,13], [ins=610,13], [ins=611,13] and [ins=612,13] instructions. [ins=640,17] is also used to set an additional parameter of a transform on the given index. When a bullet is shot, the etEx list is fully copied from the bullet manager to the bullet itself. This means that modifying the manager's etEx list after shooting a bullet will not change the list used by that bullet. 

## [ins=609,13], [ins=611,13]
There are 4 instructions for adding new entries to the transform list: [ins=609,13], [ins=610,13], [ins=611,13] and [ins=612,13]. They are generally similar, but have some very important differences.  
Differences between [ins=609,13]/[ins=610,13] and [ins=611,13]/[ins=612,13]
- [ins=609,13]/[ins=610,13] takes an index parameter that tells the game where exactly on the transform list the transform defined in arguments should be inserted
- [ins=611,13]/[ins=612,13] places the transform after the previous transform added by [ins=611,13]/[ins=612,13]. (When a manager is created, the next_etex_index variable of the manager is set to 0. After every etEx call it is incremented by 1. It can be decremented by using the etExSubtract [ins=641,14] (introduced in [game=14]DDC[/game])

Difference between [ins=609,13]/[ins=611,13] and [ins=610,13]/[ins=612,13]
- the [ins=610,13]/[ins=612,13] instructions take 4 additational parameters that are used by certain transformation types. In case of [ins=609,13]/[ins=611,13], these values default to -999999 for the 2 integer parameters (`c` and `d`) and -999999.0f for the 2 float parameters (`m` and `n`).

## Transformation types
Bullet transformations are executed in order, and what a transform does exactly is determined by the `type` argument. The game generally waits for the transform to finish before moving on to the next one (there are some exceptions, whenever it's the case it should be noted in the documentation). The `a`, `b`, `c`, `d`, `r`, `s`, `m` and `n` parameters are interpreted in different ways based on the transformation type. The transformation type is a number that's always a power of 2 for no apparent reason (thanks ZUN). For example, there is a transformation that makes the bullet accelerate for the amount of frames given in the `a`, acceleration angle is given in `r` and the acceleration speed in `s`. In this case, the `b`, `c`, `d`, `m` and `n` parameters are ignored entirely (it's a convention to set unuset parameters to -999999 and -999999.0f). However, what if you wanted the bullet to accelerate in the direction it's currently moving? In this specific case, you can accompilish that by setting `r` to -999999.0f. Again, these kind of specific behaviours should be noted in the documentation. If there is any transform after this one, it won't be executed until this one ends - that is, after `a` frames have passed and the bullet stopped accelerating. However, the `async` flag can change things up a bit.

## The `async` flag
The async flag of the etEx instructions is a value that's either 0 or 1. Any other values can lead to unexpected results, they could even potentially blow up your fridge, so don't use them. Anyway... If the `async` flag is set, the transformation will execute simulatenously with the one before it. This means that it's possible for a bullet to execute more than 1 transformation at once (however, I am not sure whether this actually allows executing more than 2 - I'd have to research that). This behaviour can be a bit wacky at times and not necessairly work properly for all transform combinations, but for the combinations that ZUN uses it DOES work.

## Examples and documentation
For more information (including examples), visit the MERLIN [documentation](#s=MERLIN/doc/functions/transformations).

[/requireEclmap]