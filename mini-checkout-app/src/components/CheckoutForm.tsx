import { useState } from "react"
import { StepDetails } from "./StepDetails"
import { StepReview } from "./StepReview"
import { StepSubmit } from "./StepSubmit"

// Mental shortcut to remember:
// State lives in the parent → Props flow down → UI renders props

export function CheckoutForm() {
    const [currentStep, setCurrentStep] = useState(0)
    
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const nextStep = () => {
        if (currentStep === 0 && !name.trim() || !email.trim()) {
             console.log ("missing details");
             return;
        }
            setCurrentStep (s => s +1 )
        }
    const backStep = () => setCurrentStep (s => s - 1 )
    const submit = () => {
        const payload = {
            name,
            email
        }
        console.log(payload)
    }
    // to disable a button does th conditional go in the parent or the child?
    //Answer: the condition goes in the parent but to filter it down into the child it needs a prop which is done in the child
    const isNextDisabled = 
        email.trim() === "";
    
    // show the email in the ui 
    // So just needed to pass the email prop to the child and then add it as a type on the child and display it as an element in the child

    return <div> 
    Current step: {currentStep} 
    {currentStep === 0 && <StepDetails 
    onNext={nextStep} 
    name={name}
    onNameChange={setName}
    email={email} 
    onEmailChange={setEmail}
    isNextDisabled={isNextDisabled}
    />}
    {currentStep === 1 && <StepReview onBack={backStep} onNext={nextStep} email={email} name={name}/>}
    {currentStep === 2 && <StepSubmit onSubmit={submit} />}
</div>

}
