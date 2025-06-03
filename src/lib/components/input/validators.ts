import * as EmailValidator from 'email-validator';

export type Validator = (value: string | number) => [boolean, string?];

export const alwaysValid: Validator = () => [true];

export const isEmail: Validator = (value) => {
	if (value == null || value === '') {
		return [true];
	}

	if (typeof value !== 'string' || !EmailValidator.validate(value)) {
		return [false, 'Must be a valid email address'];
	}

	return [true];
}

export const isRequired: Validator = (value) => {
	if (value === '' || value == null) {
		return [false, 'This field is required'];
	}
	return [true];
}

export const minLength = (min: number): Validator => (value) => {
	const str = String(value);
	if (str.length < min) {
		return [false, `Must be at least ${min} characters long`];
	}
	return [true];
}

export const maxLength = (max: number): Validator => (value) => {
	const str = String(value);
	if (str.length > max) {
		return [false, `Must be no more than ${max} characters long`];
	}
	return [true];
}

export const isNumeric: Validator = (value) => {
	const num = Number(value);
	if (isNaN(num)) {
		return [false, 'Must be a valid number'];
	}
	return [true];
}

export const minValue = (min: number): Validator => (value) => {
	const num = Number(value);
	if (isNaN(num) || num < min) {
		return [false, `Must be at least ${min}`];
	}
	return [true];
}

export const maxValue = (max: number): Validator => (value) => {
	const num = Number(value);
	if (isNaN(num) || num > max) {
		return [false, `Must be no more than ${max}`];
	}
	return [true];
}

export const isUrl: Validator = (value) => {
	try {
		new URL(String(value));
		return [true];
	} catch {
		return [false, 'Must be a valid URL'];
	}
}

export const isPhoneNumber: Validator = (value) => {
	const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
	if (typeof value !== 'string' || !phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
		return [false, 'Must be a valid phone number'];
	}
	return [true];
}

export const isAlphanumeric: Validator = (value) => {
	const alphanumericRegex = /^[a-zA-Z0-9]+$/;
	if (typeof value !== 'string' || !alphanumericRegex.test(value)) {
		return [false, 'Must contain only letters and numbers'];
	}
	return [true];
}

export const isUsername: Validator = (value) => {
	if (typeof value !== 'string') {
		return [false, 'Username must be a string'];
	}
	if (value.length < 3 || value.length > 31) {
		return [false, 'Username must be between 3 and 31 characters'];
	}
	if (!/^[a-zA-Z0-9_]+$/.test(value)) {
		return [false, 'Username can only contain letters, numbers, and underscores'];
	}
	return [true];
}

export const isPassword: Validator = (value) => {
	if (typeof value !== 'string') {
		return [false, 'Password must be a string'];
	}
	if (value.length < 6 || value.length > 255) {
		return [false, 'Password must be between 6 and 255 characters'];
	}
	return [true];
}

export const isStrongPassword: Validator = (value) => {
	if (typeof value !== 'string') {
		return [false, 'Password must be a string'];
	}
	if (value.length < 8) {
		return [false, 'Password must be at least 8 characters long'];
	}
	if (!/(?=.*[a-z])/.test(value)) {
		return [false, 'Password must contain at least one lowercase letter'];
	}
	if (!/(?=.*[A-Z])/.test(value)) {
		return [false, 'Password must contain at least one uppercase letter'];
	}
	if (!/(?=.*\d)/.test(value)) {
		return [false, 'Password must contain at least one number'];
	}
	if (!/(?=.*[@$!%*?&])/.test(value)) {
		return [false, 'Password must contain at least one special character'];
	}
	return [true];
}

export const combineValidators = (...validators: Validator[]): Validator => (value) => {
	for (const validator of validators) {
		const result = validator(value);
		if (!result[0]) {
			return result;
		}
	}
	return [true];
}
