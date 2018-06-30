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
      console.log('ocorreu um erro', erroResponse);
      if (erroResponse.status === 404) {
        this.messageService.add({ severity: 'error', summary: 'Contate o administrador', detail: erroResponse.error.msgUsuario });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Contate o administrador', detail: 'Erro na operação com recurso' });
      }
    }

  }

}
