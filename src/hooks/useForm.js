import { useState } from "react"

const useForm = (initialValues, ) => {
    const [formValues, setFormValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const handleReset = () => {
        setFormValues(initialValues)
        setErrors({})
    }

    return {
        formValues,
        setFormValues,
        errors,
        setErrors,
        handleInputChange,
        handleReset,
    }
}

export default useForm