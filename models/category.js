module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1] },
    },
  });

  Category.associate = function(models) {
    Category.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };

  return Category;
};
