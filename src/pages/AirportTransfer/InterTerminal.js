import React,{useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import ControlledCheckbox from "../../components/ControlledChecked";
import { useNavigate } from "react-router-dom";
import Packing from "../../Images/Airport/Baggage/Packing.png";
import SelectBoxs from "../../component/SelectBoxs";

function CityTransfer() {
  const countries = [
    {
      code: "+7 840",
      name: "Abkhazia",
    },
    {
      code: "+93",
      name: "Afghanistan",
    },
    {
      code: "+355",
      name: "Albania",
    },
    {
      code: "+213",
      name: "Algeria",
    },
    {
      code: "+1 684",
      name: "American Samoa",
    },
    {
      code: "+376",
      name: "Andorra",
    },
    {
      code: "+244",
      name: "Angola",
    },
    {
      code: "+1 264",
      name: "Anguilla",
    },
    {
      code: "+1 268",
      name: "Antigua and Barbuda",
    },
    {
      code: "+54",
      name: "Argentina",
    },
    {
      code: "+374",
      name: "Armenia",
    },
    {
      code: "+297",
      name: "Aruba",
    },
    {
      code: "+247",
      name: "Ascension",
    },
    {
      code: "+61",
      name: "Australia",
    },
    {
      code: "+672",
      name: "Australian External Territories",
    },
    {
      code: "+43",
      name: "Austria",
    },
    {
      code: "+994",
      name: "Azerbaijan",
    },
    {
      code: "+1 242",
      name: "Bahamas",
    },
    {
      code: "+973",
      name: "Bahrain",
    },
    {
      code: "+880",
      name: "Bangladesh",
    },
    {
      code: "+1 246",
      name: "Barbados",
    },
    {
      code: "+1 268",
      name: "Barbuda",
    },
    {
      code: "+375",
      name: "Belarus",
    },
    {
      code: "+32",
      name: "Belgium",
    },
    {
      code: "+501",
      name: "Belize",
    },
    {
      code: "+229",
      name: "Benin",
    },
    {
      code: "+1 441",
      name: "Bermuda",
    },
    {
      code: "+975",
      name: "Bhutan",
    },
    {
      code: "+591",
      name: "Bolivia",
    },
    {
      code: "+387",
      name: "Bosnia and Herzegovina",
    },
    {
      code: "+267",
      name: "Botswana",
    },
    {
      code: "+55",
      name: "Brazil",
    },
    {
      code: "+246",
      name: "British Indian Ocean Territory",
    },
    {
      code: "+1 284",
      name: "British Virgin Islands",
    },
    {
      code: "+673",
      name: "Brunei",
    },
    {
      code: "+359",
      name: "Bulgaria",
    },
    {
      code: "+226",
      name: "Burkina Faso",
    },
    {
      code: "+257",
      name: "Burundi",
    },
    {
      code: "+855",
      name: "Cambodia",
    },
    {
      code: "+237",
      name: "Cameroon",
    },
    {
      code: "+1",
      name: "Canada",
    },
    {
      code: "+238",
      name: "Cape Verde",
    },
    {
      code: "+ 345",
      name: "Cayman Islands",
    },
    {
      code: "+236",
      name: "Central African Republic",
    },
    {
      code: "+235",
      name: "Chad",
    },
    {
      code: "+56",
      name: "Chile",
    },
    {
      code: "+86",
      name: "China",
    },
    {
      code: "+61",
      name: "Christmas Island",
    },
    {
      code: "+61",
      name: "Cocos-Keeling Islands",
    },
    {
      code: "+57",
      name: "Colombia",
    },
    {
      code: "+269",
      name: "Comoros",
    },
    {
      code: "+242",
      name: "Congo",
    },
    {
      code: "+243",
      name: "Congo, Dem. Rep. of (Zaire)",
    },
    {
      code: "+682",
      name: "Cook Islands",
    },
    {
      code: "+506",
      name: "Costa Rica",
    },
    {
      code: "+385",
      name: "Croatia",
    },
    {
      code: "+53",
      name: "Cuba",
    },
    {
      code: "+599",
      name: "Curacao",
    },
    {
      code: "+537",
      name: "Cyprus",
    },
    {
      code: "+420",
      name: "Czech Republic",
    },
    {
      code: "+45",
      name: "Denmark",
    },
    {
      code: "+246",
      name: "Diego Garcia",
    },
    {
      code: "+253",
      name: "Djibouti",
    },
    {
      code: "+1 767",
      name: "Dominica",
    },
    {
      code: "+1 809",
      name: "Dominican Republic",
    },
    {
      code: "+670",
      name: "East Timor",
    },
    {
      code: "+56",
      name: "Easter Island",
    },
    {
      code: "+593",
      name: "Ecuador",
    },
    {
      code: "+20",
      name: "Egypt",
    },
    {
      code: "+503",
      name: "El Salvador",
    },
    {
      code: "+240",
      name: "Equatorial Guinea",
    },
    {
      code: "+291",
      name: "Eritrea",
    },
    {
      code: "+372",
      name: "Estonia",
    },
    {
      code: "+251",
      name: "Ethiopia",
    },
    {
      code: "+500",
      name: "Falkland Islands",
    },
    {
      code: "+298",
      name: "Faroe Islands",
    },
    {
      code: "+679",
      name: "Fiji",
    },
    {
      code: "+358",
      name: "Finland",
    },
    {
      code: "+33",
      name: "France",
    },
    {
      code: "+596",
      name: "French Antilles",
    },
    {
      code: "+594",
      name: "French Guiana",
    },
    {
      code: "+689",
      name: "French Polynesia",
    },
    {
      code: "+241",
      name: "Gabon",
    },
    {
      code: "+220",
      name: "Gambia",
    },
    {
      code: "+995",
      name: "Georgia",
    },
    {
      code: "+49",
      name: "Germany",
    },
    {
      code: "+233",
      name: "Ghana",
    },
    {
      code: "+350",
      name: "Gibraltar",
    },
    {
      code: "+30",
      name: "Greece",
    },
    {
      code: "+299",
      name: "Greenland",
    },
    {
      code: "+1 473",
      name: "Grenada",
    },
    {
      code: "+590",
      name: "Guadeloupe",
    },
    {
      code: "+1 671",
      name: "Guam",
    },
    {
      code: "+502",
      name: "Guatemala",
    },
    {
      code: "+224",
      name: "Guinea",
    },
    {
      code: "+245",
      name: "Guinea-Bissau",
    },
    {
      code: "+595",
      name: "Guyana",
    },
    {
      code: "+509",
      name: "Haiti",
    },
    {
      code: "+504",
      name: "Honduras",
    },
    {
      code: "+852",
      name: "Hong Kong SAR China",
    },
    {
      code: "+36",
      name: "Hungary",
    },
    {
      code: "+354",
      name: "Iceland",
    },
    {
      code: "+91",
      name: "India",
    },
    {
      code: "+62",
      name: "Indonesia",
    },
    {
      code: "+98",
      name: "Iran",
    },
    {
      code: "+964",
      name: "Iraq",
    },
    {
      code: "+353",
      name: "Ireland",
    },
    {
      code: "+972",
      name: "Israel",
    },
    {
      code: "+39",
      name: "Italy",
    },
    {
      code: "+225",
      name: "Ivory Coast",
    },
    {
      code: "+1 876",
      name: "Jamaica",
    },
    {
      code: "+81",
      name: "Japan",
    },
    {
      code: "+962",
      name: "Jordan",
    },
    {
      code: "+7 7",
      name: "Kazakhstan",
    },
    {
      code: "+254",
      name: "Kenya",
    },
    {
      code: "+686",
      name: "Kiribati",
    },
    {
      code: "+965",
      name: "Kuwait",
    },
    {
      code: "+996",
      name: "Kyrgyzstan",
    },
    {
      code: "+856",
      name: "Laos",
    },
    {
      code: "+371",
      name: "Latvia",
    },
    {
      code: "+961",
      name: "Lebanon",
    },
    {
      code: "+266",
      name: "Lesotho",
    },
    {
      code: "+231",
      name: "Liberia",
    },
    {
      code: "+218",
      name: "Libya",
    },
    {
      code: "+423",
      name: "Liechtenstein",
    },
    {
      code: "+370",
      name: "Lithuania",
    },
    {
      code: "+352",
      name: "Luxembourg",
    },
    {
      code: "+853",
      name: "Macau SAR China",
    },
    {
      code: "+389",
      name: "Macedonia",
    },
    {
      code: "+261",
      name: "Madagascar",
    },
    {
      code: "+265",
      name: "Malawi",
    },
    {
      code: "+60",
      name: "Malaysia",
    },
    {
      code: "+960",
      name: "Maldives",
    },
    {
      code: "+223",
      name: "Mali",
    },
    {
      code: "+356",
      name: "Malta",
    },
    {
      code: "+692",
      name: "Marshall Islands",
    },
    {
      code: "+596",
      name: "Martinique",
    },
    {
      code: "+222",
      name: "Mauritania",
    },
    {
      code: "+230",
      name: "Mauritius",
    },
    {
      code: "+262",
      name: "Mayotte",
    },
    {
      code: "+52",
      name: "Mexico",
    },
    {
      code: "+691",
      name: "Micronesia",
    },
    {
      code: "+1 808",
      name: "Midway Island",
    },
    {
      code: "+373",
      name: "Moldova",
    },
    {
      code: "+377",
      name: "Monaco",
    },
    {
      code: "+976",
      name: "Mongolia",
    },
    {
      code: "+382",
      name: "Montenegro",
    },
    {
      code: "+1664",
      name: "Montserrat",
    },
    {
      code: "+212",
      name: "Morocco",
    },
    {
      code: "+95",
      name: "Myanmar",
    },
    {
      code: "+264",
      name: "Namibia",
    },
    {
      code: "+674",
      name: "Nauru",
    },
    {
      code: "+977",
      name: "Nepal",
    },
    {
      code: "+31",
      name: "Netherlands",
    },
    {
      code: "+599",
      name: "Netherlands Antilles",
    },
    {
      code: "+1 869",
      name: "Nevis",
    },
    {
      code: "+687",
      name: "New Caledonia",
    },
    {
      code: "+64",
      name: "New Zealand",
    },
    {
      code: "+505",
      name: "Nicaragua",
    },
    {
      code: "+227",
      name: "Niger",
    },
    {
      code: "+234",
      name: "Nigeria",
    },
    {
      code: "+683",
      name: "Niue",
    },
    {
      code: "+672",
      name: "Norfolk Island",
    },
    {
      code: "+850",
      name: "North Korea",
    },
    {
      code: "+1 670",
      name: "Northern Mariana Islands",
    },
    {
      code: "+47",
      name: "Norway",
    },
    {
      code: "+968",
      name: "Oman",
    },
    {
      code: "+92",
      name: "Pakistan",
    },
    {
      code: "+680",
      name: "Palau",
    },
    {
      code: "+970",
      name: "Palestinian Territory",
    },
    {
      code: "+507",
      name: "Panama",
    },
    {
      code: "+675",
      name: "Papua New Guinea",
    },
    {
      code: "+595",
      name: "Paraguay",
    },
    {
      code: "+51",
      name: "Peru",
    },
    {
      code: "+63",
      name: "Philippines",
    },
    {
      code: "+48",
      name: "Poland",
    },
    {
      code: "+351",
      name: "Portugal",
    },
    {
      code: "+1 787",
      name: "Puerto Rico",
    },
    {
      code: "+974",
      name: "Qatar",
    },
    {
      code: "+262",
      name: "Reunion",
    },
    {
      code: "+40",
      name: "Romania",
    },
    {
      code: "+7",
      name: "Russia",
    },
    {
      code: "+250",
      name: "Rwanda",
    },
    {
      code: "+685",
      name: "Samoa",
    },
    {
      code: "+378",
      name: "San Marino",
    },
    {
      code: "+966",
      name: "Saudi Arabia",
    },
    {
      code: "+221",
      name: "Senegal",
    },
    {
      code: "+381",
      name: "Serbia",
    },
    {
      code: "+248",
      name: "Seychelles",
    },
    {
      code: "+232",
      name: "Sierra Leone",
    },
    {
      code: "+65",
      name: "Singapore",
    },
    {
      code: "+421",
      name: "Slovakia",
    },
    {
      code: "+386",
      name: "Slovenia",
    },
    {
      code: "+677",
      name: "Solomon Islands",
    },
    {
      code: "+27",
      name: "South Africa",
    },
    {
      code: "+500",
      name: "South Georgia and the South Sandwich Islands",
    },
    {
      code: "+82",
      name: "South Korea",
    },
    {
      code: "+34",
      name: "Spain",
    },
    {
      code: "+94",
      name: "Sri Lanka",
    },
    {
      code: "+249",
      name: "Sudan",
    },
    {
      code: "+597",
      name: "Suriname",
    },
    {
      code: "+268",
      name: "Swaziland",
    },
    {
      code: "+46",
      name: "Sweden",
    },
    {
      code: "+41",
      name: "Switzerland",
    },
    {
      code: "+963",
      name: "Syria",
    },
    {
      code: "+886",
      name: "Taiwan",
    },
    {
      code: "+992",
      name: "Tajikistan",
    },
    {
      code: "+255",
      name: "Tanzania",
    },
    {
      code: "+66",
      name: "Thailand",
    },
    {
      code: "+670",
      name: "Timor Leste",
    },
    {
      code: "+228",
      name: "Togo",
    },
    {
      code: "+690",
      name: "Tokelau",
    },
    {
      code: "+676",
      name: "Tonga",
    },
    {
      code: "+1 868",
      name: "Trinidad and Tobago",
    },
    {
      code: "+216",
      name: "Tunisia",
    },
    {
      code: "+90",
      name: "Turkey",
    },
    {
      code: "+993",
      name: "Turkmenistan",
    },
    {
      code: "+1 649",
      name: "Turks and Caicos Islands",
    },
    {
      code: "+688",
      name: "Tuvalu",
    },
    {
      code: "+1 340",
      name: "U.S. Virgin Islands",
    },
    {
      code: "+256",
      name: "Uganda",
    },
    {
      code: "+380",
      name: "Ukraine",
    },
    {
      code: "+971",
      name: "United Arab Emirates",
    },
    {
      code: "+44",
      name: "United Kingdom",
    },
    {
      code: "+1",
      name: "United States",
    },
    {
      code: "+598",
      name: "Uruguay",
    },
    {
      code: "+998",
      name: "Uzbekistan",
    },
    {
      code: "+678",
      name: "Vanuatu",
    },
    {
      code: "+58",
      name: "Venezuela",
    },
    {
      code: "+84",
      name: "Vietnam",
    },
    {
      code: "+1 808",
      name: "Wake Island",
    },
    {
      code: "+681",
      name: "Wallis and Futuna",
    },
    {
      code: "+967",
      name: "Yemen",
    },
    {
      code: "+260",
      name: "Zambia",
    },
    {
      code: "+255",
      name: "Zanzibar",
    },
    {
      code: "+263",
      name: "Zimbabwe",
    },
  ];
  let number=[]
  number=[...Array(99).keys()]
  const navigate = useNavigate();
  const [type, setType] = React.useState(1);
  const [active, setActive] = React.useState(0);
  const [toggler, setToggler] = useState(false)
  const [toggler1, setToggler1] = useState(false)
  const [toggler2, setToggler2] = useState(false)
  const [toggler3, setToggler3] = useState(false)
  const [toggler4, setToggler4] = useState(false)
  const [toggler5, setToggler5] = useState(false)
  const [toggler6, setToggler6] = useState(false)
  const [toggler7, setToggler7] = useState(false)
  const [toggler8, setToggler8] = useState(false)
  const toggle= ['10 bags','12 bags', '15 bags','20 bags'];
  const city= ['Banglore', 'New Dehli'];
  const airports= ['KIAL Banglore', 'New Dehli'];
  const time= ['9:00 pm', '10:00 pm'];
  const date= ['Thursday, 28 October, 2021','Friday, 29 October, 2021', 'Saturday, 30 October, 2021','Sunday, 31 October, 2021'];


  return (
    <>
      <div className="bg-white flex flex-col w-full md:w-4/5 mt-2 py-2 px-2 ">
        <div className="flex flex-row  ">
          <h3 className="font-bold text-lg md:text-xl w-full">
            Domestic / International Baggage Transfer & Inter / Intra Terminal
            Baggage Transfer
          </h3>
        </div>
        <hr className="w-full my-6" />
        <div className="mt-7 flex flex-col lg:flex-row lg:gap-2 gap-7 ">
          <div className="flex flex-col justify-between md:py-2 rounded-lg border-[#CCCCCC]  border-2  px-2 w-full lg:w-1/3">
            <div className="text-sm lg:text-[15px] text-[#F47521] font-bold">
              Name
            </div>
            <input
              className="outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] "
              placeholder="Enter Name"
            ></input>
          </div>
          <div className="flex flex-col justify-between md:py-2 rounded-lg border-[#CCCCCC]  border-2 w-full lg:w-1/3 px-2 py-2">
            <div className="text-sm lg:text-[15px] text-[#F47521] font-bold">
              Mobile No. *
            </div>

            <div className="flex flex-row">
              <span className="border-[1px] rounded-lg border-[#F47521] text-sm p-1 ">
                <label className="text-[#F47521]" for="phonecode">
                  <select className="bg-none" style={{background:"none",backgroundColor:"none"}} id="phonecode">
                  {
                      countries.map((item,index)=>(
                        
                        <option value={item.code}>{item.code}</option>
                      ))
                    }
                  </select>
                </label>
              </span>
              <input
                className="font-bold text-lg lg:text-lg  w-full outline-0 indent-2"
                placeholder="Enter Mobile No"
              ></input>
            </div>
          </div>
          <div className="flex flex-col justify-between md:py-2 rounded-lg border-[#CCCCCC]  border-2  px-2 w-full lg:w-1/3">
            <div className="text-sm lg:text-[15px] text-[#F47521] font-bold">
              Email
            </div>
            <input
              className="outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] "
              placeholder="Enter Email"
            ></input>
          </div>
        </div>

        <div className="mt-3 flex flex-row gap-2 ">
          <div className="relative rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Bags
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs setToggler={setToggler} toggler={toggler} toggle={toggle} data={'Select Bags'}/>
            <h2 className="text-xs text-[#CCCCCC]">Check in Bags up to 25kg</h2>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-4  my-2">
          <InfoOutlinedIcon className="text-[#FF0000]" />
          <h3 className="text-xs">
            Adding bags / weight at the time of pick is allowed.
          </h3>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row gap-4 ">
          <div className="relative rounded-lg h-[72px] border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Arrival Date
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs setToggler={setToggler1} toggler={toggler1} toggle={date} data={'Select Date'} topp={true} />

          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/2 ">
          <div className="relative rounded-lg border-[#CCCCCC] py-2 border-2  px-2 ">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Arrival Time
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs setToggler={setToggler2} toggler={toggler2} toggle={time} data={'Select Date'} topp={true} />
          </div>
          <div className=" flex flex-row items-center justify-start gap-2 lg:w-full my-2 whitespace-nowrap">
            <InfoOutlinedIcon className="text-[#FF0000]" />
            <h3 className="text-xs">
            Time can be filled after booking

            </h3>
          </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row gap-4 ">
          <div className="relative rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Arrival City
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs setToggler={setToggler3} toggler={toggler3} toggle={city} extraData={'Select Arrival city'} topp={true} />
          </div>
          <div className="relative rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Arrival Airport
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs setToggler={setToggler8} toggler={toggler8} toggle={city} extraData={'Select Arrival airport'} topp={true} />
 
          </div>
        </div>
       
        <div className="text-xs lg:text-sm font-bold my-4">
          Departure and Arrival can be 30 days apart. Additional Fragile charges
          will be applied for all electronic items including TVs. No packing
          provided. Bags will be stored in as given condition.
        </div>
       
        {/* Departure */}
        <div className="mt-3 flex flex-col lg:flex-row gap-4 ">
          <div className="relative rounded-lg h-[72px] border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-sx lg:text-[15px] text-[#F47521] font-bold">
                Departure Date
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs setToggler={setToggler4} toggler={toggler4} toggle={date} extraData={'Select Departure Date'} topp={true} />
          </div>
         <div className="flex flex-col gap-2 w-full lg:w-1/2">
         <div className="relative rounded-lg border-[#CCCCCC] py-2 border-2  px-2 ">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Departure Time
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs setToggler={setToggler5} toggler={toggler5} toggle={city} extraData={'Select Departure time'} topp={true} />
          </div>
          <div className=" flex flex-row items-center justify-start gap-2 lg:w-full my-2 whitespace-nowrap">
            <InfoOutlinedIcon className="text-[#FF0000]" />
            <h3 className="text-xs">
            Time can be filled after booking
            </h3>
          </div>
         </div>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row gap-4 ">
          <div className="relative rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-sx lg:text-[15px] text-[#F47521] font-bold">
                Departure City
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs setToggler={setToggler6} toggler={toggler6} toggle={city} extraData={'Select Departure city'} topp={true} />
          </div>
          <div className="relative rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Departure Airport
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs setToggler={setToggler7} toggler={toggler7} toggle={city} extraData={'Select Departure airport'} topp={true} />
          </div>
        </div>
        <div className="font-bold text-xs lg:text-sm py-3">
          <p>
          Arrival time and Departure should be at least 6 Hours apart else refund will be automated.
          </p>
          <p>
All electronics items including TVs are accepted only in original packing.
</p>
        <p>
All bags to be handed over in fully locked condition. All zippers are to be locked before handover of bags.
          </p>
        </div>

        {/* coupon section */}
        <div className="mt-3 flex flex-row gap-3 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full">
            <div className="text-[15px] text-[#F47521] font-bold">Add Ons</div>
            <div className={`flex flex-row w-8/12 lg:w-1/2 justify-around lg:gap-1 bg-[#F9F9F9] rounded-xl px-1 ml-2 my-4 py-1 cursor-pointer ${
                active && "!border-2 !border-[#F47521] !bg-[#fdeadf]"
              }`} onClick={() => setActive(!active)}>
              <img className="" src={Packing} />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center pr-2">
                  <h4 className="text-base indent-2"> Insurance</h4>
                  <div className="flex flex-row items-center text-[#1A7DC1] font-bold  ">
                    <AddSharpIcon className="" fontSize="xs" />
                    <CurrencyRupeeIcon fontSize="xs" />
                    <span className="text-base text-[13px]">80</span>
                  </div>
                </div>
                <p className="text-xs pl-2">
                  Mauris neque nisi, faucibus non elementum in, convallis et
                  eros. Donec aliquet dignissim.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* details */}
        <div className="flex px-2 flex-col gap-3 pt-6 pb-0">
          <h2 className="text-xs lg:text-sm ">
            All order packages will be picked only on further inspection.
            CarterX additional packing will not be done beyond 24 inches. Order
            modification is allowed to add bags/extra weight and will be charged
            extra. TV and electronic should be in original packing will be
            considered as fragile and charged extra.
          </h2>
        </div>
        {/* agreement section */}
        <div className="mt-3 flex flex-row gap-2 ">
          <div className="rounded-lg bg-[#F9F9F9] py-2 px-2 w-full">
            <div className="flex flex-row justify-start items-start gap-1 pt-1">
              <ControlledCheckbox />
              <p className="pt-2 pr-2 text-xs lg:text-sm">
                I agree and understand the{" "}
                <span
                  className="text-[#1A7DC1] font-bold cursor-pointer"
                  onClick={() => navigate("/terms")}
                >
                  Terms And Condition
                </span>{" "}
                I certify that there are no passport(s), personal documents of
                importance, cash, illegal items/substance, immediate medicine,
                alcohol or expensive jewelry and the carriers(s) i.e CarterX and
                its associate are further released from any liability arising
                from the contents of my property.
              </p>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="my-3 flex flex-row gap-2 lg:gap-6">
          <h3
            className="text-xs lg:text-sm font-bold text-[#1A7DC1] cursor-pointer"
            onClick={() => navigate("/cancellation")}
          >
            Cancellation And Refund Policy
          </h3>
        </div>
        {/* Proceed */}
        <div className="flex flex-col lg:flex-row justify-between mt-2">
          <div className="flex flex-col justify-between">
            <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
              Estimated Time
            </div>
            <h2 className="font-bold text-lg lg:text-lg">
              30 Oct 2021 after 10:00 AM
            </h2>
          </div>
          <div className="flex flex-row justify-between  lg:gap-20">
            <div className="flex flex-col  items-center">
              <div className="flex flex-row text-lg lg:text-4xl font-bold items-center text-[#F47521]">
                <CurrencyRupeeIcon fontSize="large" />
                <p>838</p>
              </div>
              <span className="text-xs lg:pl-1">Inclusive of GST</span>
            </div>
            <button className="px-10 items-center text-sm lg:text-base text-white font-bold rounded-full bg-[#F47521]">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CityTransfer;
