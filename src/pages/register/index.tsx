import Input from "../../components/input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object({
  email: yup
    .string()
    .email('Digite um email válido')
    .required('Campo obrigatório'),
    password: yup
    .string()
    .required('Campo obrigatório')
    .min(6, 'Senha deve conter no mínimo 6 caracteres'),
    passwordConfirmation: yup
    .string()
    .required('Campo obrigatório')
    .oneOf([yup.ref('password')], 'Senhas não coincidem')
}).required();

type FormData = yup.InferType<typeof schema>;

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  console.log(errors.email?.message)

  const onSubmit = (data: FormData) => console.log(data);
  
  return (
    <div className="w-full min-h-screen flex bg-wave-haikei bg-no-repeat bg-cover">
      <div className="py-10 px-6 m-auto w-[480px] bg-white rounded-xl shadow-sm flex flex-col gap-10" >
        <div className="text-2xl font-bold text-gray-800">Cadastro</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 mb-10">
              <Input 
                label="Email" 
                name="email"
                placeholder="email@email.com"
                type="text"
                register={register}
                errors={errors.email?.message}
              />
              <Input 
                label="Senha"
                name="password" 
                placeholder="******"
                type="password"
                register={register}
                errors={errors.password?.message}
              />
              <Input 
                label="Confirmar Senha"
                name="passwordConfirmation" 
                placeholder="******"
                type="password"
                register={register}
                errors={errors.passwordConfirmation?.message}
              />
              {/* <div className="flex align-middle">
                <Input 
                  name="terms" 
                  type="checkbox"
                  register={register}
                  errors={errors.terms?.message}
                /> <p className="text-sm text-gray-500">&nbsp;Eu concordo com os Termos e Privacidade</p>
              </div> */}
            </div>

            <div className="flex flex-col items-center gap-8">
              <button 
                className="font-medium text-white py-4 w-full bg-green-400 rounded-md hover:bg-green-500"
                type="submit"
              >
                Criar conta
              </button>
              
              <p className="text-sm text-gray-500">já tem uma conta? <span className="text-green-400">Entrar</span></p>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Register;