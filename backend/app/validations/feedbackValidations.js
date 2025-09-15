/*
const feedbackValidationSchema = {
  visitFrequency: {
    exists: {
      errorMessage: "Visit frequency is required",
    },
    notEmpty: {
      errorMessage: "Visit frequency cannot be blank",
    },
    isIn: {
      options: [["Regularly", "Sometimes", "First Time"]],
      errorMessage: "Invalid visit frequency",
    },
    trim: true,
  },

  qualityOfFood: {
    exists: {
      errorMessage: "Quality of food rating is required",
    },
    notEmpty: {
      errorMessage: "Quality of food rating cannot be blank",
    },
    isInt: {
      options: { min: 1, max: 5 },
      errorMessage: "Quality of food must be between 1 and 5",
    },
    toInt: true,
  },

  serviceQuality: {
    exists: {
      errorMessage: "Service quality rating is required",
    },
    notEmpty: {
      errorMessage: "Service quality rating cannot be blank",
    },
    isInt: {
      options: { min: 1, max: 5 },
      errorMessage: "Service quality must be between 1 and 5",
    },
    toInt: true,
  },

  overallExperience: {
    exists: {
      errorMessage: "Overall experience rating is required",
    },
    notEmpty: {
      errorMessage: "Overall experience rating cannot be blank",
    },
    isInt: {
      options: { min: 1, max: 5 },
      errorMessage: "Overall experience must be between 1 and 5",
    },
    toInt: true,
  },

  recommend: {
    exists: {
      errorMessage: "Recommendation field is required",
    },
    notEmpty: {
      errorMessage: "Recommendation cannot be blank",
    },
    isBoolean: {
      errorMessage: "Recommendation must be true or false",
    },
    toBoolean: true,
  },

  suggestions: {
    optional: true,
    isLength: {
      options: { max: 500 },
      errorMessage: "Suggestions cannot exceed 500 characters",
    },
    trim: true,
  },

  followUp: {
    optional: true,
    isBoolean: {
      errorMessage: "Follow-up must be true or false",
    },
    toBoolean: true,
  },
};

module.exports = feedbackValidationSchema;
*/


const feedbackValidationSchema = {
  visitFrequency: {
    exists: {
      errorMessage: "Visit frequency is required",
    },
    notEmpty: {
      errorMessage: "Visit frequency cannot be blank",
    },
    isIn: {
      options: [["Regularly", "Sometimes", "First Time"]],
      errorMessage: "Invalid visit frequency",
    },
    trim: true,
  },

  qualityOfFood: {
    exists: {
      errorMessage: "Quality of food rating is required",
    },
    notEmpty: {
      errorMessage: "Quality of food rating cannot be blank",
    },
    isInt: {
      options: { min: 1, max: 5 },
      errorMessage: "Quality of food must be between 1 and 5",
    },
    toInt: true,
  },

  serviceQuality: {
    exists: {
      errorMessage: "Service quality rating is required",
    },
    notEmpty: {
      errorMessage: "Service quality rating cannot be blank",
    },
    isInt: {
      options: { min: 1, max: 5 },
      errorMessage: "Service quality must be between 1 and 5",
    },
    toInt: true,
  },

  overallExperience: {
    exists: {
      errorMessage: "Overall experience rating is required",
    },
    notEmpty: {
      errorMessage: "Overall experience rating cannot be blank",
    },
    isInt: {
      options: { min: 1, max: 5 },
      errorMessage: "Overall experience must be between 1 and 5",
    },
    toInt: true,
  },

  recommend: {
    exists: {
      errorMessage: "Recommendation field is required",
    },
    notEmpty: {
      errorMessage: "Recommendation cannot be blank",
    },
    isBoolean: {
      errorMessage: "Recommendation must be true or false",
    },
    toBoolean: true,
  },

  suggestions: {
    optional: true,
    isLength: {
      options: { max: 500 },
      errorMessage: "Suggestions cannot exceed 500 characters",
    },
    trim: true,
  },

  followUp: {
    optional: true,
    isBoolean: {
      errorMessage: "Follow-up must be true or false",
    },
    toBoolean: true,
  },
};

export default feedbackValidationSchema;
