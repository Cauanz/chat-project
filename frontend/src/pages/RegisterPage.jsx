import { v4 as uuidv4 } from "uuid";

export default function RegisterPage() {
  // ! - FUNÇÃO DE ENVIO DE FORMULARIO DE EXEMPLO DO TEMPLATE, USE ESSE OU CRIE O SEU
    
  

  const handleSubmit = (event) => {
      event.preventDefault();
      const data = {
        name: event.target.email.value,
        password: event.target.password.value
      };
      /* console.log(data.id, data.nome, data.senha); */ // * PARA PROPOSITOS DE DEBUG
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
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
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
