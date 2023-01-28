describe('JSON objects', () => {

  it('JSON objects ', () => {
    cy.openHomePage()

    const simpleObject = {"key": "value", "key2": "value2"}

    const simpleArrayOfValues = ["one", "two", "three"]

    const arrayOfObject = [{"key": "value"}, {"key2": "value2"}, {"key3": "value3"}]

    const typesOfData = {"string": "this is a string", "number": 10}

    const mix = {
      "firstName": "Artem",
      "LastName": "Bondar",
      "Age": 35,
      "Students": [
        {
          "firstName": "Sara",
          "lastName": "Conor"
        },
        {
          "firstName": "Bruce",
          "lastName": "Willis"
        }
      ]
    }

    console.log(simpleObject.key2)
    console.log(simpleObject["key2"])
    console.log(simpleArrayOfValues[1])
    console.log(arrayOfObject[2].key3)
    console.log(mix.Students[0].firstName)

    const lastNameOfSecondStudent = mix.Students[0].firstName

  });

});
