import axios from 'axios';

const API_URL = "https://localhost:7097/api/Properties"; 

export const fetchProperties = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // The list of properties
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};
