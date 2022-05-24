import React, { useState } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Bags from "../../Images/Airport/Baggage/Bags.png";
import Cab from "../../Images/Airport/Baggage/Cab.png";
import Luggage from "../../Images/Airport/Baggage/Luggage.png";
import Plane from "../../Images/Airport/Baggage/Plane.png";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import ControlledCheckbox from "../../components/ControlledChecked";
import { useNavigate } from "react-router-dom";
import SelectBoxs from "../../component/SelectBoxs";
import SelectAddress from "../../component/SelectAddress";
import SelectBox from "../../component/SelectBox";
import "react-phone-number-input/style.css";
function LocalAirport({ step, setStep }) {
  let number = [];
  number = [...Array(99).keys()];
  const navigate = useNavigate();
  const [type, setType] = React.useState(1);
  const [types, setTypes] = React.useState(0);
  const [active, setActive] = React.useState(false);
  const [active1, setActive1] = React.useState(false);
  const [active2, setActive2] = React.useState(false);
  const [active3, setActive3] = React.useState(false);
  const [toggler, setToggler] = useState(false);
  const [toggler1, setToggler1] = useState(false);
  const [toggler2, setToggler2] = useState(false);
  const [toggler3, setToggler3] = useState(false);
  const [toggler4, setToggler4] = useState(false);
  const [toggler5, setToggler5] = useState(false);
  const [toggler6, setToggler6] = useState(false);
  const time1 = [
    "7 Am - 11 AM",
    "11 AM - 3 PM",
    "3 Pm - 7 PM",
    "7 PM - 12 AM",
    "4 AM - 7 AM",
  ];
  const toggle = ["10 bags", "12 bags", "15 bags", "20 bags"];
  const city = ["Banglore", "New Dehli"];
  const airports = ["KIAL Banglore", "New Dehli"];
  const time = ["9:00 pm", "10:00 pm"];
  const date = [
    "Thursday, 28 October, 2021",
    "Friday, 29 October, 2021",
    "Saturday, 30 October, 2021",
    "Sunday, 31 October, 2021",
  ];
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
  const address = [
    "Banglore, kanataka,India",
    "Banglore cantonmet Railway Station",
    "Banglore cantonmet Railway Station",
    "Banglore cantonmet Railway Station",
    "Banglore cantonmet Railway Station",
    "Banglore cantonmet Railway Station",
    "Banglore cantonmet Railway Station",
  ];

  return (
    <>
      <div className="bg-white flex flex-col w-full px-2 md:w-4/5 mt-2 py-2 md:mt-0 ">
        <div className="flex flex-row justify-between">
          <h3 className="font-bold text-base md:text-lg lg:text-xl w-3/5">
            Book doorstep baggage services to and from the airport with complete
            assistance
          </h3>
          <div className="md:border-2 md:w-2/5 w-fit  rounded-full flex flex-col md:flex-row md:h-[40px]  lg:h-[50px]   ">
            <button
              className={`w-full md:w-1/2 text-center font-bold text-base rounded-full ${
                types == 0 && "!bg-[#1A7DC1] !text-white"
              }`}
              onClick={() => setTypes(0)}
            >
              Local
            </button>
            <button
              className={`w-full md:w-1/2 text-center font-bold text-base rounded-full ${
                types == 1 && "!bg-[#1A7DC1] !text-white"
              }`}
              onClick={() => setTypes(1)}
            >
              Outstation
            </button>
          </div>
        </div>
        <hr className="w-full my-6" />
        <div className="border-2 w-full rounded-full flex flex-row  h-[40px]   ">
          <button
            className={`w-1/2 outline-0 text-center rounded-full flex flex-row font-bold  justify-center items-center gap-2 text-sm md:text-base  ${
              type === 1 && "!text-white !bg-[#F47521] "
            }`}
            onClick={() => {
              setType(1);
            }}
          >
            <FlightTakeoffIcon />
            <h3>To the Airport</h3>
          </button>
          <button
            className={`w-1/2 outline-0 text-center rounded-full flex flex-row font-bold  justify-center items-center gap-2 text-sm md:text-base ${
              type === 2 && "!text-white !bg-[#F47521] "
            }`}
            onClick={() => {
              setType(2);
            }}
          >
            <FlightLandIcon />
            <h3>From the Airport</h3>
          </button>
        </div>
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
                  <select
                    className="bg-transparent"
                    style={{ background: "none", backgroundColor: "none" }}
                    id="phonecode"
                  >
                    {countries.map((item, index) => (
                      <option value={item.code}>{item.code}</option>
                    ))}
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
        <div className="mt-7 flex flex-col lg:flex-row lg:gap-2 gap-7 ">
          <div className="relative rounded-lg flex flex-col justify-between border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-sm lg:text-[15px] text-[#F47521] font-bold">
                Bags
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs
              setToggler={setToggler}
              toggler={toggler}
              toggle={toggle}
              data={"Select Bags"}
            />
            <h2 className="text-xs text-[#CCCCCC]">Check in Bags up to 25kg</h2>
          </div>
          <div className="relative rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2 flex flex-col justify-between">
            <div className="flex flex-row justify-between ">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Date & Time Slot For Pickup
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs
              setToggler={setToggler1}
              toggler={toggler1}
              toggle={date}
              data={"Select Date"}
            />

            <div className="flex flex-row lg:gap-2 gap-7 relative">
              <SelectBox
                setToggler={setToggler6}
                toggler={toggler6}
                toggle={time1}
                data={"Select Time Slot"}
                topp={true}
              />
              <KeyboardArrowDownIcon className="text-[#1A7DC1] absolute left-[92px] -top-[4px]" />
            </div>
          </div>
        </div>
        {types == 1 ? (
          <div className="flex flex-row lg:gap-2 gap-7 w-full ">
            <div className="invisible flex flex-row items-center justify-start lg:gap-2 gap-7 lg:w-1/2 my-2">
              <InfoOutlinedIcon className="text-[#FF0000]" />
              <h3 className="text-xs">
                Adding bags / weight at the time of pick is allowed.
              </h3>
            </div>
            <div className="flex flex-row items-center justify-start lg:gap-2 gap-7 lg:w-[50%] my-2">
              <InfoOutlinedIcon className="text-[#FF0000]" />
              <h3 className="text-xs">Booking must be atleast 3days prior.</h3>
            </div>
          </div>
        ) : (
          <div className="flex flex-row lg:gap-2 gap-7 w-full ">
            <div className="flex flex-row items-center justify-start lg:gap-2 gap-7 lg:w-1/2 my-2">
              <InfoOutlinedIcon className="text-[#FF0000]" />
              <h3 className="text-xs">
                Adding bags / weight at the time of pick is allowed.
              </h3>
            </div>
            <div className="invisible flex flex-row items-center justify-start lg:gap-2 gap-7 lg:w-[50%] my-2">
              <InfoOutlinedIcon className="text-[#FF0000]" />
              <h3 className="text-xs">
                Adding bags / weight at the time of pick is allowed.
              </h3>
            </div>
          </div>
        )}
        <div className="my-3 flex flex-col lg:flex-row lg:gap-2 gap-7 ">
          <div className="flex flex-col lg:gap-2 gap-7 lg:w-1/4  w-full">
            <div className="relative rounded-lg lg:h-[72px] border-[#CCCCCC] py-2 border-2  px-2 ">
              <div className="flex flex-row justify-between">
                {types === 1 ? (
                  <div>
                    {type === 1 ? (
                      <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                        Delivery City
                      </div>
                    ) : (
                      <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                        Arrival City
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                    Select City of Service
                  </div>
                )}
                <div className="text-xs lg:text-[15px] text-[#F47521] font-bold"></div>
                <KeyboardArrowDownIcon className="text-[#F47521]" />
              </div>
              <SelectBoxs
                setToggler={setToggler2}
                toggler={toggler2}
                toggle={city}
                data={"Select City"}
                topp={true}
              />
            </div>
            {types === 1 && (
              <div>
                {type === 1 ? (
                  <div className=" flex flex-row items-center justify-start lg:gap-2 gap-7 lg:w-full my-2 whitespace-nowrap">
                    <InfoOutlinedIcon className="text-[#FF0000]" />
                    <h3 className="text-xs">
                      Delivery may take 4 days minimum
                    </h3>
                  </div>
                ) : (
                  <div className=" flex flex-row items-center justify-start lg:gap-2 gap-7 lg:w-full my-2 whitespace-nowrap">
                    <InfoOutlinedIcon className="text-[#FF0000]" />
                    <div className="flex flex-col">
                      <h3 className="text-xs">
                        Delivery may take minimum 4 days.
                      </h3>
                      <h3 className="text-xs">
                        Delivery to NE & JK will take longer
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="relative lg:h-[72px] rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/4">
            <div className="flex flex-row justify-between">
              {type === 1 ? (
                <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                  Delivery Airport
                </div>
              ) : (
                <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                  Arrival Airport
                </div>
              )}
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs
              setToggler={setToggler3}
              toggler={toggler3}
              toggle={airports}
              data={"Select City"}
              topp={true}
            />
          </div>
          <div className="flex flex-col lg:gap-2 gap-7  w-full lg:w-1/2">
            <div className="relative rounded-lg lg:h-[72px] border-[#CCCCCC] py-2 border-2  px-2">
              <div className="flex flex-row justify-between">
                {type === 1 ? (
                  <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                    Pickup Address
                  </div>
                ) : (
                  <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                    Delivery Address
                  </div>
                )}
                <KeyboardArrowDownIcon className="text-[#F47521]" />
              </div>
              <SelectAddress
                toggle={address}
                toggler={toggler5}
                setToggler={setToggler5}
                data={"Select Address"}
              />
            </div>
            {type === 2 ? (
              <div className=" flex flex-row items-center justify-start lg:gap-2 gap-7 lg:w-full my-2 whitespace-nowrap">
                <InfoOutlinedIcon className="text-[#FF0000]" />
                <h3 className="text-xs">We Deliver Anywhere in India</h3>
              </div>
            ) : (
              <div className=" flex flex-row items-center justify-start lg:gap-2 gap-7 lg:w-full my-2 whitespace-nowrap">
                <InfoOutlinedIcon className="text-[#FF0000]" />
                <h3 className="text-xs">All pincodes are servicable</h3>
              </div>
            )}
          </div>
        </div>
        <div className="mb-3 flex flex-col lg:flex-row lg:gap-2 gap-7 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Departure Dates
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <div className="flex flex-row gap-1">
              <button className="text-white font-bold text-xs lg:text-base bg-[#F47521] border-[#F47521] border-2 rounded-full px-2 lg:py-1">
                28 October, 2021
              </button>
              <button className="text-[#F47521] font-bold text-xs lg:text-base border-2  border-[#F47521] rounded-full px-2 lg:py-1">
                29 October, 2021
              </button>
            </div>
          </div>
          <div className="relative rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Select Time to meet CarterX at Airport
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs
              setToggler={setToggler4}
              toggler={toggler4}
              toggle={time}
              data={"Select Time"}
              topp={true}
            />
          </div>
        </div>
        <div className="mt-7 flex flex-col lg:gap-2 gap-7 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full">
            <div className="text-xs lg:text-[15px] text-[#F47521] font-bold pb-2">
              Add ons
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-2 gap-7 pb-2">
              <div
                className={`flex flex-row w-full lg:w-1/2 gap-1 bg-[#F9F9F9] rounded-xl cursor-pointer ${
                  active && "!border-2 !border-[#F47521] !bg-[#fdeadf]"
                }`}
                onClick={() => {
                  setActive(!active);
                }}
              >
                <img src={Bags} />
                <div className="flex flex-col lg:gap-2 gap-7">
                  <div className="flex flex-row justify-between items-center pr-2">
                    <h4 className="text-base">Express Service</h4>
                    <div
                      className={`flex flex-row items-center text-[#1A7DC1] font-bold ${
                        active && "!text-[#1A7DC1]"
                      }`}
                    >
                      <AddSharpIcon fontSize="small" />
                      <CurrencyRupeeIcon fontSize="small" />
                      <span className="text-base ">80</span>
                    </div>
                  </div>
                  <p className="text-xs">
                    Mauris neque nisi, faucibus non elementum in, convallis et
                    eros. Donec aliquet dignissim.
                  </p>
                </div>
              </div>
              <div
                className={`flex flex-row w-full lg:w-1/2 gap-1 bg-[#F9F9F9] rounded-xl cursor-pointer ${
                  active1 && "!border-2 !border-[#F47521] !bg-[#fdeadf]"
                }`}
                onClick={() => {
                  setActive1(!active1);
                }}
              >
                <img src={Cab} />
                <div className="flex flex-col lg:gap-2 gap-7">
                  <div className="flex flex-row justify-between items-center pr-2">
                    <h4 className="text-base">Cab Service</h4>
                    <div
                      className={`flex flex-row items-center text-[#1A7DC1] font-bold ${
                        active1 && "!text-[#1A7DC1]"
                      }`}
                    >
                      {/* bg-[#1A7DC1] */}
                      <AddSharpIcon fontSize="small" />
                      <CurrencyRupeeIcon fontSize="small" />
                      <span className="text-base ">80</span>
                    </div>
                  </div>
                  <p className="text-xs">
                    Mauris neque nisi, faucibus non elementum in, convallis et
                    eros. Donec aliquet dignissim.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-2 gap-7 pb-2">
              <div
                className={`flex flex-row w-full lg:w-1/2 gap-1 bg-[#F9F9F9] rounded-xl cursor-pointer ${
                  active2 && "!border-2 !border-[#F47521] !bg-[#fdeadf]"
                }`}
                onClick={() => {
                  setActive2(!active2);
                }}
              >
                <img src={Plane} />
                <div className="flex flex-col lg:gap-2 gap-7">
                  <div className="flex flex-row justify-between items-center pr-2">
                    <h4 className="text-base">Laounge for Airplane</h4>
                    <div
                      className={`flex flex-row items-center text-[#1A7DC1] font-bold ${
                        active2 && "!text-[#1A7DC1]"
                      }`}
                    >
                      {/* bg-[#1A7DC1] */}
                      <AddSharpIcon fontSize="small" />
                      <CurrencyRupeeIcon fontSize="small" />
                      <span className="text-base ">80</span>
                    </div>
                  </div>
                  <p className="text-xs">
                    Mauris neque nisi, faucibus non elementum in, convallis et
                    eros. Donec aliquet dignissim.
                  </p>
                </div>
              </div>
              <div
                className={`flex flex-row w-full lg:w-1/2 gap-1 bg-[#F9F9F9] rounded-xl cursor-pointer ${
                  active3 && "!border-2 !border-[#F47521] !bg-[#fdeadf]"
                }`}
                onClick={() => {
                  setActive3(!active3);
                }}
              >
                <img src={Luggage} />
                <div className="flex flex-col lg:gap-2 gap-7">
                  <div className="flex flex-row justify-between items-center pr-2">
                    <h4 className="text-base">Insurance</h4>
                    <div
                      className={`flex flex-row items-center text-[#1A7DC1] font-bold ${
                        active3 && "!text-[#1A7DC1]"
                      }`}
                    >
                      {/* bg-[#1A7DC1] */}
                      <AddSharpIcon fontSize="small" />
                      <CurrencyRupeeIcon fontSize="small" />
                      <span className="text-base ">80</span>
                    </div>
                  </div>
                  <p className="text-xs">
                    Mauris neque nisi, faucibus non elementum in, convallis et
                    eros. Donec aliquet dignissim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* coupon section */}
        <div className="mt-7 flex flex-col lg:gap-2 gap-7 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
              Discount Coupon
            </div>
            <div className="flex flex-row justify-between gap-1 pt-1">
              <div className="flex flex-col gap-1 w-3/5">
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  className="outline-0 text-lg lg:text-lg font-baseline"
                />
                <span className="text-xs">E.g. CXBPL100</span>
              </div>
              <button className="text-sm lg:text-base font-bold text-white p-1 lg:p-2 bg-[#F47521] rounded-full align-baseline ">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
        {/* agreement section */}
        <div className="mt-7 flex flex-row lg:gap-2 gap-7 ">
          <div className="rounded-lg bg-[#F9F9F9] py-2 px-2 w-full">
            <div className="flex flex-row justify-start items-start gap-1 pt-1">
              <ControlledCheckbox />
              <p className="pt-2 pr-2 text-xs lg:text-sm">
                I am 18 years and above and agree and understand the{" "}
                <span
                  className="text-[#1A7DC1] font-bold cursor-pointer"
                  onClick={() => navigate("/terms")}
                >
                  Terms And Condition
                </span>{" "}
                and{" "}
                <span
                  className="text-[#1A7DC1] font-bold cursor-pointer"
                  onClick={() => navigate("/privacy")}
                >
                  Privacy Policy
                </span>
                . I certify that there are no passport(s), personal documents of
                importance, cash, illegal items/substances, immediate medicine,
                alcohol or expensive jewelry. I Agree and certify that CarterX
                and its associates do not know the contents of the bag and are
                further released from any liability arising from the contents of
                my baggage(s).
              </p>
            </div>
            {/* <h3
                    className="outline-0 w-full font-bold text:lg md:text-lg border-[#fff] text-black"
                  >KIAL Bangalore</h3> */}
          </div>
        </div>
        {/* Details */}
        <div className="my-3 flex flex-row gap-6">
          <h3
            className="text-xs lg:text-sm font-bold text-[#1A7DC1] cursor-pointer"
            onClick={() => navigate("/arrivalbook")}
          >
            Departure Booking Information
          </h3>
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
          <div className="flex flex-row justify-between lg:gap-20">
            <div className="flex flex-col  items-center">
              <div className="flex flex-row  text-lg lg:text-4xl font-bold items-center text-[#F47521]">
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

export default LocalAirport;
