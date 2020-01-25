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

        // const addTodo = (text:string) => {
        //     text = text.replace(/\r?\n/g, '<newLine>')
        //     const newTodos: ITodo[] = [ ...todos, {text, complete: false}]
        //     setTodos(newTodos)
        // }
       // console.log(todos)
        const getText = (text: string) =>{
            const data = document.querySelector('.edit')
            // console.log(data)
            // data.innerHTML = `<ul><li>${text}</li></ul>`
            text = data.innerHTML
            const newTodos: ITodo[] = [ ...todos, {text, complete: false}]
            setTodos(newTodos)
            // console.log(text)
        }
        console.log(todos)
        
    return (
        <Fragment>
            <div className="container">
            <h1>Todo list</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group todo-form">
                    {/* <input type="text" value={value} onChange={e => setValue(e.target.value)} required /> */}
                    {/* <textarea name="todo" id="" cols="50" rows="3" value={value} onChange={e => setValue(e.target.value)} className="form-control"></textarea> */}
                    <div contentEditable={true} className='form-control edit' ></div>
                    <button type="submit" className="btn btn-primary">Add Todo</button>
                </div>
            </form>
            <section className="todo-list">
                {todos.map((todo: ITodo, index: number) => {
                //    let text = todo.text.split('<newLine>')
                // let text = todo.text
                    // return <div key={index}></div> 
                    
                   let text = todo.text.replace(/<div>/gi, '!@#').replace(/<\/div>/gi, '!@#').split('!@#') 
                   return text.map(item =>{
                    // console.log(item.substring(3,item.length-4))
                    //     let bText = item.substring(3,item.length-4)
                        // console.log(item.indexOf('<b>'))

                        let newItem = item.replace(/<b>/gi, '!@#<b>!@#').replace(/<\/b>/gi, '!@#</b>!@#').split('!@#')
                        console.log(newItem)
                        let html = ''
                        let bText = item.substring(item.indexOf('<b>'), item.length)
                        // console.log(item, 'item')
                        for(let i = 0; i < newItem.length; i++){
                            if(newItem[i] == '<b>'){
                                // return <b>{newItem[i+1]}</b>
                                html += `<b>${newItem[i+1]}</b>`
                                i += 3
                            } else if (newItem[i] != '<b>' || newItem[i] != '</b>'){
                                html +=`${newItem}`
                            }
                            // if(newItem[i] == '</b>'){
                            //     html += ''
                            // }
                            // if(newItem[i] != '<b>' && newItem[i] != '</b>'){
                            //     // return newItem[i]
                            //     html += newItem[i]
                            // }
                            // return <div>{html}</div>
                            
                            // } else if (newItem[i] === '</b>'){
                                
                            // } else
                            // {
                            //     return newItem[i]
                            // }
                        }
                        html = html.replace(',','')
                        console.log(html)
                        document.querySelector('.todo-list').innerHTML += html
                        // if(item.includes('<b>')){
                        //     return <b>{bText}</b>
                        // } else return <div>{item}</div>
                    //    if(item.substring(0,3) === '<b>'){
                    //        return <b>{bText}</b>
                    //    } else return <div>{item}</div>
                    // return item
                   })
                //    console.log(text)
                    // return <div key={index} id={index} className='text'> {text.map((item: string, index: number) => {
                    //         return <div key={index}>{item}</div>
                    //         })}
                    //         </div>
                    
                //    if(text[text.length] == '') {text = text.slice(0, -1)}
                //    return <div key={index}>{text}</div>
                    // return <div key={index} id={index}> {text.map((item: string, index: number) => {
                    //     return <div key={index}>
                    //     {item}
                    //     </div> })} </div>
                    // return <div key={index} id={index}> {text.map((item: string, index: number) => {
                    //     return <div key={index}>{item}</div> })} </div>
                })}
                {
                    
                }
                
            </section>
           
                

            </div>
           
        </Fragment>
        
    )
}

const root = document.getElementById('app-root')

ReactDOM.render(<App />, root)