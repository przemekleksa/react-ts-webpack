import React, {Fragment, useState} from 'react'
import ReactDOM from 'react-dom'

type FormElem = React.FormEvent<HTMLFormElement>
interface ITodo {
    text: string
    complete: boolean
}

export default function App(): JSX.Element {
        const [value, setValue] = useState<string>('')
        const [todos, setTodos] = useState<ITodo[]>([])

        const handleSubmit = (e:FormElem):void => {
            e.preventDefault()
            addTodo(value)
            setValue('')
        }

        const addTodo = (text:string) => {
            // console.log(text)
            text = text.replace(/\r?\n/g, '<newLine>')
            // text = '<span>'+text+'</span>'
            // document.querySelector('.todo-list div').innerHTML = `<h1> hello </h1>`
            let el = document.createElement('html')
            // el.innerHTML = 
            const newTodos: ITodo[] = [ ...todos, {text, complete: false}]
            
            setTodos(newTodos)
        }
       // console.log(todos)
        
    return (
        <Fragment>
            <div className="container">
            <h1>Todo list</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group todo-form">
                    {/* <input type="text" value={value} onChange={e => setValue(e.target.value)} required /> */}
                    <textarea name="todo" id="" cols="50" rows="3" value={value} onChange={e => setValue(e.target.value)} className="form-control"></textarea>
                    <button type="submit" className="btn btn-primary">Add Todo</button>
                </div>
            </form>
            <section className="todo-list">
                {todos.map((todo: ITodo, index: number) => {
                   let text = todo.text.split('<newLine>')
                   console.log(text)
                //    const temp = document.getElementById(`${index}`)
                   //console.log(todo.text[index])
                //    console.log(temp , index)
                    // let template = `${text.map((item: string) => {
                    //             return item })} `
                    // let template = `<div key=${index} id=${index}> 
                    //         ${text.map((item: string) => {
                    //             return item
                    //         })} </div>`
                            // console.log(template)
                    // return template
                    return <div key={index} id={index}> {text.map((item: string, index: number) => {
                        return <div key={index}>{item}</div> })} </div>
                })}
                
                {/* {todos.map((todo: ITodo, index:any) => {
                    document.getElementById(`${index}`).innerHTML = `<h1>w</h1>`
                })} */}
                
            </section>
            </div>
           
        </Fragment>
        
    )
}

const root = document.getElementById('app-root')

ReactDOM.render(<App />, root)