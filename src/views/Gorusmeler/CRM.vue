<template>
 

  <div>
    <div class="divout" v-if="loading">
      <div class="loader">
        <div class="loader-wheel"></div>
        <div class="loader-text"></div>
      </div>
    </div>
    <div class='content-wrapper'>
      <div class='container-fluid'>
        <div class='col-12'>
          <div class='card mt-2'>
            <div class='card-header'>
              <div class='row'>
                <div class='col-5'>
                  <button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#modal-xl' @click='Temizle()'>
                    <i class='fa fa-plus'></i> Görüşme Ekle
                  </button>
                </div>
                <div class='col-4'><h3 class=''><b>Görüşmeler</b> </h3> </div>
                <div class='col-3'></div>
              </div>
            </div>
            <div class='card-body'>

              <div class="row">
                <div class="col-sm-3">
                  <div class='form-group'>
                    <label for='CARI_ID'>Cari</label><br />
                    <vue-select class="vue-select1" v-model="filter.INTPRM1" :options="CariList" :reduce="(CariList) => CariList.Key" label="Value">
                    </vue-select>

                  </div>
                </div>
                <div class="col-sm-3">
                  <div class='form-group'>
                    <label for=''>Başlangıç</label>
                    <date-picker v-model="filter.PRM2" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>

                  </div>
                </div>
                <div class="col-sm-3">
                  <div class='form-group'>
                    <label for=''>Bitiş</label>
                    <date-picker v-model="filter.PRM3" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <label for=''>&nbsp;</label>
                    <button type='button' class='btn btn-primary btn-sm btn-block' @click='List()'>
                      <i class='fa fa-list-alt'></i> Listele
                    </button>
                  </div>
                </div>
              </div>


              <table id='example1' class='table table-bordered table-striped'>
                <thead>
                  <tr>
                    <th style="width:10%">Konu</th>
                    <th style="width:20%">Açıklama</th>
                    <th style="width:20%">Cari Ünvan</th>
                    <th style="width:10%">Görüşme Tarihi</th>
                    <th style="width:10%">Dosya</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(n,index) in CRMList'>
                    <td>{{n.HEAD}}</td>
                    <td>{{n.NOTES}}</td>
                    <td>{{n.CARI_UNVAN}}</td>
                    <td>{{ formatTRDate(n.CRMDATE)}}</td>
                    <td> <a class="btn-sm btn btn-warning mb-1 text-white" @click="Download(n.FPath)" v-if="n.FPath.length>0"  >Dosya</a></td>
                    <td>
                      <a class='btn btn-danger btn-sm sil text-white' @click='Delete(n.CRM_ID,index)'><i class='fas fa-trash'></i>Sil</a>
                      <a class='btn btn-primary btn-sm edit text-white' data-toggle='modal' data-target='#modal-xl' @click='Edit(n.CRM_ID,index)'><i class='fas fa-edit'></i>Güncelle</a>
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
                <h4 class='modal-title'>Görüşme</h4>
                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div class='modal-body'>

                <div class='row'>

                  <div class='col-md-12'>

                    <div class='card card-primary'>
                      <div class='card-header'>
                        <h3 class='card-title'> {{ model.CRM_ID==null?'Görüşme Ekle':'Görüşme Düzenle' }}</h3>
                      </div>
                      <div class=''>
                        <div class='card-body'>
                          <form id="form1">
                            <div class="row">
                              <div class="col-sm-3">
                                <div class='form-group'>
                                  <label for='CARI_ID'>Cari</label>
                                  <vue-select class="vue-select1" v-model="model.CARI_ID" :options="CariList" :reduce="(CariList) => CariList.Key" label="Value">
                                  </vue-select>

                                </div>
                              </div>

                              <div class="col-sm-3">
                                <div class='form-group'>
                                  <label for='HEAD'>Konu</label>
                                  <input type='hidden' v-model='model.CRM_ID' class='form-control form-control-sm' placeholder='CRM_ID'>
                                  <input type='text' v-model='model.HEAD' class='form-control form-control-sm' placeholder='HEAD'>
                                </div>
                              </div>
                              <div class="col-sm-3">
                                <div class='form-group'>
                                  <label for='NOTES'>Konu</label>
                                  <input type='text' v-model='model.NOTES' class='form-control form-control-sm' placeholder='NOTES'>
                                </div>
                              </div>

                              <div class="col-sm-3">
                                <div class='form-group'>
                                  <label for='CRMDATE'>Görüşme Tarihi</label>
                                  <date-picker v-model="model.CRMDATE" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>
                                </div>
                              </div>
                              <div class="col-sm-3">
                                <div class='form-group'>
                                  <label for=''>Dosya</label>
                                  <input type="file" id="fileInput" multiple="multiple" />
                                </div>
                              </div>
                              <div class="col-sm-3">
                                <div class='form-group'>
                                  <label for=''>Görüşme Nedeni</label>
                                  <input type='text' v-model='param.GorusmeNedeni' class='form-control form-control-sm' placeholder='Görüşme Nedeni'>
                                </div>
                              </div>
                              <div class="col-sm-3">
                                <div class='form-group'>
                                  <label for=''>Görüşme Yeri</label>
                                  <input type='text' v-model='param.GorusmeYeri' class='form-control form-control-sm' placeholder='Görüşme Yeri'>
                                </div>
                              </div>
                              <div class="col-sm-3">
                                <div class='form-group'>
                                  <label for=''>Görüşme Durumu</label>
                                  <input type='text' v-model='param.GorusmeDurumu' class='form-control form-control-sm' placeholder='Görüşme Durumu'>
                                </div>
                              </div>
                            </div>

                          </form>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='modal-footer justify-content-between'>
                <button type='button' class='btn btn-danger' data-dismiss='modal'>Kapat</button>
                <button type='button' class='btn btn-primary' v-on:click='(model.CRM_ID==null?Save():Update())'>Kaydet</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>

