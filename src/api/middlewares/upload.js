const saver = require('../../controllers/save');

// Get the file from req.files, then saves it and return the download endpoint

const upload = async (req, res, next) => {
    console.log(`/POST upload`)
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    newName = req.body.name ? req.body.name : null;

    if(newName && newName.indexOf("..") > -1) {
        return res.json({ "error": "../ is not allowed in file path" });
    }

    saver.save(req.files.file, newName).then((fileName) => {
        req.endpoint = "/files/" + fileName;
        return next();
    }).catch((err) => {
        return res.json(err);
    });
};

exports.upload = upload;