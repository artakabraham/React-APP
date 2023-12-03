import { FormEvent } from "react";

const Form = () => {
    
    const handleSubmit = (event : FormEvent) => {
        event?.preventDefault();
                console.log('submit');
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name' className='form-label'>Name</label>
                <input id='name' type='text' className='form-control' />
            </div>
            <div>
                <label htmlFor='age' className='form-label'>Age</label>
                <input id='age' type='number' className='form-control' />
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
    )
}

export default Form;