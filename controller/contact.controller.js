import contacts from "../models/contact.model.js";

const getcontactdetail = async (req, res, next) => {
    try {
        const contactDetail = await contacts.create({
            ...req.body,
            user: req.user._id 
        });

        res.json({ success: true, data: contactDetail });
    } catch (error) {
        console.error("Error in the input:", error);
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export default getcontactdetail;
