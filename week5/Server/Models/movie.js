"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Step1 Import mongoose
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema; //alias for mongoose.Schema
//Step2 Create a schema that matches the data
const MovieSchema = new Schema({
    Name: String,
    Year: String,
    Director: String,
    Rating: String
}, {
    collection: "movies"
});
//Step3 Create a Model using the Schema
const Model = mongoose_1.default.model("Movies", MovieSchema);
//Step4 Export the Model -- This makes the file a module
exports.default = Model;
//# sourceMappingURL=movie.js.map