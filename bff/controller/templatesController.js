const { initialState } = require('../model/instanceModel')

module.exports = {
  getTemplate(req, res) {
    res.json({
      "data": [
          {
              "id": 9246,
              "name": "side-checklist-example",
              "text": null,
              "style": null,
              "subject": null,
              "cc": [],
              "slackMessage": null,
              "type": "custom_component",
              "smsText": null,
              "pushObject": null,
              "isDeleted": false,
              "webhookData": null,
              "modalState": null,
              "createdAt": "2024-04-30T02:38:45.547Z",
              "updatedAt": "2024-04-30T02:38:45.547Z",
              "customEvents": [
                  "1-to-2",
                  "2-to-3",
                  "3-to-start",
                  "start"
              ],
              "customFields": {
                  "fields": [
                      {
                          "name": "MainTitle",
                          "type": "String",
                          "defaultValue": "Welcome to Example"
                      },
                      {
                          "name": "step-1-title",
                          "type": "String",
                          "defaultValue": "Create a example"
                      },
                      {
                          "name": "step-1-desc",
                          "type": "String",
                          "defaultValue": "An introduction to \"projects\" and instructions on how to create them."
                      },
                      {
                          "name": "step-1-button-text",
                          "type": "String",
                          "defaultValue": "Create a example"
                      },
                      {
                          "name": "step-1-done",
                          "type": "Boolean",
                          "defaultValue": "false"
                      },
                      {
                          "name": "step-2-title",
                          "type": "String",
                          "defaultValue": "Import contacts"
                      },
                      {
                          "name": "step-2-desc",
                          "type": "String",
                          "defaultValue": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                      },
                      {
                          "name": "step-2-button-text",
                          "type": "String",
                          "defaultValue": "Import contacts"
                      },
                      {
                          "name": "step-2-done",
                          "type": "Boolean",
                          "defaultValue": "false"
                      },
                      {
                          "name": "step-3-title",
                          "type": "String",
                          "defaultValue": "Create a sequence"
                      },
                      {
                          "name": "step-3-desc",
                          "type": "String",
                          "defaultValue": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                      },
                      {
                          "name": "step-3-button-text",
                          "type": "String",
                          "defaultValue": "Create a sequence"
                      },
                      {
                          "name": "step-3-done",
                          "type": "Boolean",
                          "defaultValue": "false"
                      }
                  ]
              }
          }
      ],
      "totalPages": 1
  })
  }
}