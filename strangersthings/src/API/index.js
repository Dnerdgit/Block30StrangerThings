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
