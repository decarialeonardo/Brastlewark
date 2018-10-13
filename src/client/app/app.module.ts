/// <reference path="../../../typings/index.d.ts" />


var app = angular.module('App', ['rzModule']);

//Add - Constants
app.service("Constants", App.Constants);


//Add - Services
app.service("PopulationService", App.PopulationService);
app.service("DataFilteredService", App.DataFilteredService);

app.directive("main", App.MainComponent.getFactory());
app.directive("profileCluster", App.ProfileClusterComponent.getFactory());
app.directive("filterName", App.FilterNameComponent.getFactory());
app.directive("filterHair", App.FilterHairComponent.getFactory());
app.directive("filterRange", App.FilterRangeComponent.getFactory());
app.directive("filterProfessions", App.FilterProfessionsComponent.getFactory());
app.directive("filtersBox", App.FiltersBoxComponent.getFactory());
app.directive("resultsContainer", App.ResultsContainerComponent.getFactory());

// External components
//app.directive("rangeSlider", App.RangeSliderComponent.getFactory());