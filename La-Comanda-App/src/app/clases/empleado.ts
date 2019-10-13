export interface IEmpleadoLogin{
    usuario:string;
    clave:string;
}

export class Empleado implements IEmpleadoLogin {
    
    usuario: string;    
    clave: string;
    tipo: string;
    token: string;

    constructor(usuario:string,clave:string){
        this.usuario = usuario;
        this.clave = clave;
        // this.tipo = tipo;
        // this.token=token;
    }
}
