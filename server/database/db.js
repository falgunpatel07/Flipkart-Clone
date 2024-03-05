
import mongoose from "mongoose";


export const Connection = async () => {

    const password = encodeURIComponent('H02f7v30@');
const URL = `mongodb+srv://falgun:${password}@cluster0.qjuelh5.mongodb.net/mernstack?retryWrites=true&w=majority`;
    try{
     await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser: true});
     console.log('Database connected Successfully');
}catch(error){
    console.log('Error while connecting with the database ',error.message);
}

}

export default Connection;