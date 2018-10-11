/// <reference path="../../../typings/index.d.ts" />
/// <reference path="services/population.service.ts" />
/// <reference path="services/results-data.service.ts" />
/// <reference path="components/main/main.component.ts" />
/// <reference path="components/profile-cluster/profile-cluster.component.ts" />
/// <reference path="components/results-container/results-container.component.ts" />
/// <reference path="components/filters/filters-box/filters-box.component.ts" />
/// <reference path="components/filters/filter-name/filter-name.component.ts" />


var app = angular.module('App', []);

//Add - Services
app.service("PopulationService", App.PopulationService);
app.service("ResultsDataService", App.ResultsDataService);

app.directive("main", App.MainComponent.getFactory());
app.directive("profileCluster", App.ProfileClusterComponent.getFactory());
app.directive("filterName", App.FilterNameComponent.getFactory());
app.directive("filtersBox", App.FiltersBoxComponent.getFactory());
app.directive("resultsContainer", App.ResultsContainerComponent.getFactory());