module App {

    export interface IGnome extends ng.IScope{
        profile: {
            id: number,
            name: string,
            thumbnail: string,
            age: number,
            weight: number,
            height: number,
            hair_color: string,
            professions: Array<string>,
            friends: Array<string>
        }
        
    }

    export class ProfileClusterComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/profile-cluster/profile-cluster.component.html";
        public scope = {};
        public link: (scope: IGnome, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;

        constructor() {
            this.link = (scope: IGnome, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) =>
            {
                scope.profile = {
                    id: 0,
                    name: "Tobus Quickwhistle",
                    thumbnail: "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
                    age: 306,
                    weight: 39.065952,
                    height: 107.75835,
                    hair_color: "Pink",
                    professions: [
                        "Metalworker",
                        "Woodcarver",
                        "Stonecarver",
                        " Tinker",
                        "Tailor",
                        "Potter"
                    ],
                    friends: [
                        "Cogwitz Chillwidget",
                        "Tinadette Chillbuster"
                    ]
                };
            };
        }

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new ProfileClusterComponent();
            return directive;
        }
    }
}