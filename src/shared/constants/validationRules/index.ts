const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const INVALID_EMAIL_ERROR = 'Неверный формат электронной почты';
const MIN_PASSWORD_ERROR = 'Минимальная длина пароля 8 символов';
const MAX_PASSWORD_ERROR = 'Максимальная длина пароля 16 символов';
const PASSWORD_REGEX = /^[A-Za-z0-9]+$/;
const INVALID_PASSWORD_ERROR = 'Пароль должен содержать только символы латиницы и цифры';

export const VALIDATION_RULES = {
  email: {
    required: 'Введите E-mail',
    pattern: { value: EMAIL_REGEX, message: INVALID_EMAIL_ERROR },
    minLength: { value: 2, message: INVALID_EMAIL_ERROR },
    maxLength: { value: 50, message: INVALID_EMAIL_ERROR },
  },
  password: {
    required: 'Введите пароль',
    pattern: { value: PASSWORD_REGEX, message: INVALID_PASSWORD_ERROR },
    minLength: { value: 8, message: MIN_PASSWORD_ERROR },
    maxLength: { value: 16, message: MAX_PASSWORD_ERROR },
  },
};
