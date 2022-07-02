 export class Element{

  private _posX!:number;
  private _posY!:number;
  private _width!:number;
  private _height!:number;
  private _color!:string;
  private _size!:number;

  get posX(){return this._posX;}
  set posX(posX){this._posX = posX;}
  get posY(){return this._posY;}
  set posY(posY){this._posY = posY;}
  get width(){return this._width;}
  set width(width){this._width = width;}
  get height(){return this._height;}
  set height(height){this._height = height;}
  get color(){return this._color;}
  set color(color){this._color = color;}
  get size(){return this._size;}
  set size(size){this._size = size;}
  
  constructor(posX:number,posY:number,width:number,height:number,size:number,color:string){
      this._posX = posX;
      this._posY = posY;
      this._width = width;
      this._height = height;
      this._color = color;
      this.size = size;
  }
}