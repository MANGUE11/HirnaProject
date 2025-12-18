// ============================================
// HIRNA - Configuration API
// ============================================

import { API_CONFIG } from '../constants';

// Base URL de l'API
const BASE_URL = `${API_CONFIG.baseURL}/${API_CONFIG.version}`;

/**
 * Fonction utilitaire pour les requêtes API
 * @param {string} endpoint - L'endpoint de l'API
 * @param {object} options - Options de fetch
 * @returns {Promise} - Réponse de l'API
 */
export const apiRequest = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    // Le token sera ajouté ici quand l'auth sera implémentée
    // 'Authorization': `Bearer ${getAuthToken()}`,
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error('API Error:', error);
    return { data: null, error: error.message };
  }
};

// Méthodes HTTP simplifiées
export const api = {
  get: (endpoint) => apiRequest(endpoint, { method: 'GET' }),
  
  post: (endpoint, body) => apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
  }),
  
  put: (endpoint, body) => apiRequest(endpoint, {
    method: 'PUT',
    body: JSON.stringify(body),
  }),
  
  patch: (endpoint, body) => apiRequest(endpoint, {
    method: 'PATCH',
    body: JSON.stringify(body),
  }),
  
  delete: (endpoint) => apiRequest(endpoint, { method: 'DELETE' }),
};

export default api;
