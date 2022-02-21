"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorroMovies = void 0;
const Movie_1 = require("./Movie");
class HorroMovies extends Movie_1.Movie {
    constructor(name, director, language, runningTime, releaseYear, jumpScares, ghosts, visions) {
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
        console.log('😨😱💀 Jum Scare has been added!');
    }
    expectGhosts() {
        if (this.ghosts)
            return "👻";
        return "🙅‍♂️";
    }
    expectVisions() {
        if (this.visions)
            return "🔮";
        return "🙅‍♂️";
    }
}
exports.HorroMovies = HorroMovies;
