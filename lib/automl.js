// lib/automl.js
// Library to interact with Google Cloud AutoML services

const { AutoMlClient } = require('@google-cloud/automl');
const config = require('../config');

class AutoML {
    constructor() {
        this.client = new AutoMlClient({
            projectId: config.googleCloud.projectId,
            credentials: require(config.googleCloud.credentials)
        });
    }

    async trainImageClassificationModel(projectId, datasetId) {
        try {
            const request = {
                parent: this.client.locationPath(projectId, 'us-central1'),
                model: {
                    displayName: 'Image_Classification_Model',
                    datasetId: datasetId,
                    imageClassificationModelMetadata: {},
                }
            };

            const [operation] = await this.client.createModel(request);
            const [response] = await operation.promise();
            return response;
        } catch (error) {
            console.error('Failed to train image classification model:', error);
            throw error;
        }
    }

    // Additional methods to interact with other AutoML services can be added here
}

module.exports = new AutoML();
