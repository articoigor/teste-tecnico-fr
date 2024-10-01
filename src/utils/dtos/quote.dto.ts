import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';

export class QuoteRequestDto {
    recipient: RecipientDto;

    @ValidateNested({each: true})
    @Type(() => PackageDto)
    volumes: PackageDto[];

    constructor(recipient: RecipientDto, volumes: PackageDto[]){
        this.recipient = recipient;
        this.volumes = volumes;
    }
}

export class QuoteResponseDto {
    carrier: QuoteModel[];

    constructor(carrier: QuoteModel[]){
        this.carrier = carrier;
    }
}

export class QuoteModel {
    final_price: number;
    name: string;
    service: string;

    constructor(final_price: number, name: string, service: string){
        this.final_price = final_price;
        this.name = name;
        this.service = service;
    }
}

export class CarrierDto {
    name: string;
    service: string;
    deadline: string;
    price: number;

    constructor(name: string, service: string, deadline: string, price: number){
        this.name = name;
        this.service = service;
        this.deadline = deadline;
        this.price = price;
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
    @IsNumber()
    @IsNotEmpty()
    category: number;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsNumber()
    @IsNotEmpty()
    unitary_weight: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    sku: string;

    @IsNumber()
    @IsNotEmpty()
    height: number;

    @IsNumber()
    @IsNotEmpty()
    width: number;

    @IsNumber()
    @IsNotEmpty()
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