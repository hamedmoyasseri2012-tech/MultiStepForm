const CreateAccount = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-extrabold">Create Account</h1>
        <div className="flex flex-col gap-6">
          <label className="text-[#333333] text-xl font-bold" htmlFor="">
            Email
          </label>
          <input
            className="border border-[#e6e6e6] rounded-xl justify-start items-center p-2 text-xl w-109.5 h-11 hover:border-[#74c078]"
            type="text"
            placeholder="you@example.com"
          />
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-[#333333] text-xl font-bold" htmlFor="">
            Password
          </label>
          <input
            className="border border-[#e6e6e6] rounded-xl justify-start items-center p-2 text-xl w-109.5 h-11  hover:border-[#74c078]"
            type="text"
            placeholder="Enter password"
          />
        </div>
      </div>
    </>
  );
};
export default CreateAccount;
