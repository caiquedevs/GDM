const {
  Doctors: DoctorsModel,
  Specialties: SpecialtiesModel,
} = require('../models');

class DoctorController {
  static async listAllDoctors(req: any, res: any) {
    try {
      const all_doctors = await DoctorsModel.findAll({
        include: [
          {
            model: SpecialtiesModel,
            as: 'all_specialties',
            through: { attributes: [] },
          },
        ],
      });

      return res.status(200).json(all_doctors);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  static async showDoctor(req: any, res: any) {
    try {
      const { id } = req.params;
      const doctor = await DoctorsModel.findOne({ where: { id: Number(id) } });

      if (!doctor) return res.status(404).json({ msg: 'Doctor not found' });
      return res.status(200).json(doctor);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  static async storeDoctor(req: any, res: any) {
    try {
      const { name, crm, tel, cel, cep, specialties } = req.body;

      const data = {
        name,
        crm,
        tel,
        cel,
        cep,
      };

      const has_doctor = await DoctorsModel.findOne({ where: { crm } });

      if (has_doctor) {
        return res
          .status(401)
          .json({ msg: 'this doctor has already been registered' });
      }

      const new_doctor_created = await DoctorsModel.create(data);

      if (specialties && specialties.length > 0)
        await new_doctor_created.setAll_specialties(specialties);

      return res.status(201).json(new_doctor_created);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  static async updateDoctor(req: any, res: any) {
    try {
      const { id } = req.params;

      const { name, crm, tel, cel, cep, specialties } = req.body;

      const data = {
        name,
        crm,
        tel,
        cel,
        cep,
      };

      const has_doctor = await DoctorsModel.findOne({
        where: { id: Number(id) },
      });
      if (!has_doctor)
        return res.status(401).json({ msg: 'This doctor does not exist' });

      await DoctorsModel.update(data, { where: { id: Number(id) } });

      const doctor_updated = await DoctorsModel.findOne({
        where: { id: Number(id) },
      });

      if (specialties) await doctor_updated.setAll_specialties(specialties);

      return res.status(201).json(doctor_updated);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  static async deleteDoctor(req: any, res: any) {
    try {
      const { id } = req.params;

      const has_doctor = await DoctorsModel.findOne({
        where: { id: Number(id) },
      });

      if (!has_doctor)
        return res.status(401).json({ msg: 'This doctor does not exist' });

      await DoctorsModel.destroy({ where: { id: Number(id) } });

      res
        .status(200)
        .json({ message: `The doctor ${has_doctor.name} was deleted` });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }
}

export default DoctorController;
