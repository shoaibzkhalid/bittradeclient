import * as EnumsOrder from "../enums/order";
export class mdOrderHistory {
    id: number;
    user_id: number;
    username: string;
    type: EnumsOrder.Type;
    action: EnumsOrder.Action;
    quote_currency: string;
    base_currency: string;
    price: number;
    amount: number;
    total_amount: number;
    remaining_amount: number;
    fee_percentage: number;
    fee: number;
    fee_currency: string;
    record_status: EnumsOrder.RecordStatus;
    created_timestamp: Date;
    updated_timestamp: Date;
    cancelled_timestamp:Date;
    exchange_origin: EnumsOrder.ExchangeOrigin;
    external_order_id: string;
    constructor()
    {
        
    }
}