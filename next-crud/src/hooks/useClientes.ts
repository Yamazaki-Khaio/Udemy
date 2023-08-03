import ColectionClient from "@/backend/db/ColectionClient"
import Cliente from "@/core/Cliente"
import ClienteRepository from "@/core/ClienteRepository"
import { useEffect, useState } from "react"
import useTableOrForms from "./useTableOrForms"

export default function useClientes() {

    const repo: ClienteRepository = new ColectionClient()

    const { showForm, showTable, FormData, TableData } = useTableOrForms()

    
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(findAll, [])  // [] = array de dependencias, se vazio executa uma vez só

    function findAll() {
        repo.findAll().then(clientes => {
            setClientes(clientes)
            showTable()
        }
        )
    }

    function clientSelected(cliente: Cliente) {
        setCliente(cliente)
        showForm()

    }

    async function clientDelete(cliente: Cliente) {
        await repo.delete(cliente)
        findAll()
    }

    async function saveClient(cliente: Cliente) {
        await repo.create(cliente)
        findAll()        
    }

    function newClient() {
        setCliente(Cliente.vazio())
        showForm()
    }

    return {
        saveClient,
        newClient,
        clientDelete,
        clientSelected,
        findAll,
        cliente,
        clientes,
        showTable,
        showForm,
        FormData,
        TableData
    }


}