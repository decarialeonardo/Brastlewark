module App {
    export class FiltersBoxComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/filters/filters-box/filters-box.component.html";
        public scope = {};
        public controller = App.FilterBoxController;
        public bindToController = {
            professions: '=',
            hairColors: '='
        };
        public controllerAs = "ctrl";

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new FiltersBoxComponent();
            return directive;
        }
    }

    export class FilterBoxController {
        constructor() {}

    }
}