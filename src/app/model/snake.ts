import { Element } from "./Element";
export class Serpent extends Element{

    _corp;
  
    get corp(){return this._corp}
    set corp(corp){this._corp = corp;}
  
    constructor(posX:number,posY:number,width:number,height:number,corp:Element[],size:number,color:string){
        super(posX,posY,width,height,size,color);
        this._corp = corp;
    }
  }