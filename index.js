// index.js
// Entry point for the node-automl package

const automl = require('./lib/automl');
const config = require('./config');

// Exporting the main functionalities of the node-automl package
module.exports = {
    trainImageClassificationModel: function(projectId = config.googleCloud.projectId, datasetId = config.automl.datasetId) {
        return automl.trainImageClassificationModel(projectId, datasetId);
    },
    // Additional methods can be added here to expose more AutoML functionalities
};
