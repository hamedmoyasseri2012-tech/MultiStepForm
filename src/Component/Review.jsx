const Review = ({step,setStep}) => {
  
  const handlePrev = () => {
    if (step === "review") {
      setStep ("payment")
    }
  }
  const handleSubmit = () => {
    
  }


  return (
    <>
      <div className="flex flex-col gap-8 pl-4">
        <h1 className="text-2xl font-bold">Review & Confirm</h1>
        <div className="flex flex-col bg-[#f9f9f9] justify-center items-center gap-4 w-130 h-50 rounded-xl">
          <h1 className="text-[#7e92a3] text-xl">
            Please review your information before submitting.
          </h1>

          <div className=" text-white border bg-[#4daf50] w-15 h-15 rounded-full flex justify-center items-center text-center">
            <i className="fas fa-check"></i>
          </div>
        </div>
      </div>
      <div>
        <button onClick={handlePrev} className="w-53.25 h-10.75 border rounded-xl bg-[#f7f7f7] border-[#f7f7f7] font-bold text-xl text-[#979797]">
          Previous
        </button>
        <button onClick={handleSubmit} className="w-53.25 h-10.75 border rounded-xl border-[#4cb050] text-white font-bold text-xl bg-[#4cb050]">
          submit
        </button>
      </div>
    </>
  );
};
export default Review;
