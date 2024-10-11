const { StatusCodes } = require("http-status-code");

const { ValidationError, AppError } = require("../utils/errors/index.js");
const { Booking } = require("../models/index.js");

class BookingRepository {
  async create(data) {
    try {
      const booking = await Booking.create(data);
      return booking;
    } catch (error) {
      if (error.name == "SeuelizeValidationError") {
        throw new ValidationError(error);
      }
      throw new AppError(
        "RepositoryError",
        "Cannot Create Booking",
        "There was some issue creating the booking, please try again later",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  async update(data) {
    
  }
}

module.exports = BookingRepository;
