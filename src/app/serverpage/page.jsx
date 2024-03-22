import { getUsers } from "../api/get-users/getUsers"
import ComponentClientUsersServer from "../components/componentClientUsersServer"

export default async function ServerPage() {
  const response = await getUsers.jsonExample()
  return <ComponentClientUsersServer data={response}/>
}