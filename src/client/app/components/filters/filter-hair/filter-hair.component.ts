module App {
    export class FilterHairComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/filters/filter-hair/filter-hair.component.html";
        public scope = {};
        public controller = App.FilterHairController;
        public bindToController = {};
        public controllerAs = "ctrl";

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new FilterHairComponent();
            return directive;
        }
    }

    export class FilterHairController {
        public static $inject = ["DataFilteredService","Constants"];
        private selection;
        private colors;

        constructor(private dataFilteredService:DataFilteredService, private constants:Constants) {
            this.selection = [];
            this.colors = function() {
                return this.dataFilteredService.getFilterOptions(this.constants.FiltersType.HAIR_COLOR);
            }
        }

        public toggleSelection(color){
            let idx = this.selection.indexOf(color);

            if (idx > -1) {
                this.selection.splice(idx, 1);
            } else {
                this.selection.push(color);
            }

            this.dataFilteredService.addFilter(this.constants.FiltersType.HAIR_COLOR,this.selection);
            
        }

        public clearFilter(){
            this.selection = [];
        }
        
    }
}