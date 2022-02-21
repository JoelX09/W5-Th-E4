import { Movie } from "./Movie";

export class ActionMovies extends Movie {
  explosions:number;
  guns:boolean;
  martialArts:boolean;

  constructor(name:string, director:string, language:string, runningTime:number, releaseYear:number, explosions:number, guns:boolean, martialArts:boolean){
    super(name, director, language, runningTime, releaseYear);
    this.explosions = explosions;
    this.guns = guns;
    this.martialArts = martialArts;
  }

  printActionMovie() {
    console.log(`
    ==================================
    Name: ${this.name}
    Director: ${this.director}
    Language: ${this.language}
    Running Time: ${this.runningTime}
    Release Year: ${this.releaseYear}
    Explosions Count: ${this.explosions}
    Guns: ${this.expectGuns()}
    Martial Arts: ${this.expectMartialArts()}
    ==================================
    `);
  }
  
  incrementExplosions(){
    this.explosions++;
    console.log('💥💣🧨 Explosion has been added!');
  }

  expectGuns(){
    if(this.guns) return '🔫';
    return '🙅‍♂️';
  }

  expectMartialArts(){
    if(this.martialArts) return '🐱‍👤';
    return '🙅‍♂️';
  }
}