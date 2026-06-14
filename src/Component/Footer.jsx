const Footer = ({ setStep, step }) => {
  const handleNext = () => {
    if (step === "createAccount") {
      setStep("personalDetails");
    } else if (step === "personalDetails") {
      setStep("payment");
    } else {
      setStep("review");
    }
  };

  const handlePrev = () => {
  
    if (step === "payment") {
      setStep("personalDetails");
    } else if (step === "personalDetails"){
      setStep("createAccount");
    }

    }
   
  ;

  // console.log(step);

  return (
    <>
      {(step === "createAccount" ||
        step === "personalDetails" ||
        step === "payment") && (
        <div className="flex justify-between gap-6">
          <button
            onClick={handlePrev}
            className="w-53.25 h-10.75 border rounded-xl bg-[#f7f7f7] border-[#f7f7f7] font-bold text-xl text-[#979797]"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="w-53.25 h-10.75 border rounded-xl border-[#4cb050] text-white font-bold text-xl bg-[#4cb050]"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};
export default Footer;
