import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input from "../../components/input";
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object({
  name: yup
    .string()
    .email('Digite um email válido')
    .required('Campo obrigatório')
}).required();

type FormData = yup.InferType<typeof schema>;

export const CreateInstitution: FC = (): ReactElement => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });


  const onSubmit = (data: FormData) => console.log(data);

  return (
<div className="w-full min-h-screen flex bg-wave-haikei bg-no-repeat bg-cover">
      <div className="py-10 px-6 m-auto w-[480px] bg-white rounded-xl shadow-sm flex flex-col gap-10" >
        <div className="text-2xl font-bold text-gray-800">Criar instituição</div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 mb-10">
              <Input 
                label="Nome" 
                name="name"
                placeholder="Instituto Federal do Norte de Minas Gerais"
                type="text"
              />
            </div>

              <button 
                className="font-medium text-white py-4 w-full bg-green-400 rounded-md hover:bg-green-500"
                type="submit"
              >
                Criar
              </button>

          </form>
      </div>
    </div>
  )
}