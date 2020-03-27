// Generate unique id to rename the file
const shortid = require('shortid');
// Get extension cerresponding to MIME
const mime = require('mime-types')

const fs = require('fs');

// Save a file in the server
function save(file, newName = null) {
    // Sanitize file name
    const serverName = getserverFileName(file, newName);

    // Verify that all folders exists, if not create them
    fs.mkdirSync(`uploaded/${serverName.substring(0, serverName.lastIndexOf("/"))}`, { recursive: true });

    // Save files
    return new Promise((resolve, reject) => {
        file.mv(`uploaded/${serverName}`, function(err) {
            if (err) {
                reject(err);
            }
            resolve(serverName);
        });
    });
}

// If newName is null generate a random file name.
// If newName is not null it verify if newName end by an extension.
function getserverFileName(file, newName = null) {
    const extension = mime.extension(file.mimetype);
    if(newName === null) {
        const name = shortid.generate();
        return name + "." + extension;
    } else {
        if(!newName.endsWith(extension)) {
            return newName + "." + extension;
        }
        return newName;
    }
}

exports.save = save;