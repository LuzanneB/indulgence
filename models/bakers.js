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
  return Bakers;
};
