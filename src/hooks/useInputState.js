import { useState } from "react";

function useInputState(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleValue = e => setValue(e.target.value);

    const resetValue = () => setValue("");

    return [value, handleValue, resetValue];
}

export default useInputState;