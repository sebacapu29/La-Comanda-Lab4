export interface IEmpleadoLogin{
    usuario:string;
    clave:string;
}

export class Empleado implements IEmpleadoLogin {
    
    usuario: string;    
    clave: string;
    tipo: string;
    nombre:string;
    apellido:string;
    sector:number;
    token: string;

    constructor(usuario:string,clave:string,tipo:string){
        this.usuario = usuario;
        this.clave = clave;
        this.tipo = tipo;
        // this.token=token;
    }
}
