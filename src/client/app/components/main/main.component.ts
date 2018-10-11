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
        public static $inject = ["PopulationService"];
        private results:any;
        private filters;

        constructor(private populationService:PopulationService){
            this.filters = {};
            this.loadData();
        }

        private loadData(){
            this.populationService.getPopulation().then(
                (success) => {
                    this.results = success.data['Brastlewark'];
                },
                (error) => {
                    console.log('Error loading json: ', error);
                });
        } 
    }
}


		