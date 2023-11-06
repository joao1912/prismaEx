import { PrismaClient } from "@prisma/client";

const id = "a359ae84-a7ad-4661-9ea3-eb217b43571b"

const prisma = new PrismaClient()

class View {
    async execute() {

        const result = await prisma.cliente.findUnique({
            where: {
                id: id
            }
        })

        console.log(result)
    }
}


const view = new View()
view.execute()