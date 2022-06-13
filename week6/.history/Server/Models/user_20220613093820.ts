//Step1 Import mongoose
import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose';

//Step2 Create a schema that matches the data
const UserSchema = new Schema
({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created: 
    {
        type: Date,
        default: Date.now()
    },
    Updated:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});
//Step3 plugin passport local mongoose 
UserSchema.plugin(passportLocalMongoose);

//Step3 Create a Model using the Schema
const Model = mongoose.model("User", UserSchema);
//Step4 Export the Model -- This makes the file a module
export default Model;