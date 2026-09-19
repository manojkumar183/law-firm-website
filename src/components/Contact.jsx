import { useState } from 'react';
import { useInView } from '../hooks/useInView.js';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const REQUIRED_FIELDS = ['fullName', 'email', 'subject', 'message'];

const FIELD_CLASS =
  'mt-2 w-full border border-white/15 bg-navy-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-gold-500';

// Contact section: validates required fields locally and presents a no-backend success state.
function Contact() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: '' }));
    }
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = REQUIRED_FIELDS.reduce((result, field) => {
      if (!form[field].trim()) result[field] = 'This field is required.';
      return result;
    }, {});

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(INITIAL_FORM);
    }
  };

  const renderError = (field) =>
    errors[field] ? <p className="mt-2 text-sm text-red-300">{errors[field]}</p> : null;

  return (
    <section id="contact" ref={sectionRef} className="scroll-mt-20 bg-navy-900 py-24 sm:py-32">
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 lg:px-12 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">Contact</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Let&apos;s discuss your case.
            </h2>
            <p className="mt-6 leading-7 text-white/60">
              Share a few details and our office will respond within one business day. Initial
              consultations are confidential and free of charge.
            </p>

            <address className="mt-10 space-y-6 not-italic">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Office</p>
                <p className="mt-2 text-white/75">Office No. 01, Ground Floor, Plot No B-5, Sector-20<br />Nerul, Navi Mumbai, MH 400706</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Phone</p>
                <a href="tel:+12125550184" className="mt-2 inline-block text-white/75 hover:text-white">+91 9272757595</a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Email</p>
                <a href="mailto:marcus@gaikwadlaw.com" className="mt-2 inline-block text-white/75 hover:text-white">marcus@gaikwadlaw.com</a>
              </div>
            </address>
          </div>

          <form onSubmit={handleSubmit} noValidate className="border border-white/10 bg-navy-800 p-6 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-sm font-medium text-white/80">
                Full Name <span className="text-gold-500">*</span>
                <input name="fullName" value={form.fullName} onChange={handleChange} className={FIELD_CLASS} placeholder="Jordan Lee" />
                {renderError('fullName')}
              </label>
              <label className="text-sm font-medium text-white/80">
                Email <span className="text-gold-500">*</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} className={FIELD_CLASS} placeholder="jordan@example.com" />
                {renderError('email')}
              </label>
              <label className="text-sm font-medium text-white/80">
                Phone Number
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={FIELD_CLASS} placeholder="(212) 555-0100" />
              </label>
              <label className="text-sm font-medium text-white/80">
                Subject <span className="text-gold-500">*</span>
                <select name="subject" value={form.subject} onChange={handleChange} className={FIELD_CLASS}>
                  <option value="">Select a practice area</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="criminal-defense">Criminal Defense</option>
                  <option value="notary">Notary</option>
                  <option value="other">Other</option>
                </select>
                {renderError('subject')}
              </label>
            </div>

            <label className="mt-6 block text-sm font-medium text-white/80">
              Message <span className="text-gold-500">*</span>
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" className={`${FIELD_CLASS} resize-none`} placeholder="Tell us briefly how we can help." />
              {renderError('message')}
            </label>

            <button type="submit" className="mt-7 w-full bg-gold-500 px-7 py-4 font-semibold text-navy-950 transition-colors hover:bg-gold-400 sm:w-auto">
              Request Consultation
            </button>

            {submitted && (
              <p role="status" className="mt-5 border-l-2 border-gold-500 pl-4 text-sm text-white/75">
                Thank you. Your message has been received and our office will be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
