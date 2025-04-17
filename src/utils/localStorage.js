const STORE_KEY = "todos";

export const saveTodos = (todos) => {
    localStorage.setItem(STORE_KEY,JSON.stringify(todos))
};

export const loadTodos = () => {
    const data = localStorage.getItem(STORE_KEY)
    return data ? JSON.parse(data) : []
}