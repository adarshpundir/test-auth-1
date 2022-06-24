export interface UserInterface {
    _id: string;
    name: string;
    email: string;
    password: string;
    salt: string;
  }
  
  export interface UserInterfaceDTO {
    name: string;
    email: string;
    password: string;
  }