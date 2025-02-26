import { left, right } from "@/shared/lib/either";
import { userRepository } from "../repositories/user";
import { PasswordService } from "./password";
import cuid from "cuid";
import { DEFAULT_RATING } from "../domain";

export const createUser = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  const userWithLogin = await userRepository.getUser({ login });
  if (userWithLogin) {
    return left("login-already-exists" as const);
  }
  const { hash, salt } = await PasswordService.hashPassword(password);
  const user = await userRepository.saveUser({
    id: cuid(),
    login,
    rating: DEFAULT_RATING,
    passwordHash: hash,
    salt,
  });
  return right(user);
};
