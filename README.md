# HOW TO TRY THIS CODE

1. Clone my repository at your terminal git clone https://github.com/AhmadHasbyBik/Auth_GraphQL.Express.git
2. Open directory cd Auth_GraphQL.Express
3. <img width="152" alt="Jepretan Layar 2023-08-10 pukul 19 50 25" src="https://github.com/AhmadHasbyBik/Auth_GraphQL.Express/assets/91450054/92426945-b0bf-4e72-9c8d-d1b530230d88">
   Make Database MySQL with name “jwt-auth-express”
5. Install NPM, and start the project,  type “npm install” on your terminal, then “npm start”
6. Rename file "env" to ".env"
7. <img width="443" alt="Jepretan Layar 2023-08-10 pukul 19 51 04" src="https://github.com/AhmadHasbyBik/Auth_GraphQL.Express/assets/91450054/82fb9ab6-e2e5-4ece-850e-b3282cb9e8a9">
   If you see “Running at port 4000”, you can ensure that project was work
9. <img width="475" alt="Jepretan Layar 2023-08-10 pukul 19 51 23" src="https://github.com/AhmadHasbyBik/Auth_GraphQL.Express/assets/91450054/b4d0783d-5087-41b1-8c4e-7f2414fdc9d1">
    Open Apollo graphQL on http://localhost:4000/graphql (Incognito Chrome preferred), and click Query your server
11. <img width="1280" alt="Jepretan Layar 2023-08-10 pukul 19 53 17" src="https://github.com/AhmadHasbyBik/Auth_GraphQL.Express/assets/91450054/510fa0ab-da7e-4576-a8dc-90b6d789276f">
    SignUp, you can follow Root > Mutation > SignUp, then you can click add to query Arguments, Fields. Ensure that you type username, email, password to create account.
13. <img width="1280" alt="Jepretan Layar 2023-08-10 pukul 20 03 34" src="https://github.com/AhmadHasbyBik/Auth_GraphQL.Express/assets/91450054/f9771d68-0b63-434f-b8ea-c6196932fcdc">
    SignIn, you can follow Root > Mutation > SignUp, then you can click add to query Arguments, Fields. Ensure that you type email, password to login your account.
15. <img width="1280" alt="Jepretan Layar 2023-08-10 pukul 20 06 16" src="https://github.com/AhmadHasbyBik/Auth_GraphQL.Express/assets/91450054/183ae438-b97a-40cb-9d21-cf5b8ed2c0c2">
    If you wanna see that your made account, you can follow that
16. <img width="1280" alt="Jepretan Layar 2023-08-10 pukul 20 07 40" src="https://github.com/AhmadHasbyBik/Auth_GraphQL.Express/assets/91450054/de69d081-bf47-42c5-b13a-f469445f4db5">
    <img width="251" alt="Jepretan Layar 2023-08-10 pukul 20 07 56" src="https://github.com/AhmadHasbyBik/Auth_GraphQL.Express/assets/91450054/fe014dde-56a4-4715-a869-2d528cf7acfa">
    To check the ID account with JWT, you can copy accessToken while you login, and add it to headers, put "bearer" before token, you can follow on that picture
