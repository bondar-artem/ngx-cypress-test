describe('Json objects tests', ()=> {
it('First tests', ()=> {

    const simpleObject = { "key": "value", "key2": "value2" }

    const simpleArreyOfValues = [ "one", "two", "three" ]

    const arrayOfObjects = [{ "key": "value"} , { "key2": "value2"}, { "key3": "value3"}]

    const typesOffData = { "string": "this is a string", "number": 10}

    const mix = {
        "FirstName": "Mary",
        "LastName" : "Ru", 
        "Age": 35,
        "Students": [
            {
                "firstName": "Sara",
                "lastName": "Conor"
            },
            {
                "firstName": "Sura",
                "lastName": "Minot"
            }
        ]
    }

console.log(simpleObject.key2)//value2

console.log(simpleObject["key2"])//value2

console.log(simpleArreyOfValues[1])//two

console.log(arrayOfObjects[0].key)//value

console.log(mix.Students[0].firstName)//Sara

const lastNameOfSecondStudent = mix.Students[1].lastName

console.log(lastNameOfSecondStudent)

})
    
})