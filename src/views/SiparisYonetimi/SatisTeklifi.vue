
<style>
  .sepet tr td
  {
    padding:2px;
  }
</style>
<template>
  <div class="content-wrapper">
    <div class="container-fluid">
      <div class="col-12">
        <div class="card mt-2">
          <div class="card-header">
            <div class="row">
              <div class="col-5">
                <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-xl" @click="Temizle()">
                  <i class="fa fa-plus"></i> Satış Teklifi Ekle
                </button>
                <a  class="btn btn-primary btn-sm" href="#/satisteklifi">
                  <i class="fa fa-refresh"></i> Yenile
                </a>
              </div>
              <div class="col-4"><h3 class=""><b>Satış Teklifleri</b> </h3> </div>
              <div class="col-3"></div>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label>Cari Ünvan</label>
                  <vue-select class="vue-select1" v-model="filter.CARI_ID" :options="CariList" :reduce="(CariList) => CariList.Key" label="Value">
                  </vue-select>
                </div>
              </div>
              <div class="col-sm-4">
                <div class='form-group'>
                  <label>Başlangıç</label>
                  <date-picker v-model="filter.SBas_Tar" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>
                </div>
              </div>
              <div class="col-sm-4">
                <div class='form-group'>
                  <label>Bitiş</label>
                  <date-picker v-model="filter.SBit_Tar" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>
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
                    <th style="width:5%">Teklif No</th>
                    <th style="width:5%">Teklif Türü</th>
                    <th style="width:10%">Cari Ünvan</th>
                    <th style="width:5%">Döviz Türü</th>
                    <th style="width:5%">Siparişe Dönüştümü</th>
                    <th style="width:60%">Revizyonlar</th>
                    <th style="width:10%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(n,index) in TeklifList'>
                    <td>{{n.TEKLIF_ID}}</td>
                    <td>{{n.TURU=='STSTEK'?'Satış Teklifi':'Türü Belli Değil'}}</td>
                    <td>{{n.CARI_UNVAN}}</td>
                    <td>{{n.DOVIZADI}}</td>
                    <td>{{n.SIPDONUSTUMU==1?"Siparişleşti":"Siparişleşmedi"}}</td>
                    <td>
                      <div class="card collapsed-card">
                        <div class="card-header">
                          <h3 class="card-title"><b>{{n.TEKLIF_ID}} nolu Teklif Revizyonları</b></h3>

                          <div class="card-tools">
                            <button type="button" class="btn btn-tool btn-primary" data-card-widget="collapse" title="Collapse">
                              <i class="fas fa-minus"></i>
                            </button>

                          </div>
                        </div>
                        <div class="card-body">
                          <table class="table table-bordered table-striped">
                            <thead>
                              <tr>
                                <th>Revizyon No</th>
                                <th>Ödeme-Teslimat</th>
                                <th>Revizyon Tarihi</th>
                                <th>Termin Tarihi</th>
                                <th>Toplam</th>
                                <th>ToplamTL</th>
                                <th>İşlemler</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for='(tr,index) in n.trlist' v-bind:style='(tr.TEKREVID==n.SIPDONID?"background-color:#ccffd9":"")'>
                                <td>{{tr.REVIZYONNO}}</td>
                                <td>{{tr.Tesl_Tur}}-{{tr.Odeme_Turu}}</td>
                                <td>{{formatTRDate(tr.TEKLIFTARIHI)}}</td>
                                <td>{{formatTRDate(tr.TERMINTARIHI)}}</td>
                                <td>{{tr.TRTOTAL}}</td>
                                <td>{{tr.LDOVTRTOTAL}}</td>
                                <td>
                                  <div class="btn-group btn-block">
                                    <button type="button" class="btn btn-warning">İşlemler</button>
                                    <button type="button" class="btn btn-warning dropdown-toggle dropdown-icon" data-toggle="dropdown" aria-expanded="false">
                                      <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu" role="menu" style="">
                                      <a class='dropdown-item edit text-black' data-toggle='modal' data-target='#modal-xl' @click='Edit(tr.TEKREVID,index)'><i class='fas fa-edit'></i> Revizyon Ekle</a>
                                      <a class='dropdown-item sil text-black' v-if="(n.SIPDONUSTUMU!=1)" @click='REVDelete(tr.TEKREVID,index)'><i class='fas fa-trash'></i> Sil</a>
                                      <a class='dropdown-item sil text-black' v-if="(n.SIPDONUSTUMU!=1)" @click='AktifEt(tr.TEKREVID,n.TEKLIF_ID,index)'><i class='fas fa-edit'></i> Revizyonu Aktif Et</a>
                                      <a class='dropdown-item  text-black' data-toggle='modal' data-target='#modal-xl' @click='DetayGoster(tr.TEKREVID,index)'><i class='fas fa-search'></i> Detay</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="btn-group btn-block">
                        <button type="button" class="btn btn-warning">İşlemler</button>
                        <button type="button" class="btn btn-warning dropdown-toggle dropdown-icon" data-toggle="dropdown" aria-expanded="false">
                          <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu" role="menu" style="">
                          <a class='dropdown-item sil text-black' v-if="(n.SIPDONUSTUMU!=1)" @click='TEKDelete(n.TEKLIF_ID,index)'><i class='fas fa-trash'></i> Teklifi Sil</a>

                          <a class='dropdown-item sil text-black' v-if="(n.SIPDONUSTUMU!=1)" @click='SiparisineDonustur(n.TEKLIF_ID)'><i class='fas fa-check'></i> Üretim Siparişine Dönüştür</a>

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
              <h4 class="modal-title">Satış Teklifi</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">

                <div class="col-md-12">
                  <!-- general form elements -->
                  <div class="card card-primary card-outline">
                    <div class="card-header">
                      <h3 class="card-title"> <b>{{ revizyon.TEKREVID==null?"Teklif Ekle":"Teklif Revizyon Ekle" }}</b></h3>
                    </div>
                    <div class="">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-sm-4">
                            <div class='form-group'>
                              <label>Cari</label>
                              <input v-model="revizyon.TEKREVID" type="hidden" />
                              <vue-select class="vue-select1" v-model="teklifler.CARI_ID" :options="CariList" @input="ddl_CariPlasiyerler()" :reduce="(CariList) => CariList.Key" label="Value">
                              </vue-select>
                            </div>
                           
                          </div>
                          <div class="col-sm-4">
                            <div class='form-group'>
                              <label>Döviz</label>
                              <vue-select class="vue-select1" v-model="teklifler.DOVIZID" :options="DovizList" :reduce="(DovizList) => DovizList.Key" label="Value">
                              </vue-select>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class='form-group'>
                              <label>Teklif Tarihi</label>
                              <date-picker v-model="revizyon.TEKLIFTARIHI" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class='form-group'>
                              <label>Plasiyer</label>

                              <vue-select class="vue-select1" v-model="teklifler.PLA_ID" :options="PlaList"  :reduce="(PlaList) => PlaList.Key" label="Value">
                              </vue-select>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class='form-group'>
                              <label>Termin Tarihi</label>
                              <date-picker v-model="revizyon.TERMINTARIHI" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class='form-group'>
                              <label>Teslimat Türü</label>
                              <vue-select class="vue-select1" v-model="revizyon.TESTURID" :options="TeslimatList" :reduce="(TeslimatList) => TeslimatList.Key" label="Value">
                              </vue-select>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class='form-group'>
                              <label>Ödeme Türü</label>
                              <vue-select class="vue-select1" v-model="revizyon.ODETURID" :options="OdemeList" :reduce="(OdemeList) => OdemeList.Key" label="Value">
                              </vue-select>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class='form-group'>
                              <label>İskonto</label>
                              <input type='text' v-model='revatt.P1' class='form-control form-control-sm' placeholder='İskonto 1'>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class='form-group'>
                              <label>İskonto2</label>
                              <input type='text' v-model='revatt.P2' class='form-control form-control-sm' placeholder='İskonto 2'>
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
                          <table class="table table-striped table-bordered">
                            <thead>
                              <tr>
                                <th>Seç</th>
                                <th style="min-width:100px;">Kategori</th>
                                <th style="min-width:100px;">Malzeme Kodu</th>
                                <th style="min-width:100px;">Malzeme Adı</th>
                                <th style="min-width:100px;">Miktar</th>
                                <th style="min-width:100px;">Satış Fiyatı</th>

                              </tr>
                            </thead>
                            <tbody v-for="(n,index) in MalzList">
                              <tr>
                                <td><input v-model="n.malzeme.Checked" type="checkbox" /> </td>
                                <td>{{n.malzeme.CAT_ADI}}</td>
                                <td>{{n.malzeme.MALZ_KODU}}</td>
                                <td>{{n.malzeme.MALZ_ISIM}}</td>
                                <td>
                                  <div class="row">
                                    <div class="col-8">
                                      <input v-model="n.malzeme.MIKTAR" type="text"  class="form-control form-control-sm" />
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
                              <tr v-if="n.attlist.length>0">
                                <td colspan="5">
                                  <div class="row">
                                    <div class="col-sm-4" v-for="(np,index) in n.attlist">
                                      <b>{{np.AttAdi}}</b><br />
                                      <select v-model="np.Att_ID" class="form-control form-control-sm">
                                        <option v-for="(natt) in np.valuelist" :value="natt">
                                          {{natt.Value}}
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </td>
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

                        <div class="table-responsive sepet" style="overflow-x:scroll;">
                          <table class="table  table-bordered">
                            <thead>
                              <tr>
                                <th style="min-width:140px;">Malzeme Kodu</th>
                                <th style="min-width:140px;">Malzeme Adı</th>
                                <th style="min-width:100px;">Miktar</th>
                                <th style="min-width:40px;">Birim</th>
                                <th style="min-width:100px;">Satış Fiyatı</th>
                                <th style="min-width:100px;">KDV Oran</th>
                                <th style="min-width:100px;">Kur1 </th>
                                <th style="min-width:100px;">Kur2 </th>
                                <th style="min-width:100px;">İskonto </th>
                                <th style="min-width:100px;">Navlun </th>
                                <th style="min-width:140px;">Termin Tarihi </th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody v-for="(n,index) in sepet" v-bind:style="(index%2==0?'background-color:#d9d9d9;color:red':'background-color:#e0e0eb;color:red')" >
                              <tr>
                                <td>{{n.MALZ_KODU}}</td>
                                <td>{{n.MALZ_ISIM}}</td>
                                <td>
                                  <input v-model="n.MIKTAR" v-mask="decimalMask" class="form-control form-control-sm" />
                                
                                </td>
                                <td>
                                  {{n.BRM_ADI}}
                                </td>
                                <td >
                                  <div class="row ">
                                    <div class="col-sm-9 ">
                                      <input v-model="n.BRM_FYT" v-mask="currencyMask" maxlength="12" class="form-control form-control-sm fiyat" />
                                    </div>
                                    <div class="col-sm-3 ">
                                      {{n.DOV_ADI}}
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <input v-model="n.KDVORAN" v-mask="decimalMask" class="form-control form-control-sm" />

                                </td>
                                <td>
                                  <input v-model="n.KUR1"  v-mask="decimalMask" class="form-control form-control-sm" style="min-width:100px;" />
                                </td>
                                <td>
                                  <input v-model="n.KUR2" v-mask="decimalMask" class="form-control form-control-sm" style="min-width:100px;" />
                                </td>
                                <td>
                                  <input v-model="n.P1" v-mask="decimalMask" class="form-control form-control-sm" style="min-width:100px;"  />
                                </td>
                                <td> <input v-model="n.P2" v-mask="decimalMask" class="form-control form-control-sm" style="min-width:100px;" /></td>
                                <td>
                                  <date-picker v-model="n.P3" :lang="lang" style="width:100%;" valueType="format" format="DD.MM.YYYY"> </date-picker>
                                </td>
                                <td>
                                  <a class="btn btn-danger btn-sm btn-circle" @click="Satirsil(index)"><i class="fa fa-trash"></i></a>
                                </td>
                              </tr>
                              <tr v-if="(n.attlist!=null?n.attlist.length>0:'')">
                                <td :colspan="11">
                                  <div class="row">
                                    <div class="col-sm-3" v-for="(np,index) in n.attlist">
                                      <b>{{np.ATT_ADI}}</b><br />
                                      <b>{{np.VALUE}}</b>
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
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Kapat</button>
              <button type="button" id="savebtn" class="btn btn-primary" v-on:click="(teklifler.TEKLIF_ID==null?Save():Update())">Kaydet</button>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>
