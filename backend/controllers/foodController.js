import foodModel from "../models/foodModel.js";
import fs from "fs";
import multer from 'multer';


// add food item

const addFoodItem = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "File is not provided" });
    }

    const image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food item added successfully!" });
    } catch (err) {
        console.error(err);
        res.json({ success: false, message: "Failed to add food item!" });
    }
};

// all food list items

const getFoodList = async (req, res) => {
    try {
        const foodList = await foodModel.find({});
        res.json({
            success: true,
            message: "Food list fetched successfully!",
            data: foodList,
        });
    } catch (err) {
        console.error(err);
        res.json({success: false, message: "Failed to get food list!" });
    }
};


// remove food item

const removeFoodItem = async (req, res) => {
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);

        res.json({ success: true, message: "Food item removed successfully!" });
    } catch (err) {
        console.error(err);
        res.json({ success: false, message: "Failed to remove food item!" });
    }
};



export { addFoodItem, getFoodList, removeFoodItem };