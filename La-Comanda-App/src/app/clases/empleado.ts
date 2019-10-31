export interface IEmpleadoLogin{
    usuario:string;
    clave:string;
    captcha:string;
}

export class Empleado implements IEmpleadoLogin {
    captcha: string;
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
