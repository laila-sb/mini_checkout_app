type StepReviewProps = {
  onBack: () => void;
  email: string;
  name: string;
  address: string;
  onNext: () => void;
};

export function StepReview({
  onBack,
  email,
  name,
  address,
  onNext,
}: StepReviewProps) {
  return (
    <>
    <h2>Review Your Details</h2>

      <p>Name: {name} </p>
      <p>Email: {email} </p>
      <p>Address: {address} </p>
      <button type="button" onClick={onBack}>Back</button>
      <button onClick={onNext}>Continue</button>
    </>
  );
}
