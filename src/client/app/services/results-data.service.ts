module App {
    export class ResultsDataService {
        private gnomes:any;
        private original_gnomes:any;
        private filters

        public getGnomes(){
            return this.gnomes;
        }

        public getOriginalGnomes(){
            return this.gnomes;
        }

        public setGnomes(gnomes){
            this.gnomes = gnomes;
        }

        public initGnomes(gnomes){
            this.original_gnomes = gnomes;
            this.setGnomes(gnomes);
        }
    }
}

