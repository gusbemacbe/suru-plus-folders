const fs = require("fs");
const readline = require("readline");
const hexSorter = require("hexsorter");

const theme_name = "tron"

const inputFile = "Colours – TRON.txt";
const outputFile = `${theme_name}.css`;


var lineno = 1;
var root = "";
var endroot = "";
var output = "";

fs.unlink("saida/" + outputFile, function(err) 
{
    if (err && err.code == 'ENOENT') 
    {

    } 

    else if (err) 
    {

    } 

    else 
    {

    }
});

var lineReader = readline.createInterface({
    input: fs.createReadStream("input/" + inputFile)
});

function writeToFile(input) 
{
    fs.appendFile("ouput/" + outputFile, input.toString(), function(err) 
    {
        if (err) throw err;
    });

}

lineReader.on('line', function(line) 
{
    var colorArray = line.split(",");

    colors = hexSorter.sortColors(colorArray, 'mostBrightColor');

    root = ":root \n{\n";
    output += "\t--suru-plus-" + theme_name + "-solid-" + lineno + ": " + colors[0] + ";\r\n";

    // output += "/* Palette #" + lineno + " */\r\n";
    // output += "._dtp" + lineno + ".h1c {" + "color:       " + colors[0] + ";}\r\n";
    // output += "._dtp" + lineno + ".h1bg {" + "background: " + colors[0] + ";}\r\n";
    // output += "._dtp" + lineno + ".h1f {" + "fill:        " + colors[0] + ";}\r\n";
    // output += "._dtp" + lineno + ".h1s {" + "stroke:      " + colors[0] + ";}\r\n";
    // output += "._dtp" + lineno + ".h2c {" + "color:       " + colors[1] + ";}\r\n";
    // output += "._dtp" + lineno + ".h2bg {" + "background: " + colors[1] + ";}\r\n";
    // output += "._dtp" + lineno + ".h2f {" + "fill:        " + colors[1] + ";}\r\n";
    // output += "._dtp" + lineno + ".h2s {" + "stroke:      " + colors[1] + ";}\r\n";
    // output += "._dtp" + lineno + ".fc {" + "color:        " + colors[2] + ";}\r\n";
    // output += "._dtp" + lineno + ".fbg {" + "background:  " + colors[2] + ";}\r\n";
    // output += "._dtp" + lineno + ".ff {" + "fill:         " + colors[2] + ";}\r\n";
    // output += "._dtp" + lineno + ".fs {" + "stroke:       " + colors[2] + ";}\r\n";
    // output += "._dtp" + lineno + ".s1c {" + "color:       " + colors[3] + ";}\r\n";
    // output += "._dtp" + lineno + ".s1bg {" + "background: " + colors[3] + ";}\r\n";
    // output += "._dtp" + lineno + ".s1f {" + "fill:        " + colors[3] + ";}\r\n";
    // output += "._dtp" + lineno + ".s1s {" + "stroke:      " + colors[3] + ";}\r\n";
    // output += "._dtp" + lineno + ".s2c {" + "color:       " + colors[4] + ";}\r\n";
    // output += "._dtp" + lineno + ".s2bg {" + "background: " + colors[4] + ";}\r\n";
    // output += "._dtp" + lineno + ".s2f {" + "fill:        " + colors[4] + ";}\r\n";
    // output += "._dtp" + lineno + ".s2s {" + "stroke:      " + colors[4] + ";}\r\n\r\n";

    lineno++;

    endroot = "}";
});

lineReader.on('close', function() 
{
    writeToFile(root + output + endroot);
});