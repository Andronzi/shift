import { useForm, SubmitHandler } from 'react-hook-form';
import { validateDate } from '../utils/helpers/validation.helper';
import './form.scss';

type Inputs = {
    firstName: string,
    lastName: string,
    paterName: string,
    bornDate: Date 
}

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    const dateValue: Date = watch("bornDate");

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="special" placeholder='Имя получателя' {...register("firstName", { required: true, min: 2, max: 30 })} />
                <input placeholder='Фамилия получателя'  {...register("lastName", { required: true, min: 2, max: 30 })} />
                <input placeholder='Отчество получателя' {...register("paterName", { min: 2, max: 30 })} />
                <input placeholder='Дата рождения получателя' type="date" {...register("bornDate", { pattern: validateDate(dateValue) })} />
                <input value="отправить" type="submit" />
            </form>
        </div>
    )
}