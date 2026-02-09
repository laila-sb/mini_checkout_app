type StepDetailsProps = {
    name: string;
    onNameChange: (value:string) => void;
    email: string,
    onEmailChange: (value:string) => void;
    onNext: () => void; // this is setting the type for this prop that is taking in no arguments and returning nothing (void) 
    isNextDisabled: boolean;
} 

export function StepDetails({ 
    name,
    onNameChange,
    email,
    onEmailChange,
    onNext,
    isNextDisabled
 }: StepDetailsProps) {

    const handleChange = (handler: (value:string) => void) => 
        (e: React.ChangeEvent<HTMLInputElement>) =>
        handler(e.target.value)

    return <>
        <input
        value={name}
        placeholder="name"
        onChange={handleChange(onNameChange)}>
        </input>

        <input 
        value={email} 
        placeholder="email"
        onChange = {handleChange(onEmailChange)} 
        />
        <button onClick={onNext} disabled={isNextDisabled}> Next </button> 
        </>
}
