import { FormEvent, useState } from 'react';
import axios from 'axios';
import isValid from '@utils/helpers/dateValidation.helper';
import Input from '@components/Input/Input';
import './form.scss';

export default function Form() {
    const [dateValue, setDateValue]: [string, Function] = useState(null);
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        
        if (isValid(dateValue)) {
            axios.post("https://shift-summer-2022-backend.herokuapp.com/api/create/order/", {
                order: {
                    date: dateValue
                }
            })
        }
    }

    return (
        <form onSubmit={(event: FormEvent) => handleSubmit(event)}>
            <Input func={setDateValue} className="dateInput" type="date" required={true} />
            <input value="отправить" type="submit"/>
        </form>
    )
}