module App {
    export class FilterNameComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/filters/filter-name/filter-name.component.html";
        public scope = {};
        public controller = App.FilterNameController;
        public bindToController = {};
        public controllerAs = "ctrl";

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new FilterNameComponent();
            return directive;
        }
    }

    export class FilterNameController {
        public static $inject = ["DataFilteredService",'Constants'];
        private name:string;

        constructor(private dataFilteredService:DataFilteredService, private constants:Constants) {}

        public applyFilter() {
            this.dataFilteredService.addFilter(this.constants.FiltersType.NAME,this.name);
        }
      }
}