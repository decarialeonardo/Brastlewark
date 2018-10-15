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
        public static $inject = ["PopulationService","DataFilteredService"];
        private results:any;

        constructor(private populationService:PopulationService, private dataFilteredService:DataFilteredService){
            this.loadData();
        }

        private loadData(){
            this.populationService.getPopulation().then(
                (success) => {
                    this.dataFilteredService.setGnomes(success.data['Brastlewark']);
                    this.results = function(){
                        return this.dataFilteredService.getGnomes();
                    };
                    this.dataFilteredService.processFilters();
                },
                (error) => {
                    console.log('Error loading json: ', error);
                });
        }
    }
}


		