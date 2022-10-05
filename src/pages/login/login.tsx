import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
  
  const { register } = useForm<FormValues>()

  type FormValues = {
    firstName: string,
    email: string,
    phone: number,
    gender: any
  }

  return (
    <form>
      <label htmlFor="firstName">First Name</label>
      <input type="text" />

      <label htmlFor="email">Email</label>
      <input type="email" />

      <label htmlFor="phone">Phone Number</label>
      <input type="number" />

      <label htmlFor="gender"></label>
      <input type="text" />

      <input type="submit" value="submit"/>
    </form>
  )
}

export default Login