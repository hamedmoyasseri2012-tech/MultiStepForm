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

  return (
    <>
      <div className="flex justify-between gap-4">
        <button className="w-[213px] h-[43px] border rounded-xl">
          Prevoius
        </button>
        <button
          onClick={handleNext}
          className="w-[213px] h-[43px] border rounded-xl"
        >
          Next
        </button>
      </div>
    </>
  );
};
export default Footer;
