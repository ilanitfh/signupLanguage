console.log("Start building JSON file for sign language app");

var sourceFile = '/Users/i022021/dev/sign_lang/content'
var targetFile = './sl.json'
var colors = [
    "#2d9f8e",
    "#d95841",
    "#f8ca73",
    "#7c97be",
    "#85d5ee",
    "#dd81aa",
    "#e0f33c",
    "#8d8d8d",
    "#fbef5f",
    "#9d8ab5",
    "#bd5a6c",
    "#98c867",
    "#ffe7c6",
    "#fa8071",
    "#7f8000",
    "#61676c",
    "#fc66b2",
    "#4c70da",
    "#f77e29",
    "#abd6d0",
    "#d6d8e7",
    "#36802d",
    "#f1c5c1",
    "#d8a67a"
]

var fs = require('fs');

var res = {};
res.categories = [];
var categoryIndex = 1;
var fileIndex = 0;

var items = fs.readdirSync(sourceFile);

for (var i=0; items && i<items.length; i++) {
//    console.log(items[i]);
    var colorIndex = (i+1) % colors.length 
    let category = {};
    category.name = items[i];
    category.color = colors[colorIndex];
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