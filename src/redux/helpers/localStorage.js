export const saveDataToStorage = (idToken, uid, expirationDate, email, name, role, isVerified = false) => {
  localStorage.setItem(
    'user',
    JSON.stringify({
      idToken,
      uid,
      expirationDate,
      email,
      name,
      role,
      isVerified,
    }))
};

export const deleteDataToStorage = () => {
  localStorage.removeItem('user');
  localStorage.clear();
};