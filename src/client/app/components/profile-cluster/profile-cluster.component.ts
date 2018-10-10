/// <reference path="../../../../../typings/index.d.ts" />

module App {
    export class ProfileClusterComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/profile-cluster/profile-cluster.component.html";
    
        constructor() {
        }

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new ProfileClusterComponent();
            return directive;
        }
    }
}