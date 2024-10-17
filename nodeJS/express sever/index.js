import express from "express";

const app = express();
const port = 3000;

/*req = request , res = respond */
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/about", (req, res) => {
    res.send("<h1>about Me</h1><p>My name is Ting Ma</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone</p>");
});

/*two argument (port and callback)*/
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})