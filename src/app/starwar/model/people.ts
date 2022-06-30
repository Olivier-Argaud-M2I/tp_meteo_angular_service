export class People{

    private _name: string = "";
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _height: string = "";
    public get height(): string {
        return this._height;
    }
    public set height(value: string) {
        this._height = value;
    }
    private _mass: string = "";
    public get mass(): string {
        return this._mass;
    }
    public set mass(value: string) {
        this._mass = value;
    }
    private _hair_color: string = "";
    public get hair_color(): string {
        return this._hair_color;
    }
    public set hair_color(value: string) {
        this._hair_color = value;
    }
    private _skin_color: string = "";
    public get skin_color(): string {
        return this._skin_color;
    }
    public set skin_color(value: string) {
        this._skin_color = value;
    }
    private _eye_color: string = "";
    public get eye_color(): string {
        return this._eye_color;
    }
    public set eye_color(value: string) {
        this._eye_color = value;
    }
    private _birth_year: string = "";
    public get birth_year(): string {
        return this._birth_year;
    }
    public set birth_year(value: string) {
        this._birth_year = value;
    }
    private _gender: string = "";
    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }
    private _homeworld: string = "";
    public get homeworld(): string {
        return this._homeworld;
    }
    public set homeworld(value: string) {
        this._homeworld = value;
    }
    private _films: string[] = [];
    public get films(): string[] {
        return this._films;
    }
    public set films(value: string[]) {
        this._films = value;
    }
    
    constructor(){
        
    }
}