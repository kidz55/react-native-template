import {Platform} from 'react-native';
import InAppPurchase, {PurchaseResult, Product} from 'react-native-iap';

const itemSkus = Platform.select({
  ios: ['com.example.product1', 'com.example.product2'],
  android: ['com.example.product1', 'com.example.product2'],
});

export const initConnection = async () => {
  try {
    await InAppPurchase.initConnection();
    console.log('Connected to in-app purchase service');
  } catch (error) {
    console.error('Error connecting to in-app purchase service: ', error);
  }
};

export const getProducts = async () => {
  try {
    const products: Product[] = await InAppPurchase.getProducts(itemSkus);
    console.log('Products retrieved successfully: ', products);
    return products;
  } catch (error) {
    console.error('Error retrieving products: ', error);
  }
};

export const purchaseProduct = async (sku: string) => {
  try {
    const purchase: PurchaseResult = await InAppPurchase.purchase(sku);
    console.log('Purchase successful: ', purchase);
    return purchase;
  } catch (error) {
    if (error.code === 'E_ALREADY_OWNED') {
      console.log('Already owned');
    } else if (error.code === 'E_USER_CANCELLED') {
      console.log('User cancelled');
    } else {
      console.error('Error purchasing product: ', error);
    }
  }
};

export const finishTransaction = async (purchase: PurchaseResult) => {
  try {
    await InAppPurchase.finishTransaction(purchase);
    console.log('Transaction finished');
  } catch (error) {
    console.error('Error finishing transaction: ', error);
  }
};

export const disconnect = async () => {
  try {
    await InAppPurchase.disconnect();
    console.log('Disconnected from in-app purchase service');
  } catch (error) {
    console.error('Error disconnecting from in-app purchase service: ', error);
  }
};
