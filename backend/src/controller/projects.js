import Project from "../models/project";
import { projectSchema } from "../schemas/project";
import Category from "../models/category";
import Technology from "../models/technology";
// import cloudinary from "../middlewares/cloudinary";
import { v2 as cloudinary } from "cloudinary";

export const getAll = async (req, res) => {
  try {
    const data = await Project.find().populate(
      "technologyId categoryId",
      "-__v"
    );
    if (data.length == 0) {
      return res.status(200).json({
        message: "Không có dự án nào",
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const get = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Project.findOne({ _id: id }).populate(
      "technologyId categoryId",
      "-__v"
    );
    if (!data) {
      return res.status(200).json({
        message: "Không có dự án",
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    // console.log(req);
    const fileData = req.body.thumbnail;
    // console.log(fileData)
    const body = req.body;
    const { error } = projectSchema.validate({
      ...body,
      thumbnail: fileData,
    });
    if (error) {
      if (fileData) cloudinary.uploader.destroy(fileData.public_id);
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const data = await Project.create({
      ...body,
      thumbnail: fileData,
    });
    // console.log(fileData)
    await Category.findByIdAndUpdate(data.categoryId, {
      $addToSet: {
        projects: data._id,
      },
    });

    await Technology.findByIdAndUpdate(data.technologyId, {
      $addToSet: {
        projects: data._id,
      },
    });

    if (!data) {
      if (fileData) cloudinary.uploader.destroy(fileData.public_id);
      return res.status(200).json({
        message: "Thêm dự án thất bại",
      });
    }
    return res.status(200).json({
      message: "Thêm dự án thành công",
      data,
    });
  } catch (error) {
    if (fileData) cloudinary.uploader.destroy(fileData.public_id);
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    await Project.findByIdAndDelete(id);
    return res.json({
      message: "Xoá dự án thành công",
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await Project.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    await Category.findByIdAndUpdate(data.categoryId, {
      $addToSet: {
        projects: data._id,
      },
    });

    await Technology.findByIdAndUpdate(data.technologyId, {
      $addToSet: {
        projects: data._id,
      },
    });
    if (!data) {
      return res.status(200).json({
        message: "Cập nhật dự án thất bại",
      });
    }
    return res.status(200).json({
      message: "Cập nhật dự án thành công",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
