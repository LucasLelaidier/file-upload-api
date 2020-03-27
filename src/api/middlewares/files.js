// Get the file from req.files, then saves it and return the download endpoint
const deleter = require('../../controllers/delete');

const getFile = async (req, res) => {
    console.log(`/GET files/${req.params[0]}`)
    res.sendFile(req.params[0], {root: 'uploaded'}, function (err) {
        if (err) {
            res.sendStatus(404);
        }
    });
};

const deleteFile = async (req, res) => {
    console.log(`/DELETE files/${req.params[0]}`)
    deleter.remove(`uploaded/${req.params[0]}`).then(() => {
        // deleter.cleanEmptyFoldersRecursively("uploaded"); FIX: this also delete uploaded/
        res.sendStatus(200);
    }).catch((err) => {
        res.json(err);
    });
}

exports.getFile = getFile;
exports.deleteFile = deleteFile;