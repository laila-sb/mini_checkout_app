import { StepDetails } from "./StepDetails";
import { StepReview } from "./StepReview";
import { StepSubmit } from "./StepSubmit";
import { SuccessPage } from "./SuccessPage";
import { STEPS } from "../types/types";
import { useCheckoutForm } from "../hooks/useCheckoutForm";
// Mental shortcut to remember:
// State lives in the parent → Props flow down → UI renders props

export function CheckoutForm() {
  // how to use a custom hook

  const { state, actions } = useCheckoutForm();

  return (
    <div>
      {state.currentStep === STEPS.DETAILS && (
        <StepDetails
          onNext={actions.nextStep}
          name={state.formData.name}
          onNameChange={actions.setName}
          onEmailChange={actions.setEmail}
          email={state.formData.email}
          address={state.formData.address}
          onAddressChange={actions.setAddress}
          isNextDisabled={state.isNextDisabled}
        />
      )}
      {state.currentStep === STEPS.REVIEW && (
        <StepReview
          onBack={actions.backStep}
          onNext={actions.nextStep}
          email={state.formData.email}
          name={state.formData.name}
          address={state.formData.address}
        />
      )}
      {state.currentStep === STEPS.SUBMIT && (
        <StepSubmit onSubmit={actions.submit} />
      )}
      {state.currentStep === STEPS.SUCCESS && <SuccessPage />}
    </div>
  );
}
