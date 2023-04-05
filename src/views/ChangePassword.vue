
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
                  
                </div>
                <div class="col-4"><h3 class=""><b>Şifre Değiştir</b> </h3> </div>
                <div class="col-3"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Kullanıcı Adı</label>
                    <input type="hidden" v-model="model.USR_ID" class="form-control form-control-sm">
                    <input type="text" v-model="model.USERN" class="form-control form-control-sm" placeholder="Kullanıcı Adı">
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Şifre</label>
                    <input type="text" v-model="model.PASS" class="form-control form-control-sm" placeholder="Şifre">
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <label for="exampleInputEmail1">&nbsp;</label><br />
                    <button type="button" @click="Update()" class="btn btn-sm btn-primary">Şifre Değiştir</button>
                  </div>
                </div>
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

    
    },
    mounted: function ()
    {
      if (!this.currentUser) {

        this.$router.push('/login');
      }
      else {
        $("#bar1").css("display", "")
        $("#bar2").css("display", "")
      }
      this.Edit(this.$store.state.auth.user.USR_ID);
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
