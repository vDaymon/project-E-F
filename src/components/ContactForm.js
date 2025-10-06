import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { toast } from 'react-toastify';

// Replace this with your Formspree endpoint URL (e.g. https://formspree.io/f/xxxxx)
const FORM_ENDPOINT = 'https://formspree.io/f/your-form-id';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.fullName.trim()) e.fullName = true;
    if (!formData.email.trim()) e.email = true;
    else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(formData.email)) e.email = true;
    if (!formData.phone.trim()) e.phone = true;
    if (!formData.message.trim()) e.message = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error(t.formValidationError || 'Please fix the errors in the form');
      return;
    }

    setLoading(true);
    try {
      const payload = new FormData();
      payload.append('name', formData.fullName);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('message', formData.message);

      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json'
        }
      });

      const contentType = res.headers.get('content-type') || '';
      if (!res.ok) {
        // Try to parse JSON message
        let detail = '';
        if (contentType.includes('application/json')) {
          const data = await res.json();
          detail = data.error || JSON.stringify(data);
        } else {
          detail = await res.text();
        }
        toast.error(t.contactSendError || 'Error sending message. Please try again later.');
        console.error('Formspree error:', detail);
      } else {
        toast.success(t.contactSendSuccess || 'Message sent. We will contact you soon.');
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      }
    } catch (err) {
      console.error('Network error sending form', err);
      toast.error(t.contactSendError || 'Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Other Inquiries Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.otherInquiries}</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t.otherInquiriesDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fullName}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t.fullNamePlaceholder}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.fullName && <p className="text-red-600 text-sm mt-1">{t.fullNameRequired || 'Name is required'}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.emailAddress}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{t.emailInvalid || 'Please enter a valid email'}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.phoneNumber}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.phonePlaceholder}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{t.phoneRequired || 'Phone number is required'}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{t.messageRequired || 'Message is required'}</p>}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-gray-900 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  {loading ? (t.sending || 'Sending...') : t.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
