const basicOnboarding = require('../data/basic_onboarding.json')
const displayModal = require('../data/display_modal.json')
const exampleOnboardingChecklist = require('../data/example_onboarding_checklist.json')
const generalEmailCampaign = require('../data/general_email_campaign.json')
const threeBranchJourney = require('../data/three_branch_journey.json')

const data = [basicOnboarding, displayModal, exampleOnboardingChecklist, generalEmailCampaign, threeBranchJourney]

module.exports = {
  getListJourneys(_, res) {
    res.json({
      data,
      "totalPages": 1
    })
  },

  visualLayout(_, res) {
    res.json(exampleOnboardingChecklist)
  },
  getJourneyId(req, res) {
    const id = req.params.id
    const resp = {
      '2d07a17d-0bc7-4159-95ff-7a590cb40ed1': basicOnboarding,
      'ec66039b-9ab3-4eaa-ab0d-a75ba04aa434': displayModal ,
      'f7cb06d7-8658-4ab3-a92d-4d5fcbc6c1c7': exampleOnboardingChecklist,
      'ed062d8b-4ebc-444c-978b-534e57e79618': generalEmailCampaign,
      '7d85dbbd-7069-4282-ae9b-7ba760b99ef1': threeBranchJourney
    }

    res.json(req.params.id === "tags" ? [] : resp[id])
  },
  patchListJourneys(_, res) {
    res.json(exampleOnboardingChecklist)
  }
}