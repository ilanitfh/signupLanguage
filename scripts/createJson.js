console.log("Start building JSON file for sign language app");

var sourceFile = '/Users/i022021/dev/sign_lang/content'
var targetFile = './sl.json'


var fs = require('fs');

var res = {};
res.categories = [];
var categoryIndex = 1;
var fileIndex = 0;

var items = fs.readdirSync(sourceFile);

for (var i=0; items && i<items.length; i++) {
//    console.log(items[i]);

    let category = {};
    category.name = items[i];
    category.id = categoryIndex.toString();
    category.imageName = items[i] + ".png"
    category.words = []
//    console.log("read words:" + sourceFile + '/' + category.name);
    try {
        var words = fs.readdirSync(sourceFile + '/' + category.name);
        if (words) {
            fileIndex = categoryIndex * 100 + 1;
            for (var j=0; j<words.length; j++) {
                var suffix = ""
                if (words[j].endsWith(".mov")) {
                    suffix = ".mov"
                } else if (words[j].endsWith(".mp4")) {
                    suffix = ".mp4"
                }



                if (suffix != "") {
//                    console.log(category.id + " " + words[j]);
                    var word = {};
                    word.name = words[j].replace(suffix, "");
                    word.id = fileIndex;
                    fileIndex++;
                    word.imageName = words[j].replace(suffix, ".png");
                    //test image exists
                    var imagePath = sourceFile + '/' + category.name + "/סמלים/" + word.imageName
                    if (!fs.existsSync(imagePath)) {
                        console.log("missing: " , category.name, " - ", word.imageName);
                        word.imageName = "no_image.png"
                    }
                    word.videoName = words[j].replace(suffix, "_x264.mov");
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