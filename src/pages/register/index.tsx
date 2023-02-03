import Input from "../../components/input";

function Cadastro() {
  return (
    <div className="w-full min-h-screen flex bg-wave-haikei bg-no-repeat bg-cover">
      <div className="py-10 px-6 m-auto w-[480px] bg-white rounded-xl shadow-sm flex flex-col gap-10" >
        <div className="text-2xl font-bold text-gray-800">Cadastro</div>
        <div className="flex flex-col gap-5">
          <Input 
            label="Email" 
            placeholder="email@email.com"
            type="text"
          />
          <Input 
            label="Senha" 
            placeholder="******"
            type="password"
          />
          <Input 
            label="Confirmar Senha" 
            placeholder="******"
            type="password"
          />
          <div className="flex flex-row text-xs font-medium text-gray-800">
            <Input
                label=""
                placeholder=""
                type="checkbox"
            />
            <p>Eu concordo com os Termos e Privacidade</p>
          </div>
          
        </div>
        <div className="flex flex-col items-center gap-8">
          <button className="font-medium text-white py-4 w-full bg-green-400 rounded-md hover:bg-green-500">Criar Conta</button>
          <p className="text-sm text-gray-500">Já tem uma conta? <span className="text-green-400">Faça login</span></p>
        </div>
      </div>
    </div>
  )
}

export default Cadastro;