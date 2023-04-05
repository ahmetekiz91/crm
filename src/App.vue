<style lang="css">
  @import "../dist/css/adminlte.css";
  @import "../dist/css/adminlte.min.css";
  @import "../plugins/fontawesome-free/css/all.min.css";
  @import "../plugins/datatables-buttons/css/buttons.bootstrap4.min.css";
  @import '../plugins/datatables-responsive/css/responsive.bootstrap4.min.css';
  @import '../plugins/datatables-buttons/css/buttons.bootstrap4.min.css';
  @import '../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css';
  @import '../plugins/daterangepicker/daterangepicker.css';

  .zui-table {
    border: solid 1px #DDEEEE;
    border-collapse: collapse;
    border-spacing: 0;
    font: normal 13px Arial, sans-serif;
  }

    .zui-table thead th {
      background-color: #DDEFEF;
      border: solid 1px #DDEEEE;
      color: #336B6B;
      padding: 10px;
      text-align: left;
    }

    .zui-table tbody td {
      border: solid 1px #DDEEEE;
      color: #333;
      padding: 10px;
    }

  .zui-table-zebra tbody tr:nth-child(odd) {
    background-color: #fff;
  }

  .zui-table-zebra tbody tr:nth-child(even) {
    background-color: #EEF7EE;
  }

  .zui-table-horizontal tbody td {
    border-left: none;
    border-right: none;
  }
  .divout {
    align-items: center;
    background-color: #131C4E;
    display: flex;
    height: 100%;
    justify-content: center;
    margin: 0;
    z-index: 999999;
    position: fixed;
    width: 100%;
    top: 0;
  }

  .loader {
    width: 60px;
  }

  .loader-wheel {
    animation: spin 1s infinite linear;
    border: 2px solid rgba(30, 30, 30, 0.5);
    border-left: 4px solid #fff;
    border-radius: 50%;
    height: 50px;
    margin-bottom: 10px;
    width: 50px;
  }

  .loader-text {
    color: #fff;
    font-family: arial, sans-serif;
  }

    .loader-text:after {
      content: 'Loading';
      animation: load 2s linear infinite;
    }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes load {
    0% {
      content: 'Loading';
    }

    33% {
      content: 'Loading.';
    }

    67% {
      content: 'Loading..';
    }

    100% {
      content: 'Loading...';
    }
  }
</style>

<template>
  
  <div id="app">

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light" id="bar1" style="display:none;">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="index3.html" class="nav-link"></a>
        </li>

      </ul>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <!-- Navbar Search -->
        <li class="nav-item">
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="mr-2 d-none d-lg-inline  small">
            </span>
            <b>Ayarlar</b> 
          </a>
          <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in mr-4" aria-labelledby="userDropdown">


            <a class="dropdown-item cboxIframe iframe cboxElement" href="#/changepassword">
              <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Şifre Değiştir
            </a>
            <a class="dropdown-item cboxIframe iframe cboxElement" href="#/kurbilgileri">
             <i class="fas fa-money-bill"></i>
              Kur Bilgisi
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" style="margin-left: 0px;">
              <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Çıkış
            </a>
          </div>
        </li>


      </ul>
    </nav>
    <aside class="main-sidebar sidebar-dark-primary elevation-4" id="bar2" style="display:none;">
      <a href="home" class="brand-link">
        <img src="../dist/img/elogo.png" alt="" style="opacity:.8;height:50px;">
         </a>
      <div class="sidebar">
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li class="nav-item menu-open">
              <a href="" class="nav-link active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>

            </li>


            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p>
                  Cari Kart
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview" style="display: none;">

                <li class="nav-item">
                  <a href="#/carikart" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Cari Kart</p>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="#/carisubeler" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Cari Şubeler</p>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="#/carikisiler" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Cari Yetkililer</p>
                  </a>
                </li>

              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p>
                  Aday Cariler
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview" style="display: none;">

                <li class="nav-item">
                  <a href="#/adaycarikart" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Aday Cariler</p>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="#/adaycarisubeler" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Aday Cari Şubeler</p>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="#/adaycarikisiler" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Aday Cari Yetkililer</p>
                  </a>
                </li>

              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p> Malzemeler<i class="fas fa-angle-left right"></i> </p>
              </a>
              <ul class="nav nav-treeview" style="display: none;">
                <li class="nav-item">
                  <a href="#/malzeme" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Malzeme</p>
                  </a>
                </li>

              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p> Cari Raporlar<i class="fas fa-angle-left right"></i> </p>
              </a>
              <ul class="nav nav-treeview" style="display: none;">
                <li class="nav-item">
                  <a href="#/cariekstre" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Cari Ekstre</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#/carihareketreport" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Cari Hareket</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#/caribakiye" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Cari Bakiye</p>
                  </a>
                </li>

              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p> Görüşmeler<i class="fas fa-angle-left right"></i> </p>
              </a>
              <ul class="nav nav-treeview" style="display: none;">
                <li class="nav-item">
                  <a href="#/crm" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Görüşmeler</p>
                  </a>
                </li>

              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p> Siparişler<i class="fas fa-angle-left right"></i> </p>
              </a>
              <ul class="nav nav-treeview" style="display: none;">

                <li class="nav-item">
                  <a href="#/satisteklifi" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Satış Teklifi</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#/satissiparisi" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Satış Siparişi</p>
                  </a>
                </li>
              </ul>
            </li>


          </ul>
        </nav>
      </div>

    </aside>
    <router-view>  </router-view>

      <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Onay</h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="kapat">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">Çıkmak istediğinizden emin misiniz?</div>
            <div class="modal-footer">
              <button class="btn btn-secondary" type="button" data-dismiss="modal">Vazgeç</button>
              <a class="btn btn-primary" @click="logOut()">Çıkış</a>
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
      data() {
        return {
          isLoggedin: false,
          loading: false,
          logout:false,
        }
      },
      name: 'App',
      created()
      {
        this.token();
        
        
      },

      computed: {
        currentUser() {

          return this.$store.state.auth.user;
        },
        showAdminBoard() {
          if (this.currentUser && this.currentUser.roles) {
            return this.currentUser.roles.includes('ROLE_ADMIN');
          }

          return false;
        },
        showModeratorBoard() {
          if (this.currentUser && this.currentUser.roles) {
            return this.currentUser.roles.includes('ROLE_MODERATOR');
          }

          return false;
        }
      },
      methods: {

        async token() {
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
            

              $("#bar1").css("display", "")
              $("#bar2").css("display", "")
            
              return true
            } else {
              this.logOut();
              
              return false;
            }

          } catch (err) {
            this.logOut();
            console.log(err.message);

          }

          return false;
        },


        logOut() {
          $("#bar1").css("display", "none")
          $("#bar2").css("display", "none")
          $("#logoutModal").css("display", "none");
          $("div").removeClass("modal-backdrop fade show");
          this.isLoggedin = false;
          this.$store.dispatch('auth/logout');
          this.$router.push('/login');
        }
      },
      mounted: function () {

      },
      watch: {
        $route() {
          $("div").removeClass("modal-backdrop fade show")
          this.token();
        }
      }

    }
</script>

<style>
  .main-sidebar.sidebar-dark-primary.elevation-4 {
    background-color: #131C4E;
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(10%,#131C4E),to(#224abe));
    background-image: linear-gradient(180deg,#131C4E 10%,#224abe 100%);
    background-size: cover
  }
</style>

