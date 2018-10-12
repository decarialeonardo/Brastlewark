module App {

    export class ResultsContainerComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/results-container/results-container.component.html";
        public scope = {};
        public controller = App.ResultsContainerController;
        public bindToController = {
            gnomes: '=',
            nameFilter: '=',
            professionsFilter: '='
        };
        public controllerAs = "ctrl";

        constructor(){}

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new ResultsContainerComponent();
            return directive;
        }

    }

    export class ResultsContainerController {
        
        private gnomes:any;
        private professionsFilter;

        constructor(){
            // this.filtersApply['professions'] = 'Tailor';
        }
        
    }
}


		