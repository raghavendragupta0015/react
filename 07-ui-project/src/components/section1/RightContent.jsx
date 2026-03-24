import React from "react";
import RightCard from "./RightCard";

const RightContent = () => {
  const segments = [
    {
      src: "https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHwxfDB8fHww",
      desc: "Prime customers, that have access to bank credit and are satisfied with the current product.",
      remarks: "Satisfied",
    },
    {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8MXwwfHx8MA%3D%3D",
      desc: "Prime customers, that have access to bank credit and are not satisfied with the current service.",
      remarks: "Underserved",
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfDF8MHx8fDA%3D",
      desc: "Customers from near-prime and sub-prime segments with no access to bank credit.",
      remarks: "Underbanked",
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfDF8MHx8fDA%3D",
      desc: "Customers from near-prime and sub-prime segments with no access to bank credit.",
      remarks: "Underbanked",
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfDF8MHx8fDA%3D",
      desc: "Customers from near-prime and sub-prime segments with no access to bank credit.",
      remarks: "Underbanked",
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfDF8MHx8fDA%3D",
      desc: "Customers from near-prime and sub-prime segments with no access to bank credit.",
      remarks: "Underbanked",
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfDF8MHx8fDA%3D",
      desc: "Customers from near-prime and sub-prime segments with no access to bank credit.",
      remarks: "Underbanked",
    },
  ];

  return (
    <div
      id="rightCard"
      className="h-full w-3/4 p-6 flex flex-row gap-6 flex-nowrap overflow-x-auto overflow-y-hidden scroll-smooth"
    >
      {segments.map((segment, idx) => (
        <RightCard
          id={idx}
          key={idx}
          serialNum={segment.id}
          src={segment.src}
          desc={segment.desc}
          remarks={segment.remarks}
        />
      ))}
    </div>
  );
};

export default RightContent;
