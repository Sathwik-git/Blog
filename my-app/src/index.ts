import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/user/signup", (c) => {
  return c.text("signup");
});
app.post("/api/v1/user/signin", (c) => {
  return c.text("signin");
});
app.post("/api/v1/blog", (c) => {
  return c.text("blog send");
});
app.put("/api/v1/blog", (c) => {
  return c.text("blog edit");
});
app.get("/api/v1/blog/:id", (c) => {
  return c.text("blog get with id");
});
app.get("/api/v1/blog/bluk", (c) => {
  return c.text("all blogs");
});

export default app;
