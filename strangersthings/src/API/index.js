const COHORT = "2302-ACC-CT-WEB-PT-A"
const BASE_URL = `https://strangers-things.herokuapp.com/api/2302-ACC-CT-WEB-PT-A`

  
//POSTS/users/register: REGISTER ACCOUNT/CreateAccount.jsx  
export const RegisterSignInData = async (username, password) => {

    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                }
            })
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result)
            return result;
        }
        
    } catch (error) {
        console.log(error);
    }
}


/*GET/users/me: CONFIRMS PROPER USER INTERFACE 
  (template literal,required)*/



/*GET/posts : REQUESTS TO FETCH POST ARRAYS 
  (template literal,required)"*/



/*POST/posts: ATTEMPTS TO CREATE A NEW POST 
  (template literal,required)*/



/*PATCH/posts/POST_ID: WILL EDIT A POST WHOSE _id is EQUAL to POST_ID 
  (template literal,required)*/



/*DELETE/posts/POST_ID: WILL DELETE A POST WHOSE _id is EQUAL to POST_ID 
  (template literal,required)*/



/*POST /posts/POST_ID/messages: WILL CREATE A NEW MESSAGE FOR 
  POST whose _id EQUALS POST_ID(template literal,required)*/

