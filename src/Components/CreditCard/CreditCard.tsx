import { TextField } from "@mui/material";
import React, { useState } from "react";

interface FormData {
  cardNumber: string;
  cardHolderName: string;
}
const CreditCard: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: "",
    cardHolderName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-row w-[60%] bg-white rounded-lg shadow-lg">
      <div className="flex flex-col justify-center items-center bg-[#3b4b69] w-[50%] p-10 box-content gap-5">
        <h1 className="uppercase text-[#ffffff] text-3xl font-semibold border-b-2 border-[#ffd773]">
          Credit Card
        </h1>
        <div className="rounded-xl bg-[#344e7a] p-4 box-content border-2 border-[#475569]">
          <div
            className="back"
            style={{
              backgroundImage: `url("https://assets.ccbp.in/frontend/hooks/credit-card-bg.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "450px",
              height: "300px",
              borderRadius: "15px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "start",
              padding: "20px",
              boxSizing: "border-box",
              gap: "6px",
            }}
          >
            {formData?.cardNumber ? (
              <h1 className="text-[white] text-3xl font-bold">
                {formData?.cardNumber}
              </h1>
            ) : (
              <h1 className="text-[white] ">CARD NUMBER</h1>
            )}
            <h1 className="text-white">CARDHOLDER NAME</h1>
            {formData?.cardHolderName && (
              <h3 className="text-[white]">{formData.cardHolderName}</h3>
            )}{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-centerbg-white w-[50%] gap-3 p-4 box-content">
        <TextField
          value={formData?.cardNumber}
          name="cardNumber"
          placeholder="Enter Card Number"
          onChange={handleChange}
        />
        <TextField
          value={formData?.cardHolderName}
          name="cardHolderName"
          placeholder="Enter Card Holder Name"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CreditCard;
