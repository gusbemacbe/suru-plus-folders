const hexSorter = require('./hexSorter');
const chalk = require('chalk');
const log = console.log;

var colorArray = 
[
    "#0C141F",
    "#172e3f",
    "#1e3850",
    "#213d50",
    "#26434d",
    "#2a465a",
    "#2b4d6c",
    "#345468",
    "#3f6177",
    "#417383",
    "#442822",
    "#473f15",
    "#486a81",
    "#4a79a0",
    "#52778e",
    "#5391a6",
    "#557d8a",
    "#5f8aa0",
    "#6089a9",
    "#6194c1",
    "#61aac2",
    "#633305",
    "#6a95ac",
    "#6ca4cb",
    "#6cbed9",
    "#6FC3DF",
    "#796c25",
    "#7b9aa2",
    "#7cb9db",
    "#89cee5",
    "#8bc7e2",
    "#8d4427",
    "#97d6eb",
    "#9a892e",
    "#a4d5ea",
    "#a85609",
    "#a8dbec",
    "#b3a036",
    "#b3e3f3",
    "#bc5921",
    "#bc8753",
    "#be7342",
    "#c4e6f2",
    "#c6edfb",
    "#c8b33d",
    "#c9dfe0",
    "#d56d0b",
    "#dbc442",
    "#ddb676",
    "#ddf1f7",
    "#def6fc",
    "#DF740C",
    "#e38c2d",
    "#e48a35",
    "#E6FFFF",
    "#eaa462",
    "#ecd347",
    "#efab3f",
    "#efb987",
    "#f3cca7",
    "#f4dc91",
    "#f4fafd",
    "#f5d07d",
    "#f6dc9a",
    "#f7dcc3",
    "#fabe45",
    "#faea98",
    "#faebdc",
    "#fbf8ab",
    "#fce14c",
    "#fef9f4",
    "#FFE64D",
    "#ffef94",
    "#fffadf"
];
var sorted = hexSorter.sortColors(colorArray, 'mostBrightColor');
var saturated = hexSorter.sortColors(colorArray, 'mostSaturatedColor');
var mixSort = hexSorter.mixSortColors(colorArray, 'mostBrightColor', "#fff", 50);
var mixSort2 = hexSorter.mixSortColors(colorArray, 'mostBrightColor', "#333", 50);

log("input array:");
for (var col in colorArray) 
{
    log(chalk.hex(colorArray[col]).underline('████'));
}

log("\r\nsorted by brightness:");
for (var col in sorted) 
{
    // log(chalk.hex(sorted[col]).underline('████'));
    console.log(sorted[col]);
}

log("\r\nsorted by saturation:");
for (var col in saturated) 
{
    // log(chalk.hex(saturated[col]).underline('████'));
    console.log(sorted[col]);
}

log("\r\nmix #fff sorted:");
for (var col in mixSort) 
{
    // log(chalk.hex(mixSort[col]).underline('████'));
    console.log(sorted[col]);
}

log("\r\nmix #333 sorted:");
for (var col in mixSort2) 
{
    // log(chalk.hex(mixSort2[col]).underline('████'));
    console.log(sorted[col]);
}