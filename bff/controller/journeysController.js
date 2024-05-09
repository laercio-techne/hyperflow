const exampleOnboardingChecklist = require('../data/example_onboarding_checklist.json')
const JourneyModel = require('../schemas/journeySchema')

module.exports = {
  async getListJourneys(_, res) {
    const data = await JourneyModel.find()
    res.json({
      data,
      "totalPages": 1
    })
  },

  async visualLayout(req, res) {
    if (!req.body?.id) {
      res.json({})
      return
    }

    const data = await JourneyModel.findOneAndUpdate({ _id: req.body.id }, req.body)
    res.json({ data })

  },

  async getJourneyId(req, res) {
    const id = req.params.id

    if (req.params.id === "tags") {
      res.json([])
      return
    }

    const data = await JourneyModel.findById(id)
    res.json(data)
  },
  patchListJourneys(_, res) {
    res.json(exampleOnboardingChecklist)
  }
}