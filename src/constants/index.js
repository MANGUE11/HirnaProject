// ============================================
// HIRNA - Constantes Globales
// ============================================

// Couleurs du thème HIRNA
export const COLORS = {
  orange: '#C76E1E',
  dark: '#100F20',
  purple: '#433F86',
  green: '#31C247',
  navy: '#191536',
  gray: '#949494',
  white: '#FFFFFF',
};

// Gradients
export const GRADIENTS = {
  leftToRight: 'linear-gradient(to right, #100F20, #433F86)',
  topToBottom: 'linear-gradient(to bottom, #433F86, #100F20)',
  navyToOrange: 'linear-gradient(to bottom, #191536, #C76E1E)',
};

// Configuration API (sera utilisée plus tard)
export const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  version: process.env.REACT_APP_API_VERSION || 'v1',
  timeout: 30000,
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'À propos', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

// Social Media Links (à personnaliser)
export const SOCIAL_LINKS = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
  linkedin: '#',
};

// Breakpoints (correspondant à Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};
