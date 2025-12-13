import { describe, it, expect } from 'vitest';

describe('EmailJS Configuration', () => {
  it('should have EmailJS environment variables defined', () => {
    expect(import.meta.env.VITE_EMAILJS_PUBLIC_KEY).toBeDefined();
    expect(import.meta.env.VITE_EMAILJS_SERVICE_ID).toBeDefined();
    expect(import.meta.env.VITE_EMAILJS_TEMPLATE_ID).toBeDefined();
    
    expect(import.meta.env.VITE_EMAILJS_PUBLIC_KEY).not.toBe('');
    expect(import.meta.env.VITE_EMAILJS_SERVICE_ID).not.toBe('');
    expect(import.meta.env.VITE_EMAILJS_TEMPLATE_ID).not.toBe('');
  });
});
