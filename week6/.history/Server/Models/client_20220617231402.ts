//Step1 Import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.Schema
//Step2 Create a schema that matches the data
const ClientSchema = new Schema
({
    FirstName: String,
    LastName: String,
    Number: String,
    Email: String,
    Company: String,
    
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
    collection: "clients"
})
//Step3 Create a Model using the Schema
const Model = mongoose.model("Clients", ClientSchema);
//Step4 Export the Model -- This makes the file a module
export default Model;