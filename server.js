const express = require("express")
const expressGraphQL = require("express-graphql")

const schema = require("./schema/schema")

const app = express()

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true, // allows us to make queries against the dev server
  })
)

const PORT = 4000
app.listen(PORT, () => {
  console.log("Server Listening on Port", PORT)
})