<script>
  ///https://www.npmjs.com/package/v-mask
  import createNumberMask from 'text-mask-addons/dist/createNumberMask';
  const currencyMask = createNumberMask({
    prefix: '',
    allowDecimal: true,
    includeThousandsSeparator: false,
    allowNegative: false,
    thousandsSeparatorSymbol:',',
    decimalSymbol:'.'
  });

  const decimalMask = createNumberMask({
    prefix: '',
    allowDecimal: true,
    includeThousandsSeparator: false,
    allowNegative: false,
    thousandsSeparatorSymbol: ',',
    decimalSymbol: '.',
    decimalLimit :10
  });
  import SatisTeklifiServices from '../SiparisYonetimiServices/SatisTeklifiServices.js';
  import DropdownLists from '../Contents/DropdownLists.js';
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import 'vue2-datepicker/locale/tr';
  import moment from 'moment';
  import vs from 'vue-select';
  export default {
    components: {
      DatePicker,
      "vue-select": vs

    },
    name: 'SatışTeklifi',
    data() {
      return {
        lang: {
          formatLocale: {
            firstDayOfWeek: 1,
          },
          monthBeforeYear: false,
        },
        currencyMask,
        decimalMask,
        filter: {
          CARI_ID: '',
          SBas_Tar: '',
          SBit_Tar: '',
        },
        teklifler:
        {
          TEKLIF_ID: null,
          CDATE: '',
          CARI_ID: null,
          CARI_UNVAN: '',
          SATISMI: 1,
          SATINALMAMI: null,
          SIPDONID: null,
          SIPDONUSTUMU: null,
          CUSR_ID: null,
          CUSRNAME: '',
          ACIKLAMA: null,
          DOVIZID: null,
          DOVIZADI: '',
          CARI_KODU: '',
          TURU: '',
          UUSR_ID: null,
          UDATE: null,
          TRAEUSR_ID: null,
          TSIPDUSR_ID: null,
          TRAEDATE: null,
          TSIPDATE: null,
        },
        revizyon:
        {
          CUSERNAME: '',
          TESLTURU: '',
          ODEMETURU: '',
          PLADI: '',
          TEKREVID: null,
          TEKLIF_ID: null,
          REVIZYONNO: null,
          TEKLIFTARIHI: '',
          TERMINTARIHI: '',
          TESTURID: null,
          ODETURID: null,
          CUSR_ID: null,
          PLA_ID: null,
          ACIKLAMA: '',
        },
        revatt:
        {
          P1: "",
          P2: "",
        },
        teklifrevizyonkalem:
        {
          TRKREVKALID: null,
          DOVIZ_ID: null,
          TEKLIF_ID: null,
          DOVIZ_ADI: '',
          CUSR_ID: null,
          REVIZYONID: null,
          MALZ_ID: null,
          MALZ_ISIM: '',
          BRM_ID: null,
          BRM_ADI: '',
          MIKTAR: null,
          BRM_FYT: null,
          KIRAFIYATI: null,
          TLP_ID: null,
          SATINALMAMI: null,
          SATISMI: null,
          ACIKLAMA: '',
          SATISFISIDREF: null,
          SATISFISIDREFLINENO: null,
          CARI_ID: null,
          CARI_UNVAN: '',
          TERMINTARIHI: '',
        },
        revkalatt:
        {
          P1: "",
          P2: "",
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
        //malzeme özelliklerinin teklif detay tablosuna yazılması için var
        att:
        {
          ID: '',
          Att_ID: '',
          Malz_ID: '',
          AttValue: '',
        },
        DovizList: [],
        TeslimatList: [],
        CatList: [],
        MarkaList: [],
        OdemeList: [],
        MalzList: [],
        time1: null,
        CariList: [],
        TeklifList: [],
        PlaList: [],
        sepet: [],
        services: new SatisTeklifiServices(),
        ddlservices: new DropdownLists(),

      }
    },
    created()
    {

      $("div").removeClass("modal-backdrop fade show")
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

    },
    filters:
    {
    },
    computed:
    {
      currentUser() {

        return this.$store.state.auth.user;
      }
    },
    methods:
    {
      async DetayGoster(REV_ID)
      {
        this.Edit(REV_ID);
        $("#savebtn").css("display", "none");
      },
      
      async Listele()
      {
        const arr = await this.services.getTeklifler(this.filter.CARI_ID, this.filter.SBas_Tar,
          this.filter.SBit_Tar);
        this.TeklifList = arr;
        console.log(this.TeklifList)
      },
      async Satirsil(index) {
        var arr = this.sepet
        this.$dialog.confirm("Teklifin bu kalemini iptal etmek  istiyor musunuz?",
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
        if (this.teklifler.DOVIZID == null || this.teklifler.DOVIZID == 0)
        {
          this.$dialog.alert("Lütfen Doviz Türü Seçiniz");
          return;
        }

        var malzemelistesi = this.MalzList;
        for (var i = 0; i < malzemelistesi.length; i++) {
          if (malzemelistesi[i].malzeme.Checked) {

            var obj = {};
            obj.MALZ_ID = malzemelistesi[i].malzeme.MALZ_ID;
            obj.MALZ_ISIM = malzemelistesi[i].malzeme.MALZ_ISIM;
            obj.MALZ_KODU = malzemelistesi[i].malzeme.MALZ_KODU;
            obj.MBRM_ID = malzemelistesi[i].malzeme.BRM_ID.MALZ_BRM_ID;
            obj.BRM_ADI = malzemelistesi[i].malzeme.BRM_ID.BRM_ADI;
            obj.DOV_ADI = malzemelistesi[i].malzeme.DOV_ADI;
            obj.BRM_FYT = malzemelistesi[i].malzeme.SATFIYAT;
            var kurarr = await this.services.GuncelKurlariGetir(this.teklifler.DOVIZID)
            if (kurarr.length>0) {
              obj.KUR1 = kurarr[0].Doviz1_Deger;
              obj.KUR2 = kurarr[0].Doviz2_Deger;
            }
    

            if (malzemelistesi[i].attlist != null) {
              if (malzemelistesi[i].attlist.length > 0)
              {
                obj.attlist = [];
                for (var j = 0; j < malzemelistesi[i].attlist.length; j++) {

                  var objatt = {};
                  objatt.MALZ_ID = malzemelistesi[i].malzeme.MALZ_ID;
                  objatt.ATT_ID = malzemelistesi[i].attlist[j].Att_ID.Key;
                  objatt.ATT_ADI = malzemelistesi[i].attlist[j].AttAdi;
                  objatt.VALUE = malzemelistesi[i].attlist[j].Att_ID.Value;
                  objatt.SIRANO = i;
                  obj.attlist.push(objatt);
                }
              }
            }
            this.sepet.push(obj);
          }
        }
      },

      async Save()
      {
        try
        {
          var model = {};
          model.teklifler = this.teklifler;
          model.teklifler.CUSR_ID = this.$store.state.auth.user.USR_ID;
        //  model.teklifler.CARI_ID = this.teklifler.CARI_ID.Key;
          model.revizyon = this.revizyon;
          model.revizyon.TEKLIFTARIHI = this.MyDate(this.revizyon.TEKLIFTARIHI);
          model.revizyon.TERMINTARIHI = this.MyDate(this.revizyon.TERMINTARIHI);

          model.trpvlist = [];
          var obj1 = {};
          obj1.PRM_ID = 1;
          obj1.TIPI = "decimal";
          obj1.DEGER = this.revatt.P1;
          obj1.KOD = "P1";
          model.trpvlist.push(obj1);

          var obj2 = {};
          obj2.PRM_ID = 2;
          obj2.TIPI = "decimal";
          obj2.DEGER = this.revatt.P2;
          obj2.KOD = "P2";
          model.trpvlist.push(obj2);
          model.trkdtolist = [];

          for (var i = 0; i < this.sepet.length; i++)
          {
            var objkalem = {};
            objkalem = this.sepet[i];
            objkalem.SIRANO = i;
            objkalem.tmalist = [];

            var attlen = 0;
            if (this.sepet[i].attlist != null) {
              attlen = this.sepet[i].attlist.length;
              for (var j = 0; j < attlen; j++) {
                var objatt = {};
                objatt.ATT_ID = this.sepet[i].attlist[j].ATT_ID;
                objatt.VALUE = this.sepet[i].attlist[j].VALUE;
                objatt.SIRANO = this.sepet[i].attlist[j].SIRANO;
                objkalem.tmalist.push(objatt);
              }
            }
         

            objkalem.trkpvlist = [];
            var objprm1 = {};
            objprm1.PRM_ID = 1;
            objprm1.SIRANO = i;
            objprm1.DEGER = this.sepet[i].P1;
            objprm1.TIPI = "decimal";
            objprm1.KOD = "P1";
            objkalem.trkpvlist.push(objprm1);

            var objprm2 = {};
            objprm2.PRM_ID = 2;
            objprm2.SIRANO = i;
            objprm2.DEGER = this.sepet[i].P2;
            objprm2.KOD = "P2";
            objprm2.TIPI = "decimal";
            objkalem.trkpvlist.push(objprm2);

            var objprm3 = {};
            objprm3.PRM_ID = 3;
            objprm3.SIRANO = i;
            objprm3.DEGER = this.sepet[i].P3;
            objprm3.KOD = "P3";
            objprm3.TIPI = "DateTime";
            objkalem.trkpvlist.push(objprm3);
            model.trkdtolist.push(objkalem);
          }

          var res = await this.services.TeklifOlustur(model);
          if (res) {
            this.$dialog.alert('Eklendi');
          }       
          else if (this.services.mesaj != "")
          {
            this.$dialog.alert(this.services.mesaj);
           }
          else
            this.$dialog.alert("HATA!");

          
          this.revizyon.TEKLIFTARIHI = this.ReMyDate(this.revizyon.TEKLIFTARIHI);
          this.revizyon.TERMINTARIHI = this.ReMyDate(this.revizyon.TERMINTARIHI);

        } catch (err) {
          this.revizyon.TEKLIFTARIHI = this.ReMyDate(this.revizyon.TEKLIFTARIHI);
          this.revizyon.TERMINTARIHI = this.ReMyDate(this.revizyon.TERMINTARIHI);
          this.$dialog.alert("Beklenmedik bir hata oluştu!");
          console.log(err.message);
        }
      },
      async Update() {
        debugger;
        try {
          var model = {};
          model.teklifler = this.teklifler;
          model.teklifler.CUSR_ID = this.$store.state.auth.user.USR_ID;
       //   model.teklifler.CARI_ID = this.teklifler.CARI_ID.Key;
          model.revizyon = this.revizyon;
          model.revizyon.TEKLIFTARIHI = this.MyDate(this.revizyon.TEKLIFTARIHI);
          model.revizyon.TERMINTARIHI = this.MyDate(this.revizyon.TERMINTARIHI);
          model.trpvlist = [];

          var obj1 = {};
          obj1.PRM_ID = 1;
          obj1.TIPI = "decimal";
          obj1.DEGER = this.revatt.P1;
          obj1.KOD = "P1";
          model.trpvlist.push(obj1);

          var obj2 = {};
          obj2.PRM_ID = 2;
          obj2.TIPI = "decimal";
          obj2.DEGER = this.revatt.P2;
          obj2.KOD = "P2";
          model.trpvlist.push(obj2);
          model.trkdtolist = [];
          for (var i = 0; i < this.sepet.length; i++)
          {

            var objkalem = {};
            objkalem = this.sepet[i];
            objkalem.SIRANO = i;
            objkalem.tmalist = [];

            var attlen = 0;
            if (this.sepet[i].attlist != null) {
              attlen = this.sepet[i].attlist.length;
              for (var j = 0; j < attlen; j++) {
                var objatt = {};
                objatt.ATT_ID = this.sepet[i].attlist[j].ATT_ID;
                objatt.VALUE = this.sepet[i].attlist[j].VALUE;
                objatt.SIRANO = this.sepet[i].attlist[j].SIRANO;
                objkalem.tmalist.push(objatt);
              }
            }

            objkalem.trkpvlist = [];
            var objprm1 = {};
            objprm1.PRM_ID = 1;
            objprm1.SIRANO = i;
            objprm1.DEGER = this.sepet[i].P1;
            objprm1.KOD = "P1";
            objprm1.TIPI = "decimal";
            objkalem.trkpvlist.push(objprm1);

            var objprm2 = {};
            objprm2.PRM_ID = 2;
            objprm2.SIRANO = i;
            objprm2.DEGER = this.sepet[i].P2;
            objprm2.KOD = "P2";
            objprm2.TIPI = "decimal";
            objkalem.trkpvlist.push(objprm2);

            var objprm3 = {};
            objprm3.PRM_ID = 3;
            objprm3.SIRANO = i;
            objprm3.DEGER = this.sepet[i].P3;
            objprm3.TIPI = "decimal";
            objprm3.KOD = "P3";
            objkalem.trkpvlist.push(objprm3);
            model.trkdtolist.push(objkalem);
          }


          var res = await this.services.Update(model);
          if (res)
            this.$dialog.alert('Eklendi');
          else if (this.services.mesaj != "") {
            this.$dialog.alert(this.services.mesaj);
          }
          else
            this.$dialog.alert("HATA!");
          this.revizyon.TEKLIFTARIHI = this.ReMyDate(this.revizyon.TEKLIFTARIHI);
          this.revizyon.TERMINTARIHI = this.ReMyDate(this.revizyon.TERMINTARIHI);
          return;
        } catch (err) {
          this.$dialog.alert("Beklenmedik bir hata oluştu!");
          this.revizyon.TEKLIFTARIHI = this.ReMyDate(this.revizyon.TEKLIFTARIHI);
          this.revizyon.TERMINTARIHI = this.ReMyDate(this.revizyon.TERMINTARIHI);
          return;
        }
      },
      async Edit(REV_ID) {
        $("#savebtn").css("display", "");
        var res = await this.services.Edit(REV_ID);
        this.teklifler = res.teklifler;
        this.ddl_CariPlasiyerler();
        this.teklifler.PLA_ID = res.teklifler.PLA_ID;
     //   this.teklifler.CARI_ID.Key = res.teklifler.CARI_ID;
        this.revizyon = res.revizyon;
        this.revizyon.TEKLIFTARIHI = moment(this.revizyon.TEKLIFTARIHI).lang("tr").format("DD.MM.YYYY");
        this.revizyon.TERMINTARIHI = moment(this.revizyon.TERMINTARIHI).lang("tr").format("DD.MM.YYYY");
        let P1obj = res.trpvlist.filter(m => m.KOD == "P1");
        let P2obj = res.trpvlist.filter(m => m.KOD == "P2");
        if (P1obj.length > 0) this.revatt.P1 = P1obj[0].DEGER;
        if (P2obj.length > 0) this.revatt.P2 = P2obj[0].DEGER;
        this.sepet = [];
        for (var i = 0; i < res.trkdtolist.length; i++)
        {
          var obj = {};
          obj = res.trkdtolist[i];
          let kP1obj = res.trkdtolist[i].trkpvlist.filter(m => m.KOD == "P1" && m.SIRANO == res.trkdtolist[i].SIRANO);
          if (kP1obj.length > 0) obj.P1 = kP1obj[0].DEGER;
          let kP2obj = res.trkdtolist[i].trkpvlist.filter(m => m.KOD == "P2" && m.SIRANO == res.trkdtolist[i].SIRANO);
          if (kP2obj.length > 0) obj.P2 = kP2obj[0].DEGER;
          let kP3obj = res.trkdtolist[i].trkpvlist.filter(m => m.KOD == "P3" && m.SIRANO == res.trkdtolist[i].SIRANO);
          if (kP3obj.length > 0) obj.P3 = kP3obj[0].DEGER;
          this.sepet.push(obj);
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
      async ddl_CariPlasiyerler()
      {
        this.PlaList = [];
        if (this.teklifler.CARI_ID != null) {
          const arr = await this.ddlservices.ddl_CariPlasiyerler(this.teklifler.CARI_ID);
          this.PlaList = arr;
        }

      },
      async MalzemeListele() {
        const arr = await this.services.getMalzemeler(this.malzemefilter.CAT_ID, this.malzemefilter.MARKA_ID);
        this.MalzList = arr;
        console.log(this.MalzList)
      },
      async Temizle() {
        this.teklifler = {};
        this.revizyon = {};
        this.revatt = [];
        this.sepet = [];
      },
      async TEKDeletemethod(REV_ID, index)
      {
        try {
          var res = this.services.TEKDelete(REV_ID);
          if (res) {
            this.alisfaturalist.splice(index, 1);
            $('#example1').DataTable().destroy();
            this.setDatatable();
            this.$dialog.alert('Bilgiler silindi!')
          }
          else if (this.services.mesaj != "") {
            this.$dialog.alert(this.services.mesaj);
          }
          else
            this.$dialog.alert("HATA!");
        } catch (e) {

        }
      },
      async TEKDelete(REV_ID, index) {
        this.$dialog.confirm('Bu kaydı silmek istediğinizden emin misiniz', {
          okText: "Evet",
          cancelText: 'Hayır'
        }).then((dialog) => { // change function to arrow syntax

          this.TEKDeletemethod(REV_ID, index);
        })
          .catch(function (err) {
            console.log(err.message);
          })
      },
      async REVDeletemethod(REV_ID, index) {
        try {
          var res = this.services.REVDelete(REV_ID);
          if (res) {
            this.alisfaturalist.splice(index, 1);
            $('#example1').DataTable().destroy();
            this.setDatatable();
            this.$dialog.alert('Bilgiler silindi!')
          }
          else if (this.services.mesaj != "") {
            this.$dialog.alert(this.services.mesaj);
          }
          else
            this.$dialog.alert("HATA!");
        } catch (e) {

        }
      },
      async REVDelete(REV_ID, index) {
        this.$dialog.confirm('Bu kaydı silmek istediğinizden emin misiniz', {
          okText: "Evet",
          cancelText: 'Hayır'
        }).then((dialog) => { // change function to arrow syntax

          this.REVDeletemethod(REV_ID, index);
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
      async AktifEtMethod(REV_ID, TEKLIF_ID)
      {
        try {
          var obj = {};
          obj.TEKLIF_ID = TEKLIF_ID;
          obj.SIPDONID = REV_ID;
          obj.TRAEUSR_ID = this.$store.state.auth.user.USR_ID;
          var res = this.services.Aktifet(obj);
          if (res) {
            this.Listele();
          }
          else if (this.services.mesaj != "") {
            this.$dialog.alert(this.services.mesaj);
          }
          else
            this.$dialog.alert("HATA!");
        } catch (e) {

        }
      },
      async AktifEt(REV_ID, TEKLIF_ID, index) {
        this.$dialog.confirm('Teklifin bu revizyonunu aktif etmek istediğinizden emin misiniz?', {
          okText: "Evet",
          cancelText: 'Hayır'
        }).then((dialog) => {

          this.AktifEtMethod(REV_ID, TEKLIF_ID, index);
        })
          .catch(function (err) {
            console.log(err.message);
          })
      },
      async SiparisineDonusturMethod(TEK_ID) {
        try
        {
          var obj = {};
          obj.TEKLIF_ID = TEK_ID;
          obj.TSIPDUSR_ID= this.$store.state.auth.user.USR_ID;
          var res = this.services.SiparisineDonustur(obj);
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
