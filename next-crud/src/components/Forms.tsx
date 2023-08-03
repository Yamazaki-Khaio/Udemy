import { useState } from "react";
import Cliente from "@/core/Cliente";
import Input from "./Input";
import Button from "./Button";
interface FormProps {
    cliente: Cliente
    clienteChanged?: (cliente: Cliente) => void
    clear: () => void

}


export default function Forms(props: FormProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Input text="Código" value={id} readOnly className="mb-2" />
            ) : false}
            <Input text="Nome" value={nome} onChange={setNome} className="mb-2" />
            <Input text="Idade" value={idade} onChange={setIdade} type="number" className="mb-2" />
            <div className="flex justify-end mt-7">
                <Button color="blue" className="mr-2" onClick={() => props.clienteChanged?.(new Cliente(id, nome, +idade))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={() => props.clear()}>
                    Voltar
                </Button>
                
            </div>

        </div>


    )
}
