"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Step1 Import mongoose
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema; //alias for mongoose.Schema
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
//Step2 Create a schema that matches the data
const UserSchema = new Schema({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created: {
        type: Date,
        default: Date.now()
    },
    Updated: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: "users"
});
//Step3 auth - plugin passport local mongoose 
UserSchema.plugin(passport_local_mongoose_1.default);
//Step4 auth - Create a Model using the Schema
const Model = mongoose_1.default.model("User", UserSchema);
//Step4 Export the Model -- This makes the file a module
exports.default = Model;
//# sourceMappingURL=user.js.map