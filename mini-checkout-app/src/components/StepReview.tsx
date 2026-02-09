type StepReviewProps = {
    onBack: () => void;
    email: string;
    name:string;
    onNext: () => void;

} 

export function StepReview({ onBack, email, name, onNext}: StepReviewProps ){
 return <>
  <p>Name: {name} </p>
 <p>Email: {email} </p>
<button onClick={onBack}>Back</button>
<button onClick={onNext}>Continue</button>
</>
}