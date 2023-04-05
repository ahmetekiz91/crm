import * as config from '@/assets/config.js';

export default class SatisSiparisiServices
{
  async GuncelKurlariGetir(DOV_ID) {
    var arr = [];
    try {
      const options =
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
        body: JSON.stringify(),
      };
      const res = await fetch(config.API_LOCATION + "KurServisi/GuncelKurlariGetir?DOV_ID=" + DOV_ID, options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      arr = await res.json();
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async getSiparisler(CARI_ID, BAS_TAR, BIT_TAR)
  {
    var arr = [];
    try
    {

      var obj = {};
      obj.PRM1 = CARI_ID;
      obj.PRM2 = BAS_TAR;
      obj.PRM3 = BIT_TAR;

      const options =
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
        body: JSON.stringify(obj),
      };
      const res = await fetch(config.API_LOCATION + "SatisSiparisi/getSiparisler", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      arr = await res.json();
    }
    catch (err)
    {
      console.log(err.message);
    }
    return arr;
  }
  async getMalzemeler(CAT_ID, MARKA_ID)
  {


    var arr = [];
    try {

      const options =
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
        body: JSON.stringify(),
      };
      const res = await fetch(config.API_LOCATION + "SatisSiparisi/getMalzemeler?CAT_ID=" + CAT_ID + "&MARKA_ID=" + MARKA_ID, options );
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      arr = await res.json();
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }
  
  async Edit(SIP_ID)
  {
    const options =
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
      },
    };
    var arr = [];
    try
    {
      const res = await fetch(config.API_LOCATION + "SatisSiparisi/Edit?REV_ID=" + SIP_ID, options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      arr = await res.json();
    }
    catch (err)
    {
      console.log(err.message);
    }
    return arr;
  }
  
  async SiparisOlustur(model)
  {
    try
    {
      const options =
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
        body: JSON.stringify(model),
      };
      const res = await fetch(config.API_LOCATION + 'SatisSiparisi/Create', options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      if (data == 'OK') {
        return true;

      }
      else {
        return false;
      }

    }
    catch (err) {
      console.log(err.message);
    }
  }
  async Update(model)
  {
    try
    {
      const options =
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
        body: JSON.stringify(model),
      };
      const res = await fetch(config.API_LOCATION + 'SatisSiparisi/Update', options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      if (data == 'OK') {
        return true;

      }
      else {
        return false;
      }

    }
    catch (err) {
      console.log(err.message);
    }
  }
  async Delete(model)
  {
    
    try {
      const options =
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
        body: JSON.stringify(model),
      };
      const res = await fetch(config.API_LOCATION + 'SatisSiparisi/Delete', options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      if (data == 'OK') {
        return true;

      }
      else {
        return false;
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }

}

/*
kullanım örneği
import RestResource from './services/RestResource';
const restResourceService = new RestResource();
restResourceService.sendRequest();
*/
