module App {
    export class FilterHairComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/filters/filter-hair/filter-hair.component.html";
        public scope = {};
        public controller = App.FilterHairController;
        public bindToController = {
            colors: '='
        };
        public controllerAs = "ctrl";

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new FilterHairComponent();
            return directive;
        }
    }

    export class FilterHairController {
        public static $inject = ["ResultsDataService"];
        private selection;

        constructor(private resultsDataService:ResultsDataService) {
            this.selection = [];
        }

        public toggleSelection(color){
            let idx = this.selection.indexOf(color);

            if (idx > -1) {
                this.selection.splice(idx, 1);
            } else {
                this.selection.push(color);
                this.applyFilter(this.selection, this.resultsDataService.getGnomes());
            }
            
        }

        private applyFilter(colorSelected, gnomes){
            let self = this;
            let result = gnomes.filter(function (gnome) {
                return colorSelected.includes(gnome.hair_color);
            });
            this.resultsDataService.setGnomes(result);
        }
        
    }
}