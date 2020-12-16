interface contentForm {
   id: string;
   title: string;
   actions: string;
   method?: string;
   input: [
      {
         nameIn?: {
            type: string;
            name: string;
         };
         email: {
            type: string;
            name: string;
         };
         password: {
            type: string;
            name: string;
         };
      }
   ];
}

export const valores: contentForm[] = [
   {
      id: "CA",
      title: "Create an Account",
      actions: "",
      method: "POST",
      input: [
         {
            nameIn: {
               type: "text",
               name: "nameIn",
            },
            email: {
               type: "text",
               name: "email",
            },
            password: {
               type: "password",
               name: "password",
            },
         },
      ],
   },
   {
      id: "LOG",
      title: "Login",
      actions: "",
      method: "POST",
      input: [
         {
            email: {
               type: "text",
               name: "email",
            },
            password: {
               type: "password",
               name: "password",
            },
         },
      ],
   },
];
