export class Forecast{

    private _temp: string = "";
    public get temp(): string {
        return this._temp;
    }
    public set temp(value: string) {
        this._temp = value;
    }
    private _min: string = "";
    public get min(): string {
        return this._min;
    }
    public set min(value: string) {
        this._min = value;
    }
    private _max: string = "";
    public get max(): string {
        return this._max;
    }
    public set max(value: string) {
        this._max = value;
    }
    private _condition: string = "";
    public get condition(): string {
        return this._condition;
    }
    public set condition(value: string) {
        this._condition = value;
    }
    private _icon: string = "";
    public get icon(): string {
        return this._icon;
    }
    public set icon(value: string) {
        this._icon = value;
    }


    constructor(temp:string,min:string,max:string,condition:string,icon:string){
        this._temp = temp;
        this._min = min;
        this._max = max;
        this._condition = condition;
        this._icon = icon;
    }

}