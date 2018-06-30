import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private messageService: MessageService
  ) { }

  handler(erroResponse: any) {
    let msg: string;

    if (erroResponse === 'string') {
      msg = erroResponse;
    } else {
      msg = 'Erro ao processar serviço';
      console.log('ocorreu um erro', erroResponse);
    }

    this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Contate o administrador' });

  }

}
