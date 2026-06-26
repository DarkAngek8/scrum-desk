import { Hono } from "hono";
import { handle } from "hono/vercel";

import auth from "@/features/auth/server/route";
import workspaces from "@/features/workspaces/server/route";
import members from "@/features/members/server/route";
import projects from "@/features/projects/server/route";
import tasks from "@/features/tasks/server/route";
import { Client, Databases } from "node-appwrite";
const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .get("/health", async (c) => {
    try {
      const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

      const databases = new Databases(client);

      // Смикаємо базу даних
      await databases.listCollections(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!
      );

      return c.json(
        {
          status: "ok",
          message: "Appwrite працює в штатному режимі!",
        },
        200
      );
    } catch (error: any) {
      // ПЕРЕВІРКА: Якщо Appwrite відповів, що немає прав (401) або доступ заборонено (403)
      // Це залізобетонний доказ того, що сервер онлайн і прокинувся!
      if (
        error &&
        (error.code === 401 || error.code === 403 || error.status === 401)
      ) {
        return c.json(
          {
            status: "ok",
            message:
              "Appwrite успішно прокинувся (отримано відповідь від хмари)!",
          },
          200
        );
      }

      // Якщо ж сталася якась інша дійсна помилка (наприклад, ліг інтернет або впав сам сервер)
      console.error("Дійсна помилка Health check:", error);

      return c.json(
        {
          status: "error",
          message: "Критична помилка: Appwrite не відповідає взагалі.",
          details: error?.message || String(error),
        },
        500
      );
    }
  })
  .route("/auth", auth)
  .route("/workspaces", workspaces)
  .route("/members", members)
  .route("/projects", projects)
  .route("/tasks", tasks);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
export type AppType = typeof routes;
