/// <reference path="../../../../typings/index.d.ts" />

module App {
    export class PopulationService {
        public static $inject = ['$http'];

        constructor(private $http: any){}

        public getPopulation(){
            return this.$http({
                method: 'GET',
                url: '/brastlewark/api/population'
            });
        }
    }
}

