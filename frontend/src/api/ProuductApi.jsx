import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || "https://e-commerce-fullstack-ih10.onrender.com"

export const getAllProducts = async () => {
    try {
        const res = await axios.get(`${API_URL}/products`)
        return res.data.products
    } catch (error) {
        throw error
    }
}

export const productsById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/products/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}