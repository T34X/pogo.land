import { app } from "../app/mod.ts";

app.router.get("/", () => {
  return "Hello World!";
});
