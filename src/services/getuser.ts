import api from './baseService'

export const getUsers = async () => await api.get(`users`)


export const getUsers2 = async () => {
    const { data } = await api.get(`users`);
    return data.data;
};

export const getSingleUsers = async (id ? : string) => {
    const { data } = await api.get(`todos/${id}`);
    return data.data;
};