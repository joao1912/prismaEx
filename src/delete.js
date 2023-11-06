import { PrismaClient } from "@prisma/client";

const id = "a359ae84-a7ad-4661-9ea3-eb217b43571b"

const prisma = new PrismaClient()

class Delete {
    async execute() {

        

        try {
            await prisma.cliente.delete({
                where: {
                    id: id
                }
            })

            console.log("deletado")
        } catch (error) {
            console.log("erro")
        }
    }
}

const delete_ = new Delete()
delete_.execute()