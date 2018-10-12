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
        private name: any;

        constructor(private resultsDataService:ResultsDataService) {}

        public applyFilter() {
            let searchName = this.name;
            let result = this.resultsDataService.getGnomes().filter(function (gnome) {
                return gnome.name.toLowerCase().includes(searchName);
            });
            this.resultsDataService.setGnomes(result);
        }
      }
}