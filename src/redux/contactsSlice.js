import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectFilter } from "./filtersSlice";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
      item: [],
      loading: false,
      error: null
  },

  extraReducers: (builder) => {
    builder 
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true; 
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true; 
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.item = state.item.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.item.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
  }

});

export const contactsReducer = contactsSlice.reducer;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.item;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, nameFilter) => {
    if (nameFilter && typeof nameFilter === 'string') {
      return contacts.filter(contact => 
        contact.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    } else {
      return contacts;
    }
  }
)



//   reducers: {
//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//   },


// export const { addContact, deleteContact } = contactsSlice.actions;

// export const selectContacts = (state) => state.contacts.contacts;

