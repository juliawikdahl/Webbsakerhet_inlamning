import React from 'react'
import { useState } from 'react'
import BlogEntity from '../Classes/BlogEntity';

const Create = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const CreateMessage = async e => {


      const post = {
        title: title,
        message: message,
      }
      const res = await fetch('https://localhost:7282/api/blogpost', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json' 
        }
      
    })
    }   
       
  return (
    <div className='form'>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="title-input form-label">Title:</label>
  <input type="title" className="form-control" id="exampleFormControlInput1" value={title} name='title' onChange={e => setTitle(e.target.value)}  ></input>
</div>
<div className="mb-3">
  <label  htmlFor="exampleFormControlTextarea1" className="textarea-input form-label">Message:</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={e => setMessage(e.target.value)}></textarea>
</div>
<button className='button' onClick={()=> CreateMessage()}>Create</button>
    </div>
  )
}

export default Create