import { getUsers } from "../api/get-users/getUsers"
import ComponentClientUsersServer from "../components/componentClientUsersServer"

export default async function UsersServer() {
  const response = await getUsers.jsonExample()
  return <ComponentClientUsersServer data={response}/>
}