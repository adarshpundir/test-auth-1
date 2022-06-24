import { Document, Model } from 'mongoose';
import { UserInterface } from '@/interfaces/UserInterface';
declare global {
  namespace Express {
    export interface Request {
      currentUser: UserInterface & Document;
    }    
  }

  namespace Models {
    export type UserModel = Model<UserInterface & Document>;
  }
}
