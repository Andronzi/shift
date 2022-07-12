import { FormEvent, useState } from 'react';
import isValid from '@utils/helpers/dateValidation.helper';
import Input from '@components/Input/Input';
import './form.scss';

export default function Form() {
    const [dateValue, setDateValue]: [string, Function] = useState(null);
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(isValid(dateValue));
    }

    return (
        <form onSubmit={(event: FormEvent) => handleSubmit(event)}>
            <Input func={setDateValue} className="dateInput" type="date" required={true} />
            <input value="отправить" type="submit"/>
        </form>
    )
}