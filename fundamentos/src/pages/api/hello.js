export default function handler(req, res) {
    res.status(200).json({ 
        name: 'Hello World',
        metodo: req.method, 
        nome: req.query.nome,
        idade: req.query.idade
    })
       

    
}