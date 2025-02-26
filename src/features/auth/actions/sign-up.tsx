"use server";

import { createUser, sessionService } from "@/entities/user/server";
import { left, mapLeft } from "@/shared/lib/either";
import { error } from "console";
import { redirect } from "next/navigation";
import { z } from "zod";

const formDataSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(5),
});

export const signUpAction = async (state: unknown, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  const result = formDataSchema.safeParse(data);
  if (!result.success) {
    return left(`Ошибка валидации: ${result.error.message}`);
  }
  const createUserResult = await createUser(result.data);
  if (createUserResult.type === "right") {
    sessionService.addSession(createUserResult.value);
    redirect("/");
  }
  return mapLeft(createUserResult, (error) => {
    return {
      "login-already-exists": "Пользователь с таким логином уже существует",
    }[error];
  });
};
