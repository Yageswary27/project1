import axios from 'axios';

const API_URL = 'http://localhost:8000';  // Update with your FastAPI server URL
const API_TOKEN = 'test-token';  // In production, this should be handled securely

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const fetchReport = async (reportType: 'overall' | 'developer') => {
  try {
    const response = await api.get('/', {
      params: { report_type: reportType }
    });
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.detail || 'Failed to fetch report');
    }
    throw error;
  }
};