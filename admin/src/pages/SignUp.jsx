import { TextInput, Button, Label, } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export default function SignUp() {
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
    } catch (error) { }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className="font-bold dark:text-white text-4xl">

            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-lg text-white'>Vikash's</span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is demo admin dashboard. You  con sign up with email and password or with google.
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput
                type="text"
                placeholder="username"
                className='w-full'
                id='username'
                name='username'
                required
                onChange={handleChange} />
            </div>

            <div>
              <Label value='Your email' />
              <TextInput
                type="email"
                placeholder='name@company.com'
                className='w-full'
                id='email'
                name='email'
                required
                onChange={handleChange} />
            </div>

            <div>
              <label value='Your password'>Your password</label>
              <TextInput
                type="password"
                placeholder="Password"
                className='w-full'
                id='password'
                name='password'
                required
                onChange={handleChange} />
            </div>

            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign up
            </Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span >
              Already have an account?
              <Link to='/sign-in' className='text-blue-500'>Sign in</Link>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
