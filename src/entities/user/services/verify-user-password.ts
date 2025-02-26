import { left, right } from "@/shared/lib/either";
import { userRepository } from "../repositories/user";
import { PasswordService } from "./password";

export async function verifyUserPassword({
  login,
  password,
}: {
  login: string;
  password: string;
}) {
  const user = await userRepository.getUser({ login });
  if (!user) {
    return left("login-or-password-are not-correct" as const);
  }
  const isCompare = await PasswordService.comparePasswords({
    hash: user.passwordHash,
    salt: user.salt,
    password,
  });
  if (!isCompare) {
    return left("login-or-password-are not-correct" as const);
  }
  return right(user);
}
