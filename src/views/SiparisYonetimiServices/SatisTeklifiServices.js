import * as config from '@/assets/config.js';

export default class SatisTeklifiServices
{

  constructor() {
    this.mesaj = '';
  }
  async getTeklifler(CARI_ID, BAS_TAR, BIT_TAR)
  {
    var arr = [];
    try
    {
      const options =
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
        body: JSON.stringify(),
      };
      const res = await fetch(config.API_LOCATION + "SatisTeklifi/getTeklifler?CARI_ID=" + CARI_ID.replace('"', '') + "&BAS_TAR=" + BAS_TAR + "&BIT_TAR=" + BIT_TAR, options);
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
      const res = await fetch(config.API_LOCATION + "SatisTeklifi/getMalzemeler?CAT_ID=" + CAT_ID + "&MARKA_ID=" + MARKA_ID, options);
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
  async SiparisineDonustur(obj)
  {
    var arr = [];
    try
    {
      const options =
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
        body: JSON.stringify(obj),
      };
      const res = await fetch(config.API_LOCATION + "SatisTeklifi/SiparisineDonustur", options);
      if (!res.ok)
      {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      arr = await res.json();
      if (arr == "OK") {
        return true;
      }
      else if (data == "FAIL") {
        return false;
      }
      else {
        this.mesaj = data;
        return false;
      }
    }
    catch (err)
    {
      console.log(err.message);
    }
    return arr;
  }

  async Edit(REV_ID)
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
      const res = await fetch(config.API_LOCATION + "SatisTeklifi/Edit?REV_ID=" + REV_ID, options);
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
  async Aktifet(model)
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
      const res = await fetch(config.API_LOCATION + 'SatisTeklifi/AktifEt', options);
      if (!res.ok)
      {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      if (data == 'OK')
      {
        return true;
      }
      else if (data == "FAIL") {
        return false;
      }
      else {
        this.mesaj = data;
        return false;
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }

  async TeklifOlustur(model)
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
      const res = await fetch(config.API_LOCATION + 'SatisTeklifi/TeklifOlustur', options);
      if (!res.ok) {
        const message = 'An error has occured:${res.status}-${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      if (data == 'OK') {
        return true;

      }
      else if(data=="FAIL")
      {
       return false;
      }
      else
      {
        this.mesaj=data;
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
      const res = await fetch(config.API_LOCATION + 'SatisTeklifi/Update', options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      if (data == 'OK') {
        return true;

      }
      else if (data == "FAIL") {
        return false;
      }
      else {
        this.mesaj = data;
        return false;
      }

    }
    catch (err) {
      console.log(err.message);
    }
  }
  async REVDelete(REV_ID)
  {
    
    try {
      const options =
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + 'SatisTeklifi/REVDelete?ID=' + REV_ID, options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      if (data == 'OK') {
        return true;

      }
      else if (data == "FAIL") {
        return false;
      }
      else {
        this.mesaj = data;
        return false;
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }
  async TEKDelete(REV_ID)
  {
    try {
      const options =
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + 'SatisTeklifi/TEKDelete?ID=' + REV_ID, options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      if (data == 'OK') {
        return true;

      }
      else if (data == "FAIL") {
        return false;
      }
      else {
        this.mesaj = data;
        return false;
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }
  async GuncelKurlariGetir(DOV_ID)
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
}

/*
kullanım örneği
import RestResource from './services/RestResource';
const restResourceService = new RestResource();
restResourceService.sendRequest();
*/
