
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
             <h6>Cari Bakiye</h6>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <label>Cariler</label>
                    <vue-select class="vue-select1" v-model="filter.PRM1" :options="CariList" :reduce="(CariList) => CariList.Key" label="Value">
                    </vue-select>


                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <label>Arama</label>
                    <input type='text' v-model='filter.PRM2' class='form-control form-control-sm'>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <label>&nbsp;</label><br />
                    <button type='button' class='btn btn-primary btn-sm btn-block' v-on:click='CARIBAKIYE()'>Listele</button>

                  </div>

                </div>
              </div>
              <div class="table-responsive">
                <table id="example1" class="table table-bordered zui-table zui-table-zebra zui-table-horizontal table-striped">
                  <thead>
                    <tr>
                      <th>Cari Ünvan</th>
                      <th>Borç</th>
                      <th>Alacak</th>
                      <th>Borç(TL)</th>
                      <th>Alacak(TL)</th>
                    </tr>

                  </thead>
                  <tbody>
                    <tr v-for="(n,index) in List" id="trtemizle">
                      <td>{{n.CARI_UNVAN}}</td>
                      <td>{{n.BORC}}</td>
                      <td>{{n.ALACAK}}</td>
                      <td>{{n.BORCTL}}</td>
                      <td>{{n.ALACAKTL}}</td>
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
  import vs from 'vue-select';
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import 'vue2-datepicker/locale/tr';
  export default {
    components: {
      DatePicker,
      "vue-select": vs

    },
    name: 'CariBakiye',
    data() {
      return {
        loading: false,
        model: {
         
        },
        filter:
        {
          PRM1:'',
          PRM2:'',
        },
  
        List: [],
        CariList: [],
      }
    },
    created() {
      this.ddl_CARILER();
    
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
      this.CARIBAKIYE();
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
      async ddl_CARILER() {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$store.state.auth.user.token
          },
          body: JSON.stringify(),
        };

        try {
          const res = await fetch(config.API_LOCATION + "Content/ddl_CARILER", options);
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
      async CARIBAKIYE()
      {

        this.loading = true;


        $('#example1').DataTable().destroy();

        this.List = [];
        try {
          const options = {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.auth.user.token
            },
            body: JSON.stringify(this.filter),
          };
          const res = await fetch(config.API_LOCATION + "CARIREPORT/CARIBAKIYE", options);
          if (!res.ok) {
            this.loading = false;
            const message = 'An error has occured: ${res.status} - ${res.statusText}';
            throw new Error(message);
          }
          const data = await res.json();
          this.List = data;

          this.setDatatable();
      
          this.loading = false;
        } catch (err) {
          this.loading = false;
          console.log(err.message)
        }
      },
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
