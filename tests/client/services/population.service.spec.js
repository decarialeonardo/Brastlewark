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
            //const data = populationService.getPopulation();
            populationService.getPopulation().then(function(data){
                assert.isDefined(data);
                assert.isArra(data);
                //expect(data).to.equal(pair);
                //expect(data.rate).to.have.length(400);
            });// no catch, it'll figure it out since the promise is rejected
            // data.to.eventually.have.property("Brastlewark");
            // assert.isDefined(data);
        });
    });
});