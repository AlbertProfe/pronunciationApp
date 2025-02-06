# NOTES ABOUT PRA01 - REACT

## 1. Generacion del Postman Server Mock
    En este punto se utilizo Postman app para generar un mock server y testear peticiones HTTP como GET, POST, PUT y DELETE.
      1. Unique identifier: f5917ef1-d560-4294-8890-88e2075deae8
      2. Domain: mock.pstmn.io
      3. Endpoint path: /wordsPedro (Aqui cambie el nombre del json words.json por wordsPedro.json.
    Esta BASE_URL se incluyo en el data-api.js sustituyendola por la de la plantilla.

## 2. Implement axios function for data fetching
    En postman he creado 4 http requests: GET, POST, PUT, y DELETE.
    Solamente el GET me da una respuesta 200K.
    De los otros 3 recibo 404 Not Found.
    Este ha sido mi caballo de batalla. 

## 3. Creacion del JSON structure wordsPedro.json
    El wordsPedro.json contiene 50 records entre los verbos y sustantivos mas comunes del ingles.
    Contiene 8 fields con diferentes tipos de datos: string, boolean, int, y date.
            {
              "wordsPedro": [
                {
                  "id": 0,
                  "word": "be",
                  "pronunciation": "/biː/",
                  "definition": "To exist or occur; to take place.",
                  "origin": "From Old English 'beon', from Proto-Germanic '*beuną'",
                  "isActive": true,
                  "addedToDB": "2025-01-28",
                  "Charnumbers": 2
                },
                .....

    Esta estructura del json se incluyo en el POST del Postman mock server para incluir palabras nuevas sin exito.
    El words.json de a plantilla fue sustituido por mi wordsPedro.json.
    Este nuevo nombre de wordsPedro.json se ha cambiado en data-api.js y en Cards.jsx, siguiendo el flujo que muestro en la figura 


**Nada mas que explicar desde este punto debido al no saber hacer funcionar las peticiones HTTP entre el mock server y la react app**

## 4. Develop user component with avatar
    

## 5. Add difficulty levels to words and implement filtering

## 6. Implement synonyms rendering for words
