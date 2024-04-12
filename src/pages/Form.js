import { useState } from "react"

export default function Form() {
    const [form, setForm] = useState({
        firstName: '',
        secondName:'',
        about:'',
      })
      return(
        <form className="control">
            <label htmlFor="firstName">Ваше имя</label>
            <input
                type="text"
                id="firstName"
                className="control"
                value={form.firstName}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, firstName: event.target.value }))
                }
            />
            <label htmlFor="secondName">Ваша фамілія</label>
            <input
                type="text"
                id="secondName"
                className="control"
                value={form.secondName}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, secondName: event.target.value }))
               }
            
            />
            <label htmlFor="about">О вас</label>
            <input
               type="text"
               id=" about"
               className="control"
               value={form.about}
                onChange={(event) =>
               setForm((prev) => ({ ...prev,  about: event.target.value }))
               } 
         />
            <pre>{JSON.stringify(form, null, 2)}</pre>
        </form>
      )
    }