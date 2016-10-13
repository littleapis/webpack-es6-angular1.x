module.exports=function(){
  var faker = require("faker");
  var _ = require("lodash");
  return{
      domain:_.times(100,function (n) {
         return{
           id:n,
           name: faker.name.findName(),
           domain: faker.internet.domainName(),
           ip:faker.internet.ip(),
           waf: "enabled",
           modifyUser:faker.name.findName()
         }
      })
  }
};
