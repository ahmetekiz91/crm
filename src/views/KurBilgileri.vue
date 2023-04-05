
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
                  <button type="button" class="btn btn-primary btn-sm"  @click="KurHesapla()">
                    <i class="fa fa-plus"></i> Kur Bilgilerini Güncelle
                  </button>
                </div>
                <div class="col-4"><h3 class=""><b>Kur Bilgileri</b> </h3> </div>
                <div class="col-3"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <label for="exampleInputEmail1">&nbsp;</label><br />
                    <button type="button" @click="GuncelKurlariListesi()" class="btn btn-sm btn-primary">Listele</button>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table id="example1" class="table table-bordered zui-table zui-table-zebra zui-table-horizontal table-striped">
                  <thead>
                    <tr>
                      <th>Yerel Doviz</th>
                      <th>Değer</th>
                      <th>Döviz Türü</th>
                      <th>Değer</th>
                    </tr>

                  </thead>
                  <tbody>
                    <tr v-for="(n,index) in List" id="trtemizle">
                      <td>{{n.LDOV_ADI}}</td>
                      <td>{{n.LDOVDEGER}}</td>
                      <td>{{n.DOV_ADI}}</td>
                      <td>{{n.DOVDEGER}}</td>
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

</template>

<script>

  import * as config from '@/assets/config.js';
  export default {

    name: 'Users',
    data() {
      return {
        loading: false,
        model: {
         
        },
        filter:
        {
          Arama:'',
        },
  
        List: [],
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
      this.GuncelKurlariListesi();
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
      async GuncelKurlariListesi()
      {

        this.loading = true;


        $('#example1').DataTable().destroy();

        this.List = [];
        try {
          const options = {
            method: 'Get',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
            body: JSON.stringify(),
          };
          const res = await fetch(config.API_LOCATION + "KurServisi/GuncelKurlariListesi", options);
          if (!res.ok) {
            this.loading = false;
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          if (data.length > 0) {
            this.List = data;

            this.setDatatable();
          }

          this.loading = false;
        } catch (err) {
          this.loading = false;
          console.log(err.message)
        }
      },

      async KurHesaplaMethod()
      {
        try
        {

          const options =
          {
            method: 'Get',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },

          };
          const res = await fetch(config.API_LOCATION + "KurServisi/KurHesapla" , options);
          if (!res.ok) {
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          if (data == "OK") {

            alert("Kur bilgileri güncellendi");
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

      async KurHesapla()
      {
        this.$dialog.confirm('Kurları güncellemek istiyormusunuz', {
          okText: "Evet",
          cancelText: 'Hayır'
        }).then((dialog) => {
          this.KurHesaplaMethod();
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
