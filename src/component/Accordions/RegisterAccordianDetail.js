import React from "react";
import SimpleAccordion from "../UI/SimpleAccordion";
const RegisterAccordianDetail = () => {
  const detailing = (
    <p className="text-[#666666]">
      Our customer service team is available throughout the week, all seven days
      and it is 24/7 service. They can be reached at{" "}
      <a className="font-bold">+919110635588</a> or via email at
      <a className="text-[#1A7DC1] font-bold">
        {" "}
        customerservice@carterporter.in
      </a>
    </p>
  );
  const detail = [
    { title: "How do I contact customer service?", description: detailing },
    {
      title: "What are your timings to contact customer service?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
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

export default RegisterAccordianDetail;
