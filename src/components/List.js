import React from 'react';

// style
import '../styles/List.scss'

// motion
import { motion, AnimatePresence } from 'framer-motion';

const List = ({ item, todo, setTodo }) => {

    const removeHandler = () => {
        // hameye list ro be gheir az oni ke rosh click shode bar migardone mirize to (newTodo)
        const newTodo = todo.filter(items => items.id !== item.id);
        setTodo([...newTodo]);
    };

    const completeHandler = () => {
        // complete
        setTodo(todo.map(comp => {
            if (comp.id === item.id) {
                return {
                    ...comp, completed: !comp.completed
                }
            };
            return comp;
        })
        );
    };

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.li className={`list ${item.completed ? 'done' : ''}`}
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 1 }}
                exit={{ x: '-100vw', transition: { duration: 2 } }}
                key='list'
            >

                <p>{item.work}</p>

                <div>
                    <button onClick={removeHandler} >
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <button onClick={completeHandler} >
                        <i className="fa-solid fa-circle-check"></i>
                    </button>
                </div>
            </motion.li>
        </AnimatePresence>
    );
};

export default List;