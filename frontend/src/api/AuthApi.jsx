import axios from "axios";

const API_URL = import.meta.env.VITE_AUTH_API_URL || "https://new-e-commerce-1-yejm.onrender.com/auth";

export const registerUser = async (userData) => {
    try {
        const res = await axios.post(`${API_URL}/register`, userData)

        return res.data
    } catch (error) {
        throw new Error(error.res?.data?.message || "Registration failed")
    }
}

export const loginUser = async (userData) => {
    try {
        const res = await axios.post(`${API_URL}/login`, userData)
        return res.data
    } catch (error) {
        throw new Error(error.res?.data?.message || "Login Failed");
    }
}

export const logoutUser = async () => {
    try {
        const res = await axios.post(`${API_URL}/logout`);
        return res.data
    } catch (error) {
        throw new Error(error.res?.data?.message || "Logout Failed");
    }
}