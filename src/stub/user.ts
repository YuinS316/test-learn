const user = {
  val: 5,
};

export function getUserVal() {
  return user.val;
}

export function fetchApiUser(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(20);
    }, 0);
  });
}
