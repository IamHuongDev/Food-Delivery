import mogoose from 'mongoose';

export const connectDB = async () => {
    await mogoose.connect('mongodb+srv://huongnguyen11022002:Ht11022002%40%40@cluster0.jtfw9.mongodb.net/food-delivery?retryWrites=true&w=majority').then(()=>console.log('DB Connected')); 
}