| Instruction number | Arguments                               | Description |
|:------------------:|:----------------------------------------|:------------|
|         1          |ins_1(int offset, int time)              | Jump to specified offset and set the time value. |
|         2          |ins_2(float x, float y, float z)         | Set the position of the camera. |
|         3          |ins_3(int time, int mode, float x, float y, float z)| Move camera to the specified position in `time` frames using mode `mode`. Mode works in the same way as in ECL/ANM. **It moves to the new position from the last position set by ins_2, and not the current position!!!**|
|         4          |ins_4(float x, float y, float z)         | Make the camera look at specified coordinates. Keep in mind that these coordinates are relative to camera's position |
|         5          |ins_5(int time, int mode, float x, float y, float z)| Same as ins_4, but the instead of changing instantly it changes in `time` frames using `mode` |
|         6          |ins_6(float x, float y, float z)         | Set the camera movement vector |
|         7          |ins_7(float vow)                         | Set the camera field of view. Use `0.68831855f` for a "normal" field of view |
|         8          |ins_8(int bgra, float start, float end)  | Set the fog, `bgra` is a color value (thstd dumps it as #bbggrraa for easier editing), it's like RGB but reversed, the last byte is supposed to be alpha but I didn't observe any differences with different values of it. `start` is the beginning of the fog, it will have 0 opacity there, and `end` is the end of the fog, it'll have full opacity there, so nothing will be visible past that point. Both `start` and `end` are distance from the camera.|
|         9          |ins_9(int time, int mode, int bgra, float start, float end)| Same as 8, but it changes in `time` frames using `mode` |
|         10         |ins_10(2x int and then 7x float)         | Unknown. |
|         11         |ins_11(???)                              | Very unknown. |
|         12         |ins_12(int type)                         | Applies a rotation effect to the camera based on `type`. 0 - no effect. 1 - rotate a bit like a barrel, doesn't actually make full circles but rather rotates to like 15deg, then to -15deg and repeats. 2 - rotate like a barrel counterclockwise, makes full circles. 3 - Apart from the effect of type=1, the camera also moves randomly. 4 - like type=2, but clockwise instead.|
|         13         |ins_13(int a)                            | Unknown. I have a random theory that it is used to delete sprites set by ins_14 and a=slot, but I could be completely wrong.|
|         14         |ins_14(int slot, int scriptIndex, int layer)| From the same ANM script as the one used for QUADs, load script onto the specified slot, and set its layer. The script must be a 2d sprite. It is used in [game=16]HSiFS[/game] stage 1 to display the sky and the clouds, for example.|
|         15         |ins_15(???)                              | Very unknown. |
|         16         |ins_16(int a)                            | When an ECL script uses `callSTD(int a)` (ins_630), the STD script will immediately jump to this instruction (value of `a` here and `a` in callSTD must be the same for this to happen)|
|         17         |ins_17(int a)                            | If a=1, it will enable an effect that makes the bottom of the screen distorted. |
|         18         |ins_18(int time, int mode, float x, float y, float z)| Same as ins_6 but it changes in `time` frames using `mode` (needs checking). |
|         19         |ins_19(int a)                            | Unknown. |
