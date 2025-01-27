import { instance } from "./config.ts";

export type TransactionStatus = "pending" | "completed" | "failed";

interface GetTransactionsResponse {
  transactions: Array<Transaction>;
}

interface Transaction {
  id: number;
  user_id: number;
  business_id: number;
  total: string;
  fee: string;
  items: Array<TransactionItem>;
  status: TransactionStatus;
  pickup_time: string;
  created_at: string;
  updated_at: string;
}

interface TransactionItem {
  id: number;
  name: string;
  price: string;
  discount: string;
  selected_quantity: number;
}

function getTransactions() {
  return instance.get<GetTransactionsResponse>("/user/transactions");
}

interface CreateTransactionRequest {
  business_id: number;
  items: Array<CreateTransactionItem>;
}

interface CreateTransactionItem {
  food_item_id: number;
  selected_quantity: number;
}

function createTransaction(data: CreateTransactionRequest) {
  return instance.post<Transaction>("/transactions", data);
}

export const transactions = {
  getTransactions,
  createTransaction,
};
