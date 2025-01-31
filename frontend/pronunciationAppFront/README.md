# Descripción del Cambio

Este PR incluye la implementación de las tareas definidas en la práctica, abarcando:

- Configuración de un servidor mock en Postman.
- Diseño de funciones desacopladas con Axios.
- Creación de estructuras de datos JSON para usuarios y palabras.
- Desarrollo de componentes React que renderizan los datos con características avanzadas.

---

## ¿Cómo ejecutar el proyecto?
- Frontend: Ejecuta el comando `npm run dev`
- Api: Ejecuta el comando `npm run start:api`

## Cambios Realizados

### Configuración del servidor mock en Postman

- Se creó un servidor mock con un endpoint personalizado: [Mock Server](https://1f196337-d694-4b64-9b0e-ef471d8cd805.mock.pstmn.io)
- Las respuestas mock fueron diseñadas para:
  - **Estructura de usuarios**, incluyendo:
    - Nombre, edad, correo electrónico, fecha de registro, dirección postal y preferencias de usuario.
  - **Estructura de palabras**, incluyendo:
    - ID, pronunciación, niveles de dificultad y sinónimos.

### Implementación de la función Axios para obtención de datos

- Se creó un archivo separado `data-api.js` con la función Axios.
- La función realiza solicitudes `GET` al servidor mock de Postman.
- Maneja errores y retorna los datos obtenidos.
- **Nota:** Se implementó un servidor personalizado con `json-server` debido a la limitación de peticiones en el servidor mock.

### Estructura JSON para usuarios

Se diseñó una estructura JSON con los siguientes campos:

```json
{
    "id": "1",
    "name": "Jane Doe",
    "age": 28,
    "isActive": true,
    "joinDate": "2024-12-10",
    "email": "jane.doe@example.com",
    "phone": "+1234567890",
    "address": {
      "street": "123 Main St",
      "city": "Springfield",
      "zipcode": "12345"
    },
    "preferences": {
      "newsletter": true,
      "notifications": false
    },
    "profile": {
      "avatar": {"imageId": "abc123", "imageName": "Jane_Doe"},
      "bio": "Avid traveler and coffee enthusiast."
    }
}
```

- Esta estructura incluye tipos de datos variados como `string`, `boolean`, `int` y `date`.
- Los datos fueron añadidos al servidor mock.

### Componente de usuario con avatar

- Se desarrolló un componente `User.jsx` que muestra los datos del usuario, incluyendo un avatar.
- Los datos del usuario son obtenidos del servidor mock y renderizados dinámicamente.

### Ampliación de la estructura de palabras

- Se añadió un campo de dificultad con 3 niveles posibles: `rookie`, `pro` y `legend`.
- Se implementó una función de filtrado que permite mostrar solo las palabras dependiendo del nivel.

### Renderizado de sinónimos para palabras

- Se añadió un campo `synonyms` como un array en la estructura de palabras.
- El componente `WordSynonyms.jsx` renderiza los sinónimos y maneja adecuadamente las palabras que no tienen sinónimos.

### Personalización avanzada

- Se aplicaron mejoras visuales con CSS, incluyendo:
  - Un fondo con gradiente para las cards.
  - Efecto transitorio al hacer `hover` sobre las tarjetas.
  - Animaciones con `Motion` para mejorar la interacción.
  - Se incluyó una tarjeta mejorada con controles de reproducción utilizando `Material-UI`.

