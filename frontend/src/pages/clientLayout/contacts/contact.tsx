import React from 'react'

type Props = {}

const contact = (props: Props) => {
    return (
   <>
   <section className='contact' id='contact'>
        <h1 className='heading'> <span>contact</span> me </h1>
        <form action="">
            <input type="text" placeholder="your name" className="box"/>
            <input type="email" placeholder="your name" className="box"/>
            <input type="text" placeholder="your name" className="box"/>
            <textarea name="" className="box" placeholder="your message" id='' cols={30} rows={10}></textarea>
            <input type="submit" value="send message" className="btn"/>
        </form>
   </section>
   
<div className="credits"> By <span>mr. Ngo Van Vu</span> | Ph21089 </div>
   </>
)
}

  export default contact