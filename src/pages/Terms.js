import React from "react";
import Footer from "../component/Footer";

function Terms() {
  return (
    <>
      <div className="bg-[#EEEEEE] overflow-hidden pb-10 ">
        <div className="bg-[#EEEEEE] ">
          <div className="mx-auto w-10/12 py-5">
            <h2 className="font-bold text-2xl md:text-4xl py-5 px-5 ">
              Terms and Conditions/General Terms & Conditions
            </h2>
            <p className="px-5">
              These terms apply to your use of this Website/Mobile App and our
              services. Please take a few minutes to read these terms carefully
              before you use our Website/ Mobile App and our services. If the
              booking was made on your behalf by a third party, your continued
              use of our services means you agree to these Terms and Conditions
            </p>
            <br />
            <p className="px-5 ">
              If you do not accept these Terms and Conditions, please do not use
              our Services and, if you have a booking that has been made on your
              behalf, please exercise your right to cancel your booking failing
              which these Terms and Conditions are duly applicable.
            </p>
          </div>
          <div className="w-full md:w-10/12 px-2 md:mx-auto">
            <div className="bg-white  py-3 rounded-lg p-4 md:p-4 mb-5 shadow-lg">
              <h3 className="text-[#F47521] px-2">1. Definitions:</h3>
              <p className="py-4">
                “Airport Transfer” means the service to/from the city delivery
                address to the airport of service. Gate/Kiosk/Counter prescribed
                of the airport available in the departures/arrivals of every
                airport of service. Address can be classified to local or
                outstation.
              </p>
              <p className="py-4">
                “City to City Transfer” means the service to/from the one city
                pickup/delivery address to another city address at the city of
                service. Address can be classified to local or outstation.
              </p>
              <p className="py-4">
                “Airport Delivery Address” means the Gate/Kiosk/Counter
                prescribed of the airport available in the departures/arrivals
                of every airport of service.
              </p>
              <p className="py-4">
                “City Delivery Address” means the address prescribed available
                in/from the city of service.
              </p>
              <p className="py-4">
                "Booking and/or Order and/or Package" means a Customer’s request
                for Services through our website/ Mobile App as evidenced by our
                records.
              </p>
              <p className="py-4">
                “Website/App” means and includes domains, mobile applications
                (downloadable from Android, windows and Apple devices) owned by
                CARTERPORTER PRIVATE LIMITED.
              </p>
              <p className="py-4 ">
                “CarterPorter/CarterX/Porter/PorterX” means, CARTERPORTER
                PRIVATE LIMITED, Company registered under Companies Act, 2013,
                its branches, their respective employees and agents and
                independent contractors.
              </p>
              <p className="py-4">
                "Charges" means the fees, charges and amounts assessed or levied
                for movement of any Package from and to Airport/city in
                accordance with these conditions or any conditions or fees
                subsequently imposed as per the rate card provided in the
                Website/ Mobile App as per the type and weigh of Package.
              </p>
              <p className="py-4">
                "Conditions" shall mean these Conditions of Carriage which term
                shall also include those agreements, laws and conventions
                expressly referred to herein and as updated by us from time to
                time.
              </p>
              <p className="py-4">
                "Consignment Number and /or Order Number" means the number
                issued by us to a customer ensuring account activity is
                summarized by the CarterPorter tracking system to find out the
                status of the Package of the customer who has signed for it.
              </p>
              <p className="py-4">
                "Customer" and/or “User” and/or “You” means the person who makes
                a Booking (whether directly or indirectly for other
                person/alliance partners) through our Website/ Mobile App.
              </p>
              <p className="py-4">
                “Delivery Address” means the Airport/city Delivery Address
                and/or the Domestic/Outstation Delivery Address;
              </p>
              <p className="py-4">
                “Domestic/Outstation Delivery Address” means the delivery
                address in India in particular in the place of service notified
                to us and validated by us as willing to accept delivery of the
                Package on terms acceptable to us;
              </p>
              <p className="py-4">
                “Distress days” means such days which create distress to general
                public including the user and or us.
              </p>
              <p className="py-4">
                “Order Modification” means or includes or takes place during the
                following situation:
              </p>
              {/* <ul> */}
              <li className="py-4">
                The customer's Package is not classified correctly;
              </li>
              <li className="py-4">
                The address of delivery is beyond 3kms from pin code specified
                at the time of booking
              </li>
              <li className="py-4">
                Weight of the Package measured by our personnel at the time of
                pick up does not match with the online order placed by the
                customer;
              </li>
              <li className="py-4">
                {" "}
                If there is delay from the customer to reach the location at the
                time of pick up or drop of the Package.
              </li>
              <li className="py-4">
                {" "}
                There is an addition or subtraction of luggage count to the
                order placed by customer.
              </li>
              <li className="py-4">
                {" "}
                Insurance Payable towards increased luggage count in the order
                by customer. Applicable only if customer has opted to buy
                additional insurance in the order placed.
              </li>
              <li className="py-4">
                {" "}
                There is variation in rate of order due to current ‘offer/coupon
                applied’ to the order because of order modification.
              </li>
              {/* </ul> */}
              <p className="py-4">
                "Package" means any parcel/baggage/luggage/goods or piece which
                is owned or booked by customer transported by us pursuant to
                these terms and is accepted and does not include any
                explosives/harmful goods or such other goods which are
                prohibited by the International Air Transport Association (IATA)
                Rules that are perishable and dangerous/prohibited to carry as
                detailed in the following link modified from time to time :
                <a
                  className="text-[#3527f8ee] font-bold text-[10px]"
                  href=": http://www.iata.org/publications/dgr/Pages/index.aspx"
                >
                  {" "}
                  'http://www.iata.org/publications/dgr/Pages/index.aspx'
                </a>{" "}
              </p>
              <p className="py-4">
                “Prohibited Items” means any items any items which are of a
                potentially dangerous in nature, items the possession of which
                is illegal in the India, livestock, foodstuffs and perishable
                items or such other goods which are prohibited by the
                International Air Transport Association (IATA) Rules that are
                perishable and dangerous/prohibited to carry as detailed in the
                following link modified from time to time:{" "}
                <a
                  className="text-[#3527f8ee] font-bold text-[10px]"
                  href="http://www.iata.org/publications/dgr/Pages/index.aspx"
                >
                  http://www.iata.org/publications/dgr/Pages/index.aspx
                </a>
              </p>
              <p className="py-4">
                “Reschedule Delivery” means a request by the user to deliver the
                Package to a different location or time after ‘picked up’ by us
                with a reasonable notice period. Company can also make the
                request on behalf of the customer if there is no response from
                customer after pick up at the time of delivery. Evidence of
                contact and communication sent at the time of delivery will be
                posted by company to customer on app/web interface.
              </p>
              <p className="py-4">
                “Scheduled Customer Drop-off Time” means the scheduled time for
                the drop-off of the Package by the Customer to us as set out in
                the Booking; This can be a slot based timeline.
              </p>
              <p className="py-4">
                “Scheduled Delivery Time” means the scheduled time for delivery
                of the Package to either the Domestic/Outstation Delivery
                Address or the Airport/City Delivery Address as set out in the
                Booking; This can be a slot based timeline.
              </p>
              <p className="py-4">
                “Sealed Package” means a Package which has been approved as
                locked by the Customer and sealed using a Tamper evident bag by
                our representative and registered by us or one of our agents at
                the time of collection from the Customer in accordance with our
                security procedures from time to time;{" "}
              </p>
              <p className="py-4">
                “Corporate houses and other strategic alliance partners” are
                corporate house/companies or airlines that have entered into
                contracts with Carterporter Pvt ltd to make bookings. These
                partners will make bookings for customers/passengers/employees
                and those bookings made will be bound by the contracts signed
                mutually between them. The rates, booking features, modification
                and cancellation are based on the mutually agreed terms. All
                other terms of carriage are as per the same general terms and
                conditions listed by Carterporter Private limited. The terms and
                conditions can change from time to time on updates without prior
                intimation.
              </p>
              <p className="py-4">
                For Bookings made by corporate houses and other strategic
                alliance partners the booking customer will be auto registered
                with the primary mobile number given during booking to enable
                tracking of the order. If more than 1 mobile numbers are given
                during the booking, the 1st number will be taken as primary
                number.
              </p>
              <p className="py-4">
                “We”, “our” and “us” means CARTERPORTER PRIVATE LIMITED.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
