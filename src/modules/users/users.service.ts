import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import axios from 'axios';
import { prepareURL } from '../../../utils';
import { IUsers } from "./users.interface";

@Injectable()
export class UsersService {
  async getUsers(limit?: number): Promise<IUsers[]> {
    try {
      const {
        data: { users },
      } = await axios.get(prepareURL(limit));
      return users;
    } catch (error) {
      throw new HttpException(
        `${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
