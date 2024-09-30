import app from "./app.js";
app.listen(process.env.PORT || 3000);
console.log(`Server on http://localhost:${process.env.PORT}/api-books/v1/`);
