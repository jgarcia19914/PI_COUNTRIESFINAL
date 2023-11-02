const { Country } = require("../db");

const Countriesfind = async () => {
    try {
        const countries = await Country.findAll();
        const sortedCountries = countries.sort((a, b) => a.name.localeCompare(b.name));
        return sortedCountries;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = Countriesfind;