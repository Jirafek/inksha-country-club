import firebaseConfig from './firebase-config.js';
import {initializeApp} from 'firebase/app';
import { getDatabase, ref, get, set } from 'firebase/database';

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

export const addUser = async (clientId) => {
    try {
        const usersRef = ref(db, 'yandexUsers');

        // go through usersRef and check if clientId already exists if so update it with new timestamp
        const snapshot = await get(usersRef);
        let isUpdated = false;

        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                if (childData.clientId === clientId) {
                    set(ref(db, `yandexUsers/${childSnapshot.key}`), {
                        clientId: clientId,
                        timestamp: Date.now()
                    });
                    isUpdated = true;
                }
            });
        }

        if (!isUpdated) {
            await set(usersRef, {
                clientId: clientId,
                timestamp: Date.now()
            });
        }
    } catch (error) {
        console.error('Ошибка при добавлении пользователя в базу данных:', error);
    }
}

