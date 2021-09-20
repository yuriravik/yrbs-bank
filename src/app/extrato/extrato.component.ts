import { routes } from './../app-routing.module';
import { TransferenciaService } from './../service/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import { Transferencia } from 'src/models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias:any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit() {
    this.service.todas().subscribe((transferencias:Transferencia[])=>{
      console.table(transferencias);
      this.transferencias = transferencias;

    })
  }

}
