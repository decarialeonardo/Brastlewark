module App {
    export class FilterNameComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/filters/filter-name/filter-name.component.html";
        public scope = {};
        public controller = App.FilterNameController;
        public bindToController = {
            search: '='
        };
        public controllerAs = "ctrl";

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new FilterNameComponent();
            return directive;
        }
    }

    export class FilterNameController {
        public static $inject = ["ResultsDataService"];
        private onUpdate: any;
        private name: any;
        private search;
        private filterName: any;

        constructor(private resultsDataService:ResultsDataService) {
          this.name = '';
        }

        applyFilter() {
            this.search['name'] = this.name; 
        }
      }
}