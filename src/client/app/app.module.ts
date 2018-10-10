/// <reference path="../../../typings/index.d.ts" />
/// <reference path="services/population.service.ts" />
/// <reference path="components/profile-cluster/profile-cluster.component.ts" />


var app = angular.module('App', []);

//Add - Services
app.service("PopulationService", App.PopulationService);

app.directive("profileCluster", App.ProfileClusterComponent.getFactory());