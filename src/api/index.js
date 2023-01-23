import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const fetchPosts = async () => {
    const { data } = await api.get("/posts");
    return data;
};

export const fetchPost = async (id) => {
    const { data } = await api.get(`/posts/${id}`);
    return data;
};

export const fetchUser = async (id) => {
    const { data } = await api.get(`/users/${id}`);
    return data;
};

export const newPost = async () => {
    const { data } = await api.post(`/posts`);
    return data;
};
