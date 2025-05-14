import axios from "axios";

export const debugCode = async (code) => {
  try {
    const response = await axios.post("https://api.example.com/debug", { code });
    return response.data;
  } catch (error) {
    return { errors: "Failed to debug code" };
  }
};
