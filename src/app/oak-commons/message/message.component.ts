import { CustomMessageBundle } from './message-bundle.const';
import { Component, Input, } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="ui-message ui-messages-error" >
      {{ getMessage() }}
    </div>
  `,
  styles: [`
    .ui-messages-error{
      margin: 0;
      margin-top: 4px;
    }
  `]
})

export class MessageComponent {

  @Input() error: string;
  @Input() params: string;
  @Input() control: FormControl;
  @Input() text: string;

  bundle = CustomMessageBundle;

  knownBugs: KnownBug[] = [
    new KnownBug('required', this.bundle.msg_campo_obrigatorio, true),
    new KnownBug('minlength', this.bundle.msg_min_caracteres, true),
    new KnownBug('maxlength', this.bundle.msg_max_caracteres, true),
  ];

  /**
   * Verifica se o parametro texto foi preenchido e o retorno
   * Se nao, verifica se params foi informado e se o error informado e um erro conhecido
   * Entao, seta o parametro e retorna o erro conhecido
   */
  getMessage(): string {
    if (this.text && this.text.length > 0) {
      return this.text;
    } else if (this.params) {
      const bug: KnownBug = this.knownBugs.find(b => b.error === this.error);
      if (bug && bug.message && bug.message.length > 0) {
        return this.setMessageParams(bug.message, this.params);
      }
    }
    return this.text;
  }

  setMessageParams(message: string, params: string): string {
    return message.replace('\{0\}', params);
  }

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}

class KnownBug {
  constructor(public error: string, public message: string, public hasParam: boolean) {}
}
