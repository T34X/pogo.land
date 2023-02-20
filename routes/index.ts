import { app } from "../app/mod.ts";
import { readHTML } from "../utils/reader.ts";

app.router.get("/about", async() => {
    const data = await readHTML("/pages/index.html");

    return data
})