</template>


<script>
  import moment from 'moment';
  import * as config from '@/assets/config.js';
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import 'vue2-datepicker/locale/tr';
  import vs from 'vue-select';
  export default {
    components: {
      DatePicker,
      "vue-select": vs
    },
    name: 'CRM',
    data() {
      return {
        loading: false,
        lang: {
          formatLocale: {
            firstDayOfWeek: 1,
          },
          monthBeforeYear: false,
        },
        model: {
          CRM_ID: null,
          HEAD: '',
          CUSR_ID: '',
          CDATE: '',
          UDATE: '',
          UUSR_ID: '',
          NOTES: '',
          CARI_ID: '',
          CRMDATE: '',
          FPath: '',
          FPath2: '',
          FPath3: '',

        },
        param:
        {
          GorusmeNedeni: '',
          GorusmeYeri: '',
          GorusmeDurumu: ''
        },
        filter:
        {
          INTPRM1: null,
          PRM2: '',
          PRM3: ''
        },
        CariList:[],
        CRMList: [],
      }
    },
    created() {
      $("div").removeClass("modal-backdrop fade show");
      this.List();
      this.ddl_Cariler();
    },
    mounted: function () {

    },
    filters: {
    },
    computed:
    {
    },
    methods:
    {
      formatDate(dateToBeFormatted) {
        const date = new Date(dateToBeFormatted);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      },
      formatTRDate(dateToBeFormatted) {
        const date = new Date(dateToBeFormatted);
        return date.toLocaleDateString();
      },
      MyDate(value) {
        var arr = value.split(".");
        return (arr[2] + '-' + arr[1] + '-' + arr[0]);
      },
      ReMyDate(value) {
        var arr = value.split("-");
        return (arr[2] + '.' + arr[1] + '.' + arr[0]);
      },
      async ddl_Cariler() {
        const options =
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$store.state.auth.user.token
          },
        };

        try {
          const res = await fetch(config.API_LOCATION + "CRM/Cariler", options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          this.CariList = data;
          console.log(JSON.stringify(data));
        }
        catch (err) {
          console.log(err.message);
        }
      },
      //async fnGetFileNameFromContentDispostionHeader(header) {
      //  let contentDispostion = header.split(';');
      //  const fileNameToken = `filename*=UTF-8''`;

      //  let fileName = 'downloaded.pdf';
      //  for (let thisValue of contentDispostion) {
      //    if (thisValue.trim().indexOf(fileNameToken) === 0) {
      //      fileName = decodeURIComponent(thisValue.trim().replace(fileNameToken, ''));
      //      break;
      //    }
      //  }

      //  return fileName;
      //},


      async Temizle() {
        this.model = {};
        this.param = {};
      },

      async Download(filename) {
        const options =
        {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + this.$store.state.auth.user.token
          },
        };
        fetch(config.API_LOCATION+"crm/Download?filename=" + filename, options)
          .then(resp => resp.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            // the filename you want
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
       
          })
          .catch(() => alert("Dosya indirilemedi!"));
    },
       


      async Save()
      {
      
        var prm1 = { PRM_ID: 1, DEGER: this.param.GorusmeNedeni, TIPI: 'string', KOD:'GorusmeNedeni' };
        var prm2 = { PRM_ID: 2, DEGER: this.param.GorusmeYeri, TIPI: 'string', KOD: 'GorusmeYeri' };
        var prm3 = { PRM_ID: 3, DEGER: this.param.GorusmeDurumu, TIPI: 'string', KOD: 'GorusmeDurumu'};
        var crmprmvalue = [];
        crmprmvalue.push(prm1);
        crmprmvalue.push(prm2);
        crmprmvalue.push(prm3);

        var obj = {};
        obj.crmtable = this.model;
        obj.crmtable.CRMDATE = this.MyDate(this.model.CRMDATE);
        obj.crmprmvalue = crmprmvalue;

        try
        {



            const thisForm = document.getElementById('form1');
            var formData = new FormData(thisForm);
            const profile = document.getElementById('fileInput');
            var len = document.getElementById('fileInput').files.length;
            var filelist = [];
            for (var i = 0; i < len; i++)
            {
              formData.append("profile" + i, profile.files[i]);
            }
           

            formData.append("profile", filelist);
          formData.append("model", JSON.stringify(obj));
          const options =
          {
            headers: {
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
            method: 'POST',
            mode: 'cors',
            body: formData
          };

          const res = await fetch(config.API_LOCATION + 'CRM/Create', options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          if (data == 'OK') {
            this.List();
            this.$dialog.alert('Eklendi');
            obj.crmtable.CRMDATE = this.ReMyDate(obj.crmtable.CRMDATE);
          }
          else {
            this.$dialog.alert('Hata Oluştu');
            obj.crmtable.CRMDATE = this.ReMyDate(obj.crmtable.CRMDATE);
          }

        } catch (err) {
          console.log(err.message);
          obj.crmtable.CRMDATE = this.ReMyDate(obj.crmtable.CRMDATE);
        }
      },

      async Edit(CRM_ID)
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
          const res = await fetch(config.API_LOCATION + 'CRM/Edit?ID=' + CRM_ID, options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
    
          const data = await res.json();
          this.model = data.crmtable;
          this.model.CRMDATE = moment(this.model.CRMDATE).lang("tr").format("DD.MM.YYYY");
          let P1obj = data.crmprmvalue.filter(m => m.KOD == "GorusmeNedeni");
          if (P1obj.length > 0) this.param.GorusmeNedeni = P1obj[0].DEGER;
          P1obj = data.crmprmvalue.filter(m => m.KOD == "GorusmeYeri");
          if (P1obj.length > 0) this.param.GorusmeYeri = P1obj[0].DEGER;
          P1obj = data.crmprmvalue.filter(m => m.KOD == "GorusmeDurumu");
          if (P1obj.length > 0) this.param.GorusmeDurumu = P1obj[0].DEGER;

        } catch (err) {
          console.log(err.message);

        }
      },
     
      async Update()
      {

        var prm1 = { PRM_ID: 1, DEGER: this.param.GorusmeNedeni, TIPI: 'string', KOD: 'GorusmeNedeni' };
        var prm2 = { PRM_ID: 2, DEGER: this.param.GorusmeYeri, TIPI: 'string', KOD: 'GorusmeYeri' };
        var prm3 = { PRM_ID: 3, DEGER: this.param.GorusmeDurumu, TIPI: 'string', KOD: 'GorusmeDurumu' };
        var crmprmvalue = [];
        crmprmvalue.push(prm1);
        crmprmvalue.push(prm2);
        crmprmvalue.push(prm3);

        var obj = {};
        obj.crmtable = this.model;
        obj.crmprmvalue = crmprmvalue;
        obj.crmtable.CRMDATE = this.MyDate(this.model.CRMDATE);


        const thisForm = document.getElementById('form1');
        var formData = new FormData(thisForm);
        const profile = document.getElementById('fileInput');
        var len = document.getElementById('fileInput').files.length;
        var filelist = [];
        for (var i = 0; i < len; i++) {
          formData.append("profile" + i, profile.files[i]);
        }
        formData.append("profile", filelist);
        formData.append("model", JSON.stringify(obj));
        const options =
        {
          headers: {
            'Authorization': 'Bearer ' + this.$store.state.auth.user.token
          },
          method: 'POST',
          mode: 'cors',
          body: formData
        };

        try
        {
      

          const res = await fetch(config.API_LOCATION + 'CRM/Update', options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          if (data == 'OK')
          {
            this.List();
            this.$dialog.alert('Bilgiler güncellendi');
            obj.crmtable.CRMDATE = this.ReMyDate(obj.crmtable.CRMDATE);
            return;
          } else {
            this.$dialog.alert('Hata Oluştu');
            obj.crmtable.CRMDATE = this.ReMyDate(obj.crmtable.CRMDATE);
          }
        } catch (err) {
          console.log(err.message);
          obj.crmtable.CRMDATE = this.ReMyDate(obj.crmtable.CRMDATE);
        }
      },

      async getir() {
        var CRMList = [];
        var obj = {};
        console.log(this.filter);

        const options =
        {
          method: 'POST',
          headers:
          {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$store.state.auth.user.token
          },
          body: JSON.stringify(this.filter),
        };
        const res = await fetch(config.API_LOCATION + 'CRM/getAll', options);
        if (!res.ok) {
          const message = 'An error has occured: ${res.status} - ${res.statusText}';
          throw new Error(message);
        }
        const data = await res.json();
         CRMList = data;
        return CRMList;
      },

      async List()
      {
       
       
       // this.CRMList = [];
        this.loading = true;
  
        try
        {

          this.CRMList = await this.getir();

          $('#example1').DataTable().destroy();
          this.loading = false;
          this.setDatatable();
        } catch (err) {
          console.log(err.message);
          this.loading = false;
        }
      },
      async setDatatable()
      {
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
      async Deletemethod(CRM_ID, index) {

        try {
          const options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
          };
          const res = await fetch(config.API_LOCATION + 'CRM/Delete?ID=' + CRM_ID, options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          if (data == "OK") {
            this.CRMList.splice(index, 1);
            $('#example1').DataTable().destroy();
            this.$dialog.alert('Bilgiler silindi!')
          }
          else {
            this.$dialog.alert('Hata oluştu!')
          }
        } catch (e) {

        }
      },

      async Delete(CRM_ID, index) {
        this.$dialog.confirm('Bu kaydı silmek istediğinizden emin misiniz', {
          okText: "Evet",
          cancelText: 'Hayır'
        }).then((dialog) => { // change function to arrow syntax
          this.Deletemethod(CRM_ID, index);
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

