### Creacion ben UserClient

Creacion de las variables el constructor y geter y seter la clase UserClient tendra la anotacion @Entity y la anotacion @Id para identificarlo en la base de datos

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-05-09-37-47-image.png)

### Creacion del User Service

creare el User service a partir del service de words en la clase UserService le pondre la anotacion @Service para identificarlo como Service e injectare la clase UserRepositori para hacer las operaciones con base de datos con la anotacion @Autowired aqui creare los metodos crear, borrar,actualizar y consulta a la bas de datos haciendo en cada metodo la llamada al UserRepository

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-05-09-35-23-image.png)

### Creacion de la interface  user Repository

En esta interface haremos un extends de  JpaRepository<UserClient, String>

hi hare una llamada al metodo getUserById pasandole por parametro el id del Usuario

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-05-09-34-09-image.png)

### Creacion del User Conroller

Al crear el UserController le pondre las anotaciones @RestController  
@RequestMapping para identificar que es un controlador lueho injectare el UserrService Para acceder a los metodos de la clase

+ Creare los metodos getAll users, getUserById, CreateUser, UpdateUser, DeleteUser con las anotaciones  @GetMapping,para el metodo GetAllUsers 

+ @GetMapping("/{id}") para filtrar por id

+ @PostMapping("/createUser") para crear un usuario

+ @PutMapping("/{id}") para actualizar el Usuario por id

+ @DeleteMapping("/{id}") para borrar el Usuario por id

+ Añadire el metodo que nos pado el maestro para añadir las cabeceras que dan informmacion de consumo de memotia del procesador y el entorno o jdk que estamos utilizando 

##### Tambien utilizare las anotaciones

+ @PathVariable String id para recoger los usuarios por id

+ @RequestBody  UserClient User es para acceder a las propiedades de el User client

+ Utilizare el metodo ResponseEntity para hacer la peticion http

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-05-09-39-00-image.png)

### Creacion del healt controller

Esta clase nos la enseño el maetro hi la implemente, esta clase a trabes de @RestController  
@RequestMapping("/api/health") accede a a el sevice hi introduce las cabeceras donde viene la informacion de consumo de recursos y version del jdk

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-05-09-40-06-image.png)

### Ejecucion del proyecto

Ejecuto el proyecto sin problemas 

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-05-09-41-06-image.png)

### Creacion de Bse de datos

El Springboot me crea la base de datos

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-05-09-42-00-image.png)

### Creacion del moc

creo el moc con el metodo put para introducoir datos de usuario

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-05-09-43-37-image.png)

### Setear Usuario desde postman

el moc no me da error

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-05-09-49-01-image.png)

### Introducion en la base de datos

he creado el primer usuario

![](/home/pcpla/snap/marktext/9/.config/marktext/images/2025-02-05-09-49-55-image.png)

### Clase Test

la clase test no la he implementado por que aun no he echo pruebas uniotarias
