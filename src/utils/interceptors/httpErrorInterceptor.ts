import { Injectable, BadRequestException, ValidationPipe, ValidationError } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = this.formatValidationErrors(errors);
        return new BadRequestException(messages);
      },
    });
  }

  private formatValidationErrors(errors: ValidationError[]): string[] {
    const messages: string[] = [];

    errors.forEach((error) => {
      if (error.children && error.children.length > 0) {
        messages.push(...this.formatValidationErrors(error.children)); 
      } else {
        const errorType = this.getExpectedType(error);

        if(errorType == 'not empty'){
          messages.push(`O campo ${error.property} é de preenchimento obrigatório.`);
        } else {
          messages.push(`O campo ${error.property} deveria ser do tipo ${errorType}`);
        }
      }
    });

    return messages;
  }

  private getExpectedType(error: ValidationError): string {
    const typeMapping = {
      isNumber: 'number',
      isNotEmpty: 'not empty',
      isString: 'string',
      isInt: 'integer',
    };

    const constraints = error.constraints || {};

    for (const constraintKey of Object.keys(constraints)) {
      if (typeMapping[constraintKey]) {
        return typeMapping[constraintKey];
      }
    }

    return 'unknown';
  }
}
