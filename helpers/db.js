import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('todos.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, content TEXT NOT NULL, date TEXT NOT NULL, isDone INTEGER NOT NULL);',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err)
                }
            )
        });
    })
    return promise;
};

export const insertTodos = (title, content, date, isDone) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO todos (title, content, date, isDone) VALUES (?, ?, ?, ?)',
                [title, content, date, isDone],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err)
                }
            )
        });
    })
    return promise;
};

export const fetchTodos = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM todos',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err)
                }
            )
        });
    })
    return promise;
}

export const deleteTodo = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `DELETE FROM todos WHERE id = ${id}`,
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err)
                }
            )
        });
    })
    return promise;
}

export const updateTodo = (id, title, content, date, isDone) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `UPDATE todos SET title="${title}", content="${content}", date="${date}", isDone="${isDone}" WHERE id=${id}`,
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err)
                }
            )
        });
    })
    return promise;
}