
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default async function handler(req, res) {

    if (req.method == 'GET') {
        const notes = await prisma.notes.findMany();
        return res.status(200).json(notes)
    }

    if (req.method == 'POST') {
        console.log(req.body)
        try{
            await prisma.notes.create({ data: req.body })
            return res.status(200).json({ status: "ok" })
        }catch(e){
            return res.status(500).json({ status: e })
        }
      
    }

    return res.status(500)
}
