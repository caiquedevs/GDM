// import database from '../models';

class UserController {
  static async listAllDoctors(req: any, res: any) {
    try {
      res.status(200).json({ msg: 'List' });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  static async showDoctor(req: any, res: any) {
    try {
      res.status(200).json({ msg: 'Show' });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  static async storeDoctor(req: any, res: any) {
    try {
      res.status(200).json({ msg: 'Store' });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  static async updateDoctor(req: any, res: any) {
    try {
      res.status(200).json({ msg: 'Update' });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  static async deleteDoctor(req: any, res: any) {
    try {
      res.status(200).json({ msg: 'Delete' });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }
}

export default UserController;
