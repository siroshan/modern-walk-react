export function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value};Path=/;max-age=${
    24 * 60 * 60 * 365
  };SameSite=None;Secure`;
}

export function setSessionCookie(name:string, value:string) {
  document.cookie = `${name}=${value};Path=/;SameSite=None;Secure`;
}
export function deleteCookie(name:string) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
export function getCookie(name:string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2 ) return parts.pop()?.split(';').shift();
}
