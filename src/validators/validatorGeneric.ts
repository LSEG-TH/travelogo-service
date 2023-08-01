/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from 'joi';

const validatorOption = {
	allowUnknown: true
};

/**
 * Noted that you should use session citizenId instead of accept as new input
 * @param input Object input with citizenId as one of parameter key
 * @returns
 */
const loginSchema = (input: any) => {
	const schema = Joi.object({
		username: Joi.string().required(),
		password: Joi.string().required()
	});
	return schema.validate(input, validatorOption);
};

export { loginSchema };
