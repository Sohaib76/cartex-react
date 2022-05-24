import React from "react";
import Abouts from "./pages/Abouts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Profile from "./pages/Profile";
import ArrivalBook from "./pages/ArrivalBook";
import MyTrips from "./pages/MyTrips";
import Footer from "../src/component/Footer";
import EditProfile from "./pages/EditProfile";
import OrderDetail from "./pages/OrderDetail";
import Blog from "./pages/Blog";
import Cancellation from "./pages/Cancellation";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import RegisterAccordianDetail from "./component/Accordions/RegisterAccordianDetail";
import CustomerAccordianDetail from "./component/Accordions/CustomerAccordion";
import AccountAcordianDetail from "./component/Accordions/AccountAcordionDetail";
import OrderAccordianDetail from "./component/Accordions/OrderAccordionDetail";
import PaymentAccordianDetail from "./component/Accordions/PaymentAccordionDetail";
import PickupAccordianDetail from "./component/Accordions/PickupAccordionDetail";
import InsuranceAccordianDetail from "./component/Accordions/InsuranceAccordionDetail";
import LocalAirport from "./pages/AirportTransfer/LocalAirport";
import LocalParcels from "./pages/AirportTransfer/LocalParcels";
import CargoTransfer from "./pages/AirportTransfer/CargoTransfer";
import CityTransfer from "./pages/AirportTransfer/CityTransfer";
import InterTerminal from "./pages/AirportTransfer/InterTerminal";
import OlaCarter from "./pages/AirportTransfer/OlaCarter";
import AirportTransfer from "./pages/AirportTransfer/AirportTransfer";
import Safety from "./component/Safety";
import Home from "./pages/AirportTransfer/Home";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<Abouts />} />
      <Route path="privacy" element={<PrivacyPolicy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/profile/editprofile" element={<EditProfile />} />
      <Route path="arrivalbook" element={<ArrivalBook />} />
      <Route path="trip" element={<MyTrips />} />
      <Route path="safe" element={<Safety />} />

      <Route path="trip/orderdetail" element={<OrderDetail />} />
      <Route path="blog" element={<Blog />} />
      <Route path="cancellation" element={<Cancellation />} />
      <Route path="contactus" element={<Contact />} />
      <Route path="faq" element={<Faq />} />
      <Route path="faq/register" element={<RegisterAccordianDetail />} />
      <Route path="faq/customer" element={<CustomerAccordianDetail />} />
      <Route path="faq/account" element={<AccountAcordianDetail />} />
      <Route path="faq/order" element={<OrderAccordianDetail />} />
      <Route path="faq/payment" element={<PaymentAccordianDetail />} />
      <Route path="faq/pickup" element={<PickupAccordianDetail />} />
      <Route path="faq/insurance" element={<InsuranceAccordianDetail />} />
      <Route path="airport" element={<AirportTransfer />} />
      <Route path="airport/local" element={<LocalAirport />} />
      <Route path="airport/localparcel" element={<LocalParcels />} />
      <Route path="airport/cargotransfer" element={<CargoTransfer />} />
      <Route path="airport/citytransfer" element={<CityTransfer />} />
      <Route path="airport/interterminal" element={<InterTerminal />} />
      <Route path="airport/olacarter" element={<OlaCarter />} />
    </Routes>
  );
}

export default AppRouter;
