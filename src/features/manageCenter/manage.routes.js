/**
 * Created by pafang on 16/9/27.
 */
routes.$inject = ['$stateProvider','$urlRouterProvider'];

export default function routes($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.when("/manager", '/manager/domainManager');

    $stateProvider
        .state('manager', {
            url: '/manager',
            template: require('./sub-menu.html'),
        })
        .state('manager.domainManager', {
            url: '/domainManager',
            views: {
                'mainContent@manager': {
                    template: require('./domainManager/domainList.html'),
                    controller: 'DomainController',
                    controllerAs: 'domain'
                }
            }

        });


}