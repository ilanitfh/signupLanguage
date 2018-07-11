var sourceFile = '../../../ContentNew'
var fs = require('fs');
var path = require('path');

var fileMap = {};
readFiles(sourceFile);



function readFiles(thePath) {
    var items = fs.readdirSync(thePath);
    for (var i=0; items && i<items.length; i++) {
        if (items[i] === ".DS_Store")
            continue;

        if (fs.statSync(path.join(thePath, items[i])).isDirectory()) {
            readFiles(path.join(thePath, items[i]));
        } else {
            if (fileMap.hasOwnProperty(items[i])) {
                //found duplicate
                console.log("Path: " + thePath + ",\t\t File:" + items[i]);
            } else {
                fileMap[items[i]] = thePath;
            }
        } 
    }
}


