import Joi, { ObjectSchema } from 'joi';

const productSchema: ObjectSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default productSchema;