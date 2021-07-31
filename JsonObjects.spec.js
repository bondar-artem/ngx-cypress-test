
/// <reference types = "cypress" />

describe ('JSON objects', () => {

    it ('JSON Objects', () => {

        cy.openHomePage()

        // objects are always in curly braces, objects have keys and each key has its value
        const simpleObject = {"key":"value", "key2": "value2", "key3": "value3"}

        // Arrays are alwyas in square brackets and values are separated by comma and each aaray has index value starting from 0
        const simpleArrayOfValues= ["one","two", "three"]

        // Arrays of objects
        const arrayOfObjects = [{"key":"value"}, {"key2": "value2"}, {"key3": "value3"}]

        // data in json object can be string or number
        const typesOfData = {"string": "this is a string", "number":10}

        const mix = {
            "First Name" : "Younas",
            "Last Name" : "Khan",
            "Age" : "29",
            "Students": [
                {
                "firstName": "Sara",
                "lastName": "Conor"
                },
                {
                "firstName": "Hina",
                "lastName": "Javed",
                
                }
            ]
        }
        console.log (simpleObject.key)
        console.log (simpleObject["key2"])
        console.log (simpleArrayOfValues[1])
        console.log (arrayOfObjects[2].key3)
        console.log (mix.Students[0].lastName)

    })
})