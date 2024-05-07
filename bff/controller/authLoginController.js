const { randomUUID } = require('crypto');

module.exports = {
  postLogin(req, res) {
    const user =  {
      id: randomUUID(),
      email: "QKqzT@example.com",
      teams: [],
      password: "1234",
      firstName: "Laercio",
      lastName: "Nogueira",
      accountCreatedAt: new Date(),
      lastLoginAt: new Date(),
      verified: true,
      expectedOnboarding:[],
      currentOnboarding: [],
      onboarded: true,
    }

    res.json({ access_token: "1234567890123456789", ...user })
  },
  auth(req, res) {
    const user =  {
      id: randomUUID(),
      email: "QKqzT@example.com",
      teams: [],
      password: "1234",
      firstName: "Laercio",
      lastName: "Nogueira",
      accountCreatedAt: new Date(),
      lastLoginAt: new Date(),
      verified: true,
      expectedOnboarding:[],
      currentOnboarding: [],
      onboarded: true,
    }

    res.json({ access_token: "1234567890123456789", ...user })
  }
}