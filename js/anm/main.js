const anmCache = {};

async function getAnm(name) {
    if (anmCache[name])
        return anmCache[name];

    const res = await fetch(`js/anm/${name}.json`);
    const json = await res.json();
    anmCache[name] = json;
    return json;
}

function getAnmImg(sheet, id) {
    if (!sheet.sprites[id])
        return "anm-img-error";

    const extra = sheet.extra[id] ? sheet.extra[id] : "";
    return `display: inline-block; background-image: url(js/anm/${sheet.file}); background-position: -${sheet.sprites[id][0]}px -${sheet.sprites[id][1]}px; width: ${sheet.sprites[id][2]}px; height: ${sheet.sprites[id][3]}px; ${extra}`;
}