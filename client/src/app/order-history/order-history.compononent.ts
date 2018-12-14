import { Component, OnInit, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { LoggerService } from 'src/services/logger.service';
import { LanguageBase } from 'src/shared/language';
import { GlobalsService } from 'src/services/globals.service';
import { mdCallResponse } from 'src/models/call-response';
import { HttpClientService } from 'src/services/http-client.service';
import { SpinnerService } from 'src/services/spinner.service';
import { StaticHelper } from 'src/shared/static-helper';
import { mdOrderHistory } from 'src/models/order-history';
import { mdOrder } from 'src/models/order';
import { Constants } from 'src/shared/constants';

@Component({
    selector: 'order-history-order',
    templateUrl: './order-history.component.html',
    styleUrls: []
})

export class OrderHistoryComponent implements OnInit {

    @Input() currencyPair: any;
    lang: LanguageBase;
    orders: mdOrderHistory[];
    pendingOrders: mdOrderHistory[];
    sHelper: StaticHelper;
    constants: Constants;
    constructor(private log: LoggerService, 
        public  globals: GlobalsService,
        private http: HttpClientService, 
        private spinner: SpinnerService) {

    }

    ngOnInit() {
        this.constants = this.globals.constants;
        this.lang = this.globals.lang;
        this.sHelper = StaticHelper;
    }

    ngOnChanges(changes: SimpleChanges) {
        this.currencyPair = changes.currencyPair.currentValue;
        this.spinner.show();
        this.getOrderHistory();
    }

    getOrderHistory() {

        if (this.currencyPair.id) {
            let res: mdCallResponse = new mdCallResponse();
            let model = {
                currencyPair: this.currencyPair.id,
                recordsPerPage: -1,
                page: -1,
            }
            this.http.post<mdCallResponse>(this.constants.EndPoints.PostOrderHistory, model).subscribe((data) => {
                res = data;
            }, (error) => {
                this.log.debug(error);
                this.spinner.hide();
            }, () => {
                this.log.debug(res);
                if (res.isSuccess) {
                    this.orders = res.extras as mdOrderHistory[];
                    this.pendingOrders = this.orders.filter(m => m.record_status == this.constants.Order.RecordStatus.open || 
                        m.record_status == StaticHelper.getPropNameByValue(this.constants.Order.RecordStatus, this.constants.Order.RecordStatus.open) ||
                    m.record_status == this.constants.Order.RecordStatus.partially_completed || m.record_status ==
                    StaticHelper.getPropNameByValue(this.constants.Order.RecordStatus, this.constants.Order.RecordStatus.partially_completed));

                }
                this.spinner.hide();
            });
        }
    }
}