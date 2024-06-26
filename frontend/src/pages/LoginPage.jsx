import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post('http://localhost:3000/user/login', data)
      .then((res) => {
        const resCode = res.data.status;
        const token = res.data.token;
        console.log(res.data.token);

        if (token) {
          localStorage.setItem('token', token);
          navigate('/');
          
        } else if (!token || resCode === 422) {
          setError('Invalid email or password');
        }
      })
      .catch((err) => {
        console.log(err.response);
        setError('An error occurred');
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

          <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
          
          <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                placeholder="Enter your email"
              />
            </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>

          </div>
        </form>
      </div>
            //TODO - adicionar botão para ir para página de registro
    </>
  );
}
