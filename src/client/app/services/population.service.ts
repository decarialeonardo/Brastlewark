module App {
    export class PopulationService {
        public static $inject = ['$http'];

        constructor(private $http: any){}

        public getPopulation(): ng.IHttpPromise<IGnome[]>{
            return this.$http({
                method: 'GET',
                url: '/brastlewark/api/population'
            });
        }
    }
}

