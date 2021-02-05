const Sequelize = require('sequelize')
const sequelize = require('../database/sequelize')

const dataEntry = sequelize.define("dataEntries", {
    SiteNumber: {
        type: Sequelize.STRING(),

    },
    Type: {
        type: Sequelize.STRING(),

    },
    LocationId: {
        type: Sequelize.STRING(),
    },
    EffectiveDate: {
        type: Sequelize.STRING(),

    },
    Region: {
        type: Sequelize.STRING(),
    },
    State: {
        type: Sequelize.STRING(),
    },
    StateName: {
        type: Sequelize.STRING(),
    },
    County: {
        type: Sequelize.STRING(),
    },
    CountyState: {
        type: Sequelize.STRING(),
    },
    City: {
        type: Sequelize.STRING(),
    },
    FacilityName: {
        type: Sequelize.STRING(),
    },
    Lat: {
        type: Sequelize.STRING(),
    },
    Lon: {
        type: Sequelize.STRING(),
    },
})

dataEntry.sync()

module.exports = dataEntry
