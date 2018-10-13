module App {
    export class FilterProfessionsComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/filters/filter-professions/filter-professions.component.html";
        public scope = {};
        public controller = App.FilterProfessionsController;
        public bindToController = {};
        public controllerAs = "ctrl";

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new FilterProfessionsComponent();
            return directive;
        }
    }

    export class FilterProfessionsController {
        public static $inject = ["DataFilteredService",'Constants'];
        private professions;
        private selection;

        constructor(private dataFilteredService:DataFilteredService, private constants:Constants) {
            this.selection = [];
            this.professions = function(){
                return this.dataFilteredService.getFilterOptions(this.constants.FiltersType.PROFESSIONS);
            }
        }

        public toggleSelection(profession){
            let idx = this.selection.indexOf(profession);

            if (idx > -1) {
                this.selection.splice(idx, 1);
            } else {
                this.selection.push(profession);
            }
            this.dataFilteredService.addFilter(this.constants.FiltersType.PROFESSIONS,this.selection);
        }
        
    }
}