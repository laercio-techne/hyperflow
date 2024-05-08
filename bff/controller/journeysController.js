const basicOnboarding = require('../data/basic_onboarding.json')
const displayModal = require('../data/display_modal.json')
const exampleOnboardingChecklist = require('../data/example_onboarding_checklist.json')
const generalEmailCampaign = require('../data/general_email_campaign.json')
const threeBranchJourney = require('../data/three_branch_journey.json')

const JorneyModel = require('../schemas/journeySchema')

const data = [basicOnboarding, displayModal, exampleOnboardingChecklist, generalEmailCampaign, threeBranchJourney]

module.exports = {
  async getListJourneys(_, res) {
    const data = await JorneyModel.find()
    res.json({
      data,
      "totalPages": 1
    })
  },

  visualLayout(_, res) {
    res.json(exampleOnboardingChecklist)
  },
  async getJourneyId(req, res) {
    const id = req.params.id
     
    if (req.params.id === "tags") {
      res.json([])
      return 
    }

    const data = await JorneyModel.findById(id)
    res.json(data)
  },
  patchListJourneys(_, res) {
    res.json(exampleOnboardingChecklist)
  }
}