<template>
  <div class='content-wrapper'>
    <div class='container-fluid'>
      <div class='col-12'>
        <div class='card mt-2'>
          <div class='card-header'>
            <div class='row'>
              <div class='col-5'>
                <button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#modal-xl' @click='Temizle()'>
                  <i class='fa fa-plus'></i>Aday Cari Yetkili Ekle
                </button>
              </div>
              <div class='col-4'><h3 class=''><b>Aday Cari Yetkililer</b> </h3> </div>
              <div class='col-3'></div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class='card-body'>
            <div class="row">
              <div class="col-sm-3">
                <div class="form-group">
                  <label>Cari</label>
                  <vue-select class="vue-select1" v-model="filter.INTPRM1" :options="CariList" :reduce="(CariList) => CariList.Key" label="Value">
                  </vue-select>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <label>Cari Kodu veya Cari Ünvanı</label>
                  <input type='text' v-model='filter.PRM2' class='form-control form-control-sm'>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <label>&nbsp;</label>
                  <button type='button' class='btn btn-primary btn-sm btn-block' v-on:click='List()'>Listele</button>

                </div>

              </div>


            </div>
            <div class="table-responsive">
              <table id='example1' class='table table-bordered table-striped'>
                <thead>
                  <tr>
                    <th>Cari</th>
                    <th>Ad</th>
                    <th>Soyad</th>
                    <th>Telefon</th>
                    <th>Email</th>
                    <th>Yetki</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(n,index) in ADAYCARIKISILERList'>
                    <td>{{n.CARI_UNVAN}}</td>
                    <td>{{n.ADI}}</td>
                    <td>{{n.SOYADI}}</td>
                    <td>{{n.TELEFON1}}</td>
                    <td>{{n.EMAIL}}</td>
                    <td>{{n.POZISYON}}</td>
                    <td>
                      <a class='btn btn-danger btn-sm sil text-white' v-if="(n.CARIKARTMI!=1)" @click='Delete(n.Kisi_ID,index)'><i class='fas fa-trash'></i>Sil</a>
                      <a class='btn btn-primary btn-sm edit text-white' v-if="(n.CARIKARTMI!=1)" data-toggle='modal' data-target='#modal-xl' @click='Edit(n.Kisi_ID,index)'><i class='fas fa-edit'></i>Güncelle</a>
                    </td>
                  </tr>

                </tbody>

              </table>
            </div>
            </div>

          </div>


      </div>

      <div class='modal fade' id='modal-xl'>
        <div class='modal-dialog modal-xl'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h4 class='modal-title'>Cari Yetkililer</h4>
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
                      <h3 class='card-title'> {{ model.Kisi_ID==null?'Aday Cari Yetkili Ekle':'Aday Cari Yetkili Düzenle' }}</h3>
                    </div>
                    <div class=''>
                      <div class='card-body'>
                        <div class="row">
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <input type='hidden' v-model='model.Kisi_ID' class='form-control' placeholder='Kisi_ID'>

                              <label for='CARI_ID'>Cari</label>
                     
                              <vue-select class="vue-select1" v-model="model.CARI_ID" :options="CariList" :reduce="(CariList) => CariList.Key" label="Value">
                              </vue-select>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='ADI'>Adı</label>
                              <input type='text' v-model='model.ADI' class='form-control form-control-sm' placeholder='Ad'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='SOYADI'>Soyadı</label>
                              <input type='text' v-model='model.SOYADI' class='form-control form-control-sm' placeholder='Soyad'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for=''>Telefon</label>
                              <input type='text' v-model='model.TELEFON1' class='form-control form-control-sm' placeholder='Telefon'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for=''>Email</label>
                              <input type='text' v-model='model.EMAIL' class='form-control form-control-sm' placeholder='Email'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for=''>Yetki</label>
                              <input type='text' v-model='model.POZISYON' class='form-control form-control-sm' placeholder='Yetki'>
                            </div>
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
              <button type='button' class='btn btn-primary' v-on:click='(model.Kisi_ID==null?Save():Update())'>Kaydet</button>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import * as config from '@/assets/config.js';
  import vs from 'vue-select';
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import 'vue2-datepicker/locale/tr';
  import moment from 'moment';
  export default {
    components: {
      DatePicker,
      "vue-select": vs

    },
    name: 'ADAYCARIKISILER',
    data() {
      return {
        model: {
          Kisi_ID: null,
          CDATE: '',
          UDATE: '',
          USR_ID: '',
          CUSR_ID: '',
          CARI_ID: '',
          ADI: '',
          SOYADI: '',
          TELEFON1: '',
          TELEFON2: '',
          TELEFON3: '',
          EMAIL: '',
          POZISYON: '',

        },
        filter: {
          INTPRM1: null,
          PRM2: '',
        },
        ADAYCARIKISILERList: [],
        CariList: [],
      }
    },
    created() {

      this.List();
      this.ddl_CARILER();
    },
    mounted: function () {
      if (!this.currentUser) {

        this.$router.push('/login');
      }
    },
    computed:
    {
      currentUser() {

        return this.$store.state.auth.user;
      }
    },
    filters: {
    },
    methods:
    {
      async ddl_CARILER()
      {
        try
        {

          const options =
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },

          };

          const res = await fetch(config.API_LOCATION + "Content/ddl_ADAYCARILER", options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          this.CariList = data;
        }
        catch (err) {
          console.log(err.message);
        }
      },

      async Temizle()
      {
        this.model = {};
      },
      async Save()
      {
        try
        {
          const options =
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
            body: JSON.stringify(this.model),
          };
          const res = await fetch(config.API_LOCATION + 'ADAYCARIKISILER/Create', options);
          if (!res.ok)
          {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          if (data == 'OK') {
            this.List();
            this.$dialog.alert('Eklendi');
          }

        } catch (err) {
          console.log(err.message);
        }
      },

      async Edit(Kisi_ID)
      {
        const options =
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$store.state.auth.user.token
          },
        };
        try {
          const res = await fetch(config.API_LOCATION + 'ADAYCARIKISILER?ID=' + Kisi_ID, options);
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
      async Update()
      {

        try
        {
          const options =
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
            body: JSON.stringify(this.model),
          };

          const res = await fetch(config.API_LOCATION + 'ADAYCARIKISILER', options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          if (data == 'OK') {
            this.List();
            this.$dialog.alert('bilgiler güncellendi');
            return;
          }
        } catch (err) {
          console.log(err.message);

        }
      },
      async List()
      {

        $('#example1').DataTable().destroy();

        try {
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
            body: JSON.stringify(this.filter),
          };
          const res = await fetch(config.API_LOCATION + 'ADAYCARIKISILER/getAll', options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          this.ADAYCARIKISILERList = data;
          this.setDatatable();
        
        } catch (err) {
          console.log(err.message);
        }
      },
      async setDatatable() {
        setTimeout(
          function () {
            $('#example1').dataTable({
              "pageLength": 20,
              "bProcessing": true,
              "responsive": true,
              'bPaginate': true,
              'bLengthChange': false,
              'bFilter': true,
              'bSort': false,
              'bInfo': false,
              'processing': true,
              'destroy': true,
              'aaSorting': [[0, 'desc']],
              "initComplete": function () {

              },
              oLanguage: {
                "sSearch": "Ara:",
                "oPaginate": {
                  "sPrevious": "Önceki",
                  "sNext": "Sonraki",
                  "sFirst": "İlk",
                  "sLast": "Son"
                },
                "sEmptyTable": "Herhangi Bir Veri Bulunamadı",
              },
            });

          }
          , 100);
      },

      async Deletemethod(Kisi_ID, index)
      {

        try {
          const options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
          };
          const res = await fetch(config.API_LOCATION + 'ADAYCARIKISILER?ID=' + Kisi_ID, options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          if (data == "OK") {
            this.ADAYCARIKISILERList.splice(index, 1);
            $('#example1').DataTable().destroy();
            this.$dialog.alert('Bilgiler silindi!')
          }
          else {
            this.$dialog.alert('Hata oluştu!')
          }
        } catch (e) {

        }
      },
      async Delete(Kisi_ID, index)
      {
        this.$dialog.confirm('Bu kaydı silmek istediğinizden emin misiniz', {
          okText: "Evet",
          cancelText: 'Hayır'
        }).then((dialog) => { // change function to arrow syntax
          this.Deletemethod(Kisi_ID, index);
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

