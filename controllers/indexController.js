function getHomePage(req, res, next) {
    res.json({ message: "Hello, get!" });
}

function createResource(req, res, next) {
    res.json({ message: "Hello, post!" });
}

function updateResource(req, res, next) {
    res.json({ message: "Hello, put!" });
}

function deleteResource(req, res, next) {
    res.json({ message: "Hello, delete!" });
}

module.exports = {
    getHomePage,
    createResource,
    updateResource,
    deleteResource
};
