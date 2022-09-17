export const fakeLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
      localStorage.setItem('token', 'token_user');
    }, 4000);
  });
}

export const fakeLogOut = () => {
  setTimeout(() => {
    localStorage.clear();
  }, 2000);
}
