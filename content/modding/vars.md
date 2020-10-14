## ECL variable table
Check [here](#s=modding/credits) for credits.  
  
Note: [game=165]Violet Detector[/game] variables have not been researched yet and are missing from this this table.  

[html]
Select game version:
<select class='var-table-game-select'>
    <option value="8">08 (Imperishable Night)</option>
    <option value="10">10 (Mountain of Faith)</option>
    <option value="11">11 (Subterranean Animism)</option>
    <option value="12">12 (Undefined Fantastic Object)</option>
    <option value="12.5">12.5 (Double Spoiler)</option>
    <option value="12.8">12.8 (Great Fairy Wars)</option>
    <option value="13">13 (Ten Desires)</option>
    <option value="14">14 (Double Dealing Character)</option>
    <option value="14.3">14.3 (Impossible Spell Card)</option>
    <option value="15">15 (Legacy of Lunatic Kingdom)</option>
    <option value="16">16 (Hidden Star in Four Seasons)</option>
    <option value="16.5">16.5 (Volcanic Disaster)</option>
    <option value="17" selected>17 (Wily Beast and Weakest Creature)</option>
</select>

Eclmap for variable names:<br><br>
<input type="radio" id="radio-eclmap-default" name="eclmap-radio" value="1" checked>
<label for="radio-eclmap-default">Use default</label>

<input type="radio" id="radio-eclmap-custom" name="eclmap-radio" value="0">
<label for="radio-eclmap-custom"><input type="file" id="eclmap-file"></label>

<button class="var-table-btt">Get table</button>
<div class='var-table-wrapper'></div>
[/html]

[script]
onContentLoad(async function() {
    const select = document.querySelector(".var-table-game-select");
    const target = document.querySelector(".var-table-wrapper");
    const input = document.querySelector("#eclmap-file");
    document.querySelector(".var-table-btt")
        .addEventListener("click", async () => {
            let game = parseFloat(select.value);
            let radios = document.getElementsByName("eclmap-radio");
            let val;
            for (let i=0; i<radios.length; i++)
                if (radios[i].checked)
                    val = radios[i].value;
            if (val == "1") {
                await loadEclmap(null, "?"+game, game);
            } else {
                if (input.files.length != 0) {
                    const file = input.files[0];
                    await loadEclmap(file, file.name, game);
                } else return alert("Please upload an eclmap first.");
            }
            target.innerHTML = generateVarTable(game);
            const query = parseQuery();
            query.table = game;
            location.hash = buildQuery(query);
        });
    const query = parseQuery();
    if (typeof query.table != "undefined" && !isNaN(query.table)) {
        const game = parseFloat(query.table);
        await loadEclmap(null, "?"+query.table, game);
        target.innerHTML = generateVarTable(game);
    } else {
        await loadEclmap(null, "?17", 17);
        target.innerHTML = generateVarTable(17);
    }
});
[/script]
