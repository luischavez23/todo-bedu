export const getDate = () => {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = today.getDate();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    
    return (`${month}/${date}/${year} - ${hour}:${minutes}`);
};
  

