module.exports = function(sequelize, DataTypes) {
  var Bakers = sequelize.define("Bakers", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    }
  });

  Bakers.associate = function(models) {
    // Associating Bakers with Products
    // When a Baker is deleted, also delete any associated Products
    Bakers.hasMany(models.Products, {
      onDelete: "cascade"
    });
  };

  return Bakers;
};
