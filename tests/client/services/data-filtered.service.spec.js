'use strict';

describe('A suite of test for filters', function () {
    var dataFilteredService;    

    beforeEach(function () {
        module('App');
    });

    beforeEach(function () {
        
        inject(['DataFilteredService', function (service) {
            dataFilteredService = service;
            }
        ]);
        
        dataFilteredService.setGnomes(GNOMES_MOCK['Brastlewark']);
        dataFilteredService.processFilters();
         
    });
 
    describe('when you apply filter by name', function () {
 
        it('should return a list of gnomes wiht similar name "Tobus"', function () {
            dataFilteredService.addFilter('name','Tobus');
            var gnomes = dataFilteredService.getGnomes();
            expect(gnomes.length).to.equal(2);
            for (var index = 0; index < gnomes.length; index++) {
                expect(gnomes[index].name).to.match(/Tobus/);   
            }
        });

        it('should return a list of gnomes wiht similar name "tobus" - not case sensitive', function () {
            dataFilteredService.addFilter('name','tobus');
            var gnomes = dataFilteredService.getGnomes();
            expect(gnomes.length).to.equal(2);
            for (var index = 0; index < gnomes.length; index++) {
                expect(gnomes[index].name).to.match(/Tobus/);   
            }
        });
    });

    describe('when you apply filter by professions', function () {
 
        it('should return a list of gnomes with contains all the professions selected', function () {
            dataFilteredService.addFilter('professions',["Metalworker","Carpenter"]);
            var gnomes = dataFilteredService.getGnomes();
            expect(gnomes.length).to.equal(2);
        });

        it('should return all the gnomes', function () {
            dataFilteredService.addFilter('professions',[]);
            var gnomes = dataFilteredService.getGnomes();
            expect(gnomes.length).to.equal(GNOMES_MOCK['Brastlewark'].length);
        });
    });

    describe('when you apply filter by hair color', function () {
 
        it('should return a list of gnomes with one of the colors selected', function () {
            dataFilteredService.addFilter('hair_color',["Pink","Green"]);
            var gnomes = dataFilteredService.getGnomes();
            expect(gnomes.length).to.equal(4);
        });

        it('should return all the gnomes', function () {
            dataFilteredService.addFilter('hair_color',[]);
            var gnomes = dataFilteredService.getGnomes();
            expect(gnomes.length).to.equal(GNOMES_MOCK['Brastlewark'].length);
        });
    });

    describe('when you apply filter by age', function () {
 
        it('should return a list of gnomes between the years selected', function () {
            dataFilteredService.addFilter('age',{'min': 212, 'max': 306});
            var gnomes = dataFilteredService.getGnomes();
            expect(gnomes.length).to.equal(5);
        });

        it('should return the gnomes with a specific age', function () {
            dataFilteredService.addFilter('age',{'min': 212, 'max': 212});
            var gnomes = dataFilteredService.getGnomes();
            expect(gnomes.length).to.equal(2);
        });
    });
});