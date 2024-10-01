export class FreteRapidoRequestDto {
    shipper: ShipperDto;
    recipient: RecipientDto;
    dispatchers: DispatcherDto[];
    simulation_type: number[];

    constructor(shipper: ShipperDto, recipient: RecipientDto, dispatchers: DispatcherDto[], simulation_type: number[]){
        this.shipper = shipper;
        this.recipient = recipient;
        this.dispatchers = dispatchers;
        this.simulation_type = simulation_type;
    }
}

export class ShipperDto {
    registered_number: string;
    token: string;
    platform_code: string;

    constructor(registered_number: string, token: string, platform_code: string){
        this.registered_number = registered_number;
        this.token = token;
        this.platform_code = platform_code;
    }
}

export class RecipientDto {
    type: number;
    registered_number: string;
    state_inscription: string;
    country: string;
    zipcode: number;

    constructor(type: number, registered_number: string, state_inscription: string, country: string, zipcode: number){
        this.type = type;
        this.registered_number = registered_number;
        this.state_inscription = state_inscription;
        this.country = country;
        this.zipcode = zipcode;
    }
}

export class DispatcherDto {
    registered_number: string;
    zipcode: number;
    volumes: VolumeDto[];

    constructor(registered_number: string, zipcode: number, volumes: VolumeDto[]){
        this.registered_number = registered_number;
        this.zipcode = zipcode;
        this.volumes = volumes;
    }
}

export class CargaDto {
    valor_total: number;
    cubagem: number;
    peso_cubado: number;
    peso_real: number;
    total_volumes: number;

    constructor(valor_total: number, cubagem: number, peso_cubado: number, peso_real: number, total_volumes: number){
        this.valor_total = valor_total;
        this.cubagem = cubagem;
        this.peso_cubado = peso_cubado;
        this.peso_real = peso_real;
        this.total_volumes = total_volumes;
    }
}

export class VolumeDto {
    amount: number;
    category: string;
    height: number;
    width: number;
    length: number;
    unitary_price: number;
    unitary_weight: number;

    constructor(amount: number, category: string, height: number, width: number, length: number, unitary_price: number, unitary_weight: number){
        this.amount = amount;
        this.category = category;
        this.height = height;
        this.width = width;
        this.length = length;
        this.unitary_price = unitary_price;
        this.unitary_weight = unitary_weight;
    }
}