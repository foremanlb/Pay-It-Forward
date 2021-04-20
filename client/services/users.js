
import api from "./apiConfig";
export const getUsers = async () => {
  try {
    const res = await api.get("/users")
    return res.data;
  } catch (error) {
    throw error
  }
}
export const getUser = async (id) => {
  try {
    let res = await api.get(`/users/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
 
}
export const updatedUser = async (id,user) => {
  try {
    let res = await api.put(`/users/${id}`, user)
    return res.data;
  } catch (error) {
    throw error;
  }
}
export const deleteUser = async (id) => {
  try{
    const token = localStorage.getItem("token")
    let res;
  if (token) {
    res = await api.delete(`/users/${id}`);
  }
  else {
    return res.status(200).send(`${} was deleted`);
  }
  } catch (error) {
    throw error;
  }
  
}

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/users/sign-up",credentials);
    localStorage.setItem("token", resp.data.token);
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credential) => {
  try {
    const resp = await api.post("/users/sign-in", credentials);
    localStorage.setItem("token", resp.data.token);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = await localStorage.getItem("token");
  if (token) {
    const res = await api.get("/users/verify");
    return res.data;
  } else {
    return false;
  }
};
export const changePassword = async () => {
  const token = await localStorage.getItem('token');
  if (token) {
    const res = await api.put("/users/password-change/:id");
    return res.data
  }
  else
    return false
  
}