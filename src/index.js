import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const Person = ({img,name,job,children}) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  
    return (
        <article className="person">
            <img src={url}
             alt="person"/>
             <h4>{name}</h4>
             <h4>{job}</h4>
             {children}
        </article>
    )
}


const PersonList = () => {
    return(
        <section className="person-list"><  Person img="34" name="milan" job="developer" />
         <Person img="22" name="luka" job="programmer">
             <p>Lorem ispum dolor sit amet consectetur, adipisicing elit. 
                 Asperiores, tempore!</p>
         </Person>
         <Person img="24" name="dzaja" job="chef" />
        </section>
    )
}

ReactDOM.render(<PersonList></PersonList>, document.getElementById('root'))