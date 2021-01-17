import axios from 'axios';
 const api = axios.create({
     baseURL: 'http://10.0.2.2:3333'
 });
 export default api;

 /**
  * iOS com Emulador: localhost
  * iOS com dispositivo físico: IP da máquina 
  * Android com Emulador: 
  */