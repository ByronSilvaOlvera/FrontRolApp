

export interface UserResponse {
    ok?:      boolean;
    msg?:     string;
    entidad?: Entidad[];
}

export interface EntidadUser {
    _id?:          string;
    nombre?:       string;
    apellido?:     string;
    edad?:         string;
    email?:        string;
    password?:     string;
    roles?:        Role[];
    applicaiones?: Applicaione[];
    __v?:          number;
}

export interface Applicaione {
    _id?:   string;
    idApp?: string;
}

export interface Role {
    _id?:   string;
    idRol?: string;
}



export interface AppResponse {
    ok?:      boolean;
    msg?:     string;
    entidad?: Entidad[];
}

export interface Entidad {
    _id?:       string;
    nombre?:    string;
    estado?:    string;
    fecha?:     Date;
    createdAt?: Date;
    updatedAt?: Date;
    __v?:       number;
}

export interface RolResponse {
    ok?:      boolean;
    msg?:     string;
    entidad?: Entidad[];
}

export interface Entidad {
    _id?:       string;
    nombre?:    string;
    estado?:    string;
    fecha?:     Date;
    createdAt?: Date;
    updatedAt?: Date;
    __v?:       number;
}
