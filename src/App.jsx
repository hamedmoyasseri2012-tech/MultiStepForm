import { useState } from "react";
import CreateAccount from "./Component/CreateAccount";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Payment from "./Component/Payment";
import PersonalDetails from "./Component/PersonalDetails";
import ProgressBar from "./Component/ProgressBar";
import Review from "./Component/Review";

const App = () => {
  const [step, setStep] = useState("createAccount");
  return (
    <>
      <Header />
      <ProgressBar setStep={setStep} step={step} />
      {step === "createAccount" ? (
        <CreateAccount />
      ) : step === "personalDetails" ? (
        <PersonalDetails />
      ) : step === "payment" ? (
        <Payment />
      ) : step === "review" ? (
        <Review setStep={setStep} step={step} />
      ) : null}

      <Footer setStep={setStep} step={step} />
    </>
  );
};
export default App;
