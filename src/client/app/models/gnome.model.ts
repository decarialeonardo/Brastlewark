// export class GnomeModel{
//     public id: number;
//     public name: string;
//     public thumbnail: string;
//     public age: number;
//     public weight: number;
//     public height: number;
//     public hair_color: string;
//     public professions: Array<string>;
//     public friends: Array<string>;
// }

export interface IGnome{
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