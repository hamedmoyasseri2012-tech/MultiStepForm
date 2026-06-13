const Payment = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-extrabold">Payment Information</h1>
        <div className="flex flex-col gap-6">
          <label className="text-[#333333] text-xl font-bold" htmlFor="">
            Card Number
          </label>
          <input
            className="border border-[#e6e6e6] rounded-xl justify-start items-center p-2 text-xl w-109.5 h-11 hover:border-[#74c078]"
            type="text"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-[#333333] text-xl font-bold" htmlFor="">
            Phone
          </label>
          <input
            className="border border-[#e6e6e6] rounded-xl justify-start items-center p-2 text-xl w-109.5 h-11  hover:border-[#74c078]"
            type="number"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
    </>
  );
};
export default Payment;
