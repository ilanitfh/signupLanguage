console.log("Start building JSON file for sign language app");

var sourceFile = '/Users/i022021/dev/sign_lang/content'
var targetFile = '/tmp/sl.json'


var fs = require('fs');

var res = {};
res.categories = [];
var categoryIndex = 1;
var fileIndex = 0;

var items = fs.readdirSync(sourceFile);

for (var i=0; items && i<items.length; i++) {
    console.log(items[i]);

    let category = {};
    category.name = items[i];
    category.id = categoryIndex.toString();
    category.imageName = items[i] + ".png"
    category.words = []
    console.log("read words:" + sourceFile + '/' + category.name);
    try {
        var words = fs.readdirSync(sourceFile + '/' + category.name);
        if (words) {
            fileIndex = categoryIndex * 100 + 1;
            for (var j=0; j<words.length; j++) {
                if (words[j].endsWith(".mov")) {
                    console.log(category.id + " " + words[j]);
                    var word = {};
                    word.name = words[j];
                    word.id = fileIndex;
                    fileIndex++;
                    word.imageName = word.name.replace(".mov", ".png");
                    word.videoName = word.name.replace(".mov", "_x264.mov");
                    category.words.push(word);
                }
            }
        }
        categoryIndex++;

        res.categories.push(category);
    } catch(e){
        console.log(e)
    }
    
    

}



fs.open(targetFile, 'w', function (err, file) {
    if (err) throw err;
    fs.writeSync(file, JSON.stringify(res, null, 2));
    fs.closeSync(file);
  });