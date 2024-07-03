import { Component, OnInit } from '@angular/core';
import { PaypalService } from '@core/services/paypal/paypal.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrl: './paypal.component.scss'
})
export class PaypalComponent implements OnInit{

  public payPalConfig?: IPayPalConfig;
  showSuccess!: boolean

  constructor(private paypalService: PaypalService) { }


  ngOnInit(): void {
    this.initConfig();
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
            value: '0.01',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '0.01'
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
                value: '0.01',
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
      console.log(" c passer sur onApprouve" + data + " " + actions);

      actions.order.get().then((details: any) => {
        console.log("c passer une 2 eme fois sur anApprouve" + details);

        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log(" c passer sur onClient Authorization" + data);
      
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.paypalService.changeMessage(true);
      this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log("il a quitter ce fumier veux pas Khalassse");

      this.paypalService.changeMessage(true);
      this.paypalService.triggerFunctionCall();
      
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



