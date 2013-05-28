/*
The MIT License (MIT)

Copyright (c) 2013 Ramgolam Sandeep

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var countries = [
  {
   "country":"Andorra",
   "alpha_3_code":"AND",
   "numeric_code":20,
   "iso_3166_2 codes":"ISO 3166-2:AD",
   "alpha_2_code":"AD",
   "latitude":42.5,
   "longitude":1.5
  },
  {
   "country":"United Arab Emirates",
   "alpha_3_code":"ARE",
   "numeric_code":784,
   "iso_3166_2 codes":"ISO 3166-2:AE",
   "alpha_2_code":"AE",
   "latitude":24,
   "longitude":54
  },
  {
   "country":"Afghanistan",
   "alpha_3_code":"AFG",
   "numeric_code":4,
   "iso_3166_2 codes":"ISO 3166-2:AF",
   "alpha_2_code":"AF",
   "latitude":33,
   "longitude":65
  },
  {
   "country":"Antigua and Barbuda",
   "alpha_3_code":"ATG",
   "numeric_code":28,
   "iso_3166_2 codes":"ISO 3166-2:AG",
   "alpha_2_code":"AG",
   "latitude":17.05,
   "longitude":-61.8
  },
  {
   "country":"Anguilla",
   "alpha_3_code":"AIA",
   "numeric_code":660,
   "iso_3166_2 codes":"ISO 3166-2:AI",
   "alpha_2_code":"AI",
   "latitude":18.25,
   "longitude":-63.1667
  },
  {
   "country":"Albania",
   "alpha_3_code":"ALB",
   "numeric_code":8,
   "iso_3166_2 codes":"ISO 3166-2:AL",
   "alpha_2_code":"AL",
   "latitude":41,
   "longitude":20
  },
  {
   "country":"Armenia",
   "alpha_3_code":"ARM",
   "numeric_code":51,
   "iso_3166_2 codes":"ISO 3166-2:AM",
   "alpha_2_code":"AM",
   "latitude":40,
   "longitude":45
  },
  {
   "country":"Angola",
   "alpha_3_code":"AGO",
   "numeric_code":24,
   "iso_3166_2 codes":"ISO 3166-2:AO",
   "alpha_2_code":"AO",
   "latitude":-12.5,
   "longitude":18.5
  },
  {
   "country":"Antarctica",
   "alpha_3_code":"ATA",
   "numeric_code":10,
   "iso_3166_2 codes":"ISO 3166-2:AQ",
   "alpha_2_code":"AQ",
   "latitude":-90,
   "longitude":0
  },
  {
   "country":"Argentina",
   "alpha_3_code":"ARG",
   "numeric_code":32,
   "iso_3166_2 codes":"ISO 3166-2:AR",
   "alpha_2_code":"AR",
   "latitude":-34,
   "longitude":-64
  },
  {
   "country":"American Samoa",
   "alpha_3_code":"ASM",
   "numeric_code":16,
   "iso_3166_2 codes":"ISO 3166-2:AS",
   "alpha_2_code":"AS",
   "latitude":-14.3333,
   "longitude":-170
  },
  {
   "country":"Austria",
   "alpha_3_code":"AUT",
   "numeric_code":40,
   "iso_3166_2 codes":"ISO 3166-2:AT",
   "alpha_2_code":"AT",
   "latitude":47.3333,
   "longitude":13.3333
  },
  {
   "country":"Australia",
   "alpha_3_code":"AUS",
   "numeric_code":36,
   "iso_3166_2 codes":"ISO 3166-2:AU",
   "alpha_2_code":"AU",
   "latitude":-27,
   "longitude":133
  },
  {
   "country":"Aruba",
   "alpha_3_code":"ABW",
   "numeric_code":533,
   "iso_3166_2 codes":"ISO 3166-2:AW",
   "alpha_2_code":"AW",
   "latitude":12.5,
   "longitude":-69.9667
  },
  {
   "country":"Åland Islands",
   "alpha_3_code":"ALA",
   "numeric_code":248,
   "iso_3166_2 codes":"ISO 3166-2:AX",
   "alpha_2_code":"AX",
   "latitude":null,
   "longitude":null
  },
  {
   "country":"Azerbaijan",
   "alpha_3_code":"AZE",
   "numeric_code":31,
   "iso_3166_2 codes":"ISO 3166-2:AZ",
   "alpha_2_code":"AZ",
   "latitude":40.5,
   "longitude":47.5
  },
  {
   "country":"Bosnia and Herzegovina",
   "alpha_3_code":"BIH",
   "numeric_code":70,
   "iso_3166_2 codes":"ISO 3166-2:BA",
   "alpha_2_code":"BA",
   "latitude":44,
   "longitude":18
  },
  {
   "country":"Barbados",
   "alpha_3_code":"BRB",
   "numeric_code":52,
   "iso_3166_2 codes":"ISO 3166-2:BB",
   "alpha_2_code":"BB",
   "latitude":13.1667,
   "longitude":-59.5333
  },
  {
   "country":"Bangladesh",
   "alpha_3_code":"BGD",
   "numeric_code":50,
   "iso_3166_2 codes":"ISO 3166-2:BD",
   "alpha_2_code":"BD",
   "latitude":24,
   "longitude":90
  },
  {
   "country":"Belgium",
   "alpha_3_code":"BEL",
   "numeric_code":56,
   "iso_3166_2 codes":"ISO 3166-2:BE",
   "alpha_2_code":"BE",
   "latitude":50.8333,
   "longitude":4
  },
  {
   "country":"Burkina Faso",
   "alpha_3_code":"BFA",
   "numeric_code":854,
   "iso_3166_2 codes":"ISO 3166-2:BF",
   "alpha_2_code":"BF",
   "latitude":13,
   "longitude":-2
  },
  {
   "country":"Bulgaria",
   "alpha_3_code":"BGR",
   "numeric_code":100,
   "iso_3166_2 codes":"ISO 3166-2:BG",
   "alpha_2_code":"BG",
   "latitude":43,
   "longitude":25
  },
  {
   "country":"Bahrain",
   "alpha_3_code":"BHR",
   "numeric_code":48,
   "iso_3166_2 codes":"ISO 3166-2:BH",
   "alpha_2_code":"BH",
   "latitude":26,
   "longitude":50.55
  },
  {
   "country":"Burundi",
   "alpha_3_code":"BDI",
   "numeric_code":108,
   "iso_3166_2 codes":"ISO 3166-2:BI",
   "alpha_2_code":"BI",
   "latitude":-3.5,
   "longitude":30
  },
  {
   "country":"Benin",
   "alpha_3_code":"BEN",
   "numeric_code":204,
   "iso_3166_2 codes":"ISO 3166-2:BJ",
   "alpha_2_code":"BJ",
   "latitude":9.5,
   "longitude":2.25
  },
  {
   "country":"Saint Barthélemy",
   "alpha_3_code":"BLM",
   "numeric_code":652,
   "iso_3166_2 codes":"ISO 3166-2:BL",
   "alpha_2_code":"BL",
   "latitude":null,
   "longitude":null
  },
  {
   "country":"Bermuda",
   "alpha_3_code":"BMU",
   "numeric_code":60,
   "iso_3166_2 codes":"ISO 3166-2:BM",
   "alpha_2_code":"BM",
   "latitude":32.3333,
   "longitude":-64.75
  },
  {
   "country":"Brunei Darussalam",
   "alpha_3_code":"BRN",
   "numeric_code":96,
   "iso_3166_2 codes":"ISO 3166-2:BN",
   "alpha_2_code":"BN",
   "latitude":4.5,
   "longitude":114.6667
  },
  {
   "country":"Bolivia, Plurinational State of",
   "alpha_3_code":"BOL",
   "numeric_code":68,
   "iso_3166_2 codes":"ISO 3166-2:BO",
   "alpha_2_code":"BO",
   "latitude":-17,
   "longitude":-65
  },
  {
   "country":"Bonaire, Sint Eustatius and Saba",
   "alpha_3_code":"BES",
   "numeric_code":535,
   "iso_3166_2 codes":"ISO 3166-2:BQ",
   "alpha_2_code":"BQ",
   "latitude":null,
   "longitude":null
  },
  {
   "country":"Brazil",
   "alpha_3_code":"BRA",
   "numeric_code":76,
   "iso_3166_2 codes":"ISO 3166-2:BR",
   "alpha_2_code":"BR",
   "latitude":-10,
   "longitude":-55
  },
  {
   "country":"Bahamas",
   "alpha_3_code":"BHS",
   "numeric_code":44,
   "iso_3166_2 codes":"ISO 3166-2:BS",
   "alpha_2_code":"BS",
   "latitude":24.25,
   "longitude":-76
  },
  {
   "country":"Bhutan",
   "alpha_3_code":"BTN",
   "numeric_code":64,
   "iso_3166_2 codes":"ISO 3166-2:BT",
   "alpha_2_code":"BT",
   "latitude":27.5,
   "longitude":90.5
  },
  {
   "country":"Bouvet Island",
   "alpha_3_code":"BVT",
   "numeric_code":74,
   "iso_3166_2 codes":"ISO 3166-2:BV",
   "alpha_2_code":"BV",
   "latitude":-54.4333,
   "longitude":3.4
  },
  {
   "country":"Botswana",
   "alpha_3_code":"BWA",
   "numeric_code":72,
   "iso_3166_2 codes":"ISO 3166-2:BW",
   "alpha_2_code":"BW",
   "latitude":-22,
   "longitude":24
  },
  {
   "country":"Belarus",
   "alpha_3_code":"BLR",
   "numeric_code":112,
   "iso_3166_2 codes":"ISO 3166-2:BY",
   "alpha_2_code":"BY",
   "latitude":53,
   "longitude":28
  },
  {
   "country":"Belize",
   "alpha_3_code":"BLZ",
   "numeric_code":84,
   "iso_3166_2 codes":"ISO 3166-2:BZ",
   "alpha_2_code":"BZ",
   "latitude":17.25,
   "longitude":-88.75
  },
  {
   "country":"Canada",
   "alpha_3_code":"CAN",
   "numeric_code":124,
   "iso_3166_2 codes":"ISO 3166-2:CA",
   "alpha_2_code":"CA",
   "latitude":60,
   "longitude":-95
  },
  {
   "country":"Cocos (Keeling) Islands",
   "alpha_3_code":"CCK",
   "numeric_code":166,
   "iso_3166_2 codes":"ISO 3166-2:CC",
   "alpha_2_code":"CC",
   "latitude":-12.5,
   "longitude":96.8333
  },
  {
   "country":"Congo, the Democratic Republic of the",
   "alpha_3_code":"COD",
   "numeric_code":180,
   "iso_3166_2 codes":"ISO 3166-2:CD",
   "alpha_2_code":"CD",
   "latitude":0,
   "longitude":25
  },
  {
   "country":"Central African Republic",
   "alpha_3_code":"CAF",
   "numeric_code":140,
   "iso_3166_2 codes":"ISO 3166-2:CF",
   "alpha_2_code":"CF",
   "latitude":7,
   "longitude":21
  },
  {
   "country":"Congo",
   "alpha_3_code":"COG",
   "numeric_code":178,
   "iso_3166_2 codes":"ISO 3166-2:CG",
   "alpha_2_code":"CG",
   "latitude":-1,
   "longitude":15
  },
  {
   "country":"Switzerland",
   "alpha_3_code":"CHE",
   "numeric_code":756,
   "iso_3166_2 codes":"ISO 3166-2:CH",
   "alpha_2_code":"CH",
   "latitude":47,
   "longitude":8
  },
  {
   "country":"Côte d'Ivoire",
   "alpha_3_code":"CIV",
   "numeric_code":384,
   "iso_3166_2 codes":"ISO 3166-2:CI",
   "alpha_2_code":"CI",
   "latitude":8,
   "longitude":-5
  },
  {
   "country":"Cook Islands",
   "alpha_3_code":"COK",
   "numeric_code":184,
   "iso_3166_2 codes":"ISO 3166-2:CK",
   "alpha_2_code":"CK",
   "latitude":-21.2333,
   "longitude":-159.7667
  },
  {
   "country":"Chile",
   "alpha_3_code":"CHL",
   "numeric_code":152,
   "iso_3166_2 codes":"ISO 3166-2:CL",
   "alpha_2_code":"CL",
   "latitude":-30,
   "longitude":-71
  },
  {
   "country":"Cameroon",
   "alpha_3_code":"CMR",
   "numeric_code":120,
   "iso_3166_2 codes":"ISO 3166-2:CM",
   "alpha_2_code":"CM",
   "latitude":6,
   "longitude":12
  },
  {
   "country":"China",
   "alpha_3_code":"CHN",
   "numeric_code":156,
   "iso_3166_2 codes":"ISO 3166-2:CN",
   "alpha_2_code":"CN",
   "latitude":35,
   "longitude":105
  },
  {
   "country":"Colombia",
   "alpha_3_code":"COL",
   "numeric_code":170,
   "iso_3166_2 codes":"ISO 3166-2:CO",
   "alpha_2_code":"CO",
   "latitude":4,
   "longitude":-72
  },
  {
   "country":"Costa Rica",
   "alpha_3_code":"CRI",
   "numeric_code":188,
   "iso_3166_2 codes":"ISO 3166-2:CR",
   "alpha_2_code":"CR",
   "latitude":10,
   "longitude":-84
  },
  {
   "country":"Cuba",
   "alpha_3_code":"CUB",
   "numeric_code":192,
   "iso_3166_2 codes":"ISO 3166-2:CU",
   "alpha_2_code":"CU",
   "latitude":21.5,
   "longitude":-80
  },
  {
   "country":"Cape Verde",
   "alpha_3_code":"CPV",
   "numeric_code":132,
   "iso_3166_2 codes":"ISO 3166-2:CV",
   "alpha_2_code":"CV",
   "latitude":16,
   "longitude":-24
  },
  {
   "country":"Curaçao",
   "alpha_3_code":"CUW",
   "numeric_code":531,
   "iso_3166_2 codes":"ISO 3166-2:CW",
   "alpha_2_code":"CW",
   "latitude":null,
   "longitude":null
  },
  {
   "country":"Christmas Island",
   "alpha_3_code":"CXR",
   "numeric_code":162,
   "iso_3166_2 codes":"ISO 3166-2:CX",
   "alpha_2_code":"CX",
   "latitude":-10.5,
   "longitude":105.6667
  },
  {
   "country":"Cyprus",
   "alpha_3_code":"CYP",
   "numeric_code":196,
   "iso_3166_2 codes":"ISO 3166-2:CY",
   "alpha_2_code":"CY",
   "latitude":35,
   "longitude":33
  },
  {
   "country":"Czech Republic",
   "alpha_3_code":"CZE",
   "numeric_code":203,
   "iso_3166_2 codes":"ISO 3166-2:CZ",
   "alpha_2_code":"CZ",
   "latitude":49.75,
   "longitude":15.5
  },
  {
   "country":"Germany",
   "alpha_3_code":"DEU",
   "numeric_code":276,
   "iso_3166_2 codes":"ISO 3166-2:DE",
   "alpha_2_code":"DE",
   "latitude":51,
   "longitude":9
  },
  {
   "country":"Djibouti",
   "alpha_3_code":"DJI",
   "numeric_code":262,
   "iso_3166_2 codes":"ISO 3166-2:DJ",
   "alpha_2_code":"DJ",
   "latitude":11.5,
   "longitude":43
  },
  {
   "country":"Denmark",
   "alpha_3_code":"DNK",
   "numeric_code":208,
   "iso_3166_2 codes":"ISO 3166-2:DK",
   "alpha_2_code":"DK",
   "latitude":56,
   "longitude":10
  },
  {
   "country":"Dominica",
   "alpha_3_code":"DMA",
   "numeric_code":212,
   "iso_3166_2 codes":"ISO 3166-2:DM",
   "alpha_2_code":"DM",
   "latitude":15.4167,
   "longitude":-61.3333
  },
  {
   "country":"Dominican Republic",
   "alpha_3_code":"DOM",
   "numeric_code":214,
   "iso_3166_2 codes":"ISO 3166-2:DO",
   "alpha_2_code":"DO",
   "latitude":19,
   "longitude":-70.6667
  },
  {
   "country":"Algeria",
   "alpha_3_code":"DZA",
   "numeric_code":12,
   "iso_3166_2 codes":"ISO 3166-2:DZ",
   "alpha_2_code":"DZ",
   "latitude":28,
   "longitude":3
  },
  {
   "country":"Ecuador",
   "alpha_3_code":"ECU",
   "numeric_code":218,
   "iso_3166_2 codes":"ISO 3166-2:EC",
   "alpha_2_code":"EC",
   "latitude":-2,
   "longitude":-77.5
  },
  {
   "country":"Estonia",
   "alpha_3_code":"EST",
   "numeric_code":233,
   "iso_3166_2 codes":"ISO 3166-2:EE",
   "alpha_2_code":"EE",
   "latitude":59,
   "longitude":26
  },
  {
   "country":"Egypt",
   "alpha_3_code":"EGY",
   "numeric_code":818,
   "iso_3166_2 codes":"ISO 3166-2:EG",
   "alpha_2_code":"EG",
   "latitude":27,
   "longitude":30
  },
  {
   "country":"Western Sahara",
   "alpha_3_code":"ESH",
   "numeric_code":732,
   "iso_3166_2 codes":"ISO 3166-2:EH",
   "alpha_2_code":"EH",
   "latitude":24.5,
   "longitude":-13
  },
  {
   "country":"Eritrea",
   "alpha_3_code":"ERI",
   "numeric_code":232,
   "iso_3166_2 codes":"ISO 3166-2:ER",
   "alpha_2_code":"ER",
   "latitude":15,
   "longitude":39
  },
  {
   "country":"Spain",
   "alpha_3_code":"ESP",
   "numeric_code":724,
   "iso_3166_2 codes":"ISO 3166-2:ES",
   "alpha_2_code":"ES",
   "latitude":40,
   "longitude":-4
  },
  {
   "country":"Ethiopia",
   "alpha_3_code":"ETH",
   "numeric_code":231,
   "iso_3166_2 codes":"ISO 3166-2:ET",
   "alpha_2_code":"ET",
   "latitude":8,
   "longitude":38
  },
  {
   "country":"Finland",
   "alpha_3_code":"FIN",
   "numeric_code":246,
   "iso_3166_2 codes":"ISO 3166-2:FI",
   "alpha_2_code":"FI",
   "latitude":64,
   "longitude":26
  },
  {
   "country":"Fiji",
   "alpha_3_code":"FJI",
   "numeric_code":242,
   "iso_3166_2 codes":"ISO 3166-2:FJ",
   "alpha_2_code":"FJ",
   "latitude":-18,
   "longitude":175
  },
  {
   "country":"Falkland Islands (Malvinas)",
   "alpha_3_code":"FLK",
   "numeric_code":238,
   "iso_3166_2 codes":"ISO 3166-2:FK",
   "alpha_2_code":"FK",
   "latitude":-51.75,
   "longitude":-59
  },
  {
   "country":"Micronesia, Federated States of",
   "alpha_3_code":"FSM",
   "numeric_code":583,
   "iso_3166_2 codes":"ISO 3166-2:FM",
   "alpha_2_code":"FM",
   "latitude":6.9167,
   "longitude":158.25
  },
  {
   "country":"Faroe Islands",
   "alpha_3_code":"FRO",
   "numeric_code":234,
   "iso_3166_2 codes":"ISO 3166-2:FO",
   "alpha_2_code":"FO",
   "latitude":62,
   "longitude":-7
  },
  {
   "country":"France",
   "alpha_3_code":"FRA",
   "numeric_code":250,
   "iso_3166_2 codes":"ISO 3166-2:FR",
   "alpha_2_code":"FR",
   "latitude":46,
   "longitude":2
  },
  {
   "country":"Gabon",
   "alpha_3_code":"GAB",
   "numeric_code":266,
   "iso_3166_2 codes":"ISO 3166-2:GA",
   "alpha_2_code":"GA",
   "latitude":-1,
   "longitude":11.75
  },
  {
   "country":"United Kingdom",
   "alpha_3_code":"GBR",
   "numeric_code":826,
   "iso_3166_2 codes":"ISO 3166-2:GB",
   "alpha_2_code":"GB",
   "latitude":54,
   "longitude":-2
  },
  {
   "country":"Grenada",
   "alpha_3_code":"GRD",
   "numeric_code":308,
   "iso_3166_2 codes":"ISO 3166-2:GD",
   "alpha_2_code":"GD",
   "latitude":12.1167,
   "longitude":-61.6667
  },
  {
   "country":"Georgia",
   "alpha_3_code":"GEO",
   "numeric_code":268,
   "iso_3166_2 codes":"ISO 3166-2:GE",
   "alpha_2_code":"GE",
   "latitude":42,
   "longitude":43.5
  },
  {
   "country":"French Guiana",
   "alpha_3_code":"GUF",
   "numeric_code":254,
   "iso_3166_2 codes":"ISO 3166-2:GF",
   "alpha_2_code":"GF",
   "latitude":4,
   "longitude":-53
  },
  {
   "country":"Guernsey",
   "alpha_3_code":"GGY",
   "numeric_code":831,
   "iso_3166_2 codes":"ISO 3166-2:GG",
   "alpha_2_code":"GG",
   "latitude":null,
   "longitude":null
  },
  {
   "country":"Ghana",
   "alpha_3_code":"GHA",
   "numeric_code":288,
   "iso_3166_2 codes":"ISO 3166-2:GH",
   "alpha_2_code":"GH",
   "latitude":8,
   "longitude":-2
  },
  {
   "country":"Gibraltar",
   "alpha_3_code":"GIB",
   "numeric_code":292,
   "iso_3166_2 codes":"ISO 3166-2:GI",
   "alpha_2_code":"GI",
   "latitude":36.1833,
   "longitude":-5.3667
  },
  {
   "country":"Greenland",
   "alpha_3_code":"GRL",
   "numeric_code":304,
   "iso_3166_2 codes":"ISO 3166-2:GL",
   "alpha_2_code":"GL",
   "latitude":72,
   "longitude":-40
  },
  {
   "country":"Gambia",
   "alpha_3_code":"GMB",
   "numeric_code":270,
   "iso_3166_2 codes":"ISO 3166-2:GM",
   "alpha_2_code":"GM",
   "latitude":13.4667,
   "longitude":-16.5667
  },
  {
   "country":"Guinea",
   "alpha_3_code":"GIN",
   "numeric_code":324,
   "iso_3166_2 codes":"ISO 3166-2:GN",
   "alpha_2_code":"GN",
   "latitude":11,
   "longitude":-10
  },
  {
   "country":"Guadeloupe",
   "alpha_3_code":"GLP",
   "numeric_code":312,
   "iso_3166_2 codes":"ISO 3166-2:GP",
   "alpha_2_code":"GP",
   "latitude":16.25,
   "longitude":-61.5833
  },
  {
   "country":"Equatorial Guinea",
   "alpha_3_code":"GNQ",
   "numeric_code":226,
   "iso_3166_2 codes":"ISO 3166-2:GQ",
   "alpha_2_code":"GQ",
   "latitude":2,
   "longitude":10
  },
  {
   "country":"Greece",
   "alpha_3_code":"GRC",
   "numeric_code":300,
   "iso_3166_2 codes":"ISO 3166-2:GR",
   "alpha_2_code":"GR",
   "latitude":39,
   "longitude":22
  },
  {
   "country":"South Georgia and the South Sandwich Islands",
   "alpha_3_code":"SGS",
   "numeric_code":239,
   "iso_3166_2 codes":"ISO 3166-2:GS",
   "alpha_2_code":"GS",
   "latitude":-54.5,
   "longitude":-37
  },
  {
   "country":"Guatemala",
   "alpha_3_code":"GTM",
   "numeric_code":320,
   "iso_3166_2 codes":"ISO 3166-2:GT",
   "alpha_2_code":"GT",
   "latitude":15.5,
   "longitude":-90.25
  },
  {
   "country":"Guam",
   "alpha_3_code":"GUM",
   "numeric_code":316,
   "iso_3166_2 codes":"ISO 3166-2:GU",
   "alpha_2_code":"GU",
   "latitude":13.4667,
   "longitude":144.7833
  },
  {
   "country":"Guinea-Bissau",
   "alpha_3_code":"GNB",
   "numeric_code":624,
   "iso_3166_2 codes":"ISO 3166-2:GW",
   "alpha_2_code":"GW",
   "latitude":12,
   "longitude":-15
  },
  {
   "country":"Guyana",
   "alpha_3_code":"GUY",
   "numeric_code":328,
   "iso_3166_2 codes":"ISO 3166-2:GY",
   "alpha_2_code":"GY",
   "latitude":5,
   "longitude":-59
  },
  {
   "country":"Hong Kong",
   "alpha_3_code":"HKG",
   "numeric_code":344,
   "iso_3166_2 codes":"ISO 3166-2:HK",
   "alpha_2_code":"HK",
   "latitude":22.25,
   "longitude":114.1667
  },
  {
   "country":"Heard Island and McDonald Islands",
   "alpha_3_code":"HMD",
   "numeric_code":334,
   "iso_3166_2 codes":"ISO 3166-2:HM",
   "alpha_2_code":"HM",
   "latitude":-53.1,
   "longitude":72.5167
  },
  {
   "country":"Honduras",
   "alpha_3_code":"HND",
   "numeric_code":340,
   "iso_3166_2 codes":"ISO 3166-2:HN",
   "alpha_2_code":"HN",
   "latitude":15,
   "longitude":-86.5
  },
  {
   "country":"Croatia",
   "alpha_3_code":"HRV",
   "numeric_code":191,
   "iso_3166_2 codes":"ISO 3166-2:HR",
   "alpha_2_code":"HR",
   "latitude":45.1667,
   "longitude":15.5
  },
  {
   "country":"Haiti",
   "alpha_3_code":"HTI",
   "numeric_code":332,
   "iso_3166_2 codes":"ISO 3166-2:HT",
   "alpha_2_code":"HT",
   "latitude":19,
   "longitude":-72.4167
  },
  {
   "country":"Hungary",
   "alpha_3_code":"HUN",
   "numeric_code":348,
   "iso_3166_2 codes":"ISO 3166-2:HU",
   "alpha_2_code":"HU",
   "latitude":47,
   "longitude":20
  },
  {
   "country":"Indonesia",
   "alpha_3_code":"IDN",
   "numeric_code":360,
   "iso_3166_2 codes":"ISO 3166-2:ID",
   "alpha_2_code":"ID",
   "latitude":-5,
   "longitude":120
  },
  {
   "country":"Ireland",
   "alpha_3_code":"IRL",
   "numeric_code":372,
   "iso_3166_2 codes":"ISO 3166-2:IE",
   "alpha_2_code":"IE",
   "latitude":53,
   "longitude":-8
  },
  {
   "country":"Israel",
   "alpha_3_code":"ISR",
   "numeric_code":376,
   "iso_3166_2 codes":"ISO 3166-2:IL",
   "alpha_2_code":"IL",
   "latitude":31.5,
   "longitude":34.75
  },
  {
   "country":"Isle of Man",
   "alpha_3_code":"IMN",
   "numeric_code":833,
   "iso_3166_2 codes":"ISO 3166-2:IM",
   "alpha_2_code":"IM",
   "latitude":null,
   "longitude":null
  },
  {
   "country":"India",
   "alpha_3_code":"IND",
   "numeric_code":356,
   "iso_3166_2 codes":"ISO 3166-2:IN",
   "alpha_2_code":"IN",
   "latitude":20,
   "longitude":77
  },
  {
   "country":"British Indian Ocean Territory",
   "alpha_3_code":"IOT",
   "numeric_code":86,
   "iso_3166_2 codes":"ISO 3166-2:IO",
   "alpha_2_code":"IO",
   "latitude":-6,
   "longitude":71.5
  },
  {
   "country":"Iraq",
   "alpha_3_code":"IRQ",
   "numeric_code":368,
   "iso_3166_2 codes":"ISO 3166-2:IQ",
   "alpha_2_code":"IQ",
   "latitude":33,
   "longitude":44
  },
  {
   "country":"Iran, Islamic Republic of",
   "alpha_3_code":"IRN",
   "numeric_code":364,
   "iso_3166_2 codes":"ISO 3166-2:IR",
   "alpha_2_code":"IR",
   "latitude":32,
   "longitude":53
  },
  {
   "country":"Iceland",
   "alpha_3_code":"ISL",
   "numeric_code":352,
   "iso_3166_2 codes":"ISO 3166-2:IS",
   "alpha_2_code":"IS",
   "latitude":65,
   "longitude":-18
  },
  {
   "country":"Italy",
   "alpha_3_code":"ITA",
   "numeric_code":380,
   "iso_3166_2 codes":"ISO 3166-2:IT",
   "alpha_2_code":"IT",
   "latitude":42.8333,
   "longitude":12.8333
  },
  {
   "country":"Jersey",
   "alpha_3_code":"JEY",
   "numeric_code":832,
   "iso_3166_2 codes":"ISO 3166-2:JE",
   "alpha_2_code":"JE",
   "latitude":null,
   "longitude":null
  },
  {
   "country":"Jamaica",
   "alpha_3_code":"JAM",
   "numeric_code":388,
   "iso_3166_2 codes":"ISO 3166-2:JM",
   "alpha_2_code":"JM",
   "latitude":18.25,
   "longitude":-77.5
  },
  {
   "country":"Jordan",
   "alpha_3_code":"JOR",
   "numeric_code":400,
   "iso_3166_2 codes":"ISO 3166-2:JO",
   "alpha_2_code":"JO",
   "latitude":31,
   "longitude":36
  },
  {
   "country":"Japan",
   "alpha_3_code":"JPN",
   "numeric_code":392,
   "iso_3166_2 codes":"ISO 3166-2:JP",
   "alpha_2_code":"JP",
   "latitude":36,
   "longitude":138
  },
  {
   "country":"Kenya",
   "alpha_3_code":"KEN",
   "numeric_code":404,
   "iso_3166_2 codes":"ISO 3166-2:KE",
   "alpha_2_code":"KE",
   "latitude":1,
   "longitude":38
  },
  {
   "country":"Kyrgyzstan",
   "alpha_3_code":"KGZ",
   "numeric_code":417,
   "iso_3166_2 codes":"ISO 3166-2:KG",
   "alpha_2_code":"KG",
   "latitude":41,
   "longitude":75
  },
  {
   "country":"Cambodia",
   "alpha_3_code":"KHM",
   "numeric_code":116,
   "iso_3166_2 codes":"ISO 3166-2:KH",
   "alpha_2_code":"KH",
   "latitude":13,
   "longitude":105
  },
  {
   "country":"Kiribati",
   "alpha_3_code":"KIR",
   "numeric_code":296,
   "iso_3166_2 codes":"ISO 3166-2:KI",
   "alpha_2_code":"KI",
   "latitude":1.4167,
   "longitude":173
  },
  {
   "country":"Comoros",
   "alpha_3_code":"COM",
   "numeric_code":174,
   "iso_3166_2 codes":"ISO 3166-2:KM",
   "alpha_2_code":"KM",
   "latitude":-12.1667,
   "longitude":44.25
  },
  {
   "country":"Saint Kitts and Nevis",
   "alpha_3_code":"KNA",
   "numeric_code":659,
   "iso_3166_2 codes":"ISO 3166-2:KN",
   "alpha_2_code":"KN",
   "latitude":17.3333,
   "longitude":-62.75
  },
  {
   "country":"Korea, Democratic People's Republic of",
   "alpha_3_code":"PRK",
   "numeric_code":408,
   "iso_3166_2 codes":"ISO 3166-2:KP",
   "alpha_2_code":"KP",
   "latitude":40,
   "longitude":127
  },
  {
   "country":"Korea, Republic of",
   "alpha_3_code":"KOR",
   "numeric_code":410,
   "iso_3166_2 codes":"ISO 3166-2:KR",
   "alpha_2_code":"KR",
   "latitude":37,
   "longitude":127.5
  },
  {
   "country":"Kuwait",
   "alpha_3_code":"KWT",
   "numeric_code":414,
   "iso_3166_2 codes":"ISO 3166-2:KW",
   "alpha_2_code":"KW",
   "latitude":29.3375,
   "longitude":47.6581
  },
  {
   "country":"Cayman Islands",
   "alpha_3_code":"CYM",
   "numeric_code":136,
   "iso_3166_2 codes":"ISO 3166-2:KY",
   "alpha_2_code":"KY",
   "latitude":19.5,
   "longitude":-80.5
  },
  {
   "country":"Kazakhstan",
   "alpha_3_code":"KAZ",
   "numeric_code":398,
   "iso_3166_2 codes":"ISO 3166-2:KZ",
   "alpha_2_code":"KZ",
   "latitude":48,
   "longitude":68
  },
  {
   "country":"Lao People's Democratic Republic",
   "alpha_3_code":"LAO",
   "numeric_code":418,
   "iso_3166_2 codes":"ISO 3166-2:LA",
   "alpha_2_code":"LA",
   "latitude":18,
   "longitude":105
  },
  {
   "country":"Lebanon",
   "alpha_3_code":"LBN",
   "numeric_code":422,
   "iso_3166_2 codes":"ISO 3166-2:LB",
   "alpha_2_code":"LB",
   "latitude":33.8333,
   "longitude":35.8333
  },
  {
   "country":"Saint Lucia",
   "alpha_3_code":"LCA",
   "numeric_code":662,
   "iso_3166_2 codes":"ISO 3166-2:LC",
   "alpha_2_code":"LC",
   "latitude":13.8833,
   "longitude":-61.1333
  },
  {
   "country":"Liechtenstein",
   "alpha_3_code":"LIE",
   "numeric_code":438,
   "iso_3166_2 codes":"ISO 3166-2:LI",
   "alpha_2_code":"LI",
   "latitude":47.1667,
   "longitude":9.5333
  },
  {
   "country":"Sri Lanka",
   "alpha_3_code":"LKA",
   "numeric_code":144,
   "iso_3166_2 codes":"ISO 3166-2:LK",
   "alpha_2_code":"LK",
   "latitude":7,
   "longitude":81
  },
  {
   "country":"Liberia",
   "alpha_3_code":"LBR",
   "numeric_code":430,
   "iso_3166_2 codes":"ISO 3166-2:LR",
   "alpha_2_code":"LR",
   "latitude":6.5,
   "longitude":-9.5
  },
  {
   "country":"Lesotho",
   "alpha_3_code":"LSO",
   "numeric_code":426,
   "iso_3166_2 codes":"ISO 3166-2:LS",
   "alpha_2_code":"LS",
   "latitude":-29.5,
   "longitude":28.5
  },
  {
   "country":"Lithuania",
   "alpha_3_code":"LTU",
   "numeric_code":440,
   "iso_3166_2 codes":"ISO 3166-2:LT",
   "alpha_2_code":"LT",
   "latitude":56,
   "longitude":24
  },
  {
   "country":"Luxembourg",
   "alpha_3_code":"LUX",
   "numeric_code":442,
   "iso_3166_2 codes":"ISO 3166-2:LU",
   "alpha_2_code":"LU",
   "latitude":49.75,
   "longitude":6.1667
  },
  {
   "country":"Latvia",
   "alpha_3_code":"LVA",
   "numeric_code":428,
   "iso_3166_2 codes":"ISO 3166-2:LV",
   "alpha_2_code":"LV",
   "latitude":57,
   "longitude":25
  },
  {
   "country":"Libya",
   "alpha_3_code":"LBY",
   "numeric_code":434,
   "iso_3166_2 codes":"ISO 3166-2:LY",
   "alpha_2_code":"LY",
   "latitude":25,
   "longitude":17
  },
  {
   "country":"Morocco",
   "alpha_3_code":"MAR",
   "numeric_code":504,
   "iso_3166_2 codes":"ISO 3166-2:MA",
   "alpha_2_code":"MA",
   "latitude":32,
   "longitude":-5
  },
  {
   "country":"Monaco",
   "alpha_3_code":"MCO",
   "numeric_code":492,
   "iso_3166_2 codes":"ISO 3166-2:MC",
   "alpha_2_code":"MC",
   "latitude":43.7333,
   "longitude":7.4
  },
  {
   "country":"Moldova, Republic of",
   "alpha_3_code":"MDA",
   "numeric_code":498,
   "iso_3166_2 codes":"ISO 3166-2:MD",
   "alpha_2_code":"MD",
   "latitude":47,
   "longitude":29
  },
  {
   "country":"Montenegro",
   "alpha_3_code":"MNE",
   "numeric_code":499,
   "iso_3166_2 codes":"ISO 3166-2:ME",
   "alpha_2_code":"ME",
   "latitude":42,
   "longitude":19
  },
  {
   "country":"Saint Martin (French part)",
   "alpha_3_code":"MAF",
   "numeric_code":663,
   "iso_3166_2 codes":"ISO 3166-2:MF",
   "alpha_2_code":"MF",
   "latitude":null,
   "longitude":null
  },
  {
   "country":"Madagascar",
   "alpha_3_code":"MDG",
   "numeric_code":450,
   "iso_3166_2 codes":"ISO 3166-2:MG",
   "alpha_2_code":"MG",
   "latitude":-20,
   "longitude":47
  },
  {
   "country":"Marshall Islands",
   "alpha_3_code":"MHL",
   "numeric_code":584,
   "iso_3166_2 codes":"ISO 3166-2:MH",
   "alpha_2_code":"MH",
   "latitude":9,
   "longitude":168
  },
  {
   "country":"Macedonia, The Former Yugoslav Republic of",
   "alpha_3_code":"MKD",
   "numeric_code":807,
   "iso_3166_2 codes":"ISO 3166-2:MK",
   "alpha_2_code":"MK",
   "latitude":41.8333,
   "longitude":22
  },
  {
   "country":"Mali",
   "alpha_3_code":"MLI",
   "numeric_code":466,
   "iso_3166_2 codes":"ISO 3166-2:ML",
   "alpha_2_code":"ML",
   "latitude":17,
   "longitude":-4
  },
  {
   "country":"Myanmar",
   "alpha_3_code":"MMR",
   "numeric_code":104,
   "iso_3166_2 codes":"ISO 3166-2:MM",
   "alpha_2_code":"MM",
   "latitude":22,
   "longitude":98
  },
  {
   "country":"Mongolia",
   "alpha_3_code":"MNG",
   "numeric_code":496,
   "iso_3166_2 codes":"ISO 3166-2:MN",
   "alpha_2_code":"MN",
   "latitude":46,
   "longitude":105
  },
  {
   "country":"Macao",
   "alpha_3_code":"MAC",
   "numeric_code":446,
   "iso_3166_2 codes":"ISO 3166-2:MO",
   "alpha_2_code":"MO",
   "latitude":22.1667,
   "longitude":113.55
  },
  {
   "country":"Northern Mariana Islands",
   "alpha_3_code":"MNP",
   "numeric_code":580,
   "iso_3166_2 codes":"ISO 3166-2:MP",
   "alpha_2_code":"MP",
   "latitude":15.2,
   "longitude":145.75
  },
  {
   "country":"Martinique",
   "alpha_3_code":"MTQ",
   "numeric_code":474,
   "iso_3166_2 codes":"ISO 3166-2:MQ",
   "alpha_2_code":"MQ",
   "latitude":14.6667,
   "longitude":-61
  },
  {
   "country":"Mauritania",
   "alpha_3_code":"MRT",
   "numeric_code":478,
   "iso_3166_2 codes":"ISO 3166-2:MR",
   "alpha_2_code":"MR",
   "latitude":20,
   "longitude":-12
  },
  {
   "country":"Montserrat",
   "alpha_3_code":"MSR",
   "numeric_code":500,
   "iso_3166_2 codes":"ISO 3166-2:MS",
   "alpha_2_code":"MS",
   "latitude":16.75,
   "longitude":-62.2
  },
  {
   "country":"Malta",
   "alpha_3_code":"MLT",
   "numeric_code":470,
   "iso_3166_2 codes":"ISO 3166-2:MT",
   "alpha_2_code":"MT",
   "latitude":35.8333,
   "longitude":14.5833
  },
  {
   "country":"Mauritius",
   "alpha_3_code":"MUS",
   "numeric_code":480,
   "iso_3166_2 codes":"ISO 3166-2:MU",
   "alpha_2_code":"MU",
   "latitude":-20.2833,
   "longitude":57.55
  },
  {
   "country":"Maldives",
   "alpha_3_code":"MDV",
   "numeric_code":462,
   "iso_3166_2 codes":"ISO 3166-2:MV",
   "alpha_2_code":"MV",
   "latitude":3.25,
   "longitude":73
  },
  {
   "country":"Malawi",
   "alpha_3_code":"MWI",
   "numeric_code":454,
   "iso_3166_2 codes":"ISO 3166-2:MW",
   "alpha_2_code":"MW",
   "latitude":-13.5,
   "longitude":34
  },
  {
   "country":"Mexico",
   "alpha_3_code":"MEX",
   "numeric_code":484,
   "iso_3166_2 codes":"ISO 3166-2:MX",
   "alpha_2_code":"MX",
   "latitude":23,
   "longitude":-102
  },
  {
   "country":"Malaysia",
   "alpha_3_code":"MYS",
   "numeric_code":458,
   "iso_3166_2 codes":"ISO 3166-2:MY",
   "alpha_2_code":"MY",
   "latitude":2.5,
   "longitude":112.5
  },
  {
   "country":"Mozambique",
   "alpha_3_code":"MOZ",
   "numeric_code":508,
   "iso_3166_2 codes":"ISO 3166-2:MZ",
   "alpha_2_code":"MZ",
   "latitude":-18.25,
   "longitude":35
  },
  {
   "country":"Namibia",
   "alpha_3_code":"NAM",
   "numeric_code":516,
   "iso_3166_2 codes":"ISO 3166-2:NA",
   "alpha_2_code":"NA",
   "latitude":-22,
   "longitude":17
  },
  {
   "country":"New Caledonia",
   "alpha_3_code":"NCL",
   "numeric_code":540,
   "iso_3166_2 codes":"ISO 3166-2:NC",
   "alpha_2_code":"NC",
   "latitude":-21.5,
   "longitude":165.5
  },
  {
   "country":"Niger",
   "alpha_3_code":"NER",
   "numeric_code":562,
   "iso_3166_2 codes":"ISO 3166-2:NE",
   "alpha_2_code":"NE",
   "latitude":16,
   "longitude":8
  },
  {
   "country":"Norfolk Island",
   "alpha_3_code":"NFK",
   "numeric_code":574,
   "iso_3166_2 codes":"ISO 3166-2:NF",
   "alpha_2_code":"NF",
   "latitude":-29.0333,
   "longitude":167.95
  },
  {
   "country":"Nigeria",
   "alpha_3_code":"NGA",
   "numeric_code":566,
   "iso_3166_2 codes":"ISO 3166-2:NG",
   "alpha_2_code":"NG",
   "latitude":10,
   "longitude":8
  },
  {
   "country":"Nicaragua",
   "alpha_3_code":"NIC",
   "numeric_code":558,
   "iso_3166_2 codes":"ISO 3166-2:NI",
   "alpha_2_code":"NI",
   "latitude":13,
   "longitude":-85
  },
  {
   "country":"Netherlands",
   "alpha_3_code":"NLD",
   "numeric_code":528,
   "iso_3166_2 codes":"ISO 3166-2:NL",
   "alpha_2_code":"NL",
   "latitude":52.5,
   "longitude":5.75
  },
  {
   "country":"Norway",
   "alpha_3_code":"NOR",
   "numeric_code":578,
   "iso_3166_2 codes":"ISO 3166-2:NO",
   "alpha_2_code":"NO",
   "latitude":62,
   "longitude":10
  },
  {
   "country":"Nepal",
   "alpha_3_code":"NPL",
   "numeric_code":524,
   "iso_3166_2 codes":"ISO 3166-2:NP",
   "alpha_2_code":"NP",
   "latitude":28,
   "longitude":84
  },
  {
   "country":"Nauru",
   "alpha_3_code":"NRU",
   "numeric_code":520,
   "iso_3166_2 codes":"ISO 3166-2:NR",
   "alpha_2_code":"NR",
   "latitude":-0.5333,
   "longitude":166.9167
  },
  {
   "country":"Niue",
   "alpha_3_code":"NIU",
   "numeric_code":570,
   "iso_3166_2 codes":"ISO 3166-2:NU",
   "alpha_2_code":"NU",
   "latitude":-19.0333,
   "longitude":-169.8667
  },
  {
   "country":"New Zealand",
   "alpha_3_code":"NZL",
   "numeric_code":554,
   "iso_3166_2 codes":"ISO 3166-2:NZ",
   "alpha_2_code":"NZ",
   "latitude":-41,
   "longitude":174
  },
  {
   "country":"Oman",
   "alpha_3_code":"OMN",
   "numeric_code":512,
   "iso_3166_2 codes":"ISO 3166-2:OM",
   "alpha_2_code":"OM",
   "latitude":21,
   "longitude":57
  },
  {
   "country":"Panama",
   "alpha_3_code":"PAN",
   "numeric_code":591,
   "iso_3166_2 codes":"ISO 3166-2:PA",
   "alpha_2_code":"PA",
   "latitude":9,
   "longitude":-80
  },
  {
   "country":"Peru",
   "alpha_3_code":"PER",
   "numeric_code":604,
   "iso_3166_2 codes":"ISO 3166-2:PE",
   "alpha_2_code":"PE",
   "latitude":-10,
   "longitude":-76
  },
  {
   "country":"French Polynesia",
   "alpha_3_code":"PYF",
   "numeric_code":258,
   "iso_3166_2 codes":"ISO 3166-2:PF",
   "alpha_2_code":"PF",
   "latitude":-15,
   "longitude":-140
  },
  {
   "country":"Papua New Guinea",
   "alpha_3_code":"PNG",
   "numeric_code":598,
   "iso_3166_2 codes":"ISO 3166-2:PG",
   "alpha_2_code":"PG",
   "latitude":-6,
   "longitude":147
  },
  {
   "country":"Philippines",
   "alpha_3_code":"PHL",
   "numeric_code":608,
   "iso_3166_2 codes":"ISO 3166-2:PH",
   "alpha_2_code":"PH",
   "latitude":13,
   "longitude":122
  },
  {
   "country":"Pakistan",
   "alpha_3_code":"PAK",
   "numeric_code":586,
   "iso_3166_2 codes":"ISO 3166-2:PK",
   "alpha_2_code":"PK",
   "latitude":30,
   "longitude":70
  },
  {
   "country":"Poland",
   "alpha_3_code":"POL",
   "numeric_code":616,
   "iso_3166_2 codes":"ISO 3166-2:PL",
   "alpha_2_code":"PL",
   "latitude":52,
   "longitude":20
  },
  {
   "country":"Saint Pierre and Miquelon",
   "alpha_3_code":"SPM",
   "numeric_code":666,
   "iso_3166_2 codes":"ISO 3166-2:PM",
   "alpha_2_code":"PM",
   "latitude":46.8333,
   "longitude":-56.3333
  },
  {
   "country":"Pitcairn",
   "alpha_3_code":"PCN",
   "numeric_code":612,
   "iso_3166_2 codes":"ISO 3166-2:PN",
   "alpha_2_code":"PN",
   "latitude":null,
   "longitude":null
  },
  {
   "country":"Puerto Rico",
   "alpha_3_code":"PRI",
   "numeric_code":630,
   "iso_3166_2 codes":"ISO 3166-2:PR",
   "alpha_2_code":"PR",
   "latitude":18.25,
   "longitude":-66.5
  },
  {
   "country":"Palestine, State of",
   "alpha_3_code":"PSE",
   "numeric_code":275,
   "iso_3166_2 codes":"ISO 3166-2:PS",
   "alpha_2_code":"PS",
   "latitude":32,
   "longitude":35.25
  },
  {
   "country":"Portugal",
   "alpha_3_code":"PRT",
   "numeric_code":620,
   "iso_3166_2 codes":"ISO 3166-2:PT",
   "alpha_2_code":"PT",
   "latitude":39.5,
   "longitude":-8
  },
  {
   "country":"Palau",
   "alpha_3_code":"PLW",
   "numeric_code":585,
   "iso_3166_2 codes":"ISO 3166-2:PW",
   "alpha_2_code":"PW",
   "latitude":7.5,
   "longitude":134.5
  },
  {
   "country":"Paraguay",
   "alpha_3_code":"PRY",
   "numeric_code":600,
   "iso_3166_2 codes":"ISO 3166-2:PY",
   "alpha_2_code":"PY",
   "latitude":-23,
   "longitude":-58
  },
  {
   "country":"Qatar",
   "alpha_3_code":"QAT",
   "numeric_code":634,
   "iso_3166_2 codes":"ISO 3166-2:QA",
   "alpha_2_code":"QA",
   "latitude":25.5,
   "longitude":51.25
  },
  {
   "country":"Réunion",
   "alpha_3_code":"REU",
   "numeric_code":638,
   "iso_3166_2 codes":"ISO 3166-2:RE",
   "alpha_2_code":"RE",
   "latitude":-21.1,
   "longitude":55.6
  },
  {
   "country":"Romania",
   "alpha_3_code":"ROU",
   "numeric_code":642,
   "iso_3166_2 codes":"ISO 3166-2:RO",
   "alpha_2_code":"RO",
   "latitude":46,
   "longitude":25
  },
  {
   "country":"Serbia",
   "alpha_3_code":"SRB",
   "numeric_code":688,
   "iso_3166_2 codes":"ISO 3166-2:RS",
   "alpha_2_code":"RS",
   "latitude":44,
   "longitude":21
  },
  {
   "country":"Russian Federation",
   "alpha_3_code":"RUS",
   "numeric_code":643,
   "iso_3166_2 codes":"ISO 3166-2:RU",
   "alpha_2_code":"RU",
   "latitude":60,
   "longitude":100
  },
  {
   "country":"Rwanda",
   "alpha_3_code":"RWA",
   "numeric_code":646,
   "iso_3166_2 codes":"ISO 3166-2:RW",
   "alpha_2_code":"RW",
   "latitude":-2,
   "longitude":30
  },
  {
   "country":"Saudi Arabia",
   "alpha_3_code":"SAU",
   "numeric_code":682,
   "iso_3166_2 codes":"ISO 3166-2:SA",
   "alpha_2_code":"SA",
   "latitude":25,
   "longitude":45
  },
  {
   "country":"Solomon Islands",
   "alpha_3_code":"SLB",
   "numeric_code":90,
   "iso_3166_2 codes":"ISO 3166-2:SB",
   "alpha_2_code":"SB",
   "latitude":-8,
   "longitude":159
  },
  {
   "country":"Seychelles",
   "alpha_3_code":"SYC",
   "numeric_code":690,
   "iso_3166_2 codes":"ISO 3166-2:SC",
   "alpha_2_code":"SC",
   "latitude":-4.5833,
   "longitude":55.6667
  },
  {
   "country":"Sudan",
   "alpha_3_code":"SDN",
   "numeric_code":729,
   "iso_3166_2 codes":"ISO 3166-2:SD",
   "alpha_2_code":"SD",
   "latitude":15,
   "longitude":30
  },
  {
   "country":"Sweden",
   "alpha_3_code":"SWE",
   "numeric_code":752,
   "iso_3166_2 codes":"ISO 3166-2:SE",
   "alpha_2_code":"SE",
   "latitude":62,
   "longitude":15
  },
  {
   "country":"Singapore",
   "alpha_3_code":"SGP",
   "numeric_code":702,
   "iso_3166_2 codes":"ISO 3166-2:SG",
   "alpha_2_code":"SG",
   "latitude":1.3667,
   "longitude":103.8
  },
  {
   "country":"Saint Helena, Ascension and Tristan da Cunha",
   "alpha_3_code":"SHN",
   "numeric_code":654,
   "iso_3166_2 codes":"ISO 3166-2:SH",
   "alpha_2_code":"SH",
   "latitude":-15.9333,
   "longitude":-5.7
  },
  {
   "country":"Slovenia",
   "alpha_3_code":"SVN",
   "numeric_code":705,
   "iso_3166_2 codes":"ISO 3166-2:SI",
   "alpha_2_code":"SI",
   "latitude":46,
   "longitude":15
  },
  {
   "country":"Svalbard and Jan Mayen",
   "alpha_3_code":"SJM",
   "numeric_code":744,
   "iso_3166_2 codes":"ISO 3166-2:SJ",
   "alpha_2_code":"SJ",
   "latitude":78,
   "longitude":20
  },
  {
   "country":"Slovakia",
   "alpha_3_code":"SVK",
   "numeric_code":703,
   "iso_3166_2 codes":"ISO 3166-2:SK",
   "alpha_2_code":"SK",
   "latitude":48.6667,
   "longitude":19.5
  },
  {
   "country":"Sierra Leone",
   "alpha_3_code":"SLE",
   "numeric_code":694,
   "iso_3166_2 codes":"ISO 3166-2:SL",
   "alpha_2_code":"SL",
   "latitude":8.5,
   "longitude":-11.5
  },
  {
   "country":"San Marino",
   "alpha_3_code":"SMR",
   "numeric_code":674,
   "iso_3166_2 codes":"ISO 3166-2:SM",
   "alpha_2_code":"SM",
   "latitude":43.7667,
   "longitude":12.4167
  },
  {
   "country":"Senegal",
   "alpha_3_code":"SEN",
   "numeric_code":686,
   "iso_3166_2 codes":"ISO 3166-2:SN",
   "alpha_2_code":"SN",
   "latitude":14,
   "longitude":-14
  },
  {
   "country":"Somalia",
   "alpha_3_code":"SOM",
   "numeric_code":706,
   "iso_3166_2 codes":"ISO 3166-2:SO",
   "alpha_2_code":"SO",
   "latitude":10,
   "longitude":49
  },
  {
   "country":"Suriname",
   "alpha_3_code":"SUR",
   "numeric_code":740,
   "iso_3166_2 codes":"ISO 3166-2:SR",
   "alpha_2_code":"SR",
   "latitude":4,
   "longitude":-56
  },
  {
   "country":"South Sudan",
   "alpha_3_code":"SSD",
   "numeric_code":728,
   "iso_3166_2 codes":"ISO 3166-2:SS",
   "alpha_2_code":"SS",
   "latitude":null,
   "longitude":null
  },
  {
   "country":"Sao Tome and Principe",
   "alpha_3_code":"STP",
   "numeric_code":678,
   "iso_3166_2 codes":"ISO 3166-2:ST",
   "alpha_2_code":"ST",
   "latitude":1,
   "longitude":7
  },
  {
   "country":"El Salvador",
   "alpha_3_code":"SLV",
   "numeric_code":222,
   "iso_3166_2 codes":"ISO 3166-2:SV",
   "alpha_2_code":"SV",
   "latitude":13.8333,
   "longitude":-88.9167
  },
  {
   "country":"Sint Maarten (Dutch part)",
   "alpha_3_code":"SXM",
   "numeric_code":534,
   "iso_3166_2 codes":"ISO 3166-2:SX",
   "alpha_2_code":"SX",
   "latitude":null,
   "longitude":null
  },
  {
   "country":"Syrian Arab Republic",
   "alpha_3_code":"SYR",
   "numeric_code":760,
   "iso_3166_2 codes":"ISO 3166-2:SY",
   "alpha_2_code":"SY",
   "latitude":35,
   "longitude":38
  },
  {
   "country":"Swaziland",
   "alpha_3_code":"SWZ",
   "numeric_code":748,
   "iso_3166_2 codes":"ISO 3166-2:SZ",
   "alpha_2_code":"SZ",
   "latitude":-26.5,
   "longitude":31.5
  },
  {
   "country":"Turks and Caicos Islands",
   "alpha_3_code":"TCA",
   "numeric_code":796,
   "iso_3166_2 codes":"ISO 3166-2:TC",
   "alpha_2_code":"TC",
   "latitude":21.75,
   "longitude":-71.5833
  },
  {
   "country":"Chad",
   "alpha_3_code":"TCD",
   "numeric_code":148,
   "iso_3166_2 codes":"ISO 3166-2:TD",
   "alpha_2_code":"TD",
   "latitude":15,
   "longitude":19
  },
  {
   "country":"French Southern Territories",
   "alpha_3_code":"ATF",
   "numeric_code":260,
   "iso_3166_2 codes":"ISO 3166-2:TF",
   "alpha_2_code":"TF",
   "latitude":-43,
   "longitude":67
  },
  {
   "country":"Togo",
   "alpha_3_code":"TGO",
   "numeric_code":768,
   "iso_3166_2 codes":"ISO 3166-2:TG",
   "alpha_2_code":"TG",
   "latitude":8,
   "longitude":1.1667
  },
  {
   "country":"Thailand",
   "alpha_3_code":"THA",
   "numeric_code":764,
   "iso_3166_2 codes":"ISO 3166-2:TH",
   "alpha_2_code":"TH",
   "latitude":15,
   "longitude":100
  },
  {
   "country":"Tajikistan",
   "alpha_3_code":"TJK",
   "numeric_code":762,
   "iso_3166_2 codes":"ISO 3166-2:TJ",
   "alpha_2_code":"TJ",
   "latitude":39,
   "longitude":71
  },
  {
   "country":"Tokelau",
   "alpha_3_code":"TKL",
   "numeric_code":772,
   "iso_3166_2 codes":"ISO 3166-2:TK",
   "alpha_2_code":"TK",
   "latitude":-9,
   "longitude":-172
  },
  {
   "country":"Timor-Leste",
   "alpha_3_code":"TLS",
   "numeric_code":626,
   "iso_3166_2 codes":"ISO 3166-2:TL",
   "alpha_2_code":"TL",
   "latitude":null,
   "longitude":null
  },
  {
   "country":"Turkmenistan",
   "alpha_3_code":"TKM",
   "numeric_code":795,
   "iso_3166_2 codes":"ISO 3166-2:TM",
   "alpha_2_code":"TM",
   "latitude":40,
   "longitude":60
  },
  {
   "country":"Tunisia",
   "alpha_3_code":"TUN",
   "numeric_code":788,
   "iso_3166_2 codes":"ISO 3166-2:TN",
   "alpha_2_code":"TN",
   "latitude":34,
   "longitude":9
  },
  {
   "country":"Tonga",
   "alpha_3_code":"TON",
   "numeric_code":776,
   "iso_3166_2 codes":"ISO 3166-2:TO",
   "alpha_2_code":"TO",
   "latitude":-20,
   "longitude":-175
  },
  {
   "country":"Turkey",
   "alpha_3_code":"TUR",
   "numeric_code":792,
   "iso_3166_2 codes":"ISO 3166-2:TR",
   "alpha_2_code":"TR",
   "latitude":39,
   "longitude":35
  },
  {
   "country":"Trinidad and Tobago",
   "alpha_3_code":"TTO",
   "numeric_code":780,
   "iso_3166_2 codes":"ISO 3166-2:TT",
   "alpha_2_code":"TT",
   "latitude":11,
   "longitude":-61
  },
  {
   "country":"Tuvalu",
   "alpha_3_code":"TUV",
   "numeric_code":798,
   "iso_3166_2 codes":"ISO 3166-2:TV",
   "alpha_2_code":"TV",
   "latitude":-8,
   "longitude":178
  },
  {
   "country":"Taiwan, Province of China",
   "alpha_3_code":"TWN",
   "numeric_code":158,
   "iso_3166_2 codes":"ISO 3166-2:TW",
   "alpha_2_code":"TW",
   "latitude":23.5,
   "longitude":121
  },
  {
   "country":"Tanzania, United Republic of",
   "alpha_3_code":"TZA",
   "numeric_code":834,
   "iso_3166_2 codes":"ISO 3166-2:TZ",
   "alpha_2_code":"TZ",
   "latitude":-6,
   "longitude":35
  },
  {
   "country":"Ukraine",
   "alpha_3_code":"UKR",
   "numeric_code":804,
   "iso_3166_2 codes":"ISO 3166-2:UA",
   "alpha_2_code":"UA",
   "latitude":49,
   "longitude":32
  },
  {
   "country":"Uganda",
   "alpha_3_code":"UGA",
   "numeric_code":800,
   "iso_3166_2 codes":"ISO 3166-2:UG",
   "alpha_2_code":"UG",
   "latitude":1,
   "longitude":32
  },
  {
   "country":"United States Minor Outlying Islands",
   "alpha_3_code":"UMI",
   "numeric_code":581,
   "iso_3166_2 codes":"ISO 3166-2:UM",
   "alpha_2_code":"UM",
   "latitude":19.2833,
   "longitude":166.6
  },
  {
   "country":"United States",
   "alpha_3_code":"USA",
   "numeric_code":840,
   "iso_3166_2 codes":"ISO 3166-2:US",
   "alpha_2_code":"US",
   "latitude":38,
   "longitude":-97
  },
  {
   "country":"Uruguay",
   "alpha_3_code":"URY",
   "numeric_code":858,
   "iso_3166_2 codes":"ISO 3166-2:UY",
   "alpha_2_code":"UY",
   "latitude":-33,
   "longitude":-56
  },
  {
   "country":"Uzbekistan",
   "alpha_3_code":"UZB",
   "numeric_code":860,
   "iso_3166_2 codes":"ISO 3166-2:UZ",
   "alpha_2_code":"UZ",
   "latitude":41,
   "longitude":64
  },
  {
   "country":"Holy See (Vatican City State)",
   "alpha_3_code":"VAT",
   "numeric_code":336,
   "iso_3166_2 codes":"ISO 3166-2:VA",
   "alpha_2_code":"VA",
   "latitude":41.9,
   "longitude":12.45
  },
  {
   "country":"Saint Vincent and the Grenadines",
   "alpha_3_code":"VCT",
   "numeric_code":670,
   "iso_3166_2 codes":"ISO 3166-2:VC",
   "alpha_2_code":"VC",
   "latitude":13.25,
   "longitude":-61.2
  },
  {
   "country":"Venezuela, Bolivarian Republic of",
   "alpha_3_code":"VEN",
   "numeric_code":862,
   "iso_3166_2 codes":"ISO 3166-2:VE",
   "alpha_2_code":"VE",
   "latitude":8,
   "longitude":-66
  },
  {
   "country":"Virgin Islands, British",
   "alpha_3_code":"VGB",
   "numeric_code":92,
   "iso_3166_2 codes":"ISO 3166-2:VG",
   "alpha_2_code":"VG",
   "latitude":18.5,
   "longitude":-64.5
  },
  {
   "country":"Virgin Islands, U.S.",
   "alpha_3_code":"VIR",
   "numeric_code":850,
   "iso_3166_2 codes":"ISO 3166-2:VI",
   "alpha_2_code":"VI",
   "latitude":18.3333,
   "longitude":-64.8333
  },
  {
   "country":"Viet Nam",
   "alpha_3_code":"VNM",
   "numeric_code":704,
   "iso_3166_2 codes":"ISO 3166-2:VN",
   "alpha_2_code":"VN",
   "latitude":16,
   "longitude":106
  },
  {
   "country":"Vanuatu",
   "alpha_3_code":"VUT",
   "numeric_code":548,
   "iso_3166_2 codes":"ISO 3166-2:VU",
   "alpha_2_code":"VU",
   "latitude":-16,
   "longitude":167
  },
  {
   "country":"Wallis and Futuna",
   "alpha_3_code":"WLF",
   "numeric_code":876,
   "iso_3166_2 codes":"ISO 3166-2:WF",
   "alpha_2_code":"WF",
   "latitude":-13.3,
   "longitude":-176.2
  },
  {
   "country":"Samoa",
   "alpha_3_code":"WSM",
   "numeric_code":882,
   "iso_3166_2 codes":"ISO 3166-2:WS",
   "alpha_2_code":"WS",
   "latitude":-13.5833,
   "longitude":-172.3333
  },
  {
   "country":"Yemen",
   "alpha_3_code":"YEM",
   "numeric_code":887,
   "iso_3166_2 codes":"ISO 3166-2:YE",
   "alpha_2_code":"YE",
   "latitude":15,
   "longitude":48
  },
  {
   "country":"Mayotte",
   "alpha_3_code":"MYT",
   "numeric_code":175,
   "iso_3166_2 codes":"ISO 3166-2:YT",
   "alpha_2_code":"YT",
   "latitude":-12.8333,
   "longitude":45.1667
  },
  {
   "country":"South Africa",
   "alpha_3_code":"ZAF",
   "numeric_code":710,
   "iso_3166_2 codes":"ISO 3166-2:ZA",
   "alpha_2_code":"ZA",
   "latitude":-29,
   "longitude":24
  },
  {
   "country":"Zambia",
   "alpha_3_code":"ZMB",
   "numeric_code":894,
   "iso_3166_2 codes":"ISO 3166-2:ZM",
   "alpha_2_code":"ZM",
   "latitude":-15,
   "longitude":30
  },
  {
   "country":"Zimbabwe",
   "alpha_3_code":"ZWE",
   "numeric_code":716,
   "iso_3166_2 codes":"ISO 3166-2:ZW",
   "alpha_2_code":"ZW",
   "latitude":-20,
   "longitude":30
  }
]