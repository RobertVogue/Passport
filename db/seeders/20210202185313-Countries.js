'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Countries', [
        {name: "Afghanistan",
        flagUrl: "https://www.worldometers.info/img/flags/small/tn_af-flag.gif"
      },
      {
        name : "Albania",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_al-flag.gif"
      },
      {
        name : "Algeria",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ag-flag.gif"
      },
      {
        name : "Andorra",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_an-flag.gif"
      },
      {
        name : "Angola",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ao-flag.gif"
      },
      {
        name : "Antigua and Barbuda",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ac-flag.gif"
      },
      {
        name : "Argentina",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ar-flag.gif"
      },
      {
        name : "Armenia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_am-flag.gif"
      },
      {
        name : "Australia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_as-flag.gif"
      },
      {
        name : "Austria",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_au-flag.gif"
      },
      {
        name : "Azerbaijan",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_aj-flag.gif"
      },
      {
        name : "Bahamas",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bf-flag.gif"
      },
      {
        name : "Bahrain",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ba-flag.gif"
      },
      {
        name : "Bangladesh",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bg-flag.gif"
      },
      {
        name : "Barbados",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bb-flag.gif"
      },
      {
        name : "Belarus",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bo-flag.gif"
      },
      {
        name : "Belgium",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_be-flag.gif"
      },
      {
        name : "Belize",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bh-flag.gif"
      },
      {
        name : "Benin",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bn-flag.gif"
      },
      {
        name : "Bhutan",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bt-flag.gif"
      },
      {
        name : "Bolivia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bl-flag.gif"
      },
      {
        name : "Bosnia and Herzegovina",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bk-flag.gif"
      },
      {
        name : "Botswana",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bc-flag.gif"
      },
      {
        name : "Brazil",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_br-flag.gif"
      },
      {
        name : "Brunei",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bx-flag.gif"
      },
      {
        name : "Bulgaria",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bu-flag.gif"
      },
      {
        name : "Burkina Faso",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_uv-flag.gif"
      },
      {
        name : "Burundi",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_by-flag.gif"
      },
      {
        name : "Côte d'Ivoire",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_iv-flag.gif"
      },
      {
        name : "Cabo Verde",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_cv-flag.gif"
      },
      {
        name : "Cambodia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_cb-flag.gif"
      },
      {
        name : "Cameroon",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_cm-flag.gif"
      },
      {
        name : "Canada",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ca-flag.gif"
      },
      {
        name : "CAR",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ct-flag.gif"
      },
      {
        name : "Chad",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_cd-flag.gif"
      },
      {
        name : "Chile",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ci-flag.gif"
      },
      {
        name : "China",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ch-flag.gif"
      },
      {
        name : "Colombia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_co-flag.gif"
      },
      {
        name : "Comoros",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_cn-flag.gif"
      },
      {
        name : "Congo",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_cg-flag.gif"
      },
      {
        name : "Costa Rica",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_cs-flag.gif"
      },
      {
        name : "Croatia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_hr-flag.gif"
      },
      {
        name : "Cuba",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_cu-flag.gif"
      },
      {
        name : "Cyprus",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_cy-flag.gif"
      },
      {
        name : "Czechia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ez-flag.gif"
      },
      {
        name : "Denmark",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_da-flag.gif"
      },
      {
        name : "Djibouti",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_dj-flag.gif"
      },
      {
        name : "Dominica",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_do-flag.gif"
      },
      {
        name : "Dominican Republic",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_dr-flag.gif"
      },
      {
        name : "DPRK",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_kn-flag.gif"
      },
      {
        name : "DRC",
          flagUrl :
            "https://www.worldometers.info/img/flags/small/tn_congo-flag.gif"
      },
      {
        name : "Ecuador",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ec-flag.gif"
      },
      {
        name : "Egypt",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_eg-flag.gif"
      },
      {
        name : "El Salvador",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_es-flag.gif"
      },
      {
        name : "Equatorial Guinea",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ek-flag.gif"
      },
      {
        name : "Eritrea",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_er-flag.gif"
      },
      {
        name : "Estonia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_en-flag.gif"
      },
      {
        name : "Eswatini",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_wz-flag.gif"
      },
      {
        name : "Ethiopia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_et-flag.gif"
      },
      {
        name : "Fiji",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_fj-flag.gif"
      },
      {
        name : "Finland",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_fi-flag.gif"
      },
      {
        name : "France",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_fr-flag.gif"
      },
      {
        name : "Gabon",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_gb-flag.gif"
      },
      {
        name : "Gambia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ga-flag.gif"
      },
      {
        name : "Georgia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_gg-flag.gif"
      },
      {
        name : "Germany",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_gm-flag.gif"
      },
      {
        name : "Ghana",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_gh-flag.gif"
      },
      {
        name : "Greece",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_gr-flag.gif"
      },
      {
        name : "Grenada",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_gj-flag.gif"
      },
      {
        name : "Guatemala",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_gt-flag.gif"
      },
      {
        name : "Guinea",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_gv-flag.gif"
      },
      {
        name : "Guinea-Bissau",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_pu-flag.gif"
      },
      {
        name : "Guyana",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_gy-flag.gif"
      },
      {
        name : "Haiti",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ha-flag.gif"
      },
      {
        name : "Holy See",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_vt-flag.gif"
      },
      {
        name : "Honduras",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ho-flag.gif"
      },
      {
        name : "Hungary",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_hu-flag.gif"
      },
      {
        name : "Iceland",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ic-flag.gif"
      },
      {
        name : "India",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_in-flag.gif"
      },
      {
        name : "Indonesia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_id-flag.gif"
      },
      {
        name : "Iran",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ir-flag.gif"
      },
      {
        name : "Iraq",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_iz-flag.gif"
      },
      {
        name : "Ireland",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ei-flag.gif"
      },
      {
        name : "Israel",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_is-flag.gif"
      },
      {
        name : "Italy",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_it-flag.gif"
      },
      {
        name : "Jamaica",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_jm-flag.gif"
      },
      {
        name : "Japan",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ja-flag.gif"
      },
      {
        name : "Jordan",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_jo-flag.gif"
      },
      {
        name : "Kazakhstan",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_kz-flag.gif"
      },
      {
        name : "Kenya",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ke-flag.gif"
      },
      {
        name : "Kiribati",
          flagUrl : "https://www.worldometers.info/img/flags/kr-flag.gif"
      },
      {
        name : "Kuwait",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ku-flag.gif"
      },
      {
        name : "Kyrgyzstan",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_kg-flag.gif"
      },
      {
        name : "Laos",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_la-flag.gif"
      },
      {
        name : "Latvia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_lg-flag.gif"
      },
      {
        name : "Lebanon",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_le-flag.gif"
      },
      {
        name : "Lesotho",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_lt-flag.gif"
      },
      {
        name : "Liberia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_li-flag.gif"
      },
      {
        name : "Libya",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ly-flag.gif"
      },
      {
        name : "Liechtenstein",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ls-flag.gif"
      },
      {
        name : "Lithuania",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_lh-flag.gif"
      },
      {
        name : "Luxembourg",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_lu-flag.gif"
      },
      {
        name : "Madagascar",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ma-flag.gif"
      },
      {
        name : "Malawi",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mi-flag.gif"
      },
      {
        name : "Malaysia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_my-flag.gif"
      },
      {
        name : "Maldives",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mv-flag.gif"
      },
      {
        name : "Mali",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ml-flag.gif"
      },
      {
        name : "Malta",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mt-flag.gif"
      },
      {
        name : "Marshall Islands",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_rm-flag.gif"
      },
      {
        name : "Mauritania",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mr-flag.gif"
      },
      {
        name : "Mauritius",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mp-flag.gif"
      },
      {
        name : "Mexico",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mx-flag.gif"
      },
      {
        name : "Micronesia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_fm-flag.gif"
      },
      {
        name : "Moldova",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_md-flag.gif"
      },
      {
        name : "Monaco",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mn-flag.gif"
      },
      {
        name : "Mongolia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mg-flag.gif"
      },
      {
        name : "Montenegro",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mj-flag.gif"
      },
      {
        name : "Morocco",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mo-flag.gif"
      },
      {
        name : "Mozambique",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mz-flag.gif"
      },
      {
        name : "Myanmar",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bm-flag.gif"
      },
      {
        name : "Namibia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_wa-flag.gif"
      },
      {
        name : "Nauru",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_nr-flag.gif"
      },
      {
        name : "Nepal",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_np-flag.gif"
      },
      {
        name : "Netherlands",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_nl-flag.gif"
      },
      {
        name : "New Zealand",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_nz-flag.gif"
      },
      {
        name : "Nicaragua",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_nu-flag.gif"
      },
      {
        name : "Niger",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ng-flag.gif"
      },
      {
        name : "Nigeria",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ni-flag.gif"
      },
      {
        name : "North Macedonia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mk-flag.gif"
      },
      {
        name : "Norway",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_no-flag.gif"
      },
      {
        name : "Oman",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_mu-flag.gif"
      },
      {
        name : "Pakistan",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_pk-flag.gif"
      },
      {
        name : "Palau",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ps-flag.gif"
      },
      {
        name : "Panama",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_pm-flag.gif"
      },
      {
        name : "Papua New Guinea",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_pp-flag.gif"
      },
      {
        name : "Paraguay",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_pa-flag.gif"
      },
      {
        name : "Peru",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_pe-flag.gif"
      },
      {
        name : "Philippines",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_rp-flag.gif"
      },
      {
        name : "Poland",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_pl-flag.gif"
      },
      {
        name : "Portugal",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_po-flag.gif"
      },
      {
        name : "Qatar",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_qa-flag.gif"
      },
      {
        name : "Romania",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ro-flag.gif"
      },
      {
        name : "Russia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_rs-flag.gif"
      },
      {
        name : "Rwanda",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_rw-flag.gif"
      },
      {
        name : "Saint Kitts and Nevis",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_sc-flag.gif"
      },
      {
        name : "Saint Lucia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_st-flag.gif"
      },
      {
        name : "Samoa",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ws-flag.gif"
      },
      {
        name : "San Marino",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_sm-flag.gif"
      },
      {
        name : "Sao Tome and Principe",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_tp-flag.gif"
      },
      {
        name : "Saudi Arabia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_sa-flag.gif"
      },
      {
        name : "Senegal",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_sg-flag.gif"
      },
      {
        name : "Serbia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ri-flag.gif"
      },
      {
        name : "Seychelles",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_se-flag.gif"
      },
      {
        name : "Sierra Leone",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_sl-flag.gif"
      },
      {
        name : "Singapore",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_sn-flag.gif"
      },
      {
        name : "Slovakia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_lo-flag.gif"
      },
      {
        name : "Slovenia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_si-flag.gif"
      },
      {
        name : "Solomon Islands",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_bp-flag.gif"
      },
      {
        name : "Somalia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_so-flag.gif"
      },
      {
        name : "South Africa",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_sf-flag.gif"
      },
      {
        name : "South Korea",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ks-flag.gif"
      },
      {
        name : "South Sudan",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_od-flag.gif"
      },
      {
        name : "Spain",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_sp-flag.gif"
      },
      {
        name : "Sri Lanka",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ce-flag.gif"
      },
      {
        name : "St. Vincent Grenadines",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_vc-flag.gif"
      },
      {
        name : "State of Palestine",
          flagUrl :
            "https://www.worldometers.info/img/flags/small/tn_palestine-flag.gif"
      },
      {
        name : "Sudan",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_su-flag.gif"
      },
      {
        name : "Suriname",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ns-flag.gif"
      },
      {
        name : "Sweden",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_sw-flag.gif"
      },
      {
        name : "Switzerland",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_sz-flag.gif"
      },
      {
        name : "Syria",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_sy-flag.gif"
      },
      {
        name : "Tajikistan",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ti-flag.gif"
      },
      {
        name : "Tanzania",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_tz-flag.gif"
      },
      {
        name : "Thailand",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_th-flag.gif"
      },
      {
        name : "Timor-Leste",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_tt-flag.gif"
      },
      {
        name : "Togo",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_to-flag.gif"
      },
      {
        name : "Tonga",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_tn-flag.gif"
      },
      {
        name : "Trinidad and Tobago",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_td-flag.gif"
      },
      {
        name : "Tunisia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ts-flag.gif"
      },
      {
        name : "Turkey",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_tu-flag.gif"
      },
      {
        name : "Turkmenistan",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_tx-flag.gif"
      },
      {
        name : "Tuvalu",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_tv-flag.gif"
      },
      {
        name : "U.A.E.",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ae-flag.gif"
      },
      {
        name : "U.K.",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_uk-flag.gif"
      },
      {
        name : "U.S.",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_us-flag.gif"
      },
      {
        name : "Uganda",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ug-flag.gif"
      },
      {
        name : "Ukraine",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_up-flag.gif"
      },
      {
        name : "Uruguay",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_uy-flag.gif"
      },
      {
        name : "Uzbekistan",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_uz-flag.gif"
      },
      {
        name : "Vanuatu",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_nh-flag.gif"
      },
      {
        name : "Venezuela",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_ve-flag.gif"
      },
      {
        name : "Vietnam",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_vm-flag.gif"
      },
      {
        name : "Yemen",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_za-flag.gif"
      },
      {
        name : "Zambia",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_za-flag.gif"
      },
      {
        name : "Zimbabwe",
          flagUrl : "https://www.worldometers.info/img/flags/small/tn_zi-flag.gif"
      }],);

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Countries', null, {});
  }
};
