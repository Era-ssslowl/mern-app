const User = require("../models/User");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};


exports.aggregateUsers = async (req, res, next) => {
  try {
    const result = await User.aggregate([
      {
        $project: {
          domain: { $arrayElemAt: [{ $split: ["$email", "@"] }, 1] }
        }
      },
      {
        $group: {
          _id: "$domain",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 3 // Get top 3 domains
      }
    ]);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

