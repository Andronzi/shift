import '../scss/form.scss';

export default function Form() {
    return (
        <div>
            <form onSubmit={() => {}}>
                <label>
                    <span>
                        Имя получателя
                    </span>
                    <input type="text" />
                </label>
                <label>
                    <span>
                        Фамилия получателя
                    </span>
                    <input type="text" />
                </label>
                <label>
                    <span>
                        Отчество получателя
                    </span>
                    <input type="text" />
                </label>
                <label>
                    <span>
                        Дата рождения получателя
                    </span>
                    <input type="date" />
                </label>
                <button type='submit'>
                    Отправить
                </button>
            </form>
        </div>
    )
}