export interface VehiculosReponse {
    data: Vehiculo[];
    meta: Meta;
}

export interface Vehiculo {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    placa: string;
    tipoVehiculo: string;
    usuario: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
