import React from "react";
import SimpleAccordion from "../UI/SimpleAccordion";
const PaymentAccordianDetail = () => {
  const detail = [
    {
      title: " 01 question space?",
      description:
        "Our customer service team is available throughout the week, all seven days and it is 24/7 service. They can be reached at +919110635588 or via email at customerservice@carterporter.in",
    },
    {
      title: "question space??",
      description: "details of particular question means answer",
    },
    {
      title: "How can I give feedback on the quality of customer service?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
      title: "What is the Cancellations & Refund Policy?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
      title: "How and where do I track the Cancellations & Refund?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
      title: "Other FAQs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
      title: "accordian 07",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
      title: "accordian 08",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
  ];
  return (
    <div className=" p-3 lg:p-5">
      {" "}
      {detail.map((v, i) => (
        <SimpleAccordion title={v.title} desc={v.description} />
      ))}
    </div>
  );
};

export default PaymentAccordianDetail;
