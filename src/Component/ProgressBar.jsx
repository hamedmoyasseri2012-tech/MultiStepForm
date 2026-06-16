const ProgressBar = ({ step, setStep }) => {
  if (step=== "createAccount")
    setStep ()

  };

  return (
    <>
      <div
        className=" flex gap-16 relative
       justify-evenly items-center"
      >
        <div className="absolute bg-[#4ead5a] h-1 w-full top-1/3 z-5"></div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-white flex-col gap-4 border bg-[#4daf50] z-10 w-15 h-15 rounded-full flex justify-center items-center text-center ">
            <i className="fa-solid fa-user "></i>
          </div>

          <div className="text-[#4caf50]">Account</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-white flex-col gap-4 border bg-[#dddddd] w-15 h-15 rounded-full z-10 flex justify-center items-center text-center">
            <i className="fa-solid fa-id-card "></i>
          </div>
          <div className="text-[#999999]">Details</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-white flex-col gap-4 border bg-[#dddddd] w-15 h-15 z-10 rounded-full flex justify-center items-center text-center">
            <i className="fa-solid fa-credit-card "></i>
          </div>
          <div className="text-[#999999]">Payment</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-white flex-col gap-4 border bg-[#dddddd] w-15 z-10 h-15 rounded-full flex justify-center items-center text-center">
            <i className="fas fa-check"></i>
          </div>
          <div className="text-[#999999]">Review</div>
        </div>
      </div>
    </>
  );
};
export default ProgressBar;
