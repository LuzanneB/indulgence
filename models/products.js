module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    foreignKey: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  //We will need to include here the associate information so that when working for real, the products are assoiciated with the baker.

  return Products;
};
