module App {
    export class ResultsDataService {
        private gnomes:any;

        public getGnomes(){
            return this.gnomes;
        }

        public setGnomes(gnomes){
            this.gnomes = gnomes;
        }
    }
}

