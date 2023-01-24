import Input from "../input";

function Login() {
  return (
    <div className="w-full min-h-screen flex bg-wave-haikei bg-no-repeat bg-cover">
      <div className="py-10 px-6 m-auto w-[480px] bg-white rounded-xl shadow-sm flex flex-col gap-10" >
        <div className="text-2xl font-bold text-gray-800">Login</div>
        <div className="flex flex-col gap-5">
          <Input 
            label="Email" 
            placeholder="email@email.com"
          />
          <Input 
            label="Senha" 
            placeholder="Senha"
          />
        </div>
        <div className="flex flex-col items-center gap-8">
          <button className="font-medium text-white py-4 w-full bg-green-400 rounded-md hover:bg-green-500">Entrar</button>
          <p className="text-sm text-gray-500">Não tem uma conta? <span className="text-green-400">Crie uma nova</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login;