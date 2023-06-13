export const LocalStorage = () => {
  let data = JSON.parse(localStorage.getItem("INNOSCRIPTA_LOGIN") || "{}");
  return Object.values(data).length > 0 ? true : false;
};