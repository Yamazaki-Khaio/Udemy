import { useState } from "react";

export default function useTableOrForms() {
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    function showTable() {
        setVisible('table')
    }

    function showForm() {
        setVisible('form')
    }



    return {
        FormData: visible === 'form',
        TableData: visible === 'table',
        showTable,
        showForm
    }
}
