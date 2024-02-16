import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  // ! - FUNÇÃO DE ENVIO DE FORMULARIO DE EXEMPLO DO TEMPLATE, USE ESSE OU CRIE O SEU

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.value,
      password: e.target.value,
    };

    axios.post('http://localhost:3000/user/login').then((res) => {
      //! ROTA NÃO FUNCIONANDO, CONCERTAR
      let resCode = res.status;
      console.log(resCode);

      if (resCode === 200) {
        navigate('/');
      }
    });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
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
    </>
  );
}
