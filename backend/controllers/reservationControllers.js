import reservationModels from "../models/reservationModels.js";

const createReservation = async (req, res) => {
  try {
    const { name, email, phone, date, time, guests } = req.body;
    if (!name || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newReservation = new reservationModels({ name, email, phone, date, time, guests });
    await newReservation.save();

    res.status(201).json({
      success: true,
      message: "Reservation created successfully",
      reservation: newReservation
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error creating reservation" });
  }
};

const getAllReservations = async (req, res) => {
  try {
    const reservations = await reservationModels.find();
    res.json({ success: true, reservations });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching reservations" });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    await reservationModels.findByIdAndDelete(id);
    res.json({ success: true, message: "Reservation removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting reservation" });
  }
};

export { createReservation, getAllReservations, deleteReservation };
