import { FORM_SUBMIT_URL } from '../config/contact';

/**
 * Submit form data to contact@bloodnexusstudio.in via FormSubmit
 * @param {Object} data - Form data as key-value pairs
 * @param {string} [subject] - Email subject line
 * @returns {Promise<{ ok: boolean, message?: string }>}
 */
export async function submitToContact(data, subject = 'New submission - Blood Nexus') {
    const formData = new FormData();
    formData.append('_subject', subject);
    formData.append('_captcha', 'false');

    Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
            formData.append(key, String(value));
        }
    });

    try {
        const res = await fetch(FORM_SUBMIT_URL, {
            method: 'POST',
            body: formData,
        });

        const result = await res.json();

        if (result.success === 'true' || result.success === true || res.ok) {
            return { ok: true };
        }
        return { ok: false, message: result.message || 'Something went wrong' };
    } catch (err) {
        return { ok: false, message: err.message || 'Failed to send' };
    }
}
