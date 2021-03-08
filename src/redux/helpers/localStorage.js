export const saveDataToStorage = (idToken, uid, expirationDate, email, name) => {
  localStorage.setItem(
    'user',
    JSON.stringify({
      idToken,
      uid,
      expirationDate,
      email,
      name,
    }))
};

export const deleteDataToStorage = () => {
  localStorage.removeItem('user');
  localStorage.clear();
};