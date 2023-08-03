export default interface ClienteRepository {
    create(cliente: Cliente): Promise<Cliente>;
    update(cliente: Cliente): Promise<Cliente>;
    delete(cliente: Cliente): Promise<void>;
    findAll(): Promise<Cliente[]>;
    findById(id: number): Promise<Cliente>;
}
