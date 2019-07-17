module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Products.associate = function(models) {
    // Products belong to bakers
    // A Product can't be created without a Baker due to the foreign key constraint
    Products.belongsTo(models.Bakers, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Products;
};
