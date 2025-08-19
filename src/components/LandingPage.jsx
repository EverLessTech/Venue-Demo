import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import GallerySection from './GallerySection';
import TestimonialsSection from './TestimonialsSection';
import FinalCTASection from './FinalCTASection';
import { handleCreateSubscriber } from '../helpers/mailerlite';

const LandingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    weddingDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitToMailerlite = async (data) => {
    console.log('Submitting to Mailerlite:', data);
    await handleCreateSubscriber(data);
    return { success: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitToMailerlite(formData);
      navigate('/thank-you');
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-amber-50">
      <HeroSection 
        formData={formData}
        setFormData={setFormData}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
      />
      
      <GallerySection />
      
      <TestimonialsSection />
      
      <FinalCTASection 
        formData={formData}
        setFormData={setFormData}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default LandingPage;



/**
 * server/mailerlite/subscribe.js
 *
 * Node.js helper to subscribe a user to a specific MailerLite (Classic v2) group.
 *
 * IMPORTANT: Run server-side only. Never expose your API key in browser code.
 *
 * Env vars:
 *   - MAILERLITE_API_KEY  (required)
 *   - MAILERLITE_GROUP_ID (required)
 *
 * Usage (server route example):
 *   import { subscribeToMailerLite } from "./server/mailerlite/subscribe.js";
 *   const result = await subscribeToMailerLite(name, email, weddingDate);
 */

/** Format a date-like input to `YYYY-MM-DD` (UTC). */
function toYMD(dateInput) {
  const d = new Date(dateInput);
  if (Number.isNaN(d.getTime())) return undefined; // why: avoid sending invalid date to API
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/** Centralized fetch with timeout. */
async function httpPostJson(url, body, headers, timeoutMs = 10000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", ...headers },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    const text = await res.text();
    let data;
    try { data = text ? JSON.parse(text) : undefined; } catch { data = text; }
    return { ok: res.ok, status: res.status, data };
  } finally {
    clearTimeout(timeout);
  }
}
