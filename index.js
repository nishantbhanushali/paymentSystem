const axios  = require( "axios")
const main = async() =>{

    const response = await axios.get("https://sum-server.100xdevs.com/todos")
    console.log(response.data.todos)

}

main()
