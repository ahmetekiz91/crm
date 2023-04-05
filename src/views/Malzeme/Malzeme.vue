
<template>
  <div class='content-wrapper'>
    <div class='container-fluid'>
      <div class='col-12'>
        <div class='card mt-2'>
          <div class='card-header'>
            <div class='row'>
              <div class='col-5'>
                <button type='button' class='btn btn-primary btn-sm' v-if="1>2" data-toggle='modal' data-target='#modal-xl' @click='Temizle()'>
                  <i class='fa fa-plus'></i> Malzeme Ekle
                </button>
              </div>
              <div class='col-4'><h3 class=''><b>Malzeme</b> </h3> </div>
              <div class='col-3'></div>
            </div>
          </div>

          <div class='card-body'>
            <table id='example1' class='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>Kategori</th>
                  <th>Malzeme Kodu</th>
                  <th>Malzeme İsim</th>
                  <th>Depo</th>
                  <th>Ağırlık</th>
                  <th>En</th>
                  <th>Boy</th>
                  <th>Yükseklik</th>
                  <th>EAN</th>
                  <th>GTIP</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for='(n,index) in MalzemeList'>
                  <td>{{n.CAT_ADI}}</td>
                  <td>{{n.MALZ_KODU}}</td>
                  <td>{{n.MALZ_ISIM}}</td>
                  <td>{{n.Depo_Adi}}</td>
                  <td>{{n.AGIRLIK}}</td>
                  <td>{{n.EN}}</td>
                  <td>{{n.BOY}}</td>
                  <td>{{n.YUKSEKLIK}}</td>
                  <td>{{n.EAN}}</td>
                  <td>{{n.GTIP}}</td>
                  <td>
                    <a class='btn btn-danger btn-sm sil text-white' @click='Delete(n.MALZ_ID,index)'><i class='fas fa-trash'></i>Sil</a>
                    <a class='btn btn-primary btn-sm edit text-white' data-toggle='modal' data-target='#modal-xl' @click='Edit(n.MALZ_ID,index)'><i class='fas fa-edit'></i>Güncelle</a>
                  </td>
                </tr>

              </tbody>

            </table>
          </div>

        </div>


      </div>

      <div class='modal fade' id='modal-xl'>
        <div class='modal-dialog modal-xl'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h4 class='modal-title'>{{ model.MALZ_ID==null?'Malzeme Ekle':'Malzeme Düzenle' }}</h4>
              <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <div class='row'>
                <!-- left column -->
                <div class='col-md-12'>
                  <!-- general form elements -->
                  <div class='card card-primary'>
                    <div class='card-header'>
                      <h3 class='card-title'> Malzeme Üst Bilgiler</h3>
                    </div>
                    <div class=''>
                      <div class='card-body'>
                        <div class="row">
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='MALZ_KAT_ID'>Kategori</label>
                              <select class="custom-select custom-select-sm" v-model="model.MALZ_KAT_ID">
                                <option v-for="(n) in KategoriList" v-bind:value="n.Key">
                                  {{n.Value}}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='MALZ_KODU'>Malzeme Kodu</label>
                              <input type='hidden' v-model='model.MALZ_ID' class='form-control form-control-sm' placeholder='MALZ_ID'>
                              <input type='text' v-model='model.MALZ_KODU' class='form-control form-control-sm' placeholder='Malzeme Kodu'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='MALZ_ISIM'>Malzeme İsim</label>
                              <input type='text' v-model='model.MALZ_ISIM' class='form-control form-control-sm' placeholder='Malzeme Adı'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='BRM_ID'>Birim</label>
                              <select class="custom-select custom-select-sm" v-model="model.BRM_ID">
                                <option v-for="(n) in BirimList" v-bind:value="n.Key">
                                  {{n.Value}}
                                </option>
                              </select>


                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='DEPO_ID'>Depo</label>

                              <select class="custom-select custom-select-sm" v-model="model.DEPO_ID">
                                <option v-for="(n) in DepoList" v-bind:value="n.Key">
                                  {{n.Value}}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='MARKA_ID'>Marka</label>
                              <select class="custom-select custom-select-sm" v-model="model.MARKA_ID">
                                <option v-for="(n) in MarkaList" v-bind:value="n.Key">
                                  {{n.Value}}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='EAN'>EAN Kodu</label>
                              <input type='text' v-model='model.EAN' class='form-control form-control-sm' placeholder='EAN Kodu'>
                            </div>
                          </div>
                          <div class="col-sm-3">

                            <div class='form-group'>
                              <label for='FIRMA_KODU'>Üretici Kodu</label>
                              <input type='text' v-model='model.FIRMA_KODU' class='form-control form-control-sm' placeholder='Üretici Kodu'>
                            </div>
                          </div>

                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='GTIP'>GTIP Kodu</label>
                              <input type='text' v-model='model.GTIP' class='form-control form-control-sm' placeholder='GTIP Kodu'>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                        <div class='card card-primary'>
                          <div class='card-header'>
                            <h3 class='card-title'> {{ 'Malzeme Alt Bilgiler' }}</h3>
                          </div>
                          <div class=''>
                            <div class='card-body'>

                              <div class="row">
                                <div class="col-sm-3">
                                  <div class='form-group'>
                                    <label for='AGIRLIK'>Ağırlık</label>
                                    <input type='text' v-model='model.AGIRLIK' class='form-control form-control-sm' placeholder='AGIRLIK'>
                                  </div>
                                </div>
                                <div class="col-sm-3">
                                  <div class='form-group'>
                                    <label for='EN'>En</label>
                                    <input type='text' v-model='model.EN' class='form-control form-control-sm' placeholder='EN'>
                                  </div>
                                </div>
                                <div class="col-sm-3">
                                  <div class='form-group'>
                                    <label for='BOY'>Boy</label>
                                    <input type='text' v-model='model.BOY' class='form-control form-control-sm' placeholder='BOY'>
                                  </div>
                                </div>
                                <div class="col-sm-3">
                                  <div class='form-group'>
                                    <label for='YUKSEKLIK'>Yükseklik</label>
                                    <input type='text' v-model='model.YUKSEKLIK' class='form-control form-control-sm' placeholder='YUKSEKLIK'>
                                  </div>
                                </div>
                              </div>

                              <div class="row">
                                <div class="col-sm-3">
                                  <div class='form-group'>
                                    <label for='OZELKOD'>ÖzelKod</label>
                                    <input type='text' v-model='model.OZELKOD' class='form-control form-control-sm' placeholder='OZELKOD'>
                                  </div>
                                </div>
                                <div class="col-sm-3">
                                  <div class='form-group'>
                                    <label for='OZELKOD2'>ÖzelKod2</label>
                                    <input type='text' v-model='model.OZELKOD2' class='form-control form-control-sm' placeholder='OZELKOD2'>
                                  </div>
                                </div>
                                <div class="col-sm-3">
                                  <div class='form-group'>
                                    <label for='OZELKOD3'>ÖzelKod3</label>
                                    <input type='text' v-model='model.OZELKOD3' class='form-control form-control-sm' placeholder='OZELKOD3'>
                                  </div>
                                </div>
                                <div class="col-sm-3">
                                  <div class='form-group'>
                                    <label for='OZELKOD4'>ÖzelKod4</label>
                                    <input type='text' v-model='model.OZELKOD4' class='form-control form-control-sm' placeholder='OZELKOD4'>
                                  </div>
                                </div>
                                <div class="col-sm-3">
                                  <div class='form-group'>
                                    <label for='OZELKOD5'>ÖzelKod5</label>
                                    <input type='text' v-model='model.OZELKOD5' class='form-control form-control-sm' placeholder='OZELKOD5'>
                                  </div>
                                </div>
                              </div>
                              <div class="row">

                                <div class="col-sm-6">
                                  <table class="table table-striped">

                                    <thead>
                                      <tr>
                                        <th>
                                        </th>
                                        <th>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td style="width:50%;">Alış Grubu</td>
                                        <td style="width:50%;">     <input type='checkbox' v-model='model.ALIS_GRUBUMU'></td>
                                      </tr>
                                      <tr>
                                        <td style="width:50%;">Satış Grubu</td>
                                        <td style="width:50%;">     <input type='checkbox' v-model='model.SATIS_GRUBUMU'></td>
                                      </tr>
                                      <tr>
                                        <td style="width:50%;">Yarı Mamül</td>
                                        <td style="width:50%;">     <input type='checkbox' v-model='model.YMAMUL'></td>
                                      </tr>
                                      <tr>
                                        <td style="width:50%;">Son Ürün</td>
                                        <td style="width:50%;">     <input type='checkbox' v-model='model.SONURUN'></td>
                                      </tr>
                                      <tr>
                                        <td style="width:50%;">Sarf Malzeme</td>
                                        <td style="width:50%;">     <input type='checkbox' v-model='model.SARF'></td>
                                      </tr>
                                    </tbody>
                                  </table>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
              </div>
            </div>
            <div class='modal-footer justify-content-between'>
              <button type='button' class='btn btn-danger' data-dismiss='modal'>Kapat</button>
              <button type='button' class='btn btn-primary' v-on:click='(model.MALZ_ID==null?Save():Update())'>Kaydet</button>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import * as config from '@/assets/config.js';
  export default
  {
      name: 'Malzeme',
      data() {
        return {
          model: {
            MALZ_ID: null,
            MALZ_KODU: '',
            CDATE: '',
            CUSR_ID: '',
            MALZ_ISIM: '',
            DEPO_ID: '',
            AGIRLIK: '',
            EN: '',
            BOY: '',
            YUKSEKLIK: '',
            SABLON_MU: '',
            OZELKOD: '',
            OZELKOD2: '',
            OZELKOD3: '',
            OZELKOD4: '',
            OZELKOD5: '',
            ALIS_GRUBUMU: '',
            SATIS_GRUBUMU: '',
            MALZ_KAT_ID: '',
            EAN: '',
            FIRMA_KODU: '',
            BRM_ID: '',
            TEKLIF_GRUP_ID: '',
            PARENT_MI: '',
            MALZ_ISIM_ENG: '',
            MARKA_ID: '',
            GTIP: '',
            DOVIZ_ID: '',
            SATIS_FIYAT: '',
            ISKONTO: '',
            ISKONTO2: '',
            ISKONTO3: '',
            ISKONTO4: '',
            RECETE_GRUP_ID: '',
            YMAMUL: '',
            SONURUN: '',
            SARF: '',

          },
          MalzemeList: [],
          MarkaList: [],
          BirimList: [],
          DepoList: [],
          KategoriList: [],
        }
      },
      created() {
        this.token();
        this.List();
      },
      mounted: function ()
      {
        
      
        this.ddl_Birimler();
        this.ddl_Depolar();
        this.ddl_Kategoriler();
        this.ddl_Markalar();
      },
  
      computed:
      {
      
      },
      filters: {
      },
      methods:
      {
        async token()
        {
          try {
            const options = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            };
            const res = await fetch(config.API_URL + '/token?token=' + this.$store.state.auth.user.token, options);
            if (!res.ok) {
              const message = 'An error has occured: ${res.status} - ${res.statusText}';
              //   console.log(message);
              return false;
            }

            const data = await res.json();
       
            if (data == "ok") {
              return true
            } else {
            
              this.$store.dispatch('auth/logout');
              this.$router.push('/login');
              return false;
            }

          } catch (err) {
            console.log(err.message);
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
          }
          this.$store.dispatch('auth/logout');
          this.$router.push('/login');
          return false;
        },

        async ddl_Birimler() {
          try
          {
            const options = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.$store.state.auth.user.token
              },
            };
            const res = await fetch(config.API_LOCATION + 'Content/ddl_Birimler', options);
            if (!res.ok) {
              const message = 'An error has occured: ${res.status} - ${res.statusText}';
              throw new Error(message);
            }
            const data = await res.json();
            this.BirimList = data;

          } catch (err) {
            console.log(err.message);
          }
        },
        async ddl_Kategoriler()
        {
          try {
            const options = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.$store.state.auth.user.token
              },
            };
            const res = await fetch(config.API_LOCATION + 'Content/ddl_Kategoriler', options);
            if (!res.ok) {
              const message = 'An error has occured: ${res.status} - ${res.statusText}';
              throw new Error(message);
            }
            const data = await res.json();
            this.KategoriList = data;

          } catch (err) {
            console.log(err.message);
          }
        },
        async ddl_Markalar()
        {
          try {
            const options = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.$store.state.auth.user.token
              },
            };
            const res = await fetch(config.API_LOCATION + 'Content/ddl_Markalar', options);
            if (!res.ok) {
              const message = 'An error has occured: ${res.status} - ${res.statusText}';
              throw new Error(message);
            }
            const data = await res.json();
            this.MarkaList = data;

          } catch (err) {
            console.log(err.message);
          }
        },
        async ddl_Depolar()
        {
          try
          {
            const options = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.$store.state.auth.user.token
              },
            };
            const res = await fetch(config.API_LOCATION + 'Content/ddl_Depolar', options);
            if (!res.ok) {
              const message = 'An error has occured: ${res.status} - ${res.statusText}';
              throw new Error(message);
            }
            const data = await res.json();
            this.DepoList = data;

          } catch (err) {
            console.log(err.message);
          }
        },
        async Temizle() {
          this.model = {};
        },
        async Save()
        {
         //try {
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.$store.state.auth.user.token
              },
              body: JSON.stringify(this.model),
            };

            const res = await fetch(config.API_LOCATION + 'Malzeme', options);
            if (!res.ok)
            {
             // const message = 'An error has occured: ${res.status} - ${res.statusText}';
             // throw new Error(message);
            }
            const data = await res.json();
            if (data == 'OK') {
              this.List();
              this.$dialog.alert('Eklendi');
            }
            else {
              this.$dialog.alert('Hata Oluştu');
            }

         // } catch (err) {
         //   console.log(err.message);
         // }
        },
        async Edit(MALZ_ID) {
          const options =
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
          };
          try {
            const res = await fetch(config.API_LOCATION + 'Malzeme?ID=' + MALZ_ID, options);
            if (!res.ok) {
              const message = 'An error has occured: ${res.status} - ${res.statusText}';
              throw new Error(message);
            }
            const data = await res.json();
            this.model = data;

          } catch (err) {
            console.log(err.message);

          }
        },
        async Update() {
          try {
            const options = {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.$store.state.auth.user.token
              },
              body: JSON.stringify(this.model),
            };

            const res = await fetch(config.API_LOCATION + 'Malzeme', options);
            if (!res.ok) {
              const message = 'An error has occured: ${res.status} - ${res.statusText}';
              throw new Error(message);
            }
            const data = await res.json();
            if (data == 'OK') {
              this.List();
              this.$dialog.alert('Bilgiler güncellendi');
              return;
            } else {
              this.$dialog.alert('Hata Oluştu');
            }
          } catch (err) {
            console.log(err.message);

          }
        },
        async List() {
          try {
            const options = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.$store.state.auth.user.token
              },
            };
            const res = await fetch(config.API_LOCATION + 'Malzeme', options);
            if (!res.ok) {
              const message = 'An error has occured: ${res.status} - ${res.statusText}';
              throw new Error(message);
            }
            const data = await res.json();
            if (data.length > 0) {
              this.MalzemeList = data;

            }
            setTimeout(
              function () {
                $('#example1').dataTable({
                  'pageLength': 50,
                  'bProcessing': true,
                  'responsive': true,
                  'bPaginate': true,
                  'bLengthChange': false,
                  'bFilter': true,
                  'bSort': false,
                  'destroy': true,
                  'bInfo': false,
                  'processing': true,
                  'aaSorting': [[0, 'desc']],
                  'initComplete': function () {
                    setTimeout(function () {
                      $('#preloader1').remove();
                      $('#preloader').remove();
                    }, 200)
                  },
                  oLanguage: {
                    'sSearch': 'Ara:',
                    'oPaginate': {
                      'sPrevious': 'Önceki',
                      'sNext': 'Sonraki',
                      'sFirst': 'İlk',
                      'sLast': 'Son'
                    },
                    'sEmptyTable': 'Herhangi Bir Veri Bulunamadı',
                  },
                });

              }
              , 1000);
          } catch (err) {
            console.log(err.message);
          }
        },
        async Deletemethod(MALZ_ID, index)
        {
          try
          {
            const options = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.$store.state.auth.user.token
              },
            };
            const res = await fetch(config.API_LOCATION + 'Malzeme?ID=' + MALZ_ID, options);
            if (!res.ok) {
              const message = 'An error has occured: ${res.status} - ${res.statusText}';
              throw new Error(message);
            }
            const data = await res.json();
            if (data == "OK")
            {
              this.MalzemeList.splice(index, 1);
              this.$dialog.alert('Bilgiler silindi!')
            }
            else {
              this.$dialog.alert('Hata oluştu!')
            }
          } catch (e) {

          }
        },
        async Delete(MALZ_ID, index) {
          this.$dialog.confirm('Bu kaydı silmek istediğinizden emin misiniz',
          {
            okText: "Evet",
            cancelText: 'Hayır'
          }).then((dialog) => { // change function to arrow syntax
            this.Deletemethod(MALZ_ID, index);
          })
            .catch(function (err) {
              //this.$dialog.alert('Hata oluştu!');
              console.log(err.message);
            })
        }
      }
    }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

