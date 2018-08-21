import deLocale from "./de";

const locale = {
    ...deLocale,
    "screen.not_found.title": "The site could not be found.",
    "screen.login.invalid_password_or_email": "The password or email address is invalid.",
    "screen.login.error_during_login": "An error occured while logging in.",
    "screen.login.form.email.validation_error": "Enter a valid email address",
    "screen.login.form.password.validation_error": "Enter a valid password"
};

export type IAvailableI18nIds = typeof locale;
export default locale;
