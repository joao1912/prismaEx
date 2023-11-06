import { PrismaClient } from "@prisma/client";

const usuario = {
    name: "joao pedro",
    fullName: "joao pedro silva teixeira",
    cpf: "333.857.999-39",
    address: "rua do santos carlos"
}


const prisma = new PrismaClient()

class Create {
    async execute() {

        const result = await prisma.cliente.create({
            data: {
                name: usuario.name,
                full_name: usuario.fullName,
                cpf: usuario.cpf,
                address: usuario.address
            }
        })

        console.log(result)
    }
}

const create = new Create()
create.execute()