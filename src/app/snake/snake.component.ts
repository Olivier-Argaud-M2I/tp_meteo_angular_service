import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Serpent } from '../model/snake';
import { Element } from '../model/Element';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  private handleKeyBind:any;
  

  /****************************************************
  * 
  *      recuperation des elements du dom
  * 
  * *************************************************/

  btnStart:HTMLElement|null= document.querySelector('#start');
  btnStop:HTMLElement|null = document.querySelector('#stop');
  btnToggle:HTMLElement|null = document.querySelector('#toggle');
  divScore:HTMLElement|null = document.querySelector('#score');

  functionStart = this.start.bind(this);
  functionStop = this.stop.bind(this);
  functionToggle = this.toggle.bind(this);

  constructor() {
    this.handleKeyBind = this.handleKey.bind(this);
    document.removeEventListener('keyup', this.handleKeyBind, false);
    document.addEventListener('keyup', this.handleKeyBind, false);
   
  }

  private handleKey(event: KeyboardEvent) {
    console.log(event.keyCode);
    this.keyListenerRefresh(event);
  }

  onDestroy() {
    document.removeEventListener('keyup', this.handleKeyBind, false);
  }

  ngOnInit(): void {
    
  }






  @ViewChild('myCanvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.init();;
  }




  /****************************************************
  * 
  *      declaration des variables globales
  * 
  * *************************************************/




  debug:boolean = false;
  monInter:any;
  avance:number = 10;
  largeurCanvas:number = 300;
  hauteurCanvas:number = 150;
  ticCount:number = 0;
  direction:number = 39;
  serpent:Serpent = new Serpent(50,80,10,10,[],5,'rgb(0,255,0)');
  pomme:Element = this.ajoutPomme();
  score = 0;
  vitesse = 150;
  attenteChoix = true;
  border = true;








  /****************************************************
  * 
  *      declaration des functions
  * 
  * *************************************************/

  // initialisation du jeux et des listeners
  init(){

      
    this.btnStart = document.querySelector('#start');
    this.btnStop = document.querySelector('#stop');
    this.btnToggle = document.querySelector('#toggle');
    this.divScore = document.querySelector('#score');

    this.dessiner();
    this.ajoutListenerStart();
    this.ajoutListenerStop();
    this.ajoutListenerToggle();

  }

  ajoutListenerStart(){
    this.btnStart!.addEventListener('click',this.functionStart);
  }

  retirerListenerStart(){
    this.btnStart!.removeEventListener('click',this.functionStart);
  }

  ajoutListenerStop(){
    this.btnStop!.addEventListener('click',this.functionStop);
  }

  retirerListenerStop(){
    this.btnStop!.removeEventListener('click',this.functionStop);
  }

  ajoutListenerToggle(){
    this.btnToggle!.addEventListener('click',this.functionToggle);
  }

  retirerListenerToggle(){
    this.btnToggle!.removeEventListener('click',this.functionToggle);
  }

  // fonction pour lancer une partie
  start(){
    this.reset();
    this.retirerListenerStart();
    this.retirerListenerToggle();
    this.startInterval();
    this.btnStart!.setAttribute('class','active');
   
  }

  // fonction pour arreter une partie en cours
  stop(){
    this.stopInterval();
    this.ajoutListenerStart();
    this.ajoutListenerToggle();
    this.btnStart!.setAttribute('class','');  
  }

  // fonction pour reinitialiser le jeux
  reset(){
    this.serpent =  new Serpent(50,80,10,10,[],5,'rgb(0,255,0)');
    this.direction = 39;
    this.score = 0;
    this.vitesse = 150;
  }

  // fonction pour activer ou descativer l'option bordure 
  toggle(){
    this.border=!this.border;
    this.btnToggle!.setAttribute('class',this.border?'':'active');
  }

  // lancement de l'interval et sauvegarde de sa reference dans le document
  startInterval(){
     this.monInter = setInterval(() => {
      this.interval(); 
    }, this.vitesse);
  }

  // arret de l'interval
  stopInterval(){
    clearInterval(this.monInter);
    this.monInter = "";
  }


  // // memoirisation de l'ordre de direction donné par les fleches directionnelles 
  // // a condition que celui ci soit valide
  keyListenerRefresh(e:any){
    if(this.debug){
        console.log(e.keyCode);
    }
    if(this.attenteChoix){
        
        switch (e.keyCode) {
            // si on se dirige vers la droite ou la gauche on n'autorise la saisie
            // que pour le haut ou le bas
            case 37:
            case 39:    
                if(this.direction!==37 && this.direction!==39){
                  this.direction = e.keyCode;
                  this.attenteChoix = false;
                }
                break;
            // si on se dirige vers la haut ou le bas on n'autorise la saisie
            // que pour la droite ou la gauche
            case 38:
            case 40:
                if(this.direction!==38 && this.direction!==40){
                  this.direction = e.keyCode;
                  this.attenteChoix = false;
                }
                break;
            default:
                break;
        }
    }
  }

  // // fonction qui dessine les differents elements du jeux dans le canvas
  dessiner(){
    // on commence par tout remplir en blanc a chaque cycle
    this.ctx.fillStyle = 'rgb(255,255,255)';
    this.ctx.fillRect(0,0,300,150);


    // les 4 coins
    if(this.debug){
        this.ctx.fillStyle = 'rgb(255,0,0)';

        let cercle = new Path2D();
        cercle.arc(5, 5, 5, 0, 2 * Math.PI);
        this.ctx.fill(cercle);

        let cercle2 = new Path2D();
        cercle2.arc(295, 145, 5, 0, 2 * Math.PI);
        this.ctx.fill(cercle2);

        let cercle3= new Path2D();
        cercle3.arc(295, 5, 5, 0, 2 * Math.PI);
        this.ctx.fill(cercle3);

        let cercle4= new Path2D();
        cercle4.arc(5, 145, 5, 0, 2 * Math.PI);
        this.ctx.fill(cercle4);
    }
    


    // on dessine la pomme
    try {
      this.ctx.fillStyle = this.pomme.color;
        let pom = new Path2D();
        pom.arc(this.pomme.posX+5,this.pomme.posY+5,this.pomme.size,0,2*Math.PI);
        this.ctx.fill(pom);
    } 
    catch (error) {
        console.log('probleme dessin pomme')
    }
    // box pomme
    if (this.debug){
      this.ctx.rect(this.pomme.posX,this.pomme.posY,this.pomme.width,this.pomme.height);
      this.ctx.stroke();    
    }
    
    // on dessine chaque elements du corp du serpent
    try {
        for (let i = this.serpent.corp.length ; i > 0 ; i--) {
          this.ctx.fillStyle = this.serpent.corp[i-1].color;
            let corp = new Path2D();
            corp.arc(this.serpent.corp[i-1].posX+(this.serpent.corp[i-1].width/2),this.serpent.corp[i-1].posY+(this.serpent.corp[i-1].height/2),this.serpent.corp[i-1].size,0,2*Math.PI);
            this.ctx.fill(corp);
        }
    } 
    catch (error) {
        console.log('probleme dessin corp serpent')
    }
    
    // on dessine la tete du serpent
    try {
      this.ctx.fillStyle = this.serpent.color;
      let serp = new Path2D();
      serp.arc(this.serpent.posX+5,this.serpent.posY+5,this.serpent.size,0,2*Math.PI);
      this.ctx.fill(serp);
    } 
    catch (error) {
        console.log('probleme dessin tete serpent')
    }
    // box serpent
    if (this.debug){
      this.ctx.rect(this.serpent.posX,this.serpent.posY,this.serpent.width,this.serpent.height);
      this.ctx.stroke();
    }

  }

  // on selectionne une valeur de deplacement en X et Y en fonction de la direction validée
  deplacement(){

    switch (this.direction) {
        case 37:
          this.move(-this.avance,0);
            break;
        case 38:
          this.move(0,-this.avance);
            break;
        case 39:
          this.move(this.avance,0);
            break;
        case 40:
          this.move(0,this.avance);
            break;
        default:
            break;
    }
  }

  // on applique le deplacement au serpent en fonction de l'option bordure
  move(X:number,Y:number){
    this.serpent.posX += X;
    this.serpent.posY += Y;
    if(this.border){
      this.serpent.posX = this.serpent.posX>this.largeurCanvas-this.avance ? 0 : this.serpent.posX;
      this.serpent.posY = this.serpent.posY>this.hauteurCanvas-this.avance ? 0 : this.serpent.posY;
      this.serpent.posX = this.serpent.posX<0 ? this.largeurCanvas-this.avance : this.serpent.posX;
      this.serpent.posY = this.serpent.posY<0 ? this.hauteurCanvas-this.avance : this.serpent.posY;
    }
  }

  // on test les differentes collisions possibles
  testCollision(){

    // collision pomme
    if (this.collision(this.serpent,this.pomme)){
      this.mangePomme();
    }

    // collision corp
    for (let i = 1; i < this.serpent.corp.length-1; i++) {
        if (this.collision(this.serpent,this.serpent.corp[i])){
          this.gameOver('you lose');
        }
    }

    // collision bords
    if(!this.border){
        if(this.serpent.posX<0 ||
          this.serpent.posX>this.largeurCanvas-this.serpent.width || 
          this.serpent.posY<0 || 
          this.serpent.posY>this.hauteurCanvas-this.serpent.height
        ){
          this.gameOver('you lose');
        }
    }
  }

  // si on mange une pomme
  mangePomme(){
    if (this.debug){
        console.log('miam');
    }
    // on incremente le score et on l'affiche 
    this.score++;
    // divScore.innerHTML = score;
    // si on rempli tout l'ecran avec notre serpent on gagne
    if(this.score>=((this.largeurCanvas/10)*(this.hauteurCanvas/10))-1){
      this.gameOver('you win');
    }
    // on fait grnadir notre serpent
    this.ajoutCorp();
    // on place une nouvelle pomme
    this.pomme = this.ajoutPomme();
  }

  // fonction  qui test une collision entre deux rectangle
  collision(rect1:Element,rect2:Element){
    if( rect1.posX < rect2.posX + rect2.width &&
        rect1.posX + rect1.width > rect2.posX &&
        rect1.posY < rect2.posY + rect2.height &&
        rect1.height + rect1.posY > rect2.posY){
        return true;
    }
    return false;
  }

  // en fin de jeux on log le resultat et on stop le jeux
  gameOver(state:string){
    console.log(state);
    this.stop();
  }


  // gestion des tics
  // fonction qui gere l'ordre des differentes action a effectuer a chaque tour
  interval(){
    console.log("dans l'interval");
    this.ticCount++;
    console.log('tic '+ this.ticCount);
    if(this.debug){
        console.log('tic '+ this.ticCount);
    }
    // test du changement de vitesse
    this.changeVitesse();
    // actualisation de l'affichage de la position ( pour le mode debug )
    // this. affichePosition();
    // on raffraichit l'affichage des elements graphiques
    this.dessiner();
    // on decale les elements du corp du serpent
    this.decalageCorp();
    // on deplace la tete du serpent
    this.deplacement();
    // on test d'eventuelles collisions
    this.testCollision();
    // on reinitialise la possibilitée de saisir une nouvelle direction
    this.attenteChoix = true;
  }

  ajoutPomme(){
    // creation d'une pomme en aleatoire sur la map
    let rand1 = this.rand(0,((this.largeurCanvas-this.avance)/this.avance))*this.avance;
    let rand2 = this.rand(0,((this.hauteurCanvas-this.avance)/this.avance))*this.avance;
    let pommeTemp = new Element(rand1,rand2,10,10,5,'rgb(255,0,0)');
    if(this.debug){
        console.log(`pomme apparait en X ${rand1} Y ${rand2}`);
    }
    // tant que la nouvelle pomme est en collision avec le serpent on incremente la position de la pomme et on recommence
    while(this.clashPomme(pommeTemp)){
      this.decallagePomme(pommeTemp);
    }
    return pommeTemp;
  }


  // fonction permettant de decaller la pomme sur la grille 
  decallagePomme(pommeTemp:Element){
    // si il y a de la place a droite on la decalle a droite
    if(pommeTemp.posX < this.largeurCanvas-this.avance){
        pommeTemp.posX += this.avance;
    }
    // sinon on la met au debut de la ligne suivante ou en haut si il n'y a plus de place en bas
    else{
        pommeTemp.posX = 0;
        if(pommeTemp.posY < this.hauteurCanvas-this.avance){
            pommeTemp.posY +=5;
        }
        else{
            pommeTemp.posY = 0;
        }
    }
  }

  // fonction qui test la collision d'un pomme avec le serpent
  clashPomme(pommeTemp:Element){
    let clash:boolean = false
    this.serpent.corp.forEach((corp) => {
        if(this.collision(pommeTemp,corp)){
          clash = true;
        }
    });
    if(this.collision(pommeTemp,this.serpent)){
      clash = true;
    }
    return clash;
  }

  // fonction qui fourni un entier aleatoire compris entre min et max inclu
  rand(min:number,max:number){
    let rando = Math.floor(Math.random() * (max - min +1)) + min;
    if(this.debug){
        console.log(`random entre ${min} et ${max} => ${rando}`);
    }
    return rando;
  }

  // ajout d'un element au corp du serpent
  ajoutCorp(){
    // genere une couleur HSL
    let h = ((this.score+120)*10)%360;
    let color = `hsl(${h},100%,50%)`
    // on ajoute un element au corp du serpent
    this.serpent.corp.push(new Element(this.serpent.posX,this.serpent.posY,this.serpent.width,this.serpent.height,this.serpent.size,color));
  }

  // decalage des different elements du corp du serpent
  decalageCorp(){

    try {
        for (let i = this.serpent.corp.length-1; i >0; i--) {
          this.serpent.corp[i].posX = this.serpent.corp[i-1].posX;
          this.serpent.corp[i].posY = this.serpent.corp[i-1].posY;
        }
    } catch (error) {
        
    }
    
    try {
      this.serpent.corp[0].posX = this.serpent.posX;
      this.serpent.corp[0].posY = this.serpent.posY;
    } catch (error) {
        
    }
    
  }

  // // actualisation de l'affichage de la position de la tete du serpent 
  // affichePosition(){
  //   $('#X')[0].innerHTML = 'posX = '+serpent.posX;
  //   $('#Y')[0].innerHTML = 'posY = '+serpent.posY;
  // }

  // change la vitesse du jeux en fonction du score
  changeVitesse(){

    // premier palier au score de 5
    if(this.score===5 && this.vitesse!== 100){
      this.vitesse = 100;
      this.stopInterval()
      this.startInterval()
        return;
    }
    // deuxieme palier au score de 10
    if(this.score===10 && this.vitesse!== 75){
      this.vitesse = 75;
      this.stopInterval()
      this.startInterval()
        return;
    }
    // troisieme palier au score de 15
    if(this.score===15 && this.vitesse!== 50){
      this.vitesse = 50;
      this.stopInterval()
      this.startInterval()
        return;
    }
    // dernier palier au score de 20
    if(this.score===20 && this.vitesse!== 25){
      this.vitesse = 25;
      this.stopInterval()
      this.startInterval()
        return;
    }
  }
}