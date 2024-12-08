const Joi = require('joi');

const taskValidationSchema = Joi.object({
  title: Joi.string().required().max(100),
  description: Joi.string().optional(),
  status: Joi.string().valid('TODO', 'IN_PROGRESS', 'COMPLETED').default('TODO'),
  priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH'),
  dueDate: Joi.date().optional(),
});

module.exports = { taskValidationSchema };
