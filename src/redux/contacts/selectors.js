import { selectFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";


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
