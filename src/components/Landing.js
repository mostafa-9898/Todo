import React, { useEffect, useState } from 'react';

// style
import Styles from '../styles/Landing.module.scss'

// motion
import { motion } from 'framer-motion';

// Component
import AddTask from './AddTask';
import List from './List';

const Landing = () => {

    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);
    const [error, setError] = useState('');
    const [status, setStatus] = useState('all')
    const [cloneTodo, setCloneTodo] = useState([]);
    const [lengthNum, setLengthNu] = useState(0)

    const cloneList = () => {
        switch (status) {
            case 'completed':
                setCloneTodo(todo.filter(item => item.completed === true));
                break;

            case 'uncompleted':
                setCloneTodo(todo.filter(item => item.completed === false));
                break;

            default:
                setCloneTodo(todo);
                break;
        }
    }

    const numberOf = todo.filter(item => item.completed === false);


    useEffect(() => {
        cloneList();
        setLengthNu(numberOf.length)
    }, [todo, status])

    return (
        <div className={Styles.Container} >
            <motion.div
                className={Styles.header}
                initial={{ y: -500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}
            >
                <h1>Todo List</h1>
                <span>Tasks : {lengthNum}</span>
            </motion.div>

            <AddTask
                text={text} setText={setText}
                todo={todo} setTodo={setTodo}
                error={error} setError={setError}
                setStatus={setStatus}
            />
            {
                cloneTodo.length ?
                    <ul className={Styles.ulList}>
                        {cloneTodo.map(item => <List key={item.id} item={item} todo={todo} setTodo={setTodo} />)}
                    </ul>
                    : <motion.div
                        className={Styles.empty}
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}
                        transition={{ duration: .7, type: 'spring' }}
                    >
                        <p>The list is empty</p>
                    </motion.div>
            }




        </div>
    );
};

export default Landing;