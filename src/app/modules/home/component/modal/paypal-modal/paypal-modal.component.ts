import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Eleves } from '@core/model/Eleves';
import { PaypalService } from '@core/services/paypal/paypal.service';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

@Component({
  selector: 'app-paypal-modal',
  templateUrl: './paypal-modal.component.html',
  styleUrl: './paypal-modal.component.scss'
})
export class PaypalModalComponent implements OnInit {

    public payPalConfig?: IPayPalConfig;
    showSuccess!: boolean
  
    constructor(private paypalService: PaypalService,
      @Inject(MAT_DIALOG_DATA) public dataForm: Eleves,

    ) { }
  
    ngOnInit(): void {
      this.initConfig();
      console.log(this.dataForm);

    }
  
    private initConfig(): void {
      this.payPalConfig = {
      currency: 'EUR',
      clientId: 'ATeYeBTt9UNoQu0WvOm1_puOC7ZnHkJrhmEodzGfuAJ5L_mHVOqUzTm6pR1GkAICPCEMRZTxdHRh61JV',
      createOrderOnClient: () => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: '300.00',
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: '300.00'
                }
              }
            },
            items: [
              {
                name: 'Inscription à 1 annee Institut Quraniyah',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: '300.00',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
