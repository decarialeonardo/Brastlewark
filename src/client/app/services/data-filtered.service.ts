module App {
    export class DataFilteredService {
        public static $inject = ['Constants'];
        private gnomes:any;
        private initial_gnomes:any;
        private filters:any;
        private filterFunctions:any;

        constructor(private constants:Constants){
            let self = this;
            this.filters = {};
            this.filterFunctions = {};
            this.filterFunctions[self.constants.FiltersType.NAME] = function(collection, filter){ return self.filterByName(collection, filter)};
            this.filterFunctions[self.constants.FiltersType.PROFESSIONS] = function(collection, filter){ return self.filterByProfessions(collection, filter)};
            this.filterFunctions[self.constants.FiltersType.HAIR_COLOR] = function(collection, filter){ return self.filterByHairColor(collection, filter)};
        }

        public getGnomes(){
            return this.gnomes;
        }
        public setGnomes(gnomes){
            this.initial_gnomes = gnomes;
            this.gnomes = gnomes;
        }

        public addFilter(type, values){
            this.filters[type] = values;
            this.applyFilters();
        }

        private applyFilters(){
            let dataFileterd = this.initial_gnomes;
            for (let type in this.filters) {
                let values = this.filters[type];
                dataFileterd = this.filterFunctions[type](dataFileterd, values);
            }
            this.gnomes = dataFileterd;
        }

        private filterByName(collection, name){
            return collection.filter(function (gnome) {
                return gnome.name.toLowerCase().includes(name);
            });
        }

        private filterByProfessions(collection, professions){
            let self = this;
            return collection.filter(function (gnome) {
                return self.arrayContainsArray(gnome.professions, professions);
            });
        }

        private filterByHairColor(collection, colors){
            let self = this;
            return collection.filter(function (gnome) {
                return colors.includes(gnome.hair_color);
            });
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

