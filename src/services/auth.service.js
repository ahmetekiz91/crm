
import  config from '@/assets/config.js';
const API_URL = 'http://localhost:8080/api/auth/';

class AuthService
{
  async taketokenfromapi()
  {
    var model = {
      "Username": "mnerpapiuser",
      "Password": "Ahmet2022.."
    }
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      };
      const res = await fetch(config.API_URL+"/token?Username=mnerpapiuser&Password=Ahmet2022..", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      console.log(data);
      return data;


    } catch (err) {
      console.log(err.message);

      return null;
    }
  }


  async login(user)
  {

    var token = await this.taketokenfromapi();
 
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(),
      };

      const res = await fetch(config.API_LOCATION + "UserOps/Login?username=" + user.USERN + "&password=" + user.PASS, options);
     
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();

      if (data != 'Empty')
      {
   
        var obj = {};
        obj.USR_ID = data.USR_ID;
        obj.NAME = data.NAME;
        obj.SURNAME = data.SURNAME;
        obj.EMAIL = data.EMAIL;
        obj.PASS = data.PASS;
        obj.USERN = data.USERN;
        obj.token = token;
        localStorage.setItem("user", JSON.stringify(obj));

        return obj;
      }
    } catch (err) {
      console.log(err.message);
    }    
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
