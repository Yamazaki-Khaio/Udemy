import Button from "@/components/Button"
import Forms from "@/components/Forms"
import Layout from "@/components/Layout"
import Tabela from "@/components/Tables"
import useClientes from "@/hooks/useClientes"

export default function Home() {

    const { clientes, clientSelected, clientDelete, newClient, cliente, saveClient, showForm, showTable, TableData, FormData } = useClientes()

   

    return (
        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white
        `}>
            <Layout titulo="Cadastro Simples">
                {TableData ? (
                    <>
                        <div className="flex justify-end">
                            <Button color="green" className="mb-4" onClick={newClient}>Novo Cliente</Button>
                        </div>
                        <Tabela clientes={clientes} clientSelect={clientSelected} clientDelete={clientDelete} />
                    </>

                ) : (
                    <Forms cliente={cliente}
                        clienteChanged={saveClient}
                        clear={showTable} />
                )}
            </Layout>
        </div>
    )
}
