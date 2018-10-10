
/// <reference path="../../../../../typings/index.d.ts" />
/// <reference path="../../services/population.service.ts" />


module App {

    export class ResultsContainerComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/results/results.component.html";
        public scope = {};

        constructor(private populationService:PopulationService){
            this.populationService.getPopulation().then(
                (success) => {
                    success.data['Brastlewark'];
                },
                (error) => {
                    console.log('Error loading json: ', error);
                });
        }

        static getFactory(): ng.IDirectiveFactory {
            const directive = (populationService:PopulationService) => new ResultsContainerComponent(populationService);
            directive.$inject = ["PopulationService"];
            return directive;
        }
    }
}


		