import { fetchApiUser, getUserVal } from "./user";

export function getDoubleValue() {
  return getUserVal() * 2;
}

export async function fetchDoubleApiUser() {
  return (await fetchApiUser()) * 2;
}
