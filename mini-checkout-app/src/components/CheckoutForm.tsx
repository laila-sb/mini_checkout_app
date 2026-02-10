import { useState } from "react";
import { StepDetails } from "./StepDetails";
import { StepReview } from "./StepReview";
import { StepSubmit } from "./StepSubmit";
import { SuccessPage } from "./SuccessPage";

// Mental shortcut to remember:
// State lives in the parent → Props flow down → UI renders props

type FormData = {
  email: string;
  name: string;
  address: string;
};
const STEPS = {
    DETAILS: 0,
    REVIEW: 1,
    SUBMIT: 2,
    SUCCESS: 3
} as const;

type Step = 0 | 1 | 2 | 3;
export function CheckoutForm() {
  const [currentStep, setCurrentStep] = useState<Step>(0);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    address: "",
  });
  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (
      currentStep === STEPS.DETAILS &&
      (!formData.name.trim() || !formData.email.trim() || !formData.address.trim())
    ) {
      console.log("missing details");
      return;
    }
    setCurrentStep((s) => s + 1);
  };
  const backStep = () => setCurrentStep((s) => s - 1);
  const submit = () => {
    console.log(formData)
    nextStep();
  };
  // to disable a button does th conditional go in the parent or the child?
  //Answer: the condition goes in the parent but to filter it down into the child it needs a prop which is done in the child
  const isNextDisabled = !formData.email.trim() || !formData.name.trim() ||!formData.address.trim();

  // show the email in the ui
  // So just needed to pass the email prop to the child and then add it as a type on the child and display it as an element in the child

  return (
    <div>
      
      {currentStep === STEPS.DETAILS && (
        <StepDetails
          onNext={nextStep}
          name={formData.name}
          onNameChange={(v) => handleFormChange("name", v)}
          onEmailChange={(v) => handleFormChange("email", v)}
          email={formData.email}
          address={formData.address}
          onAddressChange={(v) => handleFormChange('address', v)}
          isNextDisabled={isNextDisabled}
        />
      )}
      {currentStep === STEPS.REVIEW && (
        <StepReview
          onBack={backStep}
          onNext={nextStep}
          email={formData.email}
          name={formData.name}
          address={formData.address}
        />
      )}
      {currentStep === STEPS.SUBMIT && <StepSubmit 
      onSubmit={submit} 
      />}
      {currentStep === STEPS.SUCCESS && <SuccessPage/>}
    </div>
  );
}
