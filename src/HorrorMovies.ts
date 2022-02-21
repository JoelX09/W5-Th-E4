import { Movie } from "./Movie";

export class HorroMovies extends Movie {
  jumpScares: number;
  ghosts: boolean;
  visions: boolean;

  constructor(name:string, director:string, language:string, runningTime:number, releaseYear:number, jumpScares:number, ghosts:boolean, visions:boolean){
    super(name, director, language, runningTime, releaseYear);
    this.jumpScares = jumpScares;
    this.ghosts = ghosts;
    this.visions = visions;
  }

  printHorrorMovie() {
    console.log(`
    ==================================
    Name: ${this.name}
    Director: ${this.director}
    Language: ${this.language}
    Running Time: ${this.runningTime}
    Release Year: ${this.releaseYear}
    Jump Scares Count: ${this.jumpScares}
    Ghosts: ${this.expectGhosts()}
    Visions: ${this.expectVisions()}
    ==================================
    `);
  }

  incrementJumpscares() {
    this.jumpScares++;
    console.log('😨😱💀 Jump Scare has been added!')
  }

  expectGhosts() {
    if(this.ghosts) return "👻";
    return "🙅‍♂️";
  }

  expectVisions() {
    if(this.visions) return "🔮";
    return "🙅‍♂️";
  }
}