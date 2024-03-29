## ECL instruction table
Check [here](#s=modding/credits) for credits.  

[html]
Select game version:
<select class='ecl-table-game-select'>
    <option value="08">08 (Imperishable Night)</option>
    <option value="13">13 (Ten Desires)</option>
    <option value="14">14 (Double Dealing Character)</option>
    <option value="14.3">14.3 (Impossible Spell Card)</option>
    <option value="15">15 (Legacy of Lunatic Kingdom)</option>
    <option value="16">16 (Hidden Star in Four Seasons)</option>
    <option value="16.5">16.5 (Violent Disease)</option>
    <option value="17">17 (Wily Beast and Weakest Creature)</option>
    <option value="18">18 (Unconnected Marketeers)</option>
    <option selected value="18.5">18.5 (100th Black Market)</option>
    <option style="display:none" value="2000">ECLplus</option>
</select>

Eclmap for instruction names:<br><br>
<input type="radio" id="radio-eclmap-default" name="eclmap-radio" value="1" checked>
<label for="radio-eclmap-default">Use default</label>

<input type="radio" id="radio-eclmap-custom" name="eclmap-radio" value="0">
<label for="radio-eclmap-custom"><input type="file" id="eclmap-file"></label>

<button class="ecl-table-btt">Get table</button>
<div class='ecl-table-wrapper'></div>
[/html]

[script]
onContentLoad(async function() {
    function initTableNavigation() {
        document.querySelector(".ins-navigation")
        .addEventListener("click", e => {
            if (e.target.dataset.target) {
                const targ = document.querySelector("[data-insnavigation='"+e.target.dataset.target+"']");
                targ.scrollIntoView();
                window.scrollBy(0, -110);
            }
        });
    }
    const select = document.querySelector(".ecl-table-game-select");
    const target = document.querySelector(".ecl-table-wrapper");
    const input = document.querySelector("#eclmap-file");
    document.querySelector(".ecl-table-btt")
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
            target.innerHTML = generateOpcodeTable(game);
            initTableNavigation();
            const query = parseQuery();
            query.table = game;
            location.hash = buildQuery(query);
        });
    const query = parseQuery();
    if (typeof query.table != "undefined" && !isNaN(query.table)) {
        const game = parseFloat(query.table);
        await loadEclmap(null, "?"+query.table, game);
        target.innerHTML = generateOpcodeTable(game);
        initTableNavigation();
    } else {
        await loadEclmap(null, "?17", 17);
        target.innerHTML = generateOpcodeTable(17);
        initTableNavigation();
    }
});
[/script]
