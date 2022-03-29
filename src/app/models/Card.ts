export class Card{
    id?: number;
    image?: string;
    name?: string;
    status?: string;
    species?: string;
    origin!: originJSON;

    
}
interface originJSON {name:string;url:string};