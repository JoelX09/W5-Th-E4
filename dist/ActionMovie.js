"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMovies = void 0;
const Movie_1 = require("./Movie");
class ActionMovies extends Movie_1.Movie {
    constructor(name, director, language, runningTime, releaseYear, explosions, guns, martialArts) {
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
    incrementExplosions() {
        this.explosions++;
        console.log('💥💣🧨 Explosion has been added!');
    }
    expectGuns() {
        if (this.guns)
            return '🔫';
        return '🙅‍♂️';
    }
    expectMartialArts() {
        if (this.martialArts)
            return '🐱‍👤';
        return '🙅‍♂️';
    }
}
exports.ActionMovies = ActionMovies;
