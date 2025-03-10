"use server";

import { sessionService, verifyUserPassword } from "@/entities/user/server";
import { left, mapLeft } from "@/shared/lib/either";
import { redirect } from "next/navigation";
import { z } from "zod";

const formDataSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(5),
});

export const signInAction = async (state: unknown, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    return left(`Ошибка валидации: ${result.error.message}`);
  }
  const verifyUserResult = await verifyUserPassword(result.data);

  if (verifyUserResult.type === "right") {
    sessionService.addSession(verifyUserResult.value);
    redirect("/");
  }
  return mapLeft(verifyUserResult, (error) => {
    return {
      "login-or-password-are not-correct": "Неверный логин или пароль",
    }[error];
  });
};
