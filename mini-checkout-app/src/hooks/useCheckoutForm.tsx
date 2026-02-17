import { STEPS } from "../types/types";
import { useState } from "react";
import type { Step } from "../types/types";
import { checkoutSchema } from "../schemas/checkoutSchema";
import CheckoutSchema as type;
// Every custom hook follows this mental model:
// create state
// create handlers
// return what the UI needs

export function useCheckoutForm() {
  const [currentStep, setCurrentStep] = useState<Step>(STEPS.DETAILS);
  const [formData, setFormData] = useState<CheckoutSchema>({
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
    const result = checkoutSchema.safeParse(formData);
    if (!result.success)
       {
      console.log(result.error.flatten());
      return;
    }
    setCurrentStep((s) => s + 1);
  };

  const backStep = () => setCurrentStep((s) => s - 1);

  const submit = () => {
    console.log(formData);
    nextStep();
  };
  // to disable a button does th conditional go in the parent or the child?
  //Answer: the condition goes in the parent but to filter it down into the child it needs a prop which is done in the child
  const isNextDisabled = !checkoutSchema.safeParse(formData).success;
    
  const setName = (v:string) => handleFormChange("name", v);

  const setEmail = (v: string) => handleFormChange("email", v);

  const setAddress = (v:string) => handleFormChange("address", v);

  return {
    state: {
      currentStep,
      formData,
      isNextDisabled,
    },
    actions: {
      handleFormChange,
      setName,
      setEmail,
      setAddress,
      nextStep,
      backStep,
      submit,
    },
  };
}
