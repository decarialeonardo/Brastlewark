module App {
    export class FiltersBoxComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/filters/filters-box/filters-box.component.html";
        public scope = {};
        public controller = App.FilterBoxController;
        public bindToController = {
        };
        public controllerAs = "ctrl";

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new FiltersBoxComponent();
            return directive;
        }
    }

    export class FilterBoxController {
        public static $inject = ["DataFilteredService",'Constants'];
        private filterAge;
        private filterHeight;
        private filterWeight;
        constructor(private dataFilteredService:DataFilteredService, private constants:Constants) {
            this.filterAge = {
                unit: this.constants.units.AGE,
                type: this.constants.FiltersType.AGE,
                range:{
                    min: 30,
                    max: 379
                }
            };
            this.filterHeight = {
                unit: this.constants.units.HEIGHT,
                type: this.constants.FiltersType.HEIGHT,
                range:{                    
                    max:129.37299,
                    min:91.41726
                }
            };
            this.filterWeight = {
                unit: this.constants.units.WEIGHT,
                type: this.constants.FiltersType.WEIGHT,
                range:{
                    max:44.997665,
                    min:35.00214
                }
            }
        }
    }
}