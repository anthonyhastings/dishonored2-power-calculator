export const setCharacter = (character) => ({
  type: 'SET_CHARACTER',
  character
});

export const addPurchase = (powerId) => ({
  type: 'ADD_PURCHASE',
  powerId
});

export const removePurchase = (powerId) => ({
  type: 'REMOVE_PURCHASE',
  powerId
});
