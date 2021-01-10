const { Specialties: SpecialtiesModel } = require('../models');

class UserController {
  static async listAllSpecialtys(req: any, res: any) {
    try {
      const all_specialties = await SpecialtiesModel.findAll();
      res.status(200).json(all_specialties);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  static async showSpecialty(req: any, res: any) {
    try {
      const { id } = req.params;
      const specialty = await SpecialtiesModel.findOne({
        where: { id: Number(id) },
      });

      if (!specialty) {
        return res.status(404).json({ msg: 'Specialty not found' });
      }
      return res.status(200).json(specialty);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  static async storeSpecialty(req: any, res: any) {
    try {
      const { name } = req.body;

      const has_specialty = await SpecialtiesModel.findOne({ where: { name } });

      if (has_specialty) {
        return res
          .status(401)
          .json({ msg: 'this specialty has already been registered' });
      }

      const new_specialty_created = await SpecialtiesModel.create(name);
      res.status(201).json({ new_specialty_created });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  static async updateSpecialty(req: any, res: any) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const has_specialty = await SpecialtiesModel.findOne({
        where: { id: Number(id) },
      });
      if (!has_specialty)
        return res.status(401).json({ msg: 'This specialty does not exist' });

      await SpecialtiesModel.update(name, { where: { id: Number(id) } });

      const specialty_updated = await SpecialtiesModel.findOne({
        where: { id: Number(id) },
      });

      res.status(200).json(specialty_updated);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  static async deleteSpecialty(req: any, res: any) {
    try {
      const { id } = req.params;

      const has_specialty = await SpecialtiesModel.findOne({
        where: { id: Number(id) },
      });

      if (!has_specialty)
        return res.status(401).json({ msg: 'This specialty does not exist' });

      await SpecialtiesModel.destroy({ where: { id: Number(id) } });

      res
        .status(200)
        .json({ message: `The specialty ${has_specialty.name} was deleted` });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }
}

export default UserController;
