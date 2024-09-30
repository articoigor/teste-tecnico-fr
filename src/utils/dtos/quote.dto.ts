export class QuoteDto {
    recipient: RecipientDto;
    volumes: PackageDto[];

    constructor(recipient: RecipientDto, volumes: PackageDto[]){
        this.recipient = recipient;
        this.volumes = volumes;
    }
}

export class RecipientDto {
    address: AddressDto;

    constructor(address: AddressDto){
        this.address = address;
    }
}

export class AddressDto {
    zipcode: string;

    constructor(zipcode: string){
        this.zipcode = zipcode;
    }
}

export class PackageDto{
    category: number;
    amount: number;
    unitary_weight: number;
    price: number;
    sku: string;
    height: number;
    width: number;
    length: number;

    constructor(
        category: number,
        amount: number,
        unitary_weight: number,
        price: number,
        sku: string,
        height: number,
        width: number,
        length: number){
            this.category = category;
            this.amount = amount;
            this.unitary_weight = unitary_weight;
            this.price = price;
            this.sku = sku;
            this.height = height;
            this.width = width;
            this.length = length;
    }
}