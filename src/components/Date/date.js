export const getDate = () => {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = today.getDate();
    const hour = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2,'0');
    
    return (`${month}/${date}/${year} - ${hour}:${minutes}`);
};
  

