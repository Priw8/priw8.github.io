### th16 eclmap

## WARNING: this eclmap is no longer updated. Use [these ones](https://github.com/Priw8/eclmap) instead.

While I did make the th16 eclmap a while ago, names of some instructions were kinda bad. Now, I made a better version that actually doesn't suck. Some naming conventions:
- `Enm_create` instructions: they can have 3 "flags", `B`, `M` and `F` (always in that order). `B` is boss, `M` is mirrored and `F` is filler (doesn't spawn when there's a boss on screen). So for example `Enm_createMF` would spawn a mirrored filler enemy.
- As you may know, many `Anm_*` instructions have 2 versions: setting something immidiately, and making something gradually change. Now, the second version always has the same name as the first one, except there's `Time` at the end. For example `Anm_alpha` and `Anm_alphaTime`.
- `Move_*` instructions follow similar naming concept, except there are 2 more things. There's `Rel` for ins that affect the relative position (`Rel` always comes before `Time`). For example there's `Move_pos` (which sets position immidiately), `Move_posTime`, `Move_posRel` and `Move_posRelTime`. And for instructions that have versions that ignore the mirrored movement, there's `NM`, for example `Move_velNMRelTime` (always before `Rel` and `Time`).
- I still have no clue what's the difference between all the spell declaring instructions, so their names are still stupid. Sorry.

[th16.eclmap](/files/th16.eclmap)
