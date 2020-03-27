const fs = require('fs');
const path = require('path');

function remove(file) {
    return new Promise((resolve, reject) => {
        fs.unlink(file, (err) => {
            if(err) {
                reject(err);
            }
            resolve(`deleted ${file}`);
        });
    });
}

// https://gist.github.com/jakub-g/5903dc7e4028133704a4
function cleanEmptyFoldersRecursively(folder) {
    var isDir = fs.statSync(folder).isDirectory();
    if (!isDir) {
        return;
    }
    var files = fs.readdirSync(folder);
    if (files.length > 0) {
        files.forEach(function(file) {
            var fullPath = path.join(folder, file);
            cleanEmptyFoldersRecursively(fullPath);
        });

        // re-evaluate files; after deleting subfolder
        // we may have parent folder empty now
        files = fs.readdirSync(folder);
    }

    if (files.length == 0) {
        console.log("removing: ", folder);
        fs.rmdirSync(folder);
        return;
    }
}

exports.remove = remove;
exports.cleanEmptyFoldersRecursively = cleanEmptyFoldersRecursively;