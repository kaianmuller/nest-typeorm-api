<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Control de stock

# CRUD REST API con Nest JS, Postgres y Typescript
- Este es un proyecto desafío para los pasantes universitarios.

## Software Requerido
- NodeJS
- Postgres

## CONFIGURACIONES

### CONFIGURAR EL PROYECTO
- Para instalar las dependencias correr el comando `npm i`

### CONFIGURAR EL SERVIDOR
- Crear una base de datos `task` en Postgres 

- Ir a src/app.module.ts y modificar de acuerdo a sus credenciales

```
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',  <= (El usuario de tu base de datos)
      password: 'admin',  <= (La contraseña de tu base de datos)
      database: 'tasks', <= (El nombre de tu base de datos)
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
    TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
 ```

## INICIALIZACIONES

### COMPILAR Y CORRER EL PROYECTO
- Para correr el proyecto usar el comando `npm run start:dev`


### Acceso a las rutas y documentación.
 - Se puede acceder al `localhost:3000/docs`para tener acceso a las rutas del proyecto
