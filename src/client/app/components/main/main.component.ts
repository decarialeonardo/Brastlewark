module App {

    export class MainComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/main/main.component.html";
        public scope = {};
        public controller = App.MainController;
        public bindToController = {};
        public controllerAs = "ctrl";

        constructor(){}

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new MainComponent();
            return directive;
        }


    }

    export class MainController {
        public static $inject = ["$scope","PopulationService","ResultsDataService"];
        private results:any;
        private professions;
        private hair_colors;
        private ages;
        private height;
        private weight;
        private professionsFilter;

        constructor(private $scope, private populationService:PopulationService, private resultsDataService:ResultsDataService){
            this.loadData();
        }

        private loadData(){
            this.populationService.getPopulation().then(
                (success) => {
                    this.resultsDataService.initGnomes(success.data['Brastlewark']);
                    this.results = function(){
                        return this.resultsDataService.getGnomes();
                    };

                    this.professions = this.processProfessionsFilters(this.resultsDataService.getGnomes());
                    this.hair_colors = this.processHairFilters(this.resultsDataService.getGnomes());
                    this.ages = this.processRangesFilters(this.resultsDataService.getGnomes(),'age');
                    this.height = this.processRangesFilters(this.resultsDataService.getGnomes(),'height');
                    this.weight = this.processRangesFilters(this.resultsDataService.getGnomes(),'weight');
                },
                (error) => {
                    console.log('Error loading json: ', error);
                });
        }

        private processProfessionsFilters(gnomes){
            let professions = [];
            gnomes.forEach(gnome => {
                gnome.professions.forEach(profession => {
                    if (professions.indexOf(profession) == -1){
                        professions.push(profession);
                    }
                });
            });

            return professions;
        }

        private processHairFilters(gnomes){
            let hair_colors = [];
            gnomes.forEach(gnome => {
                    if (hair_colors.indexOf(gnome.hair_color) == -1){
                        hair_colors.push(gnome.hair_color);
                    }
                });

            return hair_colors;
        }

        private processRangesFilters(gnomes, attr){
            let ranges = {
                'max':Math.max.apply(Math, gnomes.map(function(gnome) { return gnome[attr]; })),
                'min':Math.min.apply(Math, gnomes.map(function(gnome) { return gnome[attr]; }))
            }
            return ranges;

        }
    }
}


		