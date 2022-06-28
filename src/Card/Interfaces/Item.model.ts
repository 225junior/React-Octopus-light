export default interface Item {
    Id: number;
    Title: string;
    Type: number,
    Description: string;
}


export enum AppTypes {
    GesDoc = "Gestion Documentaire",
    Call = "Calendrier",
    Photo = "Photothèque",
    Todo = "To do list",
}