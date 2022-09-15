import Joi, { ObjectSchema } from 'joi';

const loginSchema: ObjectSchema = Joi.object({
  username: Joi.required(),
  password: Joi.required(),
});

export default loginSchema;