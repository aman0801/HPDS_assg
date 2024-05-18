import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import './Login.css';
export default function Login() {
    const { login, isPending, error } = useLogin();
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await login(email, password); // Wait for login function to complete
            navigate('/course'); // Navigate to '/course' after successful login
        } catch (error) {
            // Handle login error
            console.error('Login error:', error);
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email" required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password" required/>
                <Button type="submit" variant='dark' size='lg'>Login</Button>
            </form>
        </div>
    );
}
