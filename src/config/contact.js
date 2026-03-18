// Contact email for all form submissions
export const CONTACT_EMAIL = 'contact@bloodnexusstudio.in';

// FormSubmit.co - forwards form data to the email above
// First submission will send a confirmation email to verify the address
export const FORM_SUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

// For native form action (non-AJAX)
export const FORM_ACTION_URL = `https://formsubmit.co/${CONTACT_EMAIL}`;
