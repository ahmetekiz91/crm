
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
                  <button type="button" class="btn btn-primary btn-sm" v-if="1>2" data-toggle="modal" data-target="#modal-xl" @click="Temizle()">
                    <i class="fa fa-plus"></i> Satış Siparişi Ekle
                  </button>
                </div>
                <div class="col-4"><h3 class=""><b>Satış Siparişleri</b> </h3> </div>
                <div class="col-3"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <label>Cari Ünvan</label>
                    <vue-select class="vue-select1" v-model="filter.PRM1" :options="CariList" :reduce="(CariList) => CariList.Key" label="Value">
                    </vue-select>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class='form-group'>
                    <label>Başlangıç</label>
                    <date-picker v-model="filter.PRM2" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class='form-group'>
                    <label>Bitiş</label>
                    <date-picker v-model="filter.PRM3" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <label>&nbsp;</label><br />
                    <button type="button" class="btn btn-primary btn-sm btn-block" v-on:click="Listele()">Listele</button>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table id='example1' class='table table-bordered table-striped'>
                  <thead>
                    <tr>
                      <th style="width:40%">Cari Ünvan</th>
                      <th style="width:10%">Sipariş No</th>
                      <th style="width:10%">Sipariş Türü</th>
                      <th style="width:10%">Tutar</th>
                      <th style="width:5%">Döviz Türü</th>
                      <th style="width:12%"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for='(n,index) in SipList'>
                      <td>{{n.CARI_UNVAN}}</td>
                      <td>{{n.SIP_ID}}</td>
                      <td>{{n.TURU=='SS'?'Satış Siparişi':n.TURU=='US'?'Üretim Siparişi':'Belli Değil'}}</td>
                      <td>{{n.SIPTOTAL}}</td>
                      <td>{{n.DOV_ADI}}</td>
                      <td>
                        <div class="btn-group btn-block">
                          <button type="button" class="btn btn-warning">İşlemler</button>
                          <button type="button" class="btn btn-warning dropdown-toggle dropdown-icon" data-toggle="dropdown" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                          </button>
                          <div class="dropdown-menu" role="menu" style="" >
                            <a class='dropdown-item sil text-black' v-if="1>2" @click='Delete(n,index)' ><i class='fas fa-trash'></i> Siparişi Sil</a>
                            <a class='dropdown-item sil text-black' v-if="1>2" @click='Edit(n.SIP_ID,index)' data-toggle="modal" data-target="#modal-xl"><i class='fas fa-edit'></i> Güncelle</a>
                          </div>
                        </div>
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
                <h4 class="modal-title">Satış Siparişleri</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card card-primary card-outline">
                      <div class="card-header">
                        <h3 class="card-title"> <b>{{ siparisler.SIP_ID==null?"Sipariş Ekle":"Sipariş Düzenle" }}</b></h3>
                      </div>
                      <div class="">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-sm-4">
                              <div class='form-group'>
                                <label>Cari</label>
                                <input v-model="siparisler.SIP_ID" type="hidden" />
                                <vue-select class="vue-select1" v-model="siparisler.CARI_ID" @input="ddl_CariPlasiyerler()" :options="CariList" :reduce="(CariList) => CariList.Key" label="Value">
                                </vue-select>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class='form-group'>
                                <label>Plasiyer</label>

                                <vue-select class="vue-select1" v-model="siparisler.PLA_ID" :options="PlaList" :reduce="(PlaList) => PlaList.Key" label="Value">
                                </vue-select>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class='form-group'>
                                <label>Döviz</label>
                                <vue-select class="vue-select1" v-model="siparisler.DOVIZ_ID" :options="DovizList" :reduce="(DovizList) => DovizList.Key" label="Value">
                                </vue-select>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class='form-group'>
                                <label>Teklif Tarihi</label>
                                <date-picker v-model="siparisler.SIPTARIHI" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class='form-group'>
                                <label>Termin Tarihi</label>
                                <date-picker v-model="siparisler.TERMINTARIHI" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class='form-group'>
                                <label>Teslimat Türü</label>
                                <vue-select class="vue-select1" v-model="siparisler.TESTURID" :options="TeslimatList" :reduce="(TeslimatList) => TeslimatList.Key" label="Value">
                                </vue-select>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class='form-group'>
                                <label>Ödeme Türü</label>
                                <vue-select class="vue-select1" v-model="siparisler.ODETURID" :options="OdemeList" :reduce="(OdemeList) => OdemeList.Key" label="Value">
                                </vue-select>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class='form-group'>
                                <label>İskonto</label>
                                <input type='text' v-model='siparisatt.P1' class='form-control form-control-sm' placeholder='İskonto 1'>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class='form-group'>
                                <label>İskonto2</label>
                                <input type='text' v-model='siparisatt.P2' class='form-control form-control-sm' placeholder='İskonto 2'>
                              </div>
                            </div>
                          </div>
                          <div class="row mb-2">
                            <div class="col-sm-4">
                              <div class="form-group">
                                <label>Kategori</label>
                                <vue-select class="vue-select1" v-model="malzemefilter.CAT_ID" :options="CatList" :reduce="(CatList) => CatList.Key" label="Value">
                                </vue-select>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="form-group">
                                <label>Marka</label>
                                <vue-select class="vue-select1" v-model="malzemefilter.MARKA_ID" :options="MarkaList" :reduce="(MarkaList) => MarkaList.Key" label="Value">
                                </vue-select>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="form-group">
                                <label>&nbsp;</label><br />
                                <button type="button" class="btn btn-primary btn-sm btn-block" v-on:click="MalzemeListele()">Listele</button>
                              </div>
                            </div>
                          </div>
                          <div class="table-responsive">
                            <table class="table table-striped">
                              <thead>
                                <tr>
                                  <th>Seç</th>
                                  <th>Kategori</th>
                                  <th>Malzeme Kodu</th>
                                  <th>Malzeme Adı</th>
                                  <th>Miktar</th>
                                  <th>Satış Fiyatı</th>
                                </tr>
                              </thead>
                              <tbody v-for="(n,index) in MalzList">
                                <tr>
                                  <td><input v-model="n.malzeme.Checked" type="checkbox" /> </td>
                                  <td>{{n.malzeme.CAT_ADI}}</td>
                                  <td>{{n.malzeme.MALZ_KODU}}</td>
                                  <td>{{n.malzeme.MALZ_ISIM}}-{{n.malzeme.BRM_ADI}}</td>
                                  <td>
                                    <div class="row">
                                      <div class="col-8">
                                        <input v-model="n.malzeme.MIKTAR" type="text" class="form-control form-control-sm" />
                                      </div>
                                      <div class="col-4">
                                        <select v-model="n.malzeme.BRM_ID" class="form-control form-control-sm">
                                          <option v-for="(natt) in n.mblist" :value="natt">
                                            {{natt.BRM_ADI}}
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </td>
                                  <td>{{n.malzeme.SATFIYAT}}-{{n.malzeme.DOV_ADI}}</td>
                                </tr>

                              </tbody>
                            </table>

                          </div>
                          <div class="row mb-2">
                            <div class="col-sm-4">
                              <div class="form-group">
                                <label>&nbsp;</label><br />
                                <button type="button" class="btn btn-primary btn-sm btn-block" v-on:click="Ekle()">Ekle</button>
                              </div>
                            </div>
                          </div>
                          <div class="table-responsive">
                            <table class="table table-striped">
                              <thead>
                                <tr>
                                  <th>Malzeme Kodu</th>
                                  <th>Malzeme Adı</th>
                                  <th>Miktar</th>
                                  <th>Birim</th>
                                  <th>Satış Fiyatı</th>
                                  <th>KDV Oran</th>
                                  <th>Kur1</th>
                                  <th>Kur2</th>
                                  <th>İskonto</th>
                                  <th>Navlun</th>
                                  <th>Termin Tarihi</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody v-for="(n,index) in sepet" style="border:1px solid black">
                                <tr>

                                  <td>{{n.MALZ_KODU}}</td>
                                  <td>{{n.MALZ_ISIM}}</td>
                                  <td>
                                    <input v-model="n.MIKTAR" v-mask="decimalMask" class="form-control form-control-sm" style="min-width:100px;" />
                                  </td>
                                  <td>
                                   {{n.BRM_ADI}}
                                  </td>
                                  <td>
                                    <div class="row">
                                      <div class="col-sm-10">
                                        <input v-model="n.BRFIYAT" v-mask="currencyMask" class="form-control form-control-sm" style="min-width:100px;" />
                                      </div>
                                      <div class="col-sm-2">
                                        {{n.DOV_ADI}}
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <input v-model="n.KDVORAN" v-mask="decimalMask" class="form-control form-control-sm" style="min-width:100px;" />

                                  </td>
                                  <td>
                                    <input v-model="n.KUR1" v-mask="decimalMask" class="form-control form-control-sm" style="min-width:100px;" />
                                  </td>
                                  <td>
                                    <input v-model="n.KUR2" v-mask="decimalMask" class="form-control form-control-sm" style="min-width:100px;" />
                                  </td>

                                  <td>
                                    <input v-model="n.P1" v-mask="decimalMask" class="form-control form-control-sm" style="min-width:100px;"  />
                                  </td>
                                  <td>
                                    <input v-model="n.Navlun" v-mask="decimalMask" class="form-control form-control-sm" style="min-width:100px;"  />
                                  </td>
                                  <td>
                                    <date-picker v-model="n.P3" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>

                                  </td>
                                  <td>
                                    <a class="btn btn-danger btn-sm btn-circle" @click="Satirsil(index)"><i class="fa fa-trash"></i></a>
                                  </td>
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
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Kapat</button>
                <button type="button" class="btn btn-primary" v-on:click="(siparisler.SIP_ID==null?Save():Update())">Kaydet</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
    </div>
