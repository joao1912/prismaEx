import { PrismaClient } from "@prisma/client";

const newUsuario = {
    name: "joao pedro 2",
    fullName: "joao pedro silva teixeira 2",
    cpf: "333.857.999-39 2",
    address: "rua do santos carlos 2"
}

const id = "a359ae84-a7ad-4661-9ea3-eb217b43571b"


const prisma = new PrismaClient()

class Edit {
    async execute() {

        const result = await prisma.cliente.update({
            where: {
                id: id
            },
            data: {
                name: newUsuario.name,
                full_name: newUsuario.fullName,
                cpf: newUsuario.cpf,
                address: newUsuario.address
            }
        })

        console.log(result)
    }
}

const edit = new Edit()
edit.execute()