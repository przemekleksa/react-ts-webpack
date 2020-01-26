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
            // addTodo(value)
            getText(value)
            setValue('')
        }
        const getText = (text: string) =>{
            const data = document.querySelector('.edit')
            text = data.innerHTML
            const newTodos: ITodo[] = [ ...todos, {text, complete: false}]
            setTodos(newTodos)
        }
        console.log(todos)
        
    return (
        <Fragment>
            <div className="container">
            <h1>Todo list</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group todo-form">
                    <div contentEditable={true} className='form-control edit' ></div>
                    <button type="submit" className="btn btn-primary">Add Todo</button>
                </div>
            </form>
            <section className="todo-list">
                {todos.map((todo: ITodo, index: number) => {
                   let text = todo.text.replace(/<div>/gi, '!@#<div>!@#').replace(/<\/div>/gi, '!@#</div>!@#').split('!@#') 
                   console.log(text, 'text')
                   return text.forEach(item =>{
                        let newItem = item.replace(/<b>/gi, '!@#<b>!@#').replace(/<\/b>/gi, '!@#</b>!@#').split('!@#')
                        newItem.filter(el =>{
                            return el != ""
                        })
                        console.log(newItem, 'newItem')
                        let html = `<div key=${index}>`
                        for(let i = 0; i < newItem.length; i++){
                            if(newItem[i] == '<b>'){
                                html += `<b>${newItem[i+1]}</b>`
                                i += 2
                            }  else if (newItem[i] != '<b>' || newItem[i] != '</b>'){
                                html +=`${newItem[i]}`
                            }
                        }
                        html += `</div>`
                        console.log(html, 'html')
                        document.querySelector('.todo-list').innerHTML += html
                        html =''
                   })
                }
                )}
               
              
                
            </section>
           
                

            </div>
           
        </Fragment>
        
    )
}

const root = document.getElementById('app-root')

ReactDOM.render(<App />, root)