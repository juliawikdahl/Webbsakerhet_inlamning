import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client';


export const Allblogs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMessages();
  }, []);

  function getMessages() {
    fetch('https://localhost:7282/api/blogpost')
    .then((response) => response.json())
    .then((jsonResponse) => setData([...jsonResponse.reverse()]));
  }


  return (
    <div className='mb-3'>
<div id="test"></div>

        {data.map((item) =>
<div className='border'>
  <div>
  <label dangerouslySetInnerHTML={{__html: item.title}} className='title'></label>
  </div>
  <div>
  <label dangerouslySetInnerHTML={{__html: item.message}} className='message'></label>
  </div>
</div>

)}
</div>
)}

export default Allblogs

