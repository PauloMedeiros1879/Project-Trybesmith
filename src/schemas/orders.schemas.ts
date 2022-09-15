import Joi, { ObjectSchema } from 'joi';

const orderSchema: ObjectSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required()
    .messages({ 'array.min': '"productsIds" must include only numbers' }),
});

export default orderSchema;