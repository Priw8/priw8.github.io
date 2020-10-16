# [game=17]Wily Beast and Weakest Creature[/game] practice patch


My first full practice patch, which allows skipping to any part of the game, based on other existing patches. 

## Features
- Warp to any stage section, nonspell or spell in the game
- For Saki's final, it's also possible to warp to any phase. This may be also implemented for Keiki's final in the future, but in that case it's more complicated to do properly
- Set initial bombs/lives
- Invincibility cheat (muteki)
- Set initial tokens (goast)

## Known bugs
- The section number is sometimes not properly reset, allowing selecting invalid sections. Invalid sections don't crash the game, they simply do nothing.
- The "extra beasts appeared" bug can occur in practice. I blame ZUN for this
- [c=red]Practicing extra stage with it not being unlocked will result in game freezing upon returning to practice menu.[/c]
- Sometimes, the difficulty resets to normal.


**Note:** source code of this was lost due to a hard disk failure (actually I do have a backup but it's outdated). Because of that, bugs won't be fixed. I recommend getting thprac from [here](https://github.com/ack7139/thprac/releases/latest) instead.
  
Download here: [th17prac1.0.zip](/files/th17prac1.0.zip)
