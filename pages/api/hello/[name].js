import { useRouter } from 'next/router'

export default (req, res) => {
    const { query: { name: name } } = req;
    // const router = useRouter();
    // const { name } = router.query
    res.statusCode = 200
    res.json({ name: name })
}