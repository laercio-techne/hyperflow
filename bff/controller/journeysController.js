const basicOnboarding = require('../data/basic_onboarding.json')
const displayModal = require('../data/display_modal.json')
const exampleOnboardingChecklist = require('../data/example_onboarding_checklist.json')
const generalEmailCampaign = require('../data/general_email_campaign.json')
const threeBranchJourney = require('../data/three_branch_journey.json')

module.exports = {
  getListJourneys(req, res) {
    res.json({
      "data": [
        {
          "id": "f7cb06d7-8658-4ab3-a92d-4d5fcbc6c1c7",
          "name": "Example onboarding checklist",
          "isActive": false,
          "isPaused": false,
          "isStopped": false,
          "isDeleted": false,
          "createdAt": "2024-04-30T02:38:45.547Z",
          "startedAt": null,
          "deletedAt": null,
          "stoppedAt": null,
          "latestPause": null,
          "latestSave": "2024-05-02T02:10:37.044Z",
          "latestChanger": null,
          "visualLayout": {
            "edges": [
              {
                "id": "e776ee148-00df-4fb8-9781-6e921050d491-3f451c93-0545-4ca0-aac8-069f84b4998e",
                "type": "primary",
                "source": "776ee148-00df-4fb8-9781-6e921050d491",
                "target": "3f451c93-0545-4ca0-aac8-069f84b4998e"
              },
              {
                "id": "3f451c93-0545-4ca0-aac8-069f84b4998e-1cf6cf01-dcde-482e-b29e-b2c1a78c1892",
                "type": "primary",
                "source": "3f451c93-0545-4ca0-aac8-069f84b4998e",
                "target": "1cf6cf01-dcde-482e-b29e-b2c1a78c1892"
              },
              {
                "id": "be29d13d6-de72-4801-af09-c07652e90bf8",
                "data": {
                  "type": "branch",
                  "branch": {
                    "id": "e29d13d6-de72-4801-af09-c07652e90bf8",
                    "type": "event",
                    "conditions": [
                      {
                        "event": "1-to-2",
                        "trackerId": "various-duck-3332",
                        "providerType": "tracker",
                        "relationToNext": "or"
                      }
                    ]
                  }
                },
                "type": "branch",
                "source": "1cf6cf01-dcde-482e-b29e-b2c1a78c1892",
                "target": "77ef64b7-783d-42c5-9902-7969358353c9"
              },
              {
                "id": "77ef64b7-783d-42c5-9902-7969358353c9-4536f114-6392-4246-9f7c-4c1c7f7fddd4",
                "type": "primary",
                "source": "77ef64b7-783d-42c5-9902-7969358353c9",
                "target": "4536f114-6392-4246-9f7c-4c1c7f7fddd4"
              },
              {
                "id": "bb7da45ed-2911-4689-8161-8421726b9e2f",
                "data": {
                  "type": "branch",
                  "branch": {
                    "id": "b7da45ed-2911-4689-8161-8421726b9e2f",
                    "type": "event",
                    "conditions": [
                      {
                        "event": "2-to-3",
                        "trackerId": "various-duck-3332",
                        "providerType": "tracker",
                        "relationToNext": "or"
                      }
                    ]
                  }
                },
                "type": "branch",
                "source": "4536f114-6392-4246-9f7c-4c1c7f7fddd4",
                "target": "1d86c6d3-564b-405f-86a5-f494e10491fa"
              },
              {
                "id": "bf9195627-90d3-4bb0-8907-0fda80a3971c",
                "data": {
                  "type": "branch",
                  "branch": {
                    "id": "f9195627-90d3-4bb0-8907-0fda80a3971c",
                    "type": "event",
                    "conditions": [
                      {
                        "event": "3-to-start",
                        "trackerId": "various-duck-3332",
                        "providerType": "tracker",
                        "relationToNext": "or"
                      }
                    ]
                  }
                },
                "type": "branch",
                "source": "3c6eaf46-b764-4220-8e04-63de14a6744f",
                "target": "c59f3dd9-e6ea-4485-a938-b6518915bfba"
              },
              {
                "id": "c59f3dd9-e6ea-4485-a938-b6518915bfba-5125f2ed-9218-4905-ae7d-5c42d1352c82",
                "type": "primary",
                "source": "c59f3dd9-e6ea-4485-a938-b6518915bfba",
                "target": "5125f2ed-9218-4905-ae7d-5c42d1352c82"
              },
              {
                "id": "b67eb779c-7324-4f79-8451-35defea5869c",
                "data": {
                  "type": "branch",
                  "branch": {
                    "id": "67eb779c-7324-4f79-8451-35defea5869c",
                    "type": "event",
                    "conditions": [
                      {
                        "event": "start",
                        "trackerId": "various-duck-3332",
                        "providerType": "tracker",
                        "relationToNext": "or"
                      }
                    ]
                  }
                },
                "type": "branch",
                "source": "5125f2ed-9218-4905-ae7d-5c42d1352c82",
                "target": "0ae71936-923a-429b-a9c1-38792cb900a1"
              },
              {
                "id": "0ae71936-923a-429b-a9c1-38792cb900a1-4b22a55d-5efe-4f11-ba0a-2afe54e026b1",
                "type": "primary",
                "source": "0ae71936-923a-429b-a9c1-38792cb900a1",
                "target": "4b22a55d-5efe-4f11-ba0a-2afe54e026b1"
              },
              {
                "id": "e1d86c6d3-564b-405f-86a5-f494e10491fa-647bb5a6-62d7-4116-a971-913e8d131009",
                "type": "primary",
                "source": "1d86c6d3-564b-405f-86a5-f494e10491fa",
                "target": "647bb5a6-62d7-4116-a971-913e8d131009"
              },
              {
                "id": "e647bb5a6-62d7-4116-a971-913e8d131009-3c6eaf46-b764-4220-8e04-63de14a6744f",
                "type": "primary",
                "source": "647bb5a6-62d7-4116-a971-913e8d131009",
                "target": "3c6eaf46-b764-4220-8e04-63de14a6744f"
              }
            ],
            "nodes": [
              {
                "id": "776ee148-00df-4fb8-9781-6e921050d491",
                "data": {
                  "stepId": "3e436325-0bba-49b7-b2db-7405298f29c8"
                },
                "type": "start",
                "position": {
                  "x": 0,
                  "y": 0
                },
                "selected": false
              },
              {
                "id": "3f451c93-0545-4ca0-aac8-069f84b4998e",
                "data": {
                  "type": "tracker",
                  "stepId": "7a81d583-02ca-4da1-8855-d132b57b6337",
                  "tracker": {
                    "fields": [
                      {
                        "name": "MainTitle",
                        "type": "String",
                        "value": "Welcome to Example"
                      },
                      {
                        "name": "step-1-title",
                        "type": "String",
                        "value": "Create a example"
                      },
                      {
                        "name": "step-1-desc",
                        "type": "String",
                        "value": "An introduction to \"projects\" and instructions on how to create them."
                      },
                      {
                        "name": "step-1-button-text",
                        "type": "String",
                        "value": "Create a example"
                      },
                      {
                        "name": "step-1-done",
                        "type": "Boolean",
                        "value": "false"
                      },
                      {
                        "name": "step-2-title",
                        "type": "String",
                        "value": "Import contacts"
                      },
                      {
                        "name": "step-2-desc",
                        "type": "String",
                        "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                      },
                      {
                        "name": "step-2-button-text",
                        "type": "String",
                        "value": "Import contacts"
                      },
                      {
                        "name": "step-2-done",
                        "type": "Boolean",
                        "value": "false"
                      },
                      {
                        "name": "step-3-title",
                        "type": "String",
                        "value": "Create a sequence"
                      },
                      {
                        "name": "step-3-desc",
                        "type": "String",
                        "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                      },
                      {
                        "name": "step-3-button-text",
                        "type": "String",
                        "value": "Create a sequence"
                      },
                      {
                        "name": "step-3-done",
                        "type": "Boolean",
                        "value": "false"
                      }
                    ],
                    "trackerId": "various-duck-3332",
                    "visibility": "show",
                    "trackerTemplate": {
                      "id": 9246,
                      "name": "side-checklist-example"
                    }
                  },
                  "needsCheck": false,
                  "showErrors": true
                },
                "type": "tracker",
                "position": {
                  "x": 0,
                  "y": 114
                },
                "selected": false
              },
              {
                "id": "1cf6cf01-dcde-482e-b29e-b2c1a78c1892",
                "data": {
                  "type": "waitUntil",
                  "stepId": "ee047417-ca97-4aec-9ab7-23752103da5e",
                  "branches": [
                    {
                      "id": "e29d13d6-de72-4801-af09-c07652e90bf8",
                      "type": "event",
                      "conditions": [
                        {
                          "event": "1-to-2",
                          "trackerId": "various-duck-3332",
                          "providerType": "tracker",
                          "relationToNext": "or"
                        }
                      ]
                    }
                  ],
                  "showErrors": true
                },
                "type": "waitUntil",
                "position": {
                  "x": 0,
                  "y": 238
                },
                "selected": false
              },
              {
                "id": "77ef64b7-783d-42c5-9902-7969358353c9",
                "data": {
                  "type": "tracker",
                  "stepId": "434aebf6-a9a0-4fd6-be5f-186a48290dc4",
                  "tracker": {
                    "fields": [
                      {
                        "name": "MainTitle",
                        "type": "String",
                        "value": "Welcome to Example"
                      },
                      {
                        "name": "step-1-title",
                        "type": "String",
                        "value": "Create a example"
                      },
                      {
                        "name": "step-1-desc",
                        "type": "String",
                        "value": "An introduction to \"projects\" and instructions on how to create them."
                      },
                      {
                        "name": "step-1-button-text",
                        "type": "String",
                        "value": "Create a example"
                      },
                      {
                        "name": "step-1-done",
                        "type": "Boolean",
                        "value": "true"
                      },
                      {
                        "name": "step-2-title",
                        "type": "String",
                        "value": "Import contacts"
                      },
                      {
                        "name": "step-2-desc",
                        "type": "String",
                        "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                      },
                      {
                        "name": "step-2-button-text",
                        "type": "String",
                        "value": "Import contacts"
                      },
                      {
                        "name": "step-2-done",
                        "type": "Boolean",
                        "value": "false"
                      },
                      {
                        "name": "step-3-title",
                        "type": "String",
                        "value": "Create a sequence"
                      },
                      {
                        "name": "step-3-desc",
                        "type": "String",
                        "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                      },
                      {
                        "name": "step-3-button-text",
                        "type": "String",
                        "value": "Create a sequence"
                      },
                      {
                        "name": "step-3-done",
                        "type": "Boolean",
                        "value": "false"
                      }
                    ],
                    "trackerId": "various-duck-3332",
                    "visibility": "show",
                    "trackerTemplate": {
                      "id": 9246,
                      "name": "side-checklist-example"
                    }
                  },
                  "needsCheck": false
                },
                "type": "tracker",
                "position": {
                  "x": 0,
                  "y": 362
                },
                "selected": false
              },
              {
                "id": "4536f114-6392-4246-9f7c-4c1c7f7fddd4",
                "data": {
                  "type": "waitUntil",
                  "stepId": "5f19f19d-93db-49d6-b5f7-9dbf0d383618",
                  "branches": [
                    {
                      "id": "b7da45ed-2911-4689-8161-8421726b9e2f",
                      "type": "event",
                      "conditions": [
                        {
                          "event": "2-to-3",
                          "trackerId": "various-duck-3332",
                          "providerType": "tracker",
                          "relationToNext": "or"
                        }
                      ]
                    }
                  ]
                },
                "type": "waitUntil",
                "position": {
                  "x": 0,
                  "y": 486
                },
                "selected": false
              },
              {
                "id": "1d86c6d3-564b-405f-86a5-f494e10491fa",
                "data": {
                  "type": "tracker",
                  "stepId": "3fdc4ac6-1f64-482f-b23e-c2a7f9909202",
                  "tracker": {
                    "fields": [
                      {
                        "name": "MainTitle",
                        "type": "String",
                        "value": "Welcome to Example"
                      },
                      {
                        "name": "step-1-title",
                        "type": "String",
                        "value": "Create a example"
                      },
                      {
                        "name": "step-1-desc",
                        "type": "String",
                        "value": "An introduction to \"projects\" and instructions on how to create them."
                      },
                      {
                        "name": "step-1-button-text",
                        "type": "String",
                        "value": "Create a example"
                      },
                      {
                        "name": "step-1-done",
                        "type": "Boolean",
                        "value": "true"
                      },
                      {
                        "name": "step-2-title",
                        "type": "String",
                        "value": "Import contacts"
                      },
                      {
                        "name": "step-2-desc",
                        "type": "String",
                        "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                      },
                      {
                        "name": "step-2-button-text",
                        "type": "String",
                        "value": "Import contacts"
                      },
                      {
                        "name": "step-2-done",
                        "type": "Boolean",
                        "value": "true"
                      },
                      {
                        "name": "step-3-title",
                        "type": "String",
                        "value": "Create a sequence"
                      },
                      {
                        "name": "step-3-desc",
                        "type": "String",
                        "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                      },
                      {
                        "name": "step-3-button-text",
                        "type": "String",
                        "value": "Create a sequence"
                      },
                      {
                        "name": "step-3-done",
                        "type": "Boolean",
                        "value": "false"
                      }
                    ],
                    "trackerId": "various-duck-3332",
                    "visibility": "show",
                    "trackerTemplate": {
                      "id": 9246,
                      "name": "side-checklist-example"
                    }
                  },
                  "needsCheck": false
                },
                "type": "tracker",
                "position": {
                  "x": 0,
                  "y": 610
                },
                "selected": false
              },
              {
                "id": "647bb5a6-62d7-4116-a971-913e8d131009",
                "data": {
                  "type": "message",
                  "stepId": "d636b9be-d174-49b8-94bd-08168dc83eaa",
                  "template": {
                    "type": "webhook"
                  },
                  "customName": "Webhook 1",
                  "showErrors": true
                },
                "type": "message",
                "position": {
                  "x": 0,
                  "y": 734
                },
                "selected": false
              },
              {
                "id": "3c6eaf46-b764-4220-8e04-63de14a6744f",
                "data": {
                  "type": "waitUntil",
                  "stepId": "953e5a59-ef61-48cd-af72-36619d4f8f06",
                  "branches": [
                    {
                      "id": "f9195627-90d3-4bb0-8907-0fda80a3971c",
                      "type": "event",
                      "conditions": [
                        {
                          "event": "3-to-start",
                          "trackerId": "various-duck-3332",
                          "providerType": "tracker",
                          "relationToNext": "or"
                        }
                      ]
                    }
                  ],
                  "showErrors": true
                },
                "type": "waitUntil",
                "position": {
                  "x": 0,
                  "y": 858
                },
                "selected": false
              },
              {
                "id": "c59f3dd9-e6ea-4485-a938-b6518915bfba",
                "data": {
                  "type": "tracker",
                  "stepId": "eebad32d-7639-4c34-aea6-aaa9cb0eecfb",
                  "tracker": {
                    "fields": [
                      {
                        "name": "MainTitle",
                        "type": "String",
                        "value": "Welcome to Example"
                      },
                      {
                        "name": "step-1-title",
                        "type": "String",
                        "value": "Create a example"
                      },
                      {
                        "name": "step-1-desc",
                        "type": "String",
                        "value": "An introduction to \"projects\" and instructions on how to create them."
                      },
                      {
                        "name": "step-1-button-text",
                        "type": "String",
                        "value": "Create a example"
                      },
                      {
                        "name": "step-1-done",
                        "type": "Boolean",
                        "value": "true"
                      },
                      {
                        "name": "step-2-title",
                        "type": "String",
                        "value": "Import contacts"
                      },
                      {
                        "name": "step-2-desc",
                        "type": "String",
                        "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                      },
                      {
                        "name": "step-2-button-text",
                        "type": "String",
                        "value": "Import contacts"
                      },
                      {
                        "name": "step-2-done",
                        "type": "Boolean",
                        "value": "true"
                      },
                      {
                        "name": "step-3-title",
                        "type": "String",
                        "value": "Create a sequence"
                      },
                      {
                        "name": "step-3-desc",
                        "type": "String",
                        "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                      },
                      {
                        "name": "step-3-button-text",
                        "type": "String",
                        "value": "Create a sequence"
                      },
                      {
                        "name": "step-3-done",
                        "type": "Boolean",
                        "value": "true"
                      }
                    ],
                    "trackerId": "various-duck-3332",
                    "visibility": "show",
                    "trackerTemplate": {
                      "id": 9246,
                      "name": "side-checklist-example"
                    }
                  },
                  "needsCheck": false
                },
                "type": "tracker",
                "position": {
                  "x": 0,
                  "y": 982
                },
                "selected": false
              },
              {
                "id": "5125f2ed-9218-4905-ae7d-5c42d1352c82",
                "data": {
                  "type": "waitUntil",
                  "stepId": "e58a0b1f-e0e9-4eae-aff0-9ac0a7f6a3e8",
                  "branches": [
                    {
                      "id": "67eb779c-7324-4f79-8451-35defea5869c",
                      "type": "event",
                      "conditions": [
                        {
                          "event": "start",
                          "trackerId": "various-duck-3332",
                          "providerType": "tracker",
                          "relationToNext": "or"
                        }
                      ]
                    }
                  ]
                },
                "type": "waitUntil",
                "position": {
                  "x": 0,
                  "y": 1106
                },
                "selected": false
              },
              {
                "id": "0ae71936-923a-429b-a9c1-38792cb900a1",
                "data": {
                  "type": "tracker",
                  "stepId": "53da9024-0069-46e6-85e3-c216f062b407",
                  "tracker": {
                    "fields": [
                      {
                        "name": "MainTitle",
                        "type": "String",
                        "value": "Welcome to Example"
                      },
                      {
                        "name": "step-1-title",
                        "type": "String",
                        "value": "Create a example"
                      },
                      {
                        "name": "step-1-desc",
                        "type": "String",
                        "value": "An introduction to \"projects\" and instructions on how to create them."
                      },
                      {
                        "name": "step-1-button-text",
                        "type": "String",
                        "value": "Create a example"
                      },
                      {
                        "name": "step-1-done",
                        "type": "Boolean",
                        "value": "true"
                      },
                      {
                        "name": "step-2-title",
                        "type": "String",
                        "value": "Import contacts"
                      },
                      {
                        "name": "step-2-desc",
                        "type": "String",
                        "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                      },
                      {
                        "name": "step-2-button-text",
                        "type": "String",
                        "value": "Import contacts"
                      },
                      {
                        "name": "step-2-done",
                        "type": "Boolean",
                        "value": "true"
                      },
                      {
                        "name": "step-3-title",
                        "type": "String",
                        "value": "Create a sequence"
                      },
                      {
                        "name": "step-3-desc",
                        "type": "String",
                        "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                      },
                      {
                        "name": "step-3-button-text",
                        "type": "String",
                        "value": "Create a sequence"
                      },
                      {
                        "name": "step-3-done",
                        "type": "Boolean",
                        "value": "true"
                      }
                    ],
                    "trackerId": "various-duck-3332",
                    "visibility": "hide",
                    "trackerTemplate": {
                      "id": 9246,
                      "name": "side-checklist-example"
                    }
                  },
                  "needsCheck": false
                },
                "type": "tracker",
                "position": {
                  "x": 0,
                  "y": 1230
                },
                "selected": false
              },
              {
                "id": "4b22a55d-5efe-4f11-ba0a-2afe54e026b1",
                "data": {
                  "stepId": "5398145d-686a-4b3f-8ea0-75051313fd51"
                },
                "type": "exit",
                "position": {
                  "x": 0,
                  "y": 1344
                },
                "selected": false
              }
            ]
          },
          "isDynamic": true,
          "inclusionCriteria": {
            "type": "allCustomers"
          },
          "journeyEntrySettings": null,
          "journeySettings": null,
          "enrollment_count": "0",
          "last_enrollment_timestamp": null,
          "latestChangerEmail": "laerciopesa30@hotmail.com",
          "enrolledCustomers": 0
        },
        {
          "id": "7d85dbbd-7069-4282-ae9b-7ba760b99ef1",
          "name": "Three branch journey (Sample)",
          "isActive": false,
          "isPaused": false,
          "isStopped": false,
          "isDeleted": false,
          "createdAt": "2024-04-30T02:38:45.547Z",
          "startedAt": null,
          "deletedAt": null,
          "stoppedAt": null,
          "latestPause": null,
          "latestSave": "2024-04-30T02:38:46.161Z",
          "latestChanger": null,
          "visualLayout": {
            "edges": [
              {
                "id": "ef51c7f51-b5c6-4111-b72a-bc91a223619d-97f37a62-0a53-4b97-8e3c-ef413fc4fa24",
                "type": "primary",
                "source": "f51c7f51-b5c6-4111-b72a-bc91a223619d",
                "target": "97f37a62-0a53-4b97-8e3c-ef413fc4fa24"
              },
              {
                "id": "b969aa15c-cb15-447b-805e-9e3398b130ae",
                "data": {
                  "type": "branch",
                  "branch": {
                    "id": "969aa15c-cb15-447b-805e-9e3398b130ae",
                    "type": "event",
                    "conditions": [
                      {
                        "name": "reactivation",
                        "statements": [],
                        "providerType": "custom",
                        "relationToNext": "or"
                      }
                    ]
                  }
                },
                "type": "branch",
                "source": "97f37a62-0a53-4b97-8e3c-ef413fc4fa24",
                "target": "88e3aeb3-a8a1-4245-acfd-69cb17cae8ad"
              },
              {
                "id": "b6406f073-41bb-4de8-a32c-6606e5601dcc",
                "data": {
                  "type": "branch",
                  "branch": {
                    "id": "6406f073-41bb-4de8-a32c-6606e5601dcc",
                    "type": "event",
                    "conditions": [
                      {
                        "name": "newsletter",
                        "statements": [],
                        "providerType": "custom",
                        "relationToNext": "or"
                      }
                    ]
                  }
                },
                "type": "branch",
                "source": "97f37a62-0a53-4b97-8e3c-ef413fc4fa24",
                "target": "059ee8e9-f27a-45b6-8660-8ba102eefaa0"
              },
              {
                "id": "b2bc7f31b-23ba-423f-8419-c118d281e670",
                "data": {
                  "type": "branch",
                  "branch": {
                    "id": "2bc7f31b-23ba-423f-8419-c118d281e670",
                    "type": "event",
                    "conditions": [
                      {
                        "name": "invoice",
                        "statements": [],
                        "providerType": "custom",
                        "relationToNext": "or"
                      }
                    ]
                  }
                },
                "type": "branch",
                "source": "97f37a62-0a53-4b97-8e3c-ef413fc4fa24",
                "target": "7c27462f-7d05-4d1c-b586-f373ba348bb3"
              },
              {
                "id": "88e3aeb3-a8a1-4245-acfd-69cb17cae8ad-a9661283-1f16-4f2e-b61c-0fdf028cb6bd",
                "type": "primary",
                "source": "88e3aeb3-a8a1-4245-acfd-69cb17cae8ad",
                "target": "a9661283-1f16-4f2e-b61c-0fdf028cb6bd"
              },
              {
                "id": "059ee8e9-f27a-45b6-8660-8ba102eefaa0-aca80750-a8c1-4ed5-945e-f428145a31bc",
                "type": "primary",
                "source": "059ee8e9-f27a-45b6-8660-8ba102eefaa0",
                "target": "aca80750-a8c1-4ed5-945e-f428145a31bc"
              },
              {
                "id": "7c27462f-7d05-4d1c-b586-f373ba348bb3-313bd3a7-b9d6-412a-9897-3d54eb4097ae",
                "type": "primary",
                "source": "7c27462f-7d05-4d1c-b586-f373ba348bb3",
                "target": "313bd3a7-b9d6-412a-9897-3d54eb4097ae"
              }
            ],
            "nodes": [
              {
                "id": "f51c7f51-b5c6-4111-b72a-bc91a223619d",
                "data": {
                  "stepId": "8ef46fd3-5d3c-4698-8b16-a4eab373ae83",
                  "disabled": false
                },
                "type": "start",
                "position": {
                  "x": 0,
                  "y": 0
                },
                "selected": false
              },
              {
                "id": "97f37a62-0a53-4b97-8e3c-ef413fc4fa24",
                "data": {
                  "type": "waitUntil",
                  "stepId": "441f5953-3205-4ea9-a096-e03a0474a4c0",
                  "branches": [
                    {
                      "id": "969aa15c-cb15-447b-805e-9e3398b130ae",
                      "type": "event",
                      "conditions": [
                        {
                          "name": "reactivation",
                          "statements": [],
                          "providerType": "custom",
                          "relationToNext": "or"
                        }
                      ]
                    },
                    {
                      "id": "6406f073-41bb-4de8-a32c-6606e5601dcc",
                      "type": "event",
                      "conditions": [
                        {
                          "name": "newsletter",
                          "statements": [],
                          "providerType": "custom",
                          "relationToNext": "or"
                        }
                      ]
                    },
                    {
                      "id": "2bc7f31b-23ba-423f-8419-c118d281e670",
                      "type": "event",
                      "conditions": [
                        {
                          "name": "invoice",
                          "statements": [],
                          "providerType": "custom",
                          "relationToNext": "or"
                        }
                      ]
                    }
                  ],
                  "disabled": false,
                  "showErrors": true
                },
                "type": "waitUntil",
                "position": {
                  "x": 0,
                  "y": 114
                },
                "selected": false
              },
              {
                "id": "88e3aeb3-a8a1-4245-acfd-69cb17cae8ad",
                "data": {
                  "type": "message",
                  "stepId": "b0d1b240-6519-42ce-ae78-975b498995ea",
                  "disabled": false,
                  "template": {
                    "type": "email",
                    "selected": {
                      "id": 9240,
                      "name": "example-template-reactivation"
                    }
                  },
                  "showErrors": true
                },
                "type": "message",
                "position": {
                  "x": -520,
                  "y": 326
                },
                "selected": false
              },
              {
                "id": "a9661283-1f16-4f2e-b61c-0fdf028cb6bd",
                "data": {
                  "type": "jumpTo",
                  "stepId": "ce62047c-23fb-4c02-9d9c-559080d7fe48",
                  "disabled": false,
                  "targetId": "97f37a62-0a53-4b97-8e3c-ef413fc4fa24"
                },
                "type": "jumpTo",
                "position": {
                  "x": -520,
                  "y": 440
                },
                "selected": false
              },
              {
                "id": "059ee8e9-f27a-45b6-8660-8ba102eefaa0",
                "data": {
                  "type": "message",
                  "stepId": "e6357607-5bd3-442a-b02e-b3c7d8508f55",
                  "disabled": false,
                  "template": {
                    "type": "email",
                    "selected": {
                      "id": 9243,
                      "name": "example-template-newsletter"
                    }
                  },
                  "showErrors": true
                },
                "type": "message",
                "position": {
                  "x": 0,
                  "y": 326
                },
                "selected": false
              },
              {
                "id": "aca80750-a8c1-4ed5-945e-f428145a31bc",
                "data": {
                  "type": "jumpTo",
                  "stepId": "075f8fa3-23d5-417d-9324-72d19c98a76a",
                  "disabled": false,
                  "targetId": "97f37a62-0a53-4b97-8e3c-ef413fc4fa24"
                },
                "type": "jumpTo",
                "position": {
                  "x": 0,
                  "y": 440
                },
                "selected": false
              },
              {
                "id": "7c27462f-7d05-4d1c-b586-f373ba348bb3",
                "data": {
                  "type": "message",
                  "stepId": "88a195c0-2da9-4f52-b905-fe46ec94375d",
                  "disabled": false,
                  "template": {
                    "type": "email",
                    "selected": {
                      "id": 9242,
                      "name": "example-template-invoice"
                    }
                  },
                  "showErrors": true
                },
                "type": "message",
                "position": {
                  "x": 520,
                  "y": 326
                },
                "selected": false
              },
              {
                "id": "313bd3a7-b9d6-412a-9897-3d54eb4097ae",
                "data": {
                  "type": "jumpTo",
                  "stepId": "ce427a79-612e-49a6-b622-227f3d8f0589",
                  "disabled": false,
                  "targetId": "97f37a62-0a53-4b97-8e3c-ef413fc4fa24"
                },
                "type": "jumpTo",
                "position": {
                  "x": 520,
                  "y": 440
                },
                "selected": false
              }
            ]
          },
          "isDynamic": true,
          "inclusionCriteria": {
            "type": "allCustomers"
          },
          "journeyEntrySettings": null,
          "journeySettings": null,
          "enrollment_count": "0",
          "last_enrollment_timestamp": null,
          "latestChangerEmail": "laerciopesa30@hotmail.com",
          "enrolledCustomers": 0
        },
        {
          "id": "ed062d8b-4ebc-444c-978b-534e57e79618",
          "name": "General Email Campaign (Sample)",
          "isActive": false,
          "isPaused": false,
          "isStopped": false,
          "isDeleted": false,
          "createdAt": "2024-04-30T02:38:45.547Z",
          "startedAt": null,
          "deletedAt": null,
          "stoppedAt": null,
          "latestPause": null,
          "latestSave": "2024-04-30T02:38:45.847Z",
          "latestChanger": null,
          "visualLayout": {
            "edges": [
              {
                "id": "e64bb8b23-ed24-453a-a5f7-3d03f88f813b-d9526784-78dd-41a8-b679-aa55dacaedfe",
                "type": "primary",
                "source": "64bb8b23-ed24-453a-a5f7-3d03f88f813b",
                "target": "d9526784-78dd-41a8-b679-aa55dacaedfe"
              },
              {
                "id": "d9526784-78dd-41a8-b679-aa55dacaedfe-9d76b90f-a791-444c-8295-e6839432e586",
                "type": "primary",
                "source": "d9526784-78dd-41a8-b679-aa55dacaedfe",
                "target": "9d76b90f-a791-444c-8295-e6839432e586"
              }
            ],
            "nodes": [
              {
                "id": "64bb8b23-ed24-453a-a5f7-3d03f88f813b",
                "data": {
                  "stepId": "bd75b7bc-8fc5-49b2-9cfb-0e7fa136c3b7"
                },
                "type": "start",
                "position": {
                  "x": 0,
                  "y": 0
                },
                "selected": false
              },
              {
                "id": "d9526784-78dd-41a8-b679-aa55dacaedfe",
                "data": {
                  "type": "message",
                  "stepId": "74b8b603-f376-4a3e-bfa9-b0849c75aa66",
                  "template": {
                    "type": "email"
                  }
                },
                "type": "message",
                "position": {
                  "x": 0,
                  "y": 125
                },
                "selected": false
              },
              {
                "id": "9d76b90f-a791-444c-8295-e6839432e586",
                "data": {
                  "stepId": "d828f237-c437-44a5-902c-c3f5235400c3"
                },
                "type": "exit",
                "position": {
                  "x": 0,
                  "y": 250
                },
                "selected": false
              }
            ]
          },
          "isDynamic": true,
          "inclusionCriteria": {
            "type": "allCustomers"
          },
          "journeyEntrySettings": null,
          "journeySettings": null,
          "enrollment_count": "0",
          "last_enrollment_timestamp": null,
          "latestChangerEmail": "laerciopesa30@hotmail.com",
          "enrolledCustomers": 0
        },
        {
          "id": "ec66039b-9ab3-4eaa-ab0d-a75ba04aa434",
          "name": "Display Modal (Sample)",
          "isActive": false,
          "isPaused": false,
          "isStopped": false,
          "isDeleted": false,
          "createdAt": "2024-04-30T02:38:45.547Z",
          "startedAt": null,
          "deletedAt": null,
          "stoppedAt": null,
          "latestPause": null,
          "latestSave": "2024-04-30T02:38:45.782Z",
          "latestChanger": null,
          "visualLayout": {
            "edges": [
              {
                "id": "e64bb8b23-ed24-453a-a5f7-3d03f88f813b-d9526784-78dd-41a8-b679-aa55dacaedfe",
                "type": "primary",
                "source": "64bb8b23-ed24-453a-a5f7-3d03f88f813b",
                "target": "d9526784-78dd-41a8-b679-aa55dacaedfe"
              },
              {
                "id": "d9526784-78dd-41a8-b679-aa55dacaedfe-9d76b90f-a791-444c-8295-e6839432e586",
                "type": "primary",
                "source": "d9526784-78dd-41a8-b679-aa55dacaedfe",
                "target": "9d76b90f-a791-444c-8295-e6839432e586"
              }
            ],
            "nodes": [
              {
                "id": "64bb8b23-ed24-453a-a5f7-3d03f88f813b",
                "data": {
                  "stepId": "d49ad619-bc7b-4de8-a9bf-9cd10c454386"
                },
                "type": "start",
                "position": {
                  "x": 0,
                  "y": 0
                },
                "selected": false
              },
              {
                "id": "d9526784-78dd-41a8-b679-aa55dacaedfe",
                "data": {
                  "type": "message",
                  "stepId": "7daea0a4-4da5-4105-8d11-dda9e53aae4e",
                  "template": {
                    "type": "modal"
                  }
                },
                "type": "message",
                "position": {
                  "x": 0,
                  "y": 125
                },
                "selected": false
              },
              {
                "id": "9d76b90f-a791-444c-8295-e6839432e586",
                "data": {
                  "stepId": "6049f511-4ee0-46cf-b1f3-14558578e528"
                },
                "type": "exit",
                "position": {
                  "x": 0,
                  "y": 250
                },
                "selected": false
              }
            ]
          },
          "isDynamic": true,
          "inclusionCriteria": {
            "type": "allCustomers"
          },
          "journeyEntrySettings": null,
          "journeySettings": null,
          "enrollment_count": "0",
          "last_enrollment_timestamp": null,
          "latestChangerEmail": "laerciopesa30@hotmail.com",
          "enrolledCustomers": 0
        },
        {
          "id": "2d07a17d-0bc7-4159-95ff-7a590cb40ed1",
          "name": "Basic Onboarding (Sample)",
          "isActive": false,
          "isPaused": false,
          "isStopped": false,
          "isDeleted": false,
          "createdAt": "2024-04-30T02:38:45.547Z",
          "startedAt": null,
          "deletedAt": null,
          "stoppedAt": null,
          "latestPause": null,
          "latestSave": "2024-04-30T02:38:45.713Z",
          "latestChanger": null,
          "visualLayout": {
            "edges": [
              {
                "id": "b27200da1-bdd3-4c46-8216-7a09184f7bc0",
                "data": {
                  "type": "branch",
                  "branch": {
                    "id": "27200da1-bdd3-4c46-8216-7a09184f7bc0",
                    "type": "event",
                    "conditions": [
                      {
                        "name": "verify",
                        "statements": [],
                        "providerType": "custom",
                        "relationToNext": "and"
                      }
                    ]
                  }
                },
                "type": "branch",
                "source": "ee979f0a-653f-4e58-a425-726cb8c3cf6a",
                "target": "db24008a-c31e-4d9c-a3c0-ef255b5cdda5"
              },
              {
                "id": "b986ba05b-2a75-4bd2-a597-f11ef29e7b00",
                "data": {
                  "type": "branch",
                  "branch": {
                    "id": "986ba05b-2a75-4bd2-a597-f11ef29e7b00",
                    "type": "maxTime",
                    "delay": {
                      "days": 2,
                      "hours": 0,
                      "minutes": 0
                    },
                    "timeType": "timeDelay"
                  }
                },
                "type": "branch",
                "source": "ee979f0a-653f-4e58-a425-726cb8c3cf6a",
                "target": "55cb7651-09ab-4280-8b46-9d0dc22baaef"
              },
              {
                "id": "db24008a-c31e-4d9c-a3c0-ef255b5cdda5-a17820a5-3182-4cc5-8c4f-eda77d197ef8",
                "type": "primary",
                "source": "db24008a-c31e-4d9c-a3c0-ef255b5cdda5",
                "target": "a17820a5-3182-4cc5-8c4f-eda77d197ef8"
              },
              {
                "id": "ecc2333db-88d3-41d8-a22d-206ea092d8ab-ee979f0a-653f-4e58-a425-726cb8c3cf6a",
                "type": "primary",
                "source": "cc2333db-88d3-41d8-a22d-206ea092d8ab",
                "target": "ee979f0a-653f-4e58-a425-726cb8c3cf6a"
              },
              {
                "id": "55cb7651-09ab-4280-8b46-9d0dc22baaef-3f6f7fc1-f0ca-41be-abba-1458fbd5ead4",
                "type": "primary",
                "source": "55cb7651-09ab-4280-8b46-9d0dc22baaef",
                "target": "3f6f7fc1-f0ca-41be-abba-1458fbd5ead4"
              }
            ],
            "nodes": [
              {
                "id": "cc2333db-88d3-41d8-a22d-206ea092d8ab",
                "data": {
                  "stepId": "2b06b33c-a152-4dda-9ad6-a8887d814c23"
                },
                "type": "start",
                "position": {
                  "x": 0,
                  "y": 0
                },
                "selected": false
              },
              {
                "id": "ee979f0a-653f-4e58-a425-726cb8c3cf6a",
                "data": {
                  "type": "waitUntil",
                  "stepId": "e81c5107-726b-4291-9cef-f850becbe6a6",
                  "branches": [
                    {
                      "id": "27200da1-bdd3-4c46-8216-7a09184f7bc0",
                      "type": "event",
                      "conditions": [
                        {
                          "name": "verify",
                          "statements": [],
                          "providerType": "custom",
                          "relationToNext": "and"
                        }
                      ]
                    },
                    {
                      "id": "986ba05b-2a75-4bd2-a597-f11ef29e7b00",
                      "type": "maxTime",
                      "delay": {
                        "days": 2,
                        "hours": 0,
                        "minutes": 0
                      },
                      "timeType": "timeDelay"
                    }
                  ]
                },
                "type": "waitUntil",
                "position": {
                  "x": 0,
                  "y": 125
                },
                "selected": false
              },
              {
                "id": "db24008a-c31e-4d9c-a3c0-ef255b5cdda5",
                "data": {
                  "type": "message",
                  "stepId": "70a1f359-e89e-48a4-9d34-6f5dad75050e",
                  "template": {
                    "type": "email"
                  }
                },
                "type": "message",
                "position": {
                  "x": -260,
                  "y": 395
                },
                "selected": false
              },
              {
                "id": "a17820a5-3182-4cc5-8c4f-eda77d197ef8",
                "data": {
                  "stepId": "44fab08a-aed0-4e24-be53-d542c803e1e4"
                },
                "type": "exit",
                "position": {
                  "x": -260,
                  "y": 520
                },
                "selected": false
              },
              {
                "id": "55cb7651-09ab-4280-8b46-9d0dc22baaef",
                "data": {
                  "type": "message",
                  "stepId": "4682e409-8de8-4603-bef1-216d05406722",
                  "template": {
                    "type": "email"
                  }
                },
                "type": "message",
                "position": {
                  "x": 260,
                  "y": 395
                },
                "selected": false
              },
              {
                "id": "3f6f7fc1-f0ca-41be-abba-1458fbd5ead4",
                "data": {
                  "stepId": "7c7f75e0-ac96-4f00-bc49-d2dc046b00a2"
                },
                "type": "exit",
                "position": {
                  "x": 260,
                  "y": 520
                },
                "selected": false
              }
            ]
          },
          "isDynamic": true,
          "inclusionCriteria": {
            "type": "allCustomers"
          },
          "journeyEntrySettings": null,
          "journeySettings": null,
          "enrollment_count": "0",
          "last_enrollment_timestamp": null,
          "latestChangerEmail": "laerciopesa30@hotmail.com",
          "enrolledCustomers": 0
        }
      ],
      "totalPages": 1
    })
  },

  visualLayout(req, res) {
    res.json({
      "id": "f7cb06d7-8658-4ab3-a92d-4d5fcbc6c1c7",
      "name": "Example onboarding checklist",
      "isActive": false,
      "isPaused": false,
      "isStopped": false,
      "isDeleted": false,
      "createdAt": "2024-04-30T02:38:45.547Z",
      "startedAt": null,
      "deletedAt": null,
      "stoppedAt": null,
      "latestPause": null,
      "latestSave": "2024-05-02T02:17:12.927Z",
      "latestChanger": {
        "id": "1e0ad92f-c4fb-4e40-9778-7432740a19a5"
      },
      "visualLayout": {
        "nodes": [
          {
            "id": "776ee148-00df-4fb8-9781-6e921050d491",
            "data": {
              "stepId": "3e436325-0bba-49b7-b2db-7405298f29c8"
            },
            "type": "start",
            "position": {
              "x": 0,
              "y": 0
            },
            "selected": false
          },
          {
            "id": "3f451c93-0545-4ca0-aac8-069f84b4998e",
            "data": {
              "type": "tracker",
              "stepId": "7a81d583-02ca-4da1-8855-d132b57b6337",
              "tracker": {
                "fields": [
                  {
                    "name": "MainTitle",
                    "type": "String",
                    "value": "Welcome to Example"
                  },
                  {
                    "name": "step-1-title",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-desc",
                    "type": "String",
                    "value": "An introduction to \"projects\" and instructions on how to create them."
                  },
                  {
                    "name": "step-1-button-text",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-done",
                    "type": "Boolean",
                    "value": "false"
                  },
                  {
                    "name": "step-2-title",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-desc",
                    "type": "String",
                    "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                  },
                  {
                    "name": "step-2-button-text",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-done",
                    "type": "Boolean",
                    "value": "false"
                  },
                  {
                    "name": "step-3-title",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-desc",
                    "type": "String",
                    "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                  },
                  {
                    "name": "step-3-button-text",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-done",
                    "type": "Boolean",
                    "value": "false"
                  }
                ],
                "trackerId": "various-duck-3332",
                "visibility": "show",
                "trackerTemplate": {
                  "id": 9246,
                  "name": "side-checklist-example"
                }
              },
              "needsCheck": false,
              "showErrors": true
            },
            "type": "tracker",
            "position": {
              "x": 0,
              "y": 114
            },
            "selected": false
          },
          {
            "id": "1cf6cf01-dcde-482e-b29e-b2c1a78c1892",
            "data": {
              "type": "waitUntil",
              "stepId": "ee047417-ca97-4aec-9ab7-23752103da5e",
              "branches": [
                {
                  "id": "e29d13d6-de72-4801-af09-c07652e90bf8",
                  "type": "event",
                  "conditions": [
                    {
                      "event": "1-to-2",
                      "trackerId": "various-duck-3332",
                      "providerType": "tracker",
                      "relationToNext": "or"
                    }
                  ]
                }
              ],
              "showErrors": true
            },
            "type": "waitUntil",
            "position": {
              "x": 0,
              "y": 238
            },
            "selected": false
          },
          {
            "id": "77ef64b7-783d-42c5-9902-7969358353c9",
            "data": {
              "type": "tracker",
              "stepId": "434aebf6-a9a0-4fd6-be5f-186a48290dc4",
              "tracker": {
                "fields": [
                  {
                    "name": "MainTitle",
                    "type": "String",
                    "value": "Welcome to Example"
                  },
                  {
                    "name": "step-1-title",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-desc",
                    "type": "String",
                    "value": "An introduction to \"projects\" and instructions on how to create them."
                  },
                  {
                    "name": "step-1-button-text",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-2-title",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-desc",
                    "type": "String",
                    "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                  },
                  {
                    "name": "step-2-button-text",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-done",
                    "type": "Boolean",
                    "value": "false"
                  },
                  {
                    "name": "step-3-title",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-desc",
                    "type": "String",
                    "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                  },
                  {
                    "name": "step-3-button-text",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-done",
                    "type": "Boolean",
                    "value": "false"
                  }
                ],
                "trackerId": "various-duck-3332",
                "visibility": "show",
                "trackerTemplate": {
                  "id": 9246,
                  "name": "side-checklist-example"
                }
              },
              "needsCheck": false
            },
            "type": "tracker",
            "position": {
              "x": 0,
              "y": 362
            },
            "selected": false
          },
          {
            "id": "4536f114-6392-4246-9f7c-4c1c7f7fddd4",
            "data": {
              "type": "waitUntil",
              "stepId": "5f19f19d-93db-49d6-b5f7-9dbf0d383618",
              "branches": [
                {
                  "id": "b7da45ed-2911-4689-8161-8421726b9e2f",
                  "type": "event",
                  "conditions": [
                    {
                      "event": "2-to-3",
                      "trackerId": "various-duck-3332",
                      "providerType": "tracker",
                      "relationToNext": "or"
                    }
                  ]
                }
              ]
            },
            "type": "waitUntil",
            "position": {
              "x": 0,
              "y": 486
            },
            "selected": false
          },
          {
            "id": "1d86c6d3-564b-405f-86a5-f494e10491fa",
            "data": {
              "type": "tracker",
              "stepId": "3fdc4ac6-1f64-482f-b23e-c2a7f9909202",
              "tracker": {
                "fields": [
                  {
                    "name": "MainTitle",
                    "type": "String",
                    "value": "Welcome to Example"
                  },
                  {
                    "name": "step-1-title",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-desc",
                    "type": "String",
                    "value": "An introduction to \"projects\" and instructions on how to create them."
                  },
                  {
                    "name": "step-1-button-text",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-2-title",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-desc",
                    "type": "String",
                    "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                  },
                  {
                    "name": "step-2-button-text",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-3-title",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-desc",
                    "type": "String",
                    "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                  },
                  {
                    "name": "step-3-button-text",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-done",
                    "type": "Boolean",
                    "value": "false"
                  }
                ],
                "trackerId": "various-duck-3332",
                "visibility": "show",
                "trackerTemplate": {
                  "id": 9246,
                  "name": "side-checklist-example"
                }
              },
              "needsCheck": false
            },
            "type": "tracker",
            "position": {
              "x": 0,
              "y": 610
            },
            "selected": false
          },
          {
            "id": "647bb5a6-62d7-4116-a971-913e8d131009",
            "data": {
              "type": "message",
              "stepId": "d636b9be-d174-49b8-94bd-08168dc83eaa",
              "template": {
                "type": "webhook"
              },
              "customName": "Webhook 1",
              "showErrors": true
            },
            "type": "message",
            "position": {
              "x": 0,
              "y": 734
            },
            "selected": false
          },
          {
            "id": "3c6eaf46-b764-4220-8e04-63de14a6744f",
            "data": {
              "type": "waitUntil",
              "stepId": "953e5a59-ef61-48cd-af72-36619d4f8f06",
              "branches": [
                {
                  "id": "f9195627-90d3-4bb0-8907-0fda80a3971c",
                  "type": "event",
                  "conditions": [
                    {
                      "event": "3-to-start",
                      "trackerId": "various-duck-3332",
                      "providerType": "tracker",
                      "relationToNext": "or"
                    }
                  ]
                }
              ],
              "showErrors": true
            },
            "type": "waitUntil",
            "position": {
              "x": 0,
              "y": 858
            },
            "selected": false
          },
          {
            "id": "c59f3dd9-e6ea-4485-a938-b6518915bfba",
            "data": {
              "type": "tracker",
              "stepId": "eebad32d-7639-4c34-aea6-aaa9cb0eecfb",
              "tracker": {
                "fields": [
                  {
                    "name": "MainTitle",
                    "type": "String",
                    "value": "Welcome to Example"
                  },
                  {
                    "name": "step-1-title",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-desc",
                    "type": "String",
                    "value": "An introduction to \"projects\" and instructions on how to create them."
                  },
                  {
                    "name": "step-1-button-text",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-2-title",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-desc",
                    "type": "String",
                    "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                  },
                  {
                    "name": "step-2-button-text",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-3-title",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-desc",
                    "type": "String",
                    "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                  },
                  {
                    "name": "step-3-button-text",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-done",
                    "type": "Boolean",
                    "value": "true"
                  }
                ],
                "trackerId": "various-duck-3332",
                "visibility": "show",
                "trackerTemplate": {
                  "id": 9246,
                  "name": "side-checklist-example"
                }
              },
              "needsCheck": false
            },
            "type": "tracker",
            "position": {
              "x": 0,
              "y": 982
            },
            "selected": false
          },
          {
            "id": "5125f2ed-9218-4905-ae7d-5c42d1352c82",
            "data": {
              "type": "waitUntil",
              "stepId": "e58a0b1f-e0e9-4eae-aff0-9ac0a7f6a3e8",
              "branches": [
                {
                  "id": "67eb779c-7324-4f79-8451-35defea5869c",
                  "type": "event",
                  "conditions": [
                    {
                      "event": "start",
                      "trackerId": "various-duck-3332",
                      "providerType": "tracker",
                      "relationToNext": "or"
                    }
                  ]
                }
              ]
            },
            "type": "waitUntil",
            "position": {
              "x": 0,
              "y": 1106
            },
            "selected": false
          },
          {
            "id": "0ae71936-923a-429b-a9c1-38792cb900a1",
            "data": {
              "type": "tracker",
              "stepId": "53da9024-0069-46e6-85e3-c216f062b407",
              "tracker": {
                "fields": [
                  {
                    "name": "MainTitle",
                    "type": "String",
                    "value": "Welcome to Example"
                  },
                  {
                    "name": "step-1-title",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-desc",
                    "type": "String",
                    "value": "An introduction to \"projects\" and instructions on how to create them."
                  },
                  {
                    "name": "step-1-button-text",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-2-title",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-desc",
                    "type": "String",
                    "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                  },
                  {
                    "name": "step-2-button-text",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-3-title",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-desc",
                    "type": "String",
                    "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                  },
                  {
                    "name": "step-3-button-text",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-done",
                    "type": "Boolean",
                    "value": "true"
                  }
                ],
                "trackerId": "various-duck-3332",
                "visibility": "hide",
                "trackerTemplate": {
                  "id": 9246,
                  "name": "side-checklist-example"
                }
              },
              "needsCheck": false
            },
            "type": "tracker",
            "position": {
              "x": 0,
              "y": 1230
            },
            "selected": false
          },
          {
            "id": "4b22a55d-5efe-4f11-ba0a-2afe54e026b1",
            "data": {
              "stepId": "5398145d-686a-4b3f-8ea0-75051313fd51"
            },
            "type": "exit",
            "position": {
              "x": 0,
              "y": 1344
            },
            "selected": false
          }
        ],
        "edges": [
          {
            "id": "e776ee148-00df-4fb8-9781-6e921050d491-3f451c93-0545-4ca0-aac8-069f84b4998e",
            "type": "primary",
            "source": "776ee148-00df-4fb8-9781-6e921050d491",
            "target": "3f451c93-0545-4ca0-aac8-069f84b4998e"
          },
          {
            "id": "3f451c93-0545-4ca0-aac8-069f84b4998e-1cf6cf01-dcde-482e-b29e-b2c1a78c1892",
            "type": "primary",
            "source": "3f451c93-0545-4ca0-aac8-069f84b4998e",
            "target": "1cf6cf01-dcde-482e-b29e-b2c1a78c1892"
          },
          {
            "id": "be29d13d6-de72-4801-af09-c07652e90bf8",
            "data": {
              "type": "branch",
              "branch": {
                "id": "e29d13d6-de72-4801-af09-c07652e90bf8",
                "type": "event",
                "conditions": [
                  {
                    "event": "1-to-2",
                    "trackerId": "various-duck-3332",
                    "providerType": "tracker",
                    "relationToNext": "or"
                  }
                ]
              }
            },
            "type": "branch",
            "source": "1cf6cf01-dcde-482e-b29e-b2c1a78c1892",
            "target": "77ef64b7-783d-42c5-9902-7969358353c9"
          },
          {
            "id": "77ef64b7-783d-42c5-9902-7969358353c9-4536f114-6392-4246-9f7c-4c1c7f7fddd4",
            "type": "primary",
            "source": "77ef64b7-783d-42c5-9902-7969358353c9",
            "target": "4536f114-6392-4246-9f7c-4c1c7f7fddd4"
          },
          {
            "id": "bb7da45ed-2911-4689-8161-8421726b9e2f",
            "data": {
              "type": "branch",
              "branch": {
                "id": "b7da45ed-2911-4689-8161-8421726b9e2f",
                "type": "event",
                "conditions": [
                  {
                    "event": "2-to-3",
                    "trackerId": "various-duck-3332",
                    "providerType": "tracker",
                    "relationToNext": "or"
                  }
                ]
              }
            },
            "type": "branch",
            "source": "4536f114-6392-4246-9f7c-4c1c7f7fddd4",
            "target": "1d86c6d3-564b-405f-86a5-f494e10491fa"
          },
          {
            "id": "bf9195627-90d3-4bb0-8907-0fda80a3971c",
            "data": {
              "type": "branch",
              "branch": {
                "id": "f9195627-90d3-4bb0-8907-0fda80a3971c",
                "type": "event",
                "conditions": [
                  {
                    "event": "3-to-start",
                    "trackerId": "various-duck-3332",
                    "providerType": "tracker",
                    "relationToNext": "or"
                  }
                ]
              }
            },
            "type": "branch",
            "source": "3c6eaf46-b764-4220-8e04-63de14a6744f",
            "target": "c59f3dd9-e6ea-4485-a938-b6518915bfba"
          },
          {
            "id": "c59f3dd9-e6ea-4485-a938-b6518915bfba-5125f2ed-9218-4905-ae7d-5c42d1352c82",
            "type": "primary",
            "source": "c59f3dd9-e6ea-4485-a938-b6518915bfba",
            "target": "5125f2ed-9218-4905-ae7d-5c42d1352c82"
          },
          {
            "id": "b67eb779c-7324-4f79-8451-35defea5869c",
            "data": {
              "type": "branch",
              "branch": {
                "id": "67eb779c-7324-4f79-8451-35defea5869c",
                "type": "event",
                "conditions": [
                  {
                    "event": "start",
                    "trackerId": "various-duck-3332",
                    "providerType": "tracker",
                    "relationToNext": "or"
                  }
                ]
              }
            },
            "type": "branch",
            "source": "5125f2ed-9218-4905-ae7d-5c42d1352c82",
            "target": "0ae71936-923a-429b-a9c1-38792cb900a1"
          },
          {
            "id": "0ae71936-923a-429b-a9c1-38792cb900a1-4b22a55d-5efe-4f11-ba0a-2afe54e026b1",
            "type": "primary",
            "source": "0ae71936-923a-429b-a9c1-38792cb900a1",
            "target": "4b22a55d-5efe-4f11-ba0a-2afe54e026b1"
          },
          {
            "id": "e1d86c6d3-564b-405f-86a5-f494e10491fa-647bb5a6-62d7-4116-a971-913e8d131009",
            "type": "primary",
            "source": "1d86c6d3-564b-405f-86a5-f494e10491fa",
            "target": "647bb5a6-62d7-4116-a971-913e8d131009"
          },
          {
            "id": "e647bb5a6-62d7-4116-a971-913e8d131009-3c6eaf46-b764-4220-8e04-63de14a6744f",
            "type": "primary",
            "source": "647bb5a6-62d7-4116-a971-913e8d131009",
            "target": "3c6eaf46-b764-4220-8e04-63de14a6744f"
          }
        ]
      },
      "isDynamic": true,
      "inclusionCriteria": {
        "type": "allCustomers"
      },
      "journeyEntrySettings": null,
      "journeySettings": null,
      "enrollment_count": "0",
      "last_enrollment_timestamp": null
    })
  },
  getJourneyId(req, res) {
    const id = req.params.id
    console.log(id)
    const resp = {
      '2d07a17d-0bc7-4159-95ff-7a590cb40ed1': basicOnboarding,
      'ec66039b-9ab3-4eaa-ab0d-a75ba04aa434': displayModal ,
      'f7cb06d7-8658-4ab3-a92d-4d5fcbc6c1c7': exampleOnboardingChecklist,
      'ed062d8b-4ebc-444c-978b-534e57e79618': generalEmailCampaign,
      '7d85dbbd-7069-4282-ae9b-7ba760b99ef1': threeBranchJourney
    }
    if (req.params.id === "tags") {
      res.json([])
    } else {
      res.json(resp[id])
    }
  },
  patchListJourneys(req, res) {
    res.json({
      "id": "f7cb06d7-8658-4ab3-a92d-4d5fcbc6c1c7",
      "name": "Example onboarding checklist",
      "isActive": false,
      "isPaused": false,
      "isStopped": false,
      "isDeleted": false,
      "createdAt": "2024-04-30T02:38:45.547Z",
      "startedAt": null,
      "deletedAt": null,
      "stoppedAt": null,
      "latestPause": null,
      "latestSave": "2024-05-02T02:33:03.189Z",
      "latestChanger": {
        "id": "1e0ad92f-c4fb-4e40-9778-7432740a19a5"
      },
      "visualLayout": {
        "edges": [
          {
            "id": "e776ee148-00df-4fb8-9781-6e921050d491-3f451c93-0545-4ca0-aac8-069f84b4998e",
            "type": "primary",
            "source": "776ee148-00df-4fb8-9781-6e921050d491",
            "target": "3f451c93-0545-4ca0-aac8-069f84b4998e"
          },
          {
            "id": "3f451c93-0545-4ca0-aac8-069f84b4998e-1cf6cf01-dcde-482e-b29e-b2c1a78c1892",
            "type": "primary",
            "source": "3f451c93-0545-4ca0-aac8-069f84b4998e",
            "target": "1cf6cf01-dcde-482e-b29e-b2c1a78c1892"
          },
          {
            "id": "be29d13d6-de72-4801-af09-c07652e90bf8",
            "data": {
              "type": "branch",
              "branch": {
                "id": "e29d13d6-de72-4801-af09-c07652e90bf8",
                "type": "event",
                "conditions": [
                  {
                    "event": "1-to-2",
                    "trackerId": "various-duck-3332",
                    "providerType": "tracker",
                    "relationToNext": "or"
                  }
                ]
              }
            },
            "type": "branch",
            "source": "1cf6cf01-dcde-482e-b29e-b2c1a78c1892",
            "target": "77ef64b7-783d-42c5-9902-7969358353c9"
          },
          {
            "id": "77ef64b7-783d-42c5-9902-7969358353c9-4536f114-6392-4246-9f7c-4c1c7f7fddd4",
            "type": "primary",
            "source": "77ef64b7-783d-42c5-9902-7969358353c9",
            "target": "4536f114-6392-4246-9f7c-4c1c7f7fddd4"
          },
          {
            "id": "bb7da45ed-2911-4689-8161-8421726b9e2f",
            "data": {
              "type": "branch",
              "branch": {
                "id": "b7da45ed-2911-4689-8161-8421726b9e2f",
                "type": "event",
                "conditions": [
                  {
                    "event": "2-to-3",
                    "trackerId": "various-duck-3332",
                    "providerType": "tracker",
                    "relationToNext": "or"
                  }
                ]
              }
            },
            "type": "branch",
            "source": "4536f114-6392-4246-9f7c-4c1c7f7fddd4",
            "target": "1d86c6d3-564b-405f-86a5-f494e10491fa"
          },
          {
            "id": "bf9195627-90d3-4bb0-8907-0fda80a3971c",
            "data": {
              "type": "branch",
              "branch": {
                "id": "f9195627-90d3-4bb0-8907-0fda80a3971c",
                "type": "event",
                "conditions": [
                  {
                    "event": "3-to-start",
                    "trackerId": "various-duck-3332",
                    "providerType": "tracker",
                    "relationToNext": "or"
                  }
                ]
              }
            },
            "type": "branch",
            "source": "3c6eaf46-b764-4220-8e04-63de14a6744f",
            "target": "c59f3dd9-e6ea-4485-a938-b6518915bfba"
          },
          {
            "id": "c59f3dd9-e6ea-4485-a938-b6518915bfba-5125f2ed-9218-4905-ae7d-5c42d1352c82",
            "type": "primary",
            "source": "c59f3dd9-e6ea-4485-a938-b6518915bfba",
            "target": "5125f2ed-9218-4905-ae7d-5c42d1352c82"
          },
          {
            "id": "b67eb779c-7324-4f79-8451-35defea5869c",
            "data": {
              "type": "branch",
              "branch": {
                "id": "67eb779c-7324-4f79-8451-35defea5869c",
                "type": "event",
                "conditions": [
                  {
                    "event": "start",
                    "trackerId": "various-duck-3332",
                    "providerType": "tracker",
                    "relationToNext": "or"
                  }
                ]
              }
            },
            "type": "branch",
            "source": "5125f2ed-9218-4905-ae7d-5c42d1352c82",
            "target": "0ae71936-923a-429b-a9c1-38792cb900a1"
          },
          {
            "id": "0ae71936-923a-429b-a9c1-38792cb900a1-4b22a55d-5efe-4f11-ba0a-2afe54e026b1",
            "type": "primary",
            "source": "0ae71936-923a-429b-a9c1-38792cb900a1",
            "target": "4b22a55d-5efe-4f11-ba0a-2afe54e026b1"
          },
          {
            "id": "e1d86c6d3-564b-405f-86a5-f494e10491fa-647bb5a6-62d7-4116-a971-913e8d131009",
            "type": "primary",
            "source": "1d86c6d3-564b-405f-86a5-f494e10491fa",
            "target": "647bb5a6-62d7-4116-a971-913e8d131009"
          },
          {
            "id": "e647bb5a6-62d7-4116-a971-913e8d131009-3c6eaf46-b764-4220-8e04-63de14a6744f",
            "type": "primary",
            "source": "647bb5a6-62d7-4116-a971-913e8d131009",
            "target": "3c6eaf46-b764-4220-8e04-63de14a6744f"
          }
        ],
        "nodes": [
          {
            "id": "776ee148-00df-4fb8-9781-6e921050d491",
            "data": {
              "stepId": "3e436325-0bba-49b7-b2db-7405298f29c8"
            },
            "type": "start",
            "position": {
              "x": 0,
              "y": 0
            },
            "selected": false
          },
          {
            "id": "3f451c93-0545-4ca0-aac8-069f84b4998e",
            "data": {
              "type": "tracker",
              "stepId": "7a81d583-02ca-4da1-8855-d132b57b6337",
              "tracker": {
                "fields": [
                  {
                    "name": "MainTitle",
                    "type": "String",
                    "value": "Welcome to Example"
                  },
                  {
                    "name": "step-1-title",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-desc",
                    "type": "String",
                    "value": "An introduction to \"projects\" and instructions on how to create them."
                  },
                  {
                    "name": "step-1-button-text",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-done",
                    "type": "Boolean",
                    "value": "false"
                  },
                  {
                    "name": "step-2-title",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-desc",
                    "type": "String",
                    "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                  },
                  {
                    "name": "step-2-button-text",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-done",
                    "type": "Boolean",
                    "value": "false"
                  },
                  {
                    "name": "step-3-title",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-desc",
                    "type": "String",
                    "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                  },
                  {
                    "name": "step-3-button-text",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-done",
                    "type": "Boolean",
                    "value": "false"
                  }
                ],
                "trackerId": "various-duck-3332",
                "visibility": "show",
                "trackerTemplate": {
                  "id": 9246,
                  "name": "side-checklist-example"
                }
              },
              "needsCheck": false,
              "showErrors": true
            },
            "type": "tracker",
            "position": {
              "x": 0,
              "y": 114
            },
            "selected": false
          },
          {
            "id": "1cf6cf01-dcde-482e-b29e-b2c1a78c1892",
            "data": {
              "type": "waitUntil",
              "stepId": "ee047417-ca97-4aec-9ab7-23752103da5e",
              "branches": [
                {
                  "id": "e29d13d6-de72-4801-af09-c07652e90bf8",
                  "type": "event",
                  "conditions": [
                    {
                      "event": "1-to-2",
                      "trackerId": "various-duck-3332",
                      "providerType": "tracker",
                      "relationToNext": "or"
                    }
                  ]
                }
              ],
              "showErrors": true
            },
            "type": "waitUntil",
            "position": {
              "x": 0,
              "y": 238
            },
            "selected": false
          },
          {
            "id": "77ef64b7-783d-42c5-9902-7969358353c9",
            "data": {
              "type": "tracker",
              "stepId": "434aebf6-a9a0-4fd6-be5f-186a48290dc4",
              "tracker": {
                "fields": [
                  {
                    "name": "MainTitle",
                    "type": "String",
                    "value": "Welcome to Example"
                  },
                  {
                    "name": "step-1-title",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-desc",
                    "type": "String",
                    "value": "An introduction to \"projects\" and instructions on how to create them."
                  },
                  {
                    "name": "step-1-button-text",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-2-title",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-desc",
                    "type": "String",
                    "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                  },
                  {
                    "name": "step-2-button-text",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-done",
                    "type": "Boolean",
                    "value": "false"
                  },
                  {
                    "name": "step-3-title",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-desc",
                    "type": "String",
                    "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                  },
                  {
                    "name": "step-3-button-text",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-done",
                    "type": "Boolean",
                    "value": "false"
                  }
                ],
                "trackerId": "various-duck-3332",
                "visibility": "show",
                "trackerTemplate": {
                  "id": 9246,
                  "name": "side-checklist-example"
                }
              },
              "needsCheck": false
            },
            "type": "tracker",
            "position": {
              "x": 0,
              "y": 362
            },
            "selected": false
          },
          {
            "id": "4536f114-6392-4246-9f7c-4c1c7f7fddd4",
            "data": {
              "type": "waitUntil",
              "stepId": "5f19f19d-93db-49d6-b5f7-9dbf0d383618",
              "branches": [
                {
                  "id": "b7da45ed-2911-4689-8161-8421726b9e2f",
                  "type": "event",
                  "conditions": [
                    {
                      "event": "2-to-3",
                      "trackerId": "various-duck-3332",
                      "providerType": "tracker",
                      "relationToNext": "or"
                    }
                  ]
                }
              ]
            },
            "type": "waitUntil",
            "position": {
              "x": 0,
              "y": 486
            },
            "selected": false
          },
          {
            "id": "1d86c6d3-564b-405f-86a5-f494e10491fa",
            "data": {
              "type": "tracker",
              "stepId": "3fdc4ac6-1f64-482f-b23e-c2a7f9909202",
              "tracker": {
                "fields": [
                  {
                    "name": "MainTitle",
                    "type": "String",
                    "value": "Welcome to Example"
                  },
                  {
                    "name": "step-1-title",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-desc",
                    "type": "String",
                    "value": "An introduction to \"projects\" and instructions on how to create them."
                  },
                  {
                    "name": "step-1-button-text",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-2-title",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-desc",
                    "type": "String",
                    "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                  },
                  {
                    "name": "step-2-button-text",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-3-title",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-desc",
                    "type": "String",
                    "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                  },
                  {
                    "name": "step-3-button-text",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-done",
                    "type": "Boolean",
                    "value": "false"
                  }
                ],
                "trackerId": "various-duck-3332",
                "visibility": "show",
                "trackerTemplate": {
                  "id": 9246,
                  "name": "side-checklist-example"
                }
              },
              "needsCheck": false
            },
            "type": "tracker",
            "position": {
              "x": 0,
              "y": 610
            },
            "selected": false
          },
          {
            "id": "647bb5a6-62d7-4116-a971-913e8d131009",
            "data": {
              "type": "message",
              "stepId": "d636b9be-d174-49b8-94bd-08168dc83eaa",
              "template": {
                "type": "webhook"
              },
              "customName": "Webhook 1",
              "showErrors": true
            },
            "type": "message",
            "position": {
              "x": 0,
              "y": 734
            },
            "selected": false
          },
          {
            "id": "3c6eaf46-b764-4220-8e04-63de14a6744f",
            "data": {
              "type": "waitUntil",
              "stepId": "953e5a59-ef61-48cd-af72-36619d4f8f06",
              "branches": [
                {
                  "id": "f9195627-90d3-4bb0-8907-0fda80a3971c",
                  "type": "event",
                  "conditions": [
                    {
                      "event": "3-to-start",
                      "trackerId": "various-duck-3332",
                      "providerType": "tracker",
                      "relationToNext": "or"
                    }
                  ]
                }
              ],
              "showErrors": true
            },
            "type": "waitUntil",
            "position": {
              "x": 0,
              "y": 858
            },
            "selected": false
          },
          {
            "id": "c59f3dd9-e6ea-4485-a938-b6518915bfba",
            "data": {
              "type": "tracker",
              "stepId": "eebad32d-7639-4c34-aea6-aaa9cb0eecfb",
              "tracker": {
                "fields": [
                  {
                    "name": "MainTitle",
                    "type": "String",
                    "value": "Welcome to Example"
                  },
                  {
                    "name": "step-1-title",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-desc",
                    "type": "String",
                    "value": "An introduction to \"projects\" and instructions on how to create them."
                  },
                  {
                    "name": "step-1-button-text",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-2-title",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-desc",
                    "type": "String",
                    "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                  },
                  {
                    "name": "step-2-button-text",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-3-title",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-desc",
                    "type": "String",
                    "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                  },
                  {
                    "name": "step-3-button-text",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-done",
                    "type": "Boolean",
                    "value": "true"
                  }
                ],
                "trackerId": "various-duck-3332",
                "visibility": "show",
                "trackerTemplate": {
                  "id": 9246,
                  "name": "side-checklist-example"
                }
              },
              "needsCheck": false
            },
            "type": "tracker",
            "position": {
              "x": 0,
              "y": 982
            },
            "selected": false
          },
          {
            "id": "5125f2ed-9218-4905-ae7d-5c42d1352c82",
            "data": {
              "type": "waitUntil",
              "stepId": "e58a0b1f-e0e9-4eae-aff0-9ac0a7f6a3e8",
              "branches": [
                {
                  "id": "67eb779c-7324-4f79-8451-35defea5869c",
                  "type": "event",
                  "conditions": [
                    {
                      "event": "start",
                      "trackerId": "various-duck-3332",
                      "providerType": "tracker",
                      "relationToNext": "or"
                    }
                  ]
                }
              ]
            },
            "type": "waitUntil",
            "position": {
              "x": 0,
              "y": 1106
            },
            "selected": false
          },
          {
            "id": "0ae71936-923a-429b-a9c1-38792cb900a1",
            "data": {
              "type": "tracker",
              "stepId": "53da9024-0069-46e6-85e3-c216f062b407",
              "tracker": {
                "fields": [
                  {
                    "name": "MainTitle",
                    "type": "String",
                    "value": "Welcome to Example"
                  },
                  {
                    "name": "step-1-title",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-desc",
                    "type": "String",
                    "value": "An introduction to \"projects\" and instructions on how to create them."
                  },
                  {
                    "name": "step-1-button-text",
                    "type": "String",
                    "value": "Create a example"
                  },
                  {
                    "name": "step-1-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-2-title",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-desc",
                    "type": "String",
                    "value": "An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\" An introduction to \"contacts\"An introduction to \"contacts"
                  },
                  {
                    "name": "step-2-button-text",
                    "type": "String",
                    "value": "Import contacts"
                  },
                  {
                    "name": "step-2-done",
                    "type": "Boolean",
                    "value": "true"
                  },
                  {
                    "name": "step-3-title",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-desc",
                    "type": "String",
                    "value": "An introduction to \"sequence\", the value. An introduction to \"sequence\", the value. An introduction to \"sequence\", the value."
                  },
                  {
                    "name": "step-3-button-text",
                    "type": "String",
                    "value": "Create a sequence"
                  },
                  {
                    "name": "step-3-done",
                    "type": "Boolean",
                    "value": "true"
                  }
                ],
                "trackerId": "various-duck-3332",
                "visibility": "hide",
                "trackerTemplate": {
                  "id": 9246,
                  "name": "side-checklist-example"
                }
              },
              "needsCheck": false
            },
            "type": "tracker",
            "position": {
              "x": 0,
              "y": 1230
            },
            "selected": false
          },
          {
            "id": "4b22a55d-5efe-4f11-ba0a-2afe54e026b1",
            "data": {
              "stepId": "5398145d-686a-4b3f-8ea0-75051313fd51"
            },
            "type": "exit",
            "position": {
              "x": 0,
              "y": 1344
            },
            "selected": false
          }
        ]
      },
      "isDynamic": true,
      "inclusionCriteria": {
        "type": "allCustomers"
      },
      "journeyEntrySettings": {
        "entryTiming": {
          "type": "WhenPublished"
        },
        "enrollmentType": "CurrentAndFutureUsers"
      },
      "journeySettings": {
        "tags": [],
        "maxEntries": {
          "enabled": false,
          "limitOnEverySchedule": false,
          "maxEntries": "500000"
        },
        "quietHours": {
          "enabled": false,
          "startTime": "00:00",
          "endTime": "08:00",
          "fallbackBehavior": "NextAvailableTime"
        },
        "maxMessageSends": {
          "enabled": false
        },
        "frequencyCapping": {
          "enabled": false
        }
      },
      "enrollment_count": "0",
      "last_enrollment_timestamp": null
    })
  }
}