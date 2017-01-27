console.log('AngularPetApp app.ts/js');

namespace ClientSideRouting
{
    angular.module('ClientSideRouting', ['ui.router']).config((
        $stateProvider: ng.ui.IStateProvider,
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) => {
        $stateProvider
            .state('master',
            {
                url: '/',
                templateUrl: `ngApp/views/master.html`,
                controller: ClientSideRouting.Controllers.MasterController,
                controllerAs: `p`
            })
            .state('details',
            {
                url: '/details/:id',
                templateUrl: `ngApp/views/details.html`,
                controller: ClientSideRouting.Controllers.DetailsController,
                controllerAs: `p`
            })
            .state('about',
            {
                url: '/about',
                templateUrl: `ngApp/views/about.html`,
                controller: ClientSideRouting.Controllers.AboutController,
                controllerAs: `p`
            });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    })
}   