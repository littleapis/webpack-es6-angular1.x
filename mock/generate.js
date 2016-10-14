module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        domain: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                domain: faker.internet.domainName(),
                company:faker.company.companyName(),
                protocol: faker.internet.protocol(),
                ip: _.times(2, function () {
                    return faker.internet.ip();
                }).join(","),
                waf: "enabled",
                modifyUser: faker.name.findName()
            }
        })
    }
};
