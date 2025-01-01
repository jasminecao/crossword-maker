import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  return <p>Route: {router.query.game}</p>
}
