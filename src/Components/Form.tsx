import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import '../scss/form.scss';

type Inputs = {
    firstName: string,
    lastName: string,
    paterName: string,
    bornDate: Date 
}

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    const date = new Date();
    const dateData = [(date.getFullYear() - 18).toString()[3], date.getMonth() + 1, date.getDay()];

    let regex = new RegExp(`^(19[0-9]{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])|(200[0-${dateData[0]}]-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])))`, 'i');

    return (
        <><form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <span>
                    Имя получателя
                </span>
                <input {...register("firstName", { required: true, min: 2, max: 30 })} />
            </label>
            <label>
                <span>
                    Фамилия получателя
                </span>
                <input  {...register("lastName", { required: true, min: 2, max: 30 })} />
            </label>
            <label>
                <span>
                    Отчество получателя
                </span>
                <input {...register("paterName", { min: 2, max: 30 })} />
            </label>
            <label>
                <span>
                    Дата рождения получателя
                </span>
                <input type="date" {...register("bornDate", { pattern: regex })} />
            </label>
            <input value="отправить" type="submit" />
        </form></>
    )
}