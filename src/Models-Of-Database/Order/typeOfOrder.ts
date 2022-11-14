/** 
#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
*/

type TypeOfOrder = {
    id?: number;
    id_of_user: string;
    order_status: string;
    products?: [] | [null];
};

export default TypeOfOrder;
