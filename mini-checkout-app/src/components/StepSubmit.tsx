type StepSubmitProps = {
    onSubmit: () => void
}

export function StepSubmit({onSubmit}: StepSubmitProps) {
    return <>
<button onClick={onSubmit}>Submit</button>

    </>
}