import { useRouter } from "next/router"

const User = () => {
    const router = useRouter()
    const { name } = router.query
    return <p>name: {name}</p>
}

export default User