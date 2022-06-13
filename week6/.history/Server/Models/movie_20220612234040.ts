//Step1 Import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.Schema
//Step2 Create a schema that matches the data
const MovieSchema = new Schema
({
    Name: String,
    Year: String,
    Director: String,
    Rating: String
},
{
    collection: "movies"
})
//Step3 Create a Model using the Schema
const Model = mongoose.model("Movies", MovieSchema);
//Step4 Export the Model -- This makes the file a module
export default Model;