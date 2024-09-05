import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet";

import './Status.css';

export function Status() {

    const [newAnswer, setNewAnswer] = useState('');
    const [answers, setAnswers] = useState([
        'Concordo...',
        'Olha, faz sentido',
        'Parabens pelo progresso.'
    ]);

    function createNewAnswer(event: FormEvent) {
        event.preventDefault()
        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
    };

    function handleHotkeySubmit(event: KeyboardEvent){
        if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
            setAnswers([newAnswer, ...answers])
            setNewAnswer('')
        }
    }

    return (
        <main className="status">

            <Header title='Tweet' />

            <Tweet content="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga nesciunt facilis vitae deserunt quod praesentium omnis velit voluptatibus expedita possimus odit esse vero consequatur tempore suscipit, explicabo libero pariatur!" />

            <Separator />

            <form onSubmit={createNewAnswer} className='answer-tweet-form'>
                <label htmlFor="tweet">
                    <img src="https://github.com/CarolinaRibeiro790.png" alt="Foto Ana Carolina" />
                    <textarea
                        id="tweet"
                        placeholder="Tweet your answer"
                        value={newAnswer}
                        onKeyDown={handleHotkeySubmit}
                        onChange={(event) => { setNewAnswer(event.target.value) }} />
                </label>
                <button type='submit'>Answer</button>
            </form>

            {answers.map(answer => {
                return <Tweet key={answer} content={answer} />
            })}

        </main>
    )
}