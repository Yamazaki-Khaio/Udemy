export default function cliente(req, res) {
    if(req.method === 'GET') {
        handleGet(req, res)
    } else {
        res.status(405).send()
    }




    res.status(200).json({ 
        id: 3,
        name: 'Ana',
        email: 'ana@teste.com'
    })

}
