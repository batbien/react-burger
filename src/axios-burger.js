import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = "https://burger-9b94d.firebaseio.com/";

export default instance;
