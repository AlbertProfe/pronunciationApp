### Creado el proyecto con vite

+ instalare axios

+ instalare MaterialUi

### Creacion de la app para los usuarios

+  creare el componente Users.jsx

+ importare MaterialUi

+ Importare el archivo data-api.js 

+ creare el export default de users

+ creare un useState para el componente Users

+ creare el userEffect con una funcion arrou llamando al metodo getUsers

+ hare unanllamada a la data-api.js con la funcin fetchUsers

+ hi seteare el data a users con la funcion setUsers

+ todo hira anidado co n un try catch

+ al final de la funcion Users hare el getUsers [] con el array vacio para que se renderize todo 

+ en return hacemos el render con componentes como card y typhogrphy

+ hare un map de words para que me renderixe tantas veces como palabras tenga

+ luego llamare a la variable word.word para renderizar el component

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-07-17-29-31-image.png)

### creacion del data api para axios

+ Primero importare axios 

+ creare la constante BASE_URL i le pasare la url que he creado en el servidor moc de postman

+ creare el metodo fetchusers con una funcion arrow 

+ dentro de un try catch hare una llamada a axios con el axios.get y añadire la constante donde tengo almacenada la url de postman

+ este procedimiento lo he seguido tanto para words como para users

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-07-17-39-34-image.png)

### Configuracion del Utils.js

+ aqui solo hay una funcion con una llamada a la pagina de imgur.com donde se le pide que devuelva una imagen hi el formato

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-07-17-47-17-image.png)

### Root donde se hace la llamada a la App

+ En la pagina principal de la app creare el archivo router

+ importare las librerias BrowserRouter, Route, Routes de react router.dom

+ importare el resto de componentes de la app

+ en la funcion App en el return utilizare BrowserRouter, Routes, Route, parapasarle

+ los componentes a renderizar

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-05-10-10-58-image.png)

### Creando el header con el componente layout

+ importare iLink, Outlet  de  react-router-dom, AppBar, Toolbar, Typography, Button, Container  y  styled de  MaterialUi

+ crearemos el metodo Styled  donde se crearan estilos para la barra de navegacion

+ creare la funcion Layout hi solo le parare el renderizado con estilos y componentes como button y typogrphy 

+ en la botonera le pasare el componente de Material StyledLinked para darle formato hi el path de los componentes

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-07-17-54-55-image.png)

### Creacion del severMoc en postman

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-07-18-04-22-image.png)

### Respuesta del server moc con un 200 ok

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-07-18-06-11-image.png)

### Render del proyecto

+ eta es la parte de words

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-07-18-06-57-image.png)

+ Parte de users

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-07-18-08-13-image.png)
