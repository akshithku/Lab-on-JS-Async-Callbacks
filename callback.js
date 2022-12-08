const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies

// Progression 2: using setTimeout()

//Progression 3: Create a function to creat cookies

// Progression 5: calling function
function getallCookie() {
  setTimeout(() => {
    cookies.forEach((cookies) => {
      console.log(cookies);
    });
  }, 1000);
}
function creatCookie(newCookie) {
  setTimeout(() => {
    cookies.push(newCookie);
  }, 2000);
}

creatCookie(newCookie);
getallCookie();
