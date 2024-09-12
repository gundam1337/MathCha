import axios from "axios";
import https from "https";

interface GoogleAuthResponse {
  authUrl: string;
}

interface GoogleAuthError {
  message: string;
}

// Create an axios instance with custom configuration
const api = axios.create({
  baseURL: "https://localhost:3000", // Adjust this URL as needed
  timeout: 5000, // 5 seconds timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export const initiateGoogleAuth = async (): Promise<{
  authUrl: string | null;
  error: string | null;
}> => {
  try {
    //The frontend triggers a request to my backend to initiate the OAuth process
    const response = await api.get<GoogleAuthResponse>("/api/auth/google");
    return { authUrl: response.data.authUrl, error: null };
  } catch (error) {
    console.error("Error initiating Google OAuth:", error);
    let errorMessage = "Failed to connect. Please try again.";

    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        errorMessage =
          "Request timed out. Please check your network connection and try again.";
      } else if (error.response) {
        // If it's an axios error with a response, use the error message from the server
        errorMessage =
          (error.response.data as GoogleAuthError).message || errorMessage;
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage =
          "No response received from server. Please try again later.";
      }
    }

    return { authUrl: null, error: errorMessage };
  }
};
