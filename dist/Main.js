"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const ActionMovie_1 = require("./ActionMovie");
const HorrorMovies_1 = require("./HorrorMovies");
const Input_1 = require("./Input");
// type MoviesT = ActionMovies | HorroMovies;
// type moviesA = MoviesT[];
class Main {
    constructor() {
        this.movies = [];
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.showMainMenu();
        });
    }
    showMainMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            const mainMenu = [
                { option: 1, message: "Add action movie" },
                { option: 2, message: "Add horror movie" },
                { option: 3, message: "Show action movies" },
                { option: 4, message: "Show horror movies" },
                { option: 5, message: "Increment explosions in movie" },
                { option: 6, message: "Increment jump scares in movie" },
                { option: 7, message: "Exit" },
            ];
            let formAddMovie = [
                { name: "name", message: "Name" },
                { name: "director", message: "Director" },
                { name: "language", message: "Language" },
                { name: "running", message: "Running Time (min)" },
                { name: "year", message: "Year" },
            ];
            let menu = yield Input_1.Input.getSelect("Blockbuster", mainMenu);
            let input;
            let op1, op2;
            let options = [];
            while (menu.data !== 7) {
                switch (menu.data) {
                    case 1: {
                        input = yield Input_1.Input.getForm('Fill the following:', [...formAddMovie, { name: "explosions", message: "Explosions Count" }]);
                        op1 = yield Input_1.Input.getConfirm('Are there guns in this movie');
                        op2 = yield Input_1.Input.getConfirm('Are there martial arts in this movie');
                        this.movies.push(new ActionMovie_1.ActionMovies(input.data.name, input.data.director, input.data.language, Number(input.data.running), Number(input.data.year), Number(input.data.explosions), op1, op2));
                        break;
                    }
                    case 2: {
                        input = yield Input_1.Input.getForm('Fill the following:', [...formAddMovie, { name: "jump", message: "Jump Scares Count" }]);
                        op1 = yield Input_1.Input.getConfirm('Are there ghosts in this movie');
                        op2 = yield Input_1.Input.getConfirm('Are there visions in this movie');
                        this.movies.push(new HorrorMovies_1.HorroMovies(input.data.name, input.data.director, input.data.language, Number(input.data.running), Number(input.data.year), Number(input.data.jump), op1, op2));
                        break;
                    }
                    case 3: {
                        this.movies.map(e => {
                            if (e instanceof ActionMovie_1.ActionMovies)
                                e.printActionMovie();
                        });
                        break;
                    }
                    case 4: {
                        this.movies.map(e => {
                            if (e instanceof HorrorMovies_1.HorroMovies)
                                e.printHorrorMovie();
                        });
                        break;
                    }
                    case 5: {
                        options = [];
                        this.movies.map((choice) => {
                            if (choice instanceof ActionMovie_1.ActionMovies)
                                options.push({
                                    name: choice.id,
                                    message: choice.name
                                });
                        });
                        input = yield Input_1.Input.getSelectById('Select the Action Movie', options);
                        this.movies.find(e => {
                            if (input.data === e.id)
                                if (e instanceof ActionMovie_1.ActionMovies)
                                    e.incrementExplosions();
                        });
                        break;
                    }
                    case 6: {
                        options = [];
                        this.movies.map((choice) => {
                            if (choice instanceof HorrorMovies_1.HorroMovies)
                                options.push({
                                    name: choice.id,
                                    message: choice.name
                                });
                        });
                        input = yield Input_1.Input.getSelectById('Select the Horror Movie', options);
                        this.movies.find(e => {
                            if (input.data === e.id)
                                if (e instanceof HorrorMovies_1.HorroMovies)
                                    e.incrementJumpscares();
                        });
                        break;
                    }
                }
                menu = yield Input_1.Input.getSelect("Blockbuster", mainMenu);
            }
        });
    }
}
exports.Main = Main;
