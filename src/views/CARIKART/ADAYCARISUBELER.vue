<template>
  <div class='content-wrapper'>
    <div class='container-fluid'>
      <div class='col-12'>
        <div class='card mt-2'>
          <div class='card-header'>
            <div class='row'>
              <div class='col-5'>
                <button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#modal-xl' @click='Temizle()'>
                  <i class='fa fa-plus'></i> Aday Cari Şube Ekle
                </button>
              </div>
              <div class='col-4'><h3 class=''><b>Aday Cari Şubeleri</b> </h3> </div>
              <div class='col-3'></div>
            </div>
          </div>
          
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
                    <th>Cari Ünvan</th>
                    <th>Kodu</th>
                    <th>Adı</th>
                    <th>Adres</th>
                    <th>Şehir</th>
                    <th>İlçe</th>
                    <th>Posta Kodu</th>
                    <th>ENLEM</th>
                    <th>BOYLAM</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(n,index) in ADAYCARISUBELERList'>
                    <td>{{n.CARI_UNVAN}}</td>
                    <td>{{n.KODU}}</td>
                    <td>{{n.ADI}}</td>
                    <td>{{n.ADRES}}</td>
                    <td>{{n.SEHIR}}</td>
                    <td>{{n.ILCE}}</td>
                    <td>{{n.POSTAKODU}}</td>
                    <td>{{n.ENLEM}}</td>
                    <td>{{n.BOYLAM}}</td>

                    <td>
                      <a class='btn btn-danger btn-sm sil text-white' v-if="(n.CARIKARTMI!=1)" @click='Delete(n.CARI_ADR_ID,index)'><i class='fas fa-trash'></i>Sil</a>
                      <a class='btn btn-primary btn-sm edit text-white' v-if="(n.CARIKARTMI!=1)" data-toggle='modal' data-target='#modal-xl' @click='Edit(n.CARI_ADR_ID,index)'><i class='fas fa-edit'></i>Güncelle</a>
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
              <h4 class='modal-title'>Cari Şubeler</h4>
              <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <div class='row'>
     
                <div class='col-md-12'>
 
                  <div class='card card-primary'>
                    <div class='card-header'>
                      <h3 class='card-title'> {{ model.CARI_ADR_ID==null?'Aday Cari Şubesi Ekle':'Aday Cari Şubesi Düzenle' }}</h3>
                    </div>
                    <div class=''>
                      <div class='card-body'>

                        <div class="row">
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='CARI_REF_NO'>Cari</label>
                             
                              <vue-select class="vue-select1" v-model="model.CARI_REF_NO" :options="CariList" :reduce="(CariList) => CariList.Key" label="Value">
                              </vue-select>

                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <input type='hidden' v-model='model.CARI_ADR_ID' class='form-control form-control-sm' placeholder='CARI_ADR_ID'>
                              <label for='KODU'>Kodu</label>
                              <input type='text' v-model='model.KODU' class='form-control form-control-sm' placeholder='Kodu'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='ADI'>Adı</label>
                              <input type='text' v-model='model.ADI' class='form-control form-control-sm' placeholder='Adı'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='ADRES'>Adres</label>
                              <input type='text' v-model='model.ADRES' class='form-control form-control-sm' placeholder='Adres'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='SEHIR'>Şehir</label>
                              <input type='text' v-model='model.SEHIR' class='form-control form-control-sm' placeholder='Şehir'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='ILCE'>İlçe</label>
                              <input type='text' v-model='model.ILCE' class='form-control form-control-sm' placeholder='İlçe'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='POSTAKODU'>Posta Kodu</label>
                              <input type='text' v-model='model.POSTAKODU' class='form-control form-control-sm' placeholder='Posta Kodu'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='ENLEM'>Enlem</label>
                              <input type='text' v-model='model.ENLEM' class='form-control form-control-sm' placeholder='Enlem'>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class='form-group'>
                              <label for='BOYLAM'>Boylam</label>
                              <input type='text' v-model='model.BOYLAM' class='form-control form-control-sm' placeholder='Boylam'>
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
              <button type='button' class='btn btn-danger btn-sm' data-dismiss='modal'>Kapat</button>
              <button type='button' class='btn btn-primary btn-sm' v-on:click='(model.CARI_ADR_ID==null?Save():Update())'>Kaydet</button>
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
    name: 'ADAYCARISUBELER',
    data() {
      return {
        model: {
          CARI_ADR_ID: null,
          CDATE: '',
          KODU: '',
          ADI: '',
          CARI_REF_NO: '',
          ADRES: '',
          SEHIR: '',
          ILCE: '',
          IL: '',
          POSTAKODU: '',
          CUSR_ID: '',
          UUSR_ID: '',
          UDATE: '',
          ENLEM: '',
          BOYLAM: '',

        },
        ADAYCARISUBELERList: [],
        CariList: [],
        filter: {
          INTPRM1:null,
          PRM2:'',
        },
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

      async Temizle() {
        this.model = {};
      },
      async ddl_CARILER()
      {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$store.state.auth.user.token
          },
          body: JSON.stringify(),
        };

        try {
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

      async Save() {
        try {
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
            body: JSON.stringify(this.model),
          };

          const res = await fetch(config.API_LOCATION + 'ADAYCARISUBELER/Create', options);
          if (!res.ok) {
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
      async Edit(CARI_ADR_ID)
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
          const res = await fetch(config.API_LOCATION + 'ADAYCARISUBELER?ID=' + CARI_ADR_ID, options);
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
        try {
          const options = {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
            body: JSON.stringify(this.model),
          };

          const res = await fetch(config.API_LOCATION + 'ADAYCARISUBELER', options);
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
        var obj = {};

        try {
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
            body: JSON.stringify(this.filter),
          };
          const res = await fetch(config.API_LOCATION + 'ADAYCARISUBELER/getAll', options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          this.ADAYCARISUBELERList = data;
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
          , 1000);
      },

      async Deletemethod(CARI_GRUP_ID, index)
      {
      
        try {
          const options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
          };
          const res = await fetch(config.API_LOCATION + 'ADAYCARISUBELER?ID=' + CARI_GRUP_ID, options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          if (data == "OK")
          {
     
            this.ADAYCARISUBELERList.splice(index, 1);
            $('#example1').DataTable().destroy();
            this.setDatatable();
            this.$dialog.alert('Bilgiler silindi!')
          }
          else {
            this.$dialog.alert('Hata oluştu!')
          }
        } catch (e) {

        }
      },
      async Delete(CARI_GRUP_ID, index)
      {
        this.$dialog.confirm('Bu kaydı silmek istediğinizden emin misiniz', {
          okText: "Evet",
          cancelText: 'Hayır'
        }).then((dialog) =>
        {
          this.Deletemethod(CARI_GRUP_ID, index);
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

