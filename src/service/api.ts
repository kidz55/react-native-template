import firestore from '@react-native-firebase/firestore';

export const addData = async (collectionName: string, data: any) => {
  try {
    const collectionRef = firestore().collection(collectionName);
    await collectionRef.add(data);
    console.log('Data added successfully');
  } catch (error) {
    console.error('Error adding data: ', error);
  }
};

export const getData = async (collectionName: string) => {
  try {
    const collectionRef = firestore().collection(collectionName);
    const querySnapshot = await collectionRef.get();
    const data = querySnapshot.docs.map((doc: {id: any; data: () => any}) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log('Data retrieved successfully: ', data);
    return data;
  } catch (error) {
    console.error('Error retrieving data: ', error);
  }
};
