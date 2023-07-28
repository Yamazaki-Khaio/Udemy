import Layout from "../../components/Layout";
import { useEffect } from 'react'
import router from "next/router";
import { useRouter } from "next/router";

export default function Codigo() {
    const router = useRouter()
    useEffect(() => {
        
    }, [])

    return (    
        <Layout titulo="Navegação dinamica">
            <span>Código = {router.query.codigo} </span>
        </Layout>


    )
}