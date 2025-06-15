import { PipeTransform,BadRequestException } from "@nestjs/common";

export class parsedIpPipe implements PipeTransform<string,number>{
    transform(value: string): number {
       const id = parseInt(value,10)

        if(isNaN(id)) throw new BadRequestException("Id must be number")
        if(id<=0) throw new BadRequestException("Id must be negative")

        return id;    
    }
}