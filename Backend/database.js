const mongoose=require('mongoose');
const dbUrl='mongodb://localhost:27017/notes';
const mongoconnect= async ()=>{
    await mongoose.connect(dbUrl);
    console.log('database connected');
}
module.exports=mongoconnect;