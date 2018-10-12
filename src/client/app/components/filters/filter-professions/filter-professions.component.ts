module App {
    export class FilterProfessionsComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/filters/filter-professions/filter-professions.component.html";
        public scope = {};
        public controller = App.FilterProfessionsController;
        public bindToController = {
            professions: '='
        };
        public controllerAs = "ctrl";

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new FilterProfessionsComponent();
            return directive;
        }
    }

    export class FilterProfessionsController {
        public static $inject = ["ResultsDataService"];
        private professions;
        private selection;

        constructor(private resultsDataService:ResultsDataService) {
            this.selection = [];
        }

        public toggleSelection(profession){
            let idx = this.selection.indexOf(profession);

            if (idx > -1) {
                this.selection.splice(idx, 1);
                //this.applyFilter(this.selection, this.resultsDataService.getOriginalGnomes());
            } else {
                this.selection.push(profession);
                this.applyFilter(this.selection, this.resultsDataService.getGnomes());
            }
            
        }

        private applyFilter(professionsSelected, gnomes){
            let self = this;
            let result = gnomes.filter(function (gnome) {
                return self.arrayContainsArray(gnome.professions, professionsSelected);
            });
            this.resultsDataService.setGnomes(result);
        }

        private arrayContainsArray(superset, subset) {
            if (0 === subset.length) {
              return false;
            }
            return subset.every(function (value) {
              return (superset.indexOf(value) >= 0);
            });
        }
        
    }
}