</template>
<script>


  import createNumberMask from 'text-mask-addons/dist/createNumberMask';
  import SatisSiparisiServices from '../SiparisYonetimiServices/SatisSiparisiServices.js';
  import DropdownLists from '../Contents/DropdownLists.js';
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import 'vue2-datepicker/locale/tr';
  import moment from 'moment';
  import vs from 'vue-select';
  const currencyMask = createNumberMask({
    prefix: '',
    allowDecimal: true,
    includeThousandsSeparator: false,
    allowNegative: false,
    thousandsSeparatorSymbol: ',',
    decimalSymbol: '.'
  });

  const decimalMask = createNumberMask({
    prefix: '',
    allowDecimal: true,
    includeThousandsSeparator: false,
    allowNegative: false,
    thousandsSeparatorSymbol: ',',
    decimalSymbol: '.',
    decimalLimit: 10
  });
  export default {
    components: {
      DatePicker,
      "vue-select": vs

    },
    name: 'SatışTeklifi',
    data() {
      return {
        loading:false,
        lang: {
          formatLocale: {
            firstDayOfWeek: 1,
          },
          monthBeforeYear: false,
        },
        filter:
        {
          PRM1: '',
          PRM2: '',
          PRM3: '',
        },
        currencyMask,
        decimalMask,
        siparisler:
        {
          SIP_ID: null,
          CDATE: '',
          FIS_ID: null,
          TEKLIF_ID: null,
          SIPTARIHI: null,
          CARI_ID: null,
          ALISMI: null,
          SATISMI: null,
          CUSR_ID: null,
          DOVIZ_ID: null,
          KAPALIMI: null,
          TURU: null,
          PLA_ID: null,
        },
        siparisatt:
        {
          P1: "",
          P2: "",
          P3: "",
        },
        sipkalem:
        {
          SIPKALID: null,
          CDATE: null,
          SIP_ID: null,
          MALZ_ID: '',
          MIKTAR: null,
          BRFIYAT: null,
          ACIKLAMA: null,
          BRM_ID: null,
          DOVIZ_ID: null,
          SIPKALIDREF: '',
          SIPKALIDREF2: null,
          SIPKALIDREF3: null,
          STTOPLAM: null,
          SIRANO: null,

        },
        sipkalempar:
        {
          P1: "",
          P2: "",
          P3: "",
        },
        malzemefilter:
        {
          CAT_ID: '',
          MARKA_ID: '',
        },
        malzeme:
        {
          MALZ_ID: '',
          MALZ_ISIM: '',
          MALZ_KODU: '',
          SATFIYAT: '',
          DOV_ADI: '',
          CAT_ADI: '',
          BRM_ADI: '',
        },
        DovizList: [],
        TeslimatList: [],
        CatList: [],
        MarkaList: [],
        OdemeList: [],
        MalzList: [],
        time1: null,
        CariList: [],
        SipList: [],
        sepet: [],
        PlaList: [],
        services: new SatisSiparisiServices(),
        ddlservices: new DropdownLists(),

      }
    },
    created() {
      this.ddl_Cariler();
      this.ddl_Dovizler();
      this.ddl_Odeme_Turleri();
      this.ddl_TESLIMAT_TURU();
      this.ddl_Kategoriler();
      this.ddl_Markalar();
    },
    mounted() {
      if (!this.currentUser) {

        this.$router.push('/login');
      } else {

        $("#bar1").css("display", "")
        $("#bar2").css("display", "")
      }
      $("div").removeClass("modal-backdrop fade show")
    },
    filters: {
    },
    computed:
    {
      currentUser() {

        return this.$store.state.auth.user;
      }
    },
    methods:
    {

      async Listele()
      {
        this.loading = true;
        try {
          $('#example1').DataTable().destroy();
          this.SipList = [];
          const arr = await this.services.getSiparisler(this.filter.PRM1, this.filter.PRM2, this.filter.PRM3);
          this.SipList = arr;
          this.setDatatable();
          this.loading = false;
        } catch (e) {
          this.loading = false;
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


      async Satirsil(index) {
        var arr = this.sepet
        this.$dialog.confirm("Siparişin bu kalemini iptal etmek  istiyor musunuz?",
          {
            okText: "Evet",
            cancelText: 'Hayır'
          }).then(function (dialog) {
            arr.splice(index, 1);

          }).catch(function (dialog) {
          });
        this.sepet = arr;
      },
      async Ekle()
      {

        if (this.siparisler.DOVIZ_ID == null || this.siparisler.DOVIZ_ID == 0) {
          this.$dialog.alert("Lütfen Doviz Türü Seçiniz");
          return;
        }

        var malzemelistesi = this.MalzList;
        for (var i = 0; i < malzemelistesi.length; i++)
        {
          if (malzemelistesi[i].malzeme.Checked) {
            var obj = {};
            obj.MALZ_ID = malzemelistesi[i].malzeme.MALZ_ID;
            obj.MALZ_ISIM = malzemelistesi[i].malzeme.MALZ_ISIM;
            obj.MALZ_KODU = malzemelistesi[i].malzeme.MALZ_KODU;
            obj.BRM_ADI = malzemelistesi[i].malzeme.BRM_ADI;
            obj.DOV_ADI = malzemelistesi[i].malzeme.DOV_ADI;
            obj.MIKTAR = malzemelistesi[i].malzeme.MIKTAR;
            obj.BRFIYAT = malzemelistesi[i].malzeme.SATFIYAT;
            obj.MBRM_ID = malzemelistesi[i].malzeme.BRM_ID.MALZ_BRM_ID;
            obj.BRM_ADI = malzemelistesi[i].malzeme.BRM_ID.BRM_ADI;
            var kurarr = await this.services.GuncelKurlariGetir(this.siparisler.DOVIZ_ID)
            if (kurarr.length > 0) {
              obj.KUR1 = kurarr[0].Doviz1_Deger;
              obj.KUR2 = kurarr[0].Doviz2_Deger;
            }
            this.sepet.push(obj);
          }
        }
        //console.log(this.sepet);

      },
      async Save() {
        try {
          var model = {};
          model.siparisler = this.siparisler;
          model.siparisler.SIPTARIHI = this.MyDate(this.siparisler.SIPTARIHI);
          model.siparisler.TERMINTARIHI = this.MyDate(this.siparisler.TERMINTARIHI);
          model.siparisler.CUSR_ID = this.$store.state.auth.user.USR_ID;
          //sipariş att arrayi
          model.spvlist = [];
          var obj1 = { PRM_ID: 1, TIPI: "decimal", DEGER: this.siparisatt.P1, KOD: "P1" };
          model.spvlist.push(obj1);
          var obj2 = { PRM_ID: 2, TIPI: "decimal", DEGER: this.siparisatt.P2, KOD: "P2" };
          model.spvlist.push(obj2);
          var obj3 = { PRM_ID: 3, TIPI: "decimal", DEGER: "0.0", KOD: "P3" };
          model.spvlist.push(obj3);

          model.skdlist = [];

          for (var i = 0; i < this.sepet.length; i++) {
            var objkalem = {};
            objkalem = this.sepet[i];
            objkalem.SIRANO = i;
            //sipariş kalem att arr
            objkalem.skpvlist = [];

            var objprm1 = { PRM_ID: 1, SIRANO: i, TIPI: "decimal", DEGER: this.sepet[i].P1, KOD: "P1" };
            objkalem.skpvlist.push(objprm1);
            var objprm3 = { PRM_ID: 3, SIRANO: i, TIPI: "DateTime", DEGER: this.sepet[i].P3, KOD: 'P3' };
            objkalem.skpvlist.push(objprm3);

            var objprm4 = { PRM_ID: 6, SIRANO: i, TIPI: "decimal", DEGER: this.sepet[i].Navlun, KOD: "Navlun" };
            objkalem.skpvlist.push(objprm4);

            model.skdlist.push(objkalem);
          }
          var res = await this.services.SiparisOlustur(model);
          if (res)
            this.$dialog.alert('Eklendi');
          else
            this.$dialog.alert("HATA!");

          model.siparisler.SIPTARIHI = this.ReMyDate(model.siparisler.SIPTARIHI);
          model.siparisler.TERMINTARIHI = this.ReMyDate(model.siparisler.TERMINTARIHI);
      
        } catch (err) {
          model.siparisler.SIPTARIHI = this.ReMyDate(model.siparisler.SIPTARIHI);
          model.siparisler.TERMINTARIHI = this.ReMyDate(model.siparisler.TERMINTARIHI);
          this.$dialog.alert("Beklenmedik bir hata oluştu!");
          console.log(err.message);

        }
        finally{
          await this.Listele();
        }

      },
      async Update() {

        try {

          var model = {};
          model.siparisler = this.siparisler;
          model.siparisler = this.siparisler;
          model.siparisler.SIPTARIHI = this.MyDate(this.siparisler.SIPTARIHI);
          model.siparisler.TERMINTARIHI = this.MyDate(this.siparisler.TERMINTARIHI);
          model.siparisler.UUSR_ID = this.$store.state.auth.user.USR_ID;

          //sipariş att arrayi
          model.spvlist = [];
          var obj1 = { PRM_ID: 1, TIPI: "decimal", DEGER: this.siparisatt.P1, KOD: "P1" };
          model.spvlist.push(obj1);
          var obj2 = { PRM_ID: 2, TIPI: "decimal", DEGER: this.siparisatt.P2, KOD: "P2" };
          model.spvlist.push(obj2);
          var obj3 = { PRM_ID: 3, TIPI: "decimal", DEGER: "0.0", KOD: "P3" };
          model.spvlist.push(obj3);

          model.skdlist = [];

          for (var i = 0; i < this.sepet.length; i++) {
            var objkalem = {};
            objkalem = this.sepet[i];
            objkalem.SIRANO = i;
            //sipariş kalem attribute arr
            objkalem.skpvlist = [];
            var objprm1 = { PRM_ID: 1, SIRANO: i, TIPI: "decimal", DEGER: this.sepet[i].P1, KOD: "P1" };
            objkalem.skpvlist.push(objprm1);
            var objprm3 = { PRM_ID: 3, SIRANO: i, TIPI: "DateTime", DEGER: this.sepet[i].P3, KOD: 'P3' };
            objkalem.skpvlist.push(objprm3);

            var objprm4 = { PRM_ID: 6, SIRANO: i, TIPI: "decimal", DEGER: this.sepet[i].Navlun, KOD: "Navlun" };
            objkalem.skpvlist.push(objprm4);
            model.skdlist.push(objkalem);
          }


          var res = await this.services.Update(model);
          if (res)
            this.$dialog.alert('Eklendi');
          else
            this.$dialog.alert("HATA!");
          model.siparisler.SIPTARIHI = this.ReMyDate(model.siparisler.SIPTARIHI);
          model.siparisler.TERMINTARIHI = this.ReMyDate(model.siparisler.TERMINTARIHI);
      
        } catch (err) {
          model.siparisler.SIPTARIHI = this.ReMyDate(model.siparisler.SIPTARIHI);
          model.siparisler.TERMINTARIHI = this.ReMyDate(model.siparisler.TERMINTARIHI);
          this.$dialog.alert("Beklenmedik bir hata oluştu!");
          console.log(err.message);

        } finally {
          await this.Listele();
        }
       
      },
      async Edit(SIP_ID)
      {
      
        var res = await this.services.Edit(SIP_ID);
        this.siparisler = res.siparisler;
        this.siparisler = res.siparisler;
        this.siparisler.SIPTARIHI = moment(this.siparisler.SIPTARIHI).lang("tr").format("DD.MM.YYYY");
        this.siparisler.TERMINTARIHI = moment(this.siparisler.TERMINTARIHI).lang("tr").format("DD.MM.YYYY");

        let P1obj = res.spvlist.filter(m => m.KOD == "P1");
        let P2obj = res.spvlist.filter(m => m.KOD == "P2");
        //let P3obj = res.trpvlist.filter(m => m.KOD == "P3");
        if (P1obj.length > 0) this.siparisatt.P1 = P1obj[0].DEGER;
        if (P2obj.length > 0) this.siparisatt.P2 = P2obj[0].DEGER;
        this.sepet = [];
        for (var i = 0; i < res.skdlist.length; i++) {
          var obj = {};
          obj = res.skdlist[i];
          console.log(JSON.stringify(obj));
          let kP1obj = res.skdlist[i].skpvlist.filter(m => m.KOD == "P1" && m.SIRANO == res.skdlist[i].SIRANO);
          if (kP1obj.length > 0) obj.P1 = kP1obj[0].DEGER;
          let kP2obj = res.skdlist[i].skpvlist.filter(m => m.KOD == "Navlun" && m.SIRANO == res.skdlist[i].SIRANO);
          if (kP2obj.length > 0) obj.Navlun = kP2obj[0].DEGER;
          let kP3obj = res.skdlist[i].skpvlist.filter(m => m.KOD == "P3" && m.SIRANO == res.skdlist[i].SIRANO);
          if (kP3obj.length > 0) obj.P3 = kP3obj[0].DEGER;
          this.sepet.push(obj);
        }
      },
      async ddl_CariPlasiyerler() {
        this.PlaList = [];
        if (this.siparisler.CARI_ID != null) {
          const arr = await this.ddlservices.ddl_CariPlasiyerler(this.siparisler.CARI_ID);
          this.PlaList = arr;
        }

      },
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
        const arr = await this.ddlservices.ddl_Cariler();
        this.CariList = arr;
      },
      async ddl_Dovizler() {
        const arr = await this.ddlservices.ddl_Dovizler();
        this.DovizList = arr;
      },
      async ddl_Odeme_Turleri() {
        const arr = await this.ddlservices.ddl_Odeme_Turleri();
        this.OdemeList = arr;
      },
      async ddl_TESLIMAT_TURU() {
        const arr = await this.ddlservices.ddl_TESLIMAT_TURU();
        this.TeslimatList = arr;
      },
      async ddl_Markalar() {
        const arr = await this.ddlservices.ddl_Markalar();
        this.MarkaList = arr;
      },
      async ddl_Markalar() {
        const arr = await this.ddlservices.ddl_Markalar();
        this.MarkaList = arr;
      },
      async ddl_Kategoriler() {
        const arr = await this.ddlservices.ddl_Kategoriler();
        this.CatList = arr;
      },
      async MalzemeListele() {
        const arr = await this.services.getMalzemeler(this.malzemefilter.CAT_ID, this.malzemefilter.MARKA_ID);
        this.MalzList = arr;
        console.log(this.MalzList)
      },
      async Temizle() {
        this.siparisler = {};
        this.sepet = [];
        this.MalzList = [];
        this.siparisatt = [];
      },

      async Deletemethod(n, index)
      {
        try {
          var res = this.services.Delete(n);
          if (res) {
            this.SipList.splice(index, 1);
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
      async Delete(n, index) {
        this.$dialog.confirm('Bu kaydı silmek istediğinizden emin misiniz', {
          okText: "Evet",
          cancelText: 'Hayır'
        }).then((dialog) => { // change function to arrow syntax

          this.Deletemethod(n, index);
        })
          .catch(function (err) {
            console.log(err.message);
          })
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
      async AktifEtMethod(REV_ID, TEKLIF_ID) {
        try {
          var obj = {};
          obj.TEKLIF_ID = TEKLIF_ID;
          obj.SIPDONID = REV_ID;
          var res = this.services.Aktifet(obj);
          if (res) {
            this.Listele();
          }
        } catch (e) {

        }
      },
      async AktifEt(REV_ID, TEKLIF_ID, index) {
        this.$dialog.confirm('Teklifin bu siparislerunu aktif etmek istediğinizden emin misiniz?', {
          okText: "Evet",
          cancelText: 'Hayır'
        }).then((dialog) => {
          var obj = {};
          obj.TEKLIF_ID = TEKLIF_ID;
          obj.SIPDONID = REV_ID;
          var res = this.services.Aktifet(obj);
          if (res) {
            this.Listele();
          }
          this.AktifEtMethod(REV_ID, TEKLIF_ID, index);
        })
          .catch(function (err) {
            console.log(err.message);
          })
      },
      async SiparisineDonusturMethod(TEK_ID)
      {
        try {
          var res = this.services.SiparisineDonustur(TEK_ID);
          if (res) {
            this.Listele();
          }
        }
        catch (e) {
        }
      },
      async SiparisineDonustur(TEK_ID) {
        this.$dialog.confirm(TEK_ID + ' nolu teklifi siparişe dönüştürmek istiyor musunuz?',
          {
            okText: "Evet",
            cancelText: 'Hayır'
          }).then((dialog) => {
            this.SiparisineDonusturMethod(TEK_ID);
          })
          .catch(function (err) {
            console.log(err.message);
          })
      },

    }
  }
</script>
<style>
  @media (min-width: 1700px) {
    .modal-xl {
      max-width: 1550px;
    }
  }

  @media (min-width: 1200px) {
    .modal-xl {
      max-width: 1350px;
    }
  }
</style>
