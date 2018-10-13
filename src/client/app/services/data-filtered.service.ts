module App {
    export class DataFilteredService {
        public static $inject = ['Constants'];
        private gnomes:any;
        private initial_gnomes:any;
        private filters:any;

        constructor(private constants:Constants){
            let self = this;
            this.filters = {};
            this.filters[this.constants.FiltersType.NAME] = {};
            this.filters[this.constants.FiltersType.PROFESSIONS] = {};
            this.filters[this.constants.FiltersType.HAIR_COLOR] = {};
            this.filters[this.constants.FiltersType.AGE] = {};
            this.filters[this.constants.FiltersType.HEIGHT] = {};
            this.filters[this.constants.FiltersType.WEIGHT] = {};
            this.filters[this.constants.FiltersType.NAME].functionToFilter = function(collection, filter){ return self.filterByName(collection, filter)};
            this.filters[this.constants.FiltersType.PROFESSIONS].functionToFilter = function(collection, filter){ return self.filterByProfessions(collection, filter)};
            this.filters[this.constants.FiltersType.HAIR_COLOR].functionToFilter = function(collection, filter){ return self.filterByHairColor(collection, filter)};
            this.filters[this.constants.FiltersType.AGE].functionToFilter = function(collection, filter){ return self.filterByRange(collection, filter, self.constants.FiltersType.AGE)};
            this.filters[this.constants.FiltersType.HEIGHT].functionToFilter = function(collection, filter){ return self.filterByRange(collection, filter, self.constants.FiltersType.HEIGHT)};
            this.filters[this.constants.FiltersType.WEIGHT].functionToFilter = function(collection, filter){ return self.filterByRange(collection, filter, self.constants.FiltersType.WEIGHT)};
        }

        public getGnomes(){
            return this.gnomes;
        }
        public setGnomes(gnomes){
            this.initial_gnomes = gnomes;
            this.gnomes = gnomes;
        }

        public addFilter(type, values){
            this.filters[type].values = values;
            this.applyFilters();
        }

        public processFilters(){
            this.filters[this.constants.FiltersType.PROFESSIONS].options = this.processProfessionsFilters(this.gnomes);
            this.filters[this.constants.FiltersType.HAIR_COLOR].options = this.processHairFilters(this.gnomes);
            this.filters[this.constants.FiltersType.AGE].options = this.processRangesFilters(this.gnomes, this.constants.FiltersType.AGE);
            this.filters[this.constants.FiltersType.HEIGHT].options = this.processRangesFilters(this.gnomes, this.constants.FiltersType.HEIGHT);
            this.filters[this.constants.FiltersType.WEIGHT].options = this.processRangesFilters(this.gnomes, this.constants.FiltersType.WEIGHT);
        }

        public getFilterOptions(filterType){
            return this.filters[filterType].options;
        }

        private applyFilters(){
            let dataFileterd = this.initial_gnomes;
            for (let type in this.filters) {
                let values = this.filters[type].values;
                if ( values ) {
                    dataFileterd = this.filters[type].functionToFilter(dataFileterd, values);
                }
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

        private filterByRange(collection, range, filterType){
            return collection.filter(function (gnome) {
                return gnome[filterType] >= range.min && gnome[filterType] <= range.max;
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

        private processProfessionsFilters(gnomes){
            let professions = [];
            gnomes.forEach(gnome => {
                gnome.professions.forEach(profession => {
                    if (professions.indexOf(profession) == -1){
                        professions.push(profession);
                    }
                });
            });

            return professions;
        }

        private processHairFilters(gnomes){
            let hair_colors = [];
            gnomes.forEach(gnome => {
                    if (hair_colors.indexOf(gnome.hair_color) == -1){
                        hair_colors.push(gnome.hair_color);
                    }
                });

            return hair_colors;
        }

        private processRangesFilters(gnomes, attr){
            let ranges = {
                'max':Math.max.apply(Math, gnomes.map(function(gnome) { return gnome[attr]; })),
                'min':Math.min.apply(Math, gnomes.map(function(gnome) { return gnome[attr]; }))
            }
            return ranges;

        }
    }
}

