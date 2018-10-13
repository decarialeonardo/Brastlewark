module App {
    export class FilterRangeComponent implements ng.IDirective{
        public static $inject = ["DataFilteredService","Constants"];
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/filters/filter-range/filter-range.component.html";
        public scope = {};
        public controller = App.FilterRangeController;
        public bindToController = {
            type: '=',
            unit: '=',
            range: '='
        };
        public controllerAs = "ctrl";

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new FilterRangeComponent();
            return directive;
        }
    }

    export class FilterRangeController {
        public static $inject = ["$scope","DataFilteredService","Constants"];
        private slider;
        private type;
        private unit;
        private range;

        constructor(private scope,private dataFilteredService:DataFilteredService, private constants:Constants) {
            let self = this;
            this.slider = {
                min: this.range.min,
                max: this.range.max,
                options: {
                    floor: this.range.min,
                    ceil: this.range.max
                }
            }
            scope.$on('slideEnded', function() {
                let newRange = {min: self.slider.min, max: self.slider.max}
                self.dataFilteredService.addFilter(self.type, newRange);
                scope.$apply();
            })
        }

        public capitalize(str:string){
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    
    }
}