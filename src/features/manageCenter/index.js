import uirouter from 'angular-ui-router';

import routing from './manage.routes';
import DomainController from './domainManager/domain.controller';
import DomainEditController from './domainManager/domain.edit.controller'


export default  angular.module('app.manager', [uirouter])
    .config(routing)
    .controller('DomainController',DomainController)
    .controller('DomainEditController',DomainEditController)
    .name
