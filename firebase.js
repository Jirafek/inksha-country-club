import firebaseConfig from './firebase-config.js';
import {initializeApp} from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const fetchData = async (groupID, setState) => {
    try {
        const groupsRef = ref(db, 'groups');
        const snapshot = await get(groupsRef);

        if (snapshot.exists()) {

            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                if (childData.groupId === groupID) {
                    setState(childData.substt);
                }
            });
        } else {
            console.log('Группа с указанным groupID не найдена.');
        }
    } catch (error) {
        console.error('Ошибка при получении данных из Firebase:', error);
    }
};

