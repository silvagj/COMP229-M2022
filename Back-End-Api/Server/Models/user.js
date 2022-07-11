"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Step 1 - Import Mongoose
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema; // alias for mongoose.Schema
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
// Step 2 - Create a Schema that matches the data
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
// Step 3 - plugin the passport local mongoose module
UserSchema.plugin(passport_local_mongoose_1.default);
// Step 4 - Create a Model using the Schema
const Model = mongoose_1.default.model("User", UserSchema);
// Step 5 - Export the Model -> this makes the file a module
exports.default = Model;
//# sourceMappingURL=user.js.map