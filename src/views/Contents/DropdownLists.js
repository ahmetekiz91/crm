import * as config from '@/assets/config.js';

export default class DropdownLists
{
  async ddl_Vardiyalar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Vardiyalar", options);
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
  async ddl_Tablolar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Tablolar", options);
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
  async ddl_TabloParams(P1)
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_TabloParams?P1=" + P1, options);
      if (!res.ok)
      {
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
  async ddl_CariPlasiyerler(CARI_ID)
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_CariPlasiyerler?CARI_ID=" + CARI_ID, options);
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
  async ddl_VardiyaDetay(ist_id)
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_VardiyalarDetay?ist_id=" + ist_id, options);
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
  async ddl_VardiyaDetay()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_VardiyaDetay", options);
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
  async ddl_Ulkeler()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Ulkeler", options);
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
  async ddl_Tedarikciler()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Tedarikciler", options);
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
  async ddl_Plasiyerler()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Plasiyerler", options);
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

  async ddl_Personeller()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Personeller", options);
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
  async ddl_Operasyonlar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Operasyonlar", options);
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
  async ddl_Odeme_Turleri()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Odeme_Turleri", options);
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
  async ddl_MasrafMerkezleri()
  {
    var arr = [];

    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_MasrafMerkezleri", options);
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
  async ddl_Masraflar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Masraflar", options);
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
  async ddl_Masraf_Fis_Turleri()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Masraf_Fis_Turleri", options);
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
  async ddl_Markalar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Markalar", options);
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
  async ddl_Malzemeler()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Malzemeler", options);
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
  async ddl_Malz_Har_Bir(Malz_ID)
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Malz_Har_Bir?Malz_ID=" + Malz_ID, options);
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
  async ddl_Malz_Birimler(Malz_ID)
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Malz_Birimler?Malz_ID=" + Malz_ID, options);
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
  async ddl_Kullanıcılar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Kullanıcılar", options);
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
  async ddl_Kredi_Banka_Hesaplar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Kredi_Banka_Hesaplar", options);
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
  async ddl_Kategoriler()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Kategoriler", options);
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
  async ddl_Kasalar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Kasalar", options);
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
  async ddl_KasaÇekSenetFisTurleri()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_KasaÇekSenetFisTurleri", options);
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
  async ddl_Istasyonlar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Istasyonlar", options);
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
  async ddl_Iller()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Iller", options);
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
  async ddl_HIZMETLER()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_HIZMETLER", options);
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
  async ddl_HIZMET_BIRIMLER(Malz_ID)
  {

    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_HIZMET_BIRIMLER?Malz_ID=" + Malz_ID, options);
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
  async ddl_Hatlar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Hatlar", options);
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
  async ddl_GiderHesaplari()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_GiderHesaplari", options);
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
  async ddl_Depolar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Depolar", options);
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
  async ddl_Departmanlar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Departmanlar", options);
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
  async ddl_CekSenetTurleri()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_CekSenetTurleri", options);
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
  async ddl_CekSenetFisTurleri()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_CekSenetFisTurleri", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr= data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }
  async ddl_CARIGRUPLAR()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_CARIGRUPLAR", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr= data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }
  async ddl_BORDROBORCLU()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_BORDROBORCLU", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async ddl_Bolgeler()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Bolgeler", options);
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

  async ddl_Birimler()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Birimler", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async ddl_Bankalar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Bankalar", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async ddl_BANKAISLEMTURLERI()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_BANKAISLEMTURLERI", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async ddl_BankaHesaplarID(TUR_ID)
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_BankaHesaplarID?TUR_ID=" + TUR_ID, options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr= data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async ddl_BankaHesaplar()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_BankaHesaplar", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async ddl_Banka_Hesaplari(BNK_ID)
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Banka_Hesaplari?BNK_ID=" + BNK_ID, options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async ddl_Banka_Fis_Turleri()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Banka_Fis_Turleri", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async ddl_Attributes() {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Attributes", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async ddl_Cariler()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Cariler", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async ddl_CariHesapTurleri()
  {
    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_CariHesapTurleri", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }
      const data = await res.json();
      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async ddl_Dovizler()
  {

    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_Dovizler", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }

      const data = await res.json();

      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async ddl_TESLIMAT_TURU()
  {

    var arr = [];
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "Content/ddl_TESLIMAT_TURU", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }

      const data = await res.json();

      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

  async Fiche_No()
  {

    var arr = "";
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
      };
      const res = await fetch(config.API_LOCATION + "SATISFATURA/Fiche_No", options);
      if (!res.ok) {
        const message = 'An error has occured: ${res.status} - ${res.statusText}';
        throw new Error(message);
      }

      const data = await res.json();
      console.log(data);
      arr = data;
    }
    catch (err) {
      console.log(err.message);
    }
    return arr;
  }

async BORDRONO()
{

  var arr = "";
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
      },
    };
    const res = await fetch(config.API_LOCATION + "SATISFATURA/BORDRONO", options);
    if (!res.ok) {
      const message = 'An error has occured: ${res.status} - ${res.statusText}';
      throw new Error(message);
    }

    const data = await res.json();
    console.log(data);
    arr = data;
  }
  catch (err) {
    console.log(err.message);
  }
  return arr;
}
}
