export const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    const data = JSON.parse(localStorage.getItem("login_user"));
    return data;
  }
};
