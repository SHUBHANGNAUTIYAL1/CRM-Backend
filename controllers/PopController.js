import Pop from "../models/Popup.js";

// Create a new contact
export const createPop = async (req, res) => {
  const { name, email, contactNumber, occupation, referralSource } = req.body;
  console.log(req.body)
  try {
    const newPop = new Pop({
      name,
      email,
      contactNumber,
      occupation,
      referralSource,
    });
    console.log(newPop)

    const savedPop = await newPop.save();

    res.status(201).json(savedPop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all contacts
export const getPop = async (req, res) => {
  try {
    const pops = await Pop.find();
    res.status(200).json(pops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete contact by ID
export const deletePopById = async (req, res) => {
  const { id } = req.params;

  try {
    const pop = await Pop.findByIdAndDelete(id);
    if (!pop) {
      return res.status(404).json({ message: "Contact not found" });
    }

  
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
