//Step1 Import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.Schema
//Step2 Create a schema that matches the data
const UserSchema = new Schema
({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created: 
    {
        type: Date,
        delault: Date.now();
    }
},
{
    collection: "movies"
})
//Step3 Create a Model using the Schema
const Model = mongoose.model("User", UserSchema);
//Step4 Export the Model -- This makes the file a module
export default Model;