'use strict';

describe('A Test for Serivce Population', function () {

    beforeEach(function () {
        module('App');
    });
 
    describe('when call the services to get all the population', function () {
 
        var populationService;
 
        beforeEach(function () {
            inject(['PopulationService', function (service) {
                populationService = service;
                }
            ]);
        });
 
        it('should return a list of the gnomes', function () {
            populationService.getPopulation().then(function(data){
                assert.isDefined(data);
                assert.isArra(data);
            });
        });
    });
});