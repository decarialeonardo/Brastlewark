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
        private filtersRange:any;
        private AGE_MIN = 30;
        private AGE_MAX = 379;
        private HEIGHT_MIN = 91.41726;
        private HEIGHT_MAX = 129.37299;
        private WEIGHT_MIN = 35.00214;
        private WEIGHT_MAX = 44.997665;

        constructor(private dataFilteredService:DataFilteredService, private constants:Constants) {
            this.filtersRange = {};
            this.filtersRange[this.constants.FiltersType.AGE] = {
                unit: this.constants.units.AGE,
                type: this.constants.FiltersType.AGE,
                range:{
                    min: this.AGE_MIN,
                    max: this.AGE_MAX
                }
            };
            this.filtersRange[this.constants.FiltersType.HEIGHT] = {
                unit: this.constants.units.HEIGHT,
                type: this.constants.FiltersType.HEIGHT,
                range:{                    
                    max: this.HEIGHT_MAX,
                    min: this.HEIGHT_MIN
                }
            };
            this.filtersRange[this.constants.FiltersType.WEIGHT] = {
                unit: this.constants.units.WEIGHT,
                type: this.constants.FiltersType.WEIGHT,
                range:{
                    max: this.WEIGHT_MAX,
                    min: this.WEIGHT_MIN
                }
            }
        }
    }
}