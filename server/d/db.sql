
CREATE TABLE analisys(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    titulo varchar(255) NOT NULL,
    sangre varchar(255) NOT NULL,
    descripcion varchar(255),
    createAt timestamp not NULL default current_timestamp,
    done Boolean not null default 0
)


CREATE TABLE animals(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
    edad INTEGER NOT NULL,
    sexo varchar(255),
    raza varchar(255),
    createAt timestamp not NULL default current_timestamp,
    done Boolean not null default 0
)

