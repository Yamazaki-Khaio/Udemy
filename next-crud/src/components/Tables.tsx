import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icon";

interface TabelaProps {
    clientes: Cliente[]
    clientSelect?: (cliente: Cliente) => void
    clientDelete?: (cliente: Cliente) => void

}

export default function Tabela(props: TabelaProps) {

    const showActions = props.clientDelete || props.clientSelect

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {showActions ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderActions(cliente: Cliente) {
        return (
            <td className="flex">
                {props.clientSelect ? (
                    <button onClick={() => props.clientSelect?.(cliente)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                hover:bg-purple-50
                `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clientDelete ? (
                    <button onClick={() => props.clientDelete?.(cliente)} className={`
                      flex justify-center items-center
                      text-red-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                      `}>
                        {IconeLixo}
                    </button>
                ) : false
                }

            </td>
        )
    }

    function renderData() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {showActions ? renderActions(cliente) : false}
                </tr>
            )
        })


    }
    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>

    )
}