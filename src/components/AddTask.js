import React from 'react';

// motion
import { motion } from 'framer-motion';

// style
import Styles from '../styles/AddTask.module.scss'

const AddTask = ({ text, setText, todo, setTodo, error, setError, setStatus }) => {


    const changeHandler = event => {
        setText(event.target.value)
        // console.log(text)
    }

    const clickHandler = event => {
        event.preventDefault();
        if (text) {
            setTodo([
                ...todo,
                { id: Math.random(), work: text, completed: false }
            ])
            setText('')
            setError(false)
        } else {
            setError('you should type something !')
            setText('')
            setTimeout(() => setError(false), 4000)
        }
    }

    const statusHandler = event => {

        setStatus(event.target.value)
    }


    return (
        <form onSubmit={event => event.preventDefault()}>
            <motion.div className={Styles.input}
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ duration: .7, type: 'spring' }}
            >
                <input type='text' name='task' placeholder='Add task...'
                    onChange={changeHandler}
                    value={text}
                    autoFocus
                />
                <button onClick={clickHandler} type='submit'>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
            </motion.div>

            <div className={Styles.Container}>
                <motion.div
                    className={Styles.selectContainer}
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ duration: .7, type: 'spring' }}>
                    <select onChange={statusHandler} className={Styles.select}>
                        <option value='all' >All</option>
                        <option value='completed' >Completed</option>
                        <option value='uncompleted' >Uncompleted</option>
                    </select>
                </motion.div>

                {error &&
                    <motion.p
                        className={Styles.errormsg}
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ duration: .7, type: 'spring' }}
                    >{error}</motion.p>}
            </div>
        </form>
    );
};

export default AddTask;