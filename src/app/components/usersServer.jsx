import { getUsers } from "../api/get-users/getUsers"
import ComponentClientUsersServer from "./componentClientUsersServer";

export default async function UsersServer() {
  const response = await getUsers.getAll()
  return <ComponentClientUsersServer data={response}/>
}