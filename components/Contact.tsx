import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Github, Linkedin, Twitter, Mail, MessageCircleMore } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    // Your WhatsApp number in international format, e.g., 919876543210 (without + or spaces)
    const whatsappNumber = '919817861762';
    // Open WhatsApp with the message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    setStatus('Redirecting to WhatsApp...');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or just want to say hello? Feel free to reach out."
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              I'm currently available for freelance work and open to discussing new projects. You can also find me on social media.
            </p>
            <div className="space-y-4">
              <a href={SOCIAL_LINKS.email} className="flex items-center gap-4 group">
                <Mail className="w-6 h-6 text-indigo-500" />
                <span className="text-lg group-hover:text-indigo-500 transition-colors">ritikgarg2468@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-indigo-500 transition-colors"><Github size={28} /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-indigo-500 transition-colors"><Linkedin size={28} /></a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-500 hover:text-indigo-500 transition-colors"><Twitter size={28} /></a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required className="mt-1 block w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105">
                  Send Message <MessageCircleMore size={18} />
                </button>
              </div>
              {status && <p className="text-center text-green-600 dark:text-green-400">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
