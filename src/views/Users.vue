
<style>
  .card-primary.card-outline {
    border-top: 7px solid #007bff;
    border-color: #131C4E;
  }
 </style>
<template>
    <div>
      <div class="divout" v-if="loading">
        <div class="loader">
          <div class="loader-wheel"></div>
          <div class="loader-text"></div>
        </div>
      </div>
    <div class="content-wrapper">

      <div class="container-fluid">
        <div class="col-12">
          <div class="card mt-2">
            <div class="card-header">
              <div class="row">
                <div class="col-5">
                  <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-xl" @click="Temizle()">
                    <i class="fa fa-plus"></i> Kullanıcı Ekle
                  </button>
                </div>
                <div class="col-4"><h3 class=""><b>Kullanıcılar</b> </h3> </div>
                <div class="col-3"></div>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">

              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <input type="text" v-model="filter.Arama" class="form-control form-control-sm" placeholder="Arama">
                  </div>

                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <button type="button" @click="List()" class="btn btn-sm btn-primary">Listele</button>
                  </div>

                </div>
              </div>

              <div class="table-responsive">
                <table id="example1" class="table table-bordered zui-table zui-table-zebra zui-table-horizontal table-striped">
                  <thead>
                    <tr>
                      <th>Ad</th>
                      <th>Soyad</th>
                      <th>Email</th>
                      <th>Kullanıcı Adı</th>
                      <th>Şifre</th>
                      <th></th>
                    </tr>

                  </thead>
                  <tbody>
                    <tr v-for="(n,index) in UserList" id="trtemizle">
                      <td>{{n.NAME}}</td>
                      <td>{{n.SURNAME}}</td>
                      <td>{{n.EMAIL}}</td>
                      <td>{{n.USERN}}</td>
                      <td>{{n.PASS}}</td>
                      <td>
                        <a class="btn btn-danger btn-sm sil text-white" @click="Delete(n.USR_ID,index)"><i class="fas fa-trash"></i></a>
                        <a class="btn btn-primary btn-sm edit text-white" data-toggle="modal" data-target="#modal-xl" @click="Edit(n.USR_ID,index)"><i class="fas fa-edit"></i></a>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>
            </div>

          </div>


        </div>

        <div class="modal fade" id="modal-xl">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Kullanıcılar</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <!-- left column -->
                  <div class="col-md-12">
                    <!-- general form elements -->
                    <div class="card card-primary card-outline">
                      <div class="card-header">
                        <h3 class="card-title"> <b>{{ model.USR_ID==null?"Kullanıcı Ekle":"Kullanıcı Düzenle" }}</b></h3>
                      </div>
                      <div class="">
                        <div class="card-body">
                          <div class="row">

                            <div class="col-sm-3">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Adı</label>
                                <input type="hidden" v-model="model.USR_ID" class="form-control" placeholder="USR_ID">
                                <input type="text" v-model="model.NAME" class="form-control form-control-sm" placeholder="Ad">
                              </div>
                            </div>

                            <div class="col-sm-3">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Soyadı</label>
                                <input type="text" v-model="model.SURNAME" class="form-control form-control-sm" placeholder="Soyad">
                              </div>
                            </div>

                            <div class="col-sm-3">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="text" v-model="model.EMAIL" class="form-control form-control-sm" placeholder="Şifre">
                              </div>
                            </div>

                            <div class="col-sm-3">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Kullanıcı Adı</label>
                                <input type="text" v-model="model.USERN" class="form-control form-control-sm" placeholder="Kullanıcı Adı">
                              </div>
                            </div>
                            <div class="col-sm-3">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Şifre</label>
                                <input type="text" v-model="model.PASS" class="form-control form-control-sm" placeholder="Şifre">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Kapat</button>
                <button type="button" class="btn btn-primary" v-on:click="(model.USR_ID==null?Save():Update())">Kaydet</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>

  import * as config from '@/assets/config.js';
  export default {

    name: 'Users',
    data() {
      return {
        loading: false,
        model: {
          USR_ID: null,
          NAME: '',
          SURNAME: '',
          EMAIL: '',
          PASS: '',
          Hash: '',
          USERN: '',
        },
        filter:
        {
          Arama:'',
        },
  
        UserList: [],
      }
    },
    created() {

      this.List();
    },
    mounted: function ()
    {
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
      // eslint-disable-next-line
      async Temizle() {
        this.model = {};
      },

      async Save()
      {
        try
        {

          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
            body: JSON.stringify(this.model),
          };
       
          const res = await fetch(config.API_LOCATION + "USERS", options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          if (data == "OK")
          {
            this.List();
            alert("Eklendi");
          }

        } catch (err) {
          console.log(err.message);
         

        }
      },

      async Edit(USR_ID)
      {
        const options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$store.state.auth.user.token
          },
        };
        try
        {
          const res = await fetch(config.API_LOCATION + "USERS?ID=" + USR_ID, options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          this.model = data;

        } catch (err) {
          console.log(err.message)
         
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
          , 100);
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

          const res = await fetch(config.API_LOCATION + "USERS", options);
          if (!res.ok)
          {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json()
          if (data == "OK")
          {
            this.List();
            alert("Kullanıcı bilgileri kaydedildi");
            return;
          }
        } catch (err) {
          console.log(err.message)
   
        }
      },

      async List()
      {
    
        this.loading = true;


        $('#example1').DataTable().destroy();

        this.UserList = [];
        try {
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
            body: JSON.stringify(this.filter),
          };
          const res = await fetch(config.API_LOCATION + "USERS/getAll", options);
          if (!res.ok) {
            this.loading = false;
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          if (data.length > 0) {
            this.UserList = data;

            this.setDatatable();
          }

          this.loading = false;
        } catch (err) {
          this.loading = false;
          console.log(err.message)
        }
      },

      async Deletemethod(USR_ID, index)
      {
        try
        {

          const options =
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },

          };
          const res = await fetch(config.API_LOCATION + "USERS?ID=" + USR_ID, options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          if (data == "OK") {
            this.UserList.splice(index, 1)
            alert("Kullanıcı bilgileri silindi");
            $('#example1').DataTable().destroy();
            this.setDatatable();

          }
          else {
            alert("Hata Oluştu");
          }
        } catch (err) {
          console.log(err.message);
          alert("Hata Oluştu");
        }
      },

      async Delete(USR_ID, index)
      {
        this.$dialog.confirm('Bu kaydı silmek istediğinizden emin misiniz', {
          okText: "Evet",
          cancelText: 'Hayır'
        }).then((dialog) => {
          this.Deletemethod(USR_ID, index);
        })
          .catch(function (err) {
            //this.$dialog.alert('Hata oluştu!');
            console.log(err.message)
          })
      }
    },
  

    
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
