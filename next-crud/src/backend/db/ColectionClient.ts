import Cliente from "../../core/Cliente";
import ClienteRepository from "../../core/ClienteRepository";
import firebase from "../config";

export default class ColectionClient implements ClienteRepository {
    private convertion = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options);
            return new Cliente(snapshot.id, dados.nome, dados.idade);
        }
    }

    async create(cliente: Cliente): Promise<Cliente> {
        if (cliente?.id) {
            await this.colection().doc(cliente.id).set(cliente);
            return cliente;
        } else {
            const docRef = await this.colection().add(cliente);
            const doc = await docRef.get();
            return doc.data();
        }
    }

    async update(cliente: Cliente): Promise<Cliente> {
        const docRef = await this.colection().doc(cliente.id).set(cliente);
        const doc = await docRef.get();
        return doc.data();
    }

    async delete(cliente: Cliente): Promise<void> {
        return this.colection().doc(cliente.id).delete();
    }

    async findAll(): Promise<Cliente[]> {
        const query = await this.colection().get();
        return query.docs.map(doc => doc.data()) ?? [];
    }

    async findById(id: number): Promise<Cliente> {
        const doc = await this.colection().doc(id).get();
        return doc.data();
    }

    private colection() {
        return firebase.firestore().collection('clientes').withConverter(this.convertion);
    }


}
