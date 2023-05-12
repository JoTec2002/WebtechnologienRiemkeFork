
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default async function handler(req, res) {

    if (req.method == 'GET') {
        const notes = await prisma.notes.findMany();
        return res.status(200).json(notes)
    }

    if (req.method == 'POST') {
        //console.log(req.body)
        try {
            const dbResult = await prisma.notes.create({ data: JSON.parse(req.body) })
            return res.status(200).json({ id: dbResult.id })
        } catch (e) {
            console.log(e)
            return res.status(500).json({ id: 0})
        }

    }

    return res.status(500)
}
