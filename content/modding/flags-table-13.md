[requireEclmap=17]
| Bit      | Decimal value | Effect  |
|:--------:|:-------------:| :-----|
| 0        | 1             | Disables hurtbox (can't be hit by bullets). |
| 1        | 2             | Disables hitbox (can't kill the player by ramming). |
| 2        | 4             | Prevents the enemy from being deleted when going beyond the right or left side of the screen. |
| 3        | 8             | Prevents the enemy from being deleted when going beyond the bottom or top side of the screen. |
| 4        | 16            | Makes the enemy invincible. If the enemy is a boss, the health bar gets hidden. |
| 5        | 32            | Makes the enemy intangible (effects of 0th flag and 1st flag) and prevents the enemy from being deleted by opcodes [ins=518,17] and [ins=525,17].|
| 6        | 64            | [c=red]Unknown effect.[/c] |
| 7        | 128           | Prevents the enemy from being deleted by [ins=518,17] and [ins=525,17]. |
| 8        | 256           | Guarantees that the enemy will be deleted by 518 and 525, regardless of any other flags. |
| 9        | 512           | Makes the enemy grazeable (like a laser, so it can be continuously grazed if the player stays next to it). |
| 10       | 1024          | Prevents the enemy from being deleted by [ins=525,17], but makes it die when a dialogue appears. |
| 11       | 2048          | Makes the enemy die from opcodes such as [ins=615,17] and other things that can delete bullets. |
| 12       | 4096          | Makes the enemy hitbox a rectangle, instead of an ellipse. |
| 13       | 8192          | In [game=143]Impossible Spell Card[/game], makes the enemy unaffected by [ins=547,17]. [c=red]Unknown/no effect in other games.[/c] |
|          |               | [c=lightgreen]There are also other flags, but they are set/cleared by other opcodes/functions of the game than [ins=502,17].[/c] |

[/requireEclmap]
