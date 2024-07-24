1. to register a user :- http://localhost:9000/user/register -> use following data format
{
    "userName": "",
    "userEmail": "",
    "userPassword": ""
}

2. to login http://localhost:9000/user/login ->  use following data format
{
    "userName": "",
    "userPassword": ""
}

it will return a token pre formatted with bearer i didnt make any frontend so manually assign this value to header authorization when checking profile

3. to check profile http://localhost:9000/user/profile -> use The token retrieved from login and assign it to Authorization header 