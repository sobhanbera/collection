import {NextApiRequest, NextApiResponse} from 'next'

export default function Test(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({test: true})
}
