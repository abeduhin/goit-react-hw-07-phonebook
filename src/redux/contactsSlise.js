import { createSlice, nanoid } from "@reduxjs/toolkit"



const contactsInitialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

const contactsSlise = createSlice({
    name: 'contacts',
    initialState: {
        contacts: contactsInitialState,
    },
    
    reducers: {
        addContacts: {
            reduser(state, action) {
                state.contacts.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        name,
                        id: nanoid(),
                        number
                    },
                };
            },
        },
        
        deleteContacts(state, action) {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
            console.log(action);
        },

    }
})
 const contactsReducer = contactsSlise.reducer;
export const { addContacts, deleteContacts } = contactsSlise.actions
export default contactsReducer;

// експортуємо декстуризований масив action

// createSlice() : принимает объект, содержащий редуктор, название части состояния (state slice), начальное значение состояния, и автоматически генерирует частичный редуктор с соответствующими создателями и типами операции
// #createSlice — объединяет в себе функционал createAction и createReducer; createSelector — функция из библиотеки Reselect, переэкспортированная для простоты использования