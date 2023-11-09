export class Location {

  static get(cc = '') {
    const {country, continent} = this.countryCode[cc] || {};
    return [country, continent];
  }

  // ISO 3166-1 country code
  static countryCode = {
    AA: {country: "", continent: 'Asia'},
    AD: {country: "Andorra", continent: 'Europe'},
    AE: {country: "United Arab Emirates", continent: 'Asia'},
    AF: {country: "Afghanistan", continent: 'Asia'},
    AG: {country: "Antigua and Barbuda", continent: 'North America'},
    AI: {country: "Anguilla", continent: 'North America'},
    AL: {country: "Albania", continent: 'Europe'},
    AM: {country: "Armenia", continent: 'Asia'},
    AO: {country: "Angola", continent: 'Africa'},
    AQ: {country: "Antarctica", continent: 'Antarctica'},
    AR: {country: "Argentina", continent: 'South America'},
    AS: {country: "American Samoa", continent: 'Oceania'},
    AT: {country: "Austria", continent: 'Europe'},
    AU: {country: "Australia", continent: 'Oceania'},
    AW: {country: "Aruba", continent: 'North America'},
    AX: {country: "Åland Islands", continent: 'Europe'},
    AZ: {country: "Azerbaijan", continent: 'Asia'},
    BA: {country: "Bosnia and Herzegovina", continent: 'Europe'},
    BB: {country: "Barbados", continent: 'North America'},
    BD: {country: "Bangladesh", continent: 'Asia'},
    BE: {country: "Belgium", continent: 'Europe'},
    BF: {country: "Burkina Faso", continent: 'Africa'},
    BG: {country: "Bulgaria", continent: 'Europe'},
    BH: {country: "Bahrain", continent: 'Asia'},
    BI: {country: "Burundi", continent: 'Africa'},
    BJ: {country: "Benin", continent: 'Africa'},
    BL: {country: "Saint Barthélemy", continent: 'North America'},
    BM: {country: "Bermuda", continent: 'North America'},
    BN: {country: "Brunei Darussalam", continent: 'Asia'},
    BO: {country: "Bolivia, Plurinational State of", continent: 'South America'},
    BQ: {country: "Bonaire, Sint Eustatius and Saba", continent: 'North America'},
    BR: {country: "Brazil", continent: 'South America'},
    BS: {country: "Bahamas", continent: 'North America'},
    BT: {country: "Bhutan", continent: 'Asia'},
    BV: {country: "Bouvet Island", continent: 'Antarctica'},
    BW: {country: "Botswana", continent: 'Africa'},
    BY: {country: "Belarus", continent: 'Europe'},
    BZ: {country: "Belize", continent: 'North America'},
    CA: {country: "Canada", continent: 'North America'},
    CC: {country: "Cocos [Keeling] Islands", continent: 'Asia'},
    CD: {country: "Congo, the Democratic Republic of the", continent: 'Africa'},
    CF: {country: "Central African Republic", continent: 'Africa'},
    CG: {country: "Congo, Republic of the", continent: 'Africa'},
    CH: {country: "Switzerland", continent: 'Europe'},
    CI: {country: "Ivory Coast (Côte d'Ivoire)", continent: 'Africa'},
    CK: {country: "Cook Islands", continent: 'Oceania'},
    CL: {country: "Chile", continent: 'South America'},
    CM: {country: "Cameroon", continent: 'Africa'},
    CN: {country: "China", continent: 'Asia'},
    CO: {country: "Colombia", continent: 'South America'},
    CR: {country: "Costa Rica", continent: 'North America'},
    CU: {country: "Cuba", continent: 'North America'},
    CV: {country: "Cabo Verde", continent: 'Africa'},
    CW: {country: "Curaçao", continent: 'North America'},
    CX: {country: "Christmas Island", continent: 'Oceania'},
    CY: {country: "Cyprus", continent: 'Europe'},
    CZ: {country: "Czechia", continent: 'Europe'},
    DE: {country: "Germany", continent: 'Europe'},
    DJ: {country: "Djibouti", continent: 'Africa'},
    DK: {country: "Denmark", continent: 'Europe'},
    DM: {country: "Dominica", continent: 'North America'},
    DO: {country: "Dominican Republic", continent: 'North America'},
    DZ: {country: "Algeria", continent: 'Africa'},
    EC: {country: "Ecuador", continent: 'South America'},
    EE: {country: "Estonia", continent: 'Europe'},
    EG: {country: "Egypt", continent: 'Africa'},
    EH: {country: "Western Sahara", continent: 'Africa'},
    ER: {country: "Eritrea", continent: 'Africa'},
    ES: {country: "Spain", continent: 'Europe'},
    ET: {country: "Ethiopia", continent: 'Africa'},
    EU: {country: "European Union", continent: 'Europe'},
    FI: {country: "Finland", continent: 'Europe'},
    FJ: {country: "Fiji", continent: 'Oceania'},
    FK: {country: "Falkland Islands (Malvinas)", continent: 'South America'},
    FM: {country: "Micronesia, Federated States of", continent: 'Oceania'},
    FO: {country: "Faroe Islands", continent: 'Europe'},
    FR: {country: "France", continent: 'Europe'},
    GA: {country: "Gabon", continent: 'Africa'},
    GB: {country: "United Kingdom", continent: 'Europe'},
    GD: {country: "Grenada", continent: 'North America'},
    GE: {country: "Georgia", continent: 'Asia'},
    GF: {country: "French Guiana", continent: 'South America'},
    GG: {country: "Guernsey", continent: 'Europe'},
    GH: {country: "Ghana", continent: 'Africa'},
    GI: {country: "Gibraltar", continent: 'Europe'},
    GL: {country: "Greenland", continent: 'North America'},
    GM: {country: "Gambia", continent: 'Africa'},
    GN: {country: "Guinea", continent: 'Africa'},
    GP: {country: "Guadeloupe", continent: 'North America'},
    GQ: {country: "Equatorial Guinea", continent: 'Africa'},
    GR: {country: "Greece", continent: 'Europe'},
    GS: {country: "South Georgia and the South Sandwich Islands", continent: 'Antarctica'},
    GT: {country: "Guatemala", continent: 'North America'},
    GU: {country: "Guam", continent: 'Oceania'},
    GW: {country: "Guinea-Bissau", continent: 'Africa'},
    GY: {country: "Guyana", continent: 'South America'},
    HK: {country: "Hong Kong", continent: 'Asia'},
    HM: {country: "Heard Island and McDonald Islands", continent: 'Antarctica'},
    HN: {country: "Honduras", continent: 'North America'},
    HR: {country: "Croatia", continent: 'Europe'},
    HT: {country: "Haiti", continent: 'North America'},
    HU: {country: "Hungary", continent: 'Europe'},
    ID: {country: "Indonesia", continent: 'Asia'},
    IE: {country: "Ireland", continent: 'Europe'},
    IL: {country: "Israel", continent: 'Asia'},
    IM: {country: "Isle of Man", continent: 'Europe'},
    IN: {country: "India", continent: 'Asia'},
    IO: {country: "British Indian Ocean Territory", continent: 'Asia'},
    IQ: {country: "Iraq", continent: 'Asia'},
    IR: {country: "Iran, Islamic Republic Of", continent: 'Asia'},
    IS: {country: "Iceland", continent: 'Europe'},
    IT: {country: "Italy", continent: 'Europe'},
    JE: {country: "Jersey", continent: 'Europe'},
    JM: {country: "Jamaica", continent: 'North America'},
    JO: {country: "Jordan (Hashemite Kingdom of Jordan)", continent: 'Asia'},
    JP: {country: "Japan", continent: 'Asia'},
    KE: {country: "Kenya", continent: 'Africa'},
    KG: {country: "Kyrgyzstan", continent: 'Asia'},
    KH: {country: "Cambodia", continent: 'Asia'},
    KI: {country: "Kiribati", continent: 'Oceania'},
    KM: {country: "Comoros", continent: 'Africa'},
    KN: {country: "St Kitts and Nevis", continent: 'North America'},
    KP: {country: "North Korea", continent: 'Asia'},
    KR: {country: "South Korea", continent: 'Asia'},
    KW: {country: "Kuwait", continent: 'Asia'},
    KY: {country: "Cayman Islands", continent: 'North America'},
    KZ: {country: "Kazakhstan", continent: 'Asia'},
    LA: {country: "Laos (Lao People's Democratic Republic)", continent: 'Asia'},
    LB: {country: "Lebanon", continent: 'Asia'},
    LC: {country: "Saint Lucia", continent: 'North America'},
    LI: {country: "Liechtenstein", continent: 'Europe'},
    LK: {country: "Sri Lanka", continent: 'Asia'},
    LR: {country: "Liberia", continent: 'Africa'},
    LS: {country: "Lesotho", continent: 'Africa'},
    LT: {country: "Republic of Lithuania", continent: 'Europe'},
    LU: {country: "Luxembourg", continent: 'Europe'},
    LV: {country: "Latvia", continent: 'Europe'},
    LY: {country: "Libya", continent: 'Africa'},
    MA: {country: "Morocco", continent: 'Africa'},
    MC: {country: "Monaco", continent: 'Europe'},
    MD: {country: "Moldova, Republic of", continent: 'Europe'},
    ME: {country: "Montenegro", continent: 'Europe'},
    MF: {country: "Saint Martin (French part)", continent: 'North America'},
    MG: {country: "Madagascar", continent: 'Africa'},
    MH: {country: "Marshall Islands", continent: 'Oceania'},
    MK: {country: "North Macedonia", continent: 'Europe'},
    ML: {country: "Mali", continent: 'Africa'},
    MM: {country: "Myanmar", continent: 'Asia'},
    MN: {country: "Mongolia", continent: 'Asia'},
    MO: {country: "Macao", continent: 'Asia'},
    MP: {country: "Northern Mariana Islands", continent: 'Oceania'},
    MQ: {country: "Martinique", continent: 'North America'},
    MR: {country: "Mauritania", continent: 'Africa'},
    MS: {country: "Montserrat", continent: 'North America'},
    MT: {country: "Malta", continent: 'Europe'},
    MU: {country: "Mauritius", continent: 'Africa'},
    MV: {country: "Maldives", continent: 'Asia'},
    MW: {country: "Malawi", continent: 'Africa'},
    MX: {country: "Mexico", continent: 'North America'},
    MY: {country: "Malaysia", continent: 'Asia'},
    MZ: {country: "Mozambique", continent: 'Africa'},
    NA: {country: "Namibia", continent: 'Africa'},
    NC: {country: "New Caledonia", continent: 'Oceania'},
    NE: {country: "Niger", continent: 'Africa'},
    NF: {country: "Norfolk Island", continent: 'Oceania'},
    NG: {country: "Nigeria", continent: 'Africa'},
    NI: {country: "Nicaragua", continent: 'North America'},
    NL: {country: "Netherlands", continent: 'Europe'},
    NO: {country: "Norway", continent: 'Europe'},
    NP: {country: "Nepal", continent: 'Asia'},
    NR: {country: "Nauru", continent: 'Oceania'},
    NU: {country: "Niue", continent: 'Oceania'},
    NZ: {country: "New Zealand", continent: 'Oceania'},
    OM: {country: "Oman", continent: 'Asia'},
    PA: {country: "Panama", continent: 'North America'},
    PE: {country: "Peru", continent: 'South America'},
    PF: {country: "French Polynesia", continent: 'Oceania'},
    PG: {country: "Papua New Guinea", continent: 'Oceania'},
    PH: {country: "Philippines", continent: 'Asia'},
    PK: {country: "Pakistan", continent: 'Asia'},
    PL: {country: "Poland", continent: 'Europe'},
    PM: {country: "Saint Pierre and Miquelon", continent: 'North America'},
    PN: {country: "Pitcairn Islands", continent: 'Oceania'},
    PR: {country: "Puerto Rico", continent: 'North America'},
    PS: {country: "Palestine", continent: 'Asia'},
    PT: {country: "Portugal", continent: 'Europe'},
    PW: {country: "Palau", continent: 'Oceania'},
    PY: {country: "Paraguay", continent: 'South America'},
    QA: {country: "Qatar", continent: 'Asia'},
    RE: {country: "Réunion", continent: 'Africa'},
    RO: {country: "Romania", continent: 'Europe'},
    RS: {country: "Serbia", continent: 'Europe'},
    RU: {country: "Russia (Russian Federation)", continent: 'Europe'},
    RW: {country: "Rwanda", continent: 'Africa'},
    SA: {country: "Saudi Arabia", continent: 'Asia'},
    SB: {country: "Solomon Islands", continent: 'Oceania'},
    SC: {country: "Seychelles", continent: 'Africa'},
    SD: {country: "Sudan", continent: 'Africa'},
    SE: {country: "Sweden", continent: 'Europe'},
    SG: {country: "Singapore", continent: 'Asia'},
    SH: {country: "Saint Helena", continent: 'Africa'},
    SI: {country: "Slovenia", continent: 'Europe'},
    SJ: {country: "Svalbard and Jan Mayen", continent: 'Europe'},
    SK: {country: "Slovakia", continent: 'Europe'},
    SL: {country: "Sierra Leone", continent: 'Africa'},
    SM: {country: "San Marino", continent: 'Europe'},
    SN: {country: "Senegal", continent: 'Africa'},
    SO: {country: "Somalia", continent: 'Africa'},
    SR: {country: "Suriname", continent: 'South America'},
    SS: {country: "South Sudan", continent: 'Africa'},
    ST: {country: "São Tomé and Príncipe", continent: 'Africa'},
    SV: {country: "El Salvador", continent: 'North America'},
    SX: {country: "Sint Maarten (Dutch part)", continent: 'North America'},
    SY: {country: "Syria", continent: 'Asia'},
    SZ: {country: "Eswatini", continent: 'Africa'},
    TC: {country: "Turks and Caicos Islands", continent: 'North America'},
    TD: {country: "Chad", continent: 'Africa'},
    TF: {country: "French Southern Territories", continent: 'Antarctica'},
    TG: {country: "Togo", continent: 'Africa'},
    TH: {country: "Thailand", continent: 'Asia'},
    TJ: {country: "Tajikistan", continent: 'Asia'},
    TK: {country: "Tokelau", continent: 'Oceania'},
    TL: {country: "Democratic Republic of Timor-Leste", continent: 'Oceania'},
    TM: {country: "Turkmenistan", continent: 'Asia'},
    TN: {country: "Tunisia", continent: 'Africa'},
    TO: {country: "Tonga", continent: 'Oceania'},
    TR: {country: "Türkiye", continent: 'Asia'},
    TT: {country: "Trinidad and Tobago", continent: 'North America'},
    TV: {country: "Tuvalu", continent: 'Oceania'},
    TW: {country: "Taiwan", continent: 'Asia'},
    TZ: {country: "Tanzania", continent: 'Africa'},
    UA: {country: "Ukraine", continent: 'Europe'},
    UG: {country: "Uganda", continent: 'Africa'},
    UM: {country: "U.S. Minor Outlying Islands", continent: 'Oceania'},
    US: {country: "United States of America", continent: 'North America'},
    UY: {country: "Uruguay", continent: 'South America'},
    UZ: {country: "Uzbekistan", continent: 'Asia'},
    VA: {country: "Vatican City", continent: 'Europe'},
    VC: {country: "Saint Vincent and the Grenadines", continent: 'North America'},
    VE: {country: "Venezuela", continent: 'South America'},
    VG: {country: "British Virgin Islands", continent: 'North America'},
    VI: {country: "U.S. Virgin Islands", continent: 'North America'},
    VN: {country: "Vietnam", continent: 'Asia'},
    VU: {country: "Vanuatu", continent: 'Oceania'},
    WF: {country: "Wallis and Futuna", continent: 'Oceania'},
    WS: {country: "Samoa", continent: 'Oceania'},
    XK: {country: "Kosovo", continent: 'Europe'},
    YE: {country: "Yemen", continent: 'Asia'},
    YT: {country: "Mayotte", continent: 'Africa'},
    ZA: {country: "South Africa", continent: 'Africa'},
    ZM: {country: "Zambia", continent: 'Africa'},
    ZW: {country: "Zimbabwe", continent: 'Africa'}
  };
}