// config.js
// Configuration settings for the node-automl package

module.exports = {
    googleCloud: {
        projectId: process.env.GOOGLE_CLOUD_PROJECT_ID || 'your-default-project-id',
        credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS || 'path/to/your/service-account-file.json'
    },
    automl: {
        datasetId: process.env.AUTOML_DATASET_ID || 'your-default-dataset-id'
    }
};
