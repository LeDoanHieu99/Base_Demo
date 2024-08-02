'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Demo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Demo.init({
    practise_id: DataTypes.STRING,
    form_id: DataTypes.STRING,
    form_type: DataTypes.INTEGER,
    error_type: DataTypes.STRING,
    description: DataTypes.STRING,
    level: DataTypes.STRING,
    url_error: DataTypes.STRING,
    impact: DataTypes.STRING,
    PoC: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Demo',
  });

  Demo.associate = models => {
    // Demo.belongsTo(models.Form, {
    //   // Demo.form_id lưu trữ khóa chỉnh của bảng Form
    //   foreignKey: 'form_id'
    // });
  }
  return Demo;
};