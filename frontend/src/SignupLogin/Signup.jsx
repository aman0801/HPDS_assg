import './Signup.css'
import Button from 'react-bootstrap/Button'
import { useSignup } from '../hooks/useSignup';

export default function SignUp() {
    const {signup,isPending,error}=useSignup();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const voterId=e.target.voterId.value;
        const metamaskId=e.target.metamaskId.value;
        signup(email,password,name,voterId,metamaskId);
    }    
    return (
        <div className="signup">
        <h2>SignUp</h2>
        <form onSubmit={(e)=>{handleSubmit(e)}} className='form'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" required/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Min. 8 digit" required/>
            <label htmlFor="voterId">phone number</label>
            <input type="text" name="voterId" placeholder="Enter your phone number" required/>
            <label htmlFor="metamaskId">age</label>
            <input type="text" name="metamaskId" placeholder="Enter your age" required/>
            {!isPending&&<Button type="submit" variant='dark' size='lg'>SignUp</Button>}
            {isPending&&<Button type="submit" variant='dark' size='lg' disabled>Loading</Button>}
        </form>    
        </div>
    )
}