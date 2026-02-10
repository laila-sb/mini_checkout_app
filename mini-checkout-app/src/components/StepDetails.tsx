type StepDetailsProps = {
  name: string;
  onNameChange: (value: string) => void;
  email: string;
  onEmailChange: (value: string) => void;
  onNext: () => void; // this is setting the type for this prop that is taking in no arguments and returning nothing (void)
  isNextDisabled: boolean;
  address: string;
  onAddressChange: (value: string) => void;
};

export function StepDetails({
  name,
  onNameChange,
  email,
  address,
  onAddressChange,
  onEmailChange,
  onNext,
  isNextDisabled,
}: StepDetailsProps) {
  const handleChange =
    (handler: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      handler(e.target.value);

  return (
    <>
      <div>
        name:{" "}
        <input
          value={name}
          placeholder="name"
          onChange={handleChange(onNameChange)}
        />
      </div>
      <div>
        <label>
          Email:{" "}
          <input
            value={email}
            placeholder="email"
            onChange={handleChange(onEmailChange)}
          />
        </label>
      </div>
      <div>
        <label>
          Address:{" "}
          <input value={address} onChange={handleChange(onAddressChange)} />
        </label>
      </div>

      <button onClick={onNext} disabled={isNextDisabled}>
        {" "}
        Next{" "}
      </button>
    </>
  );
